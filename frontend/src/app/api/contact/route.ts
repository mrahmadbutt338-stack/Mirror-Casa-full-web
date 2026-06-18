import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import dbConnect from '@/lib/dbConnect';
import Contact from '@/lib/models/Contact';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, mirrorType } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Connect to MongoDB and save contact
    await dbConnect();
    const ipAddress = request.headers.get('x-forwarded-for') || '';
    
    const newContact = new Contact({
      name,
      email,
      phone: phone || '',
      mirrorType: mirrorType || '',
      message,
      ipAddress,
    });
    
    await newContact.save();

    // Setup Nodemailer transporter
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
          .container { max-w-xl mx-auto p-6 bg-[#1a1a2e] border border-blue-500 rounded-lg }
          h2 { color: #3b82f6; border-bottom: 1px solid #333; padding-bottom: 10px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #94a3b8; font-size: 12px; text-transform: uppercase; }
          .value { font-size: 16px; color: #fff; margin-top: 5px; }
          .message-box { background: #0f172a; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6; margin-top: 5px; color: #f8fafc; }
          .footer { margin-top: 30px; font-size: 12px; color: #64748b; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>New Contact Form Submission</h2>
          
          <div class="field">
            <div class="label">Date & Time</div>
            <div class="value">${submittedAt}</div>
          </div>

          <div class="field">
            <div class="label">Customer Name</div>
            <div class="value">${name}</div>
          </div>

          <div class="field">
            <div class="label">Email Address</div>
            <div class="value">${email}</div>
          </div>

          <div class="field">
            <div class="label">Phone Number</div>
            <div class="value">${phone || 'Not provided'}</div>
          </div>

          <div class="field">
            <div class="label">Interested In</div>
            <div class="value">${mirrorType || 'General Inquiry'}</div>
          </div>

          <div class="field">
            <div class="label">Message</div>
            <div class="message-box">${message.replace(/\n/g, '<br/>')}</div>
          </div>

          <div class="footer">
            <p>This is an automated notification from the Mirror Casa Website.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send the email
    await transporter.sendMail({
      from: `"Mirror Casa Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Lead: ${name} - Mirror Casa`,
      html: htmlBody,
    });

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully!',
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process request: ' + (error instanceof Error ? error.message : String(error)) },
      { status: 500 }
    );
  }
}
