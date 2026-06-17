const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');

// POST /api/contact — Save to DB + Send Gmail notification
router.post(
  '/',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('message').notEmpty().withMessage('Message is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    try {
      const { name, email, phone, message, mirrorType } = req.body;
      const ipAddress =
        req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';

      // ─── 1. Save to MongoDB ───────────────────────────────────────────────
      const newContact = new Contact({
        name,
        email,
        phone: phone || '',
        mirrorType: mirrorType || '',
        message,
        ipAddress: String(ipAddress),
      });
      await newContact.save();
      console.log('✅ Contact saved to DB:', newContact._id);

      // ─── 2. Send Gmail notification ───────────────────────────────────────
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST || 'smtp.gmail.com',
        port: Number(process.env.EMAIL_PORT) || 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const submittedAt = new Date().toLocaleString('en-PK', {
        timeZone: 'Asia/Karachi',
        dateStyle: 'full',
        timeStyle: 'short',
      });

      const htmlBody = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; background: #0f0f0f; color: #e2e8f0; }
            .container { max-width: 600px; margin: 30px auto; background: #1e1e2e; border-radius: 16px; overflow: hidden; border: 1px solid #7c3aed44; }
            .header { background: linear-gradient(135deg, #7c3aed, #ec4899, #3b82f6); padding: 30px 40px; text-align: center; }
            .header h1 { margin: 0; color: #fff; font-size: 24px; letter-spacing: 2px; }
            .header p { margin: 6px 0 0; color: #fff9; font-size: 13px; }
            .body { padding: 30px 40px; }
            .field { margin-bottom: 18px; }
            .label { font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #a78bfa; margin-bottom: 4px; }
            .value { font-size: 15px; color: #f1f5f9; background: #2d2d3f; padding: 10px 14px; border-radius: 8px; border-left: 3px solid #7c3aed; }
            .footer { background: #111827; padding: 20px 40px; text-align: center; font-size: 12px; color: #64748b; }
            .badge { display: inline-block; padding: 4px 12px; border-radius: 20px; background: #7c3aed22; color: #a78bfa; border: 1px solid #7c3aed55; font-size: 12px; margin-bottom: 16px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🪞 Mirror Casa</h1>
              <p>New Customer Inquiry Received</p>
            </div>
            <div class="body">
              <div class="badge">📬 New Message — ${submittedAt}</div>

              <div class="field">
                <div class="label">Customer Name</div>
                <div class="value">${name}</div>
              </div>

              <div class="field">
                <div class="label">Email Address</div>
                <div class="value">${email}</div>
              </div>

              ${
                phone
                  ? `<div class="field">
                <div class="label">Phone / WhatsApp</div>
                <div class="value">${phone}</div>
              </div>`
                  : ''
              }

              ${
                mirrorType
                  ? `<div class="field">
                <div class="label">Mirror Type Interested</div>
                <div class="value">${mirrorType}</div>
              </div>`
                  : ''
              }

              <div class="field">
                <div class="label">Message</div>
                <div class="value" style="white-space: pre-wrap;">${message}</div>
              </div>
            </div>
            <div class="footer">
              Mirror Casa — Premium Mirror Solutions · Lahore, Pakistan<br/>
              This email was auto-generated from your website contact form.
            </div>
          </div>
        </body>
        </html>
      `;

      await transporter.sendMail({
        from: `"Mirror Casa Website" <${process.env.EMAIL_USER}>`,
        to: process.env.NOTIFY_EMAIL || process.env.EMAIL_USER,
        replyTo: email,
        subject: `🪞 New Inquiry from ${name} — Mirror Casa`,
        html: htmlBody,
      });

      console.log('📧 Gmail notification sent to:', process.env.NOTIFY_EMAIL);

      res.json({
        success: true,
        message: 'Message sent successfully!',
        id: newContact._id,
      });
    } catch (error) {
      console.error('❌ Contact route error:', error.message);
      res.status(500).json({
        success: false,
        message: 'Failed to send message. Please try again.',
      });
    }
  }
);

// GET /api/contact — Retrieve all contacts (admin)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ submittedAt: -1 });
    res.json({ success: true, count: contacts.length, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
