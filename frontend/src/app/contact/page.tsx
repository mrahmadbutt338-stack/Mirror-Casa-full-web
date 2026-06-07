'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    mirrorType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', mirrorType: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 min-h-screen">
      <section className="pt-36 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-slate-400 text-xl">Get in touch with us today</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h2 className="text-3xl font-black mb-10 text-white">Get In Touch</h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-6 p-6 rounded-3xl bg-slate-800/50 border border-slate-700/50">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shrink-0">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Address</h3>
                    <p className="text-slate-400 text-lg">Your City, Area, Street Name</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 p-6 rounded-3xl bg-slate-800/50 border border-slate-700/50">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shrink-0">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Email</h3>
                    <p className="text-slate-400 text-lg">youremail@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 p-6 rounded-3xl bg-slate-800/50 border border-slate-700/50">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shrink-0">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Phone / WhatsApp</h3>
                    <p className="text-slate-400 text-lg">+92 XXXXXXXXXX</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 p-6 rounded-3xl bg-slate-800/50 border border-slate-700/50">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shrink-0">
                    <Clock className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Working Hours</h3>
                    <p className="text-slate-400 text-lg">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-3xl overflow-hidden h-80 border border-slate-700/50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.215658795845!2d72.57647151487896!3d23.022505984948936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84e8e4e7a4e7%3A0x8f6c7c3c7c3c7c3c!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1635789012345!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="bg-gradient-to-br from-slate-800/70 to-slate-900/70 border border-slate-700/50 rounded-3xl p-10 backdrop-blur-xl">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-lg font-semibold mb-3 text-white">Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-6 py-4 rounded-2xl bg-slate-700/50 border border-slate-600 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition-all text-white"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-lg font-semibold mb-3 text-white">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-6 py-4 rounded-2xl bg-slate-700/50 border border-slate-600 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition-all text-white"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-lg font-semibold mb-3 text-white">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-6 py-4 rounded-2xl bg-slate-700/50 border border-slate-600 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition-all text-white"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="mirrorType" className="block text-lg font-semibold mb-3 text-white">Mirror Type (Optional)</label>
                    <select
                      id="mirrorType"
                      value={formData.mirrorType}
                      onChange={(e) => setFormData({ ...formData, mirrorType: e.target.value })}
                      className="w-full px-6 py-4 rounded-2xl bg-slate-700/50 border border-slate-600 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition-all text-white"
                    >
                      <option value="">Select mirror type</option>
                      <option value="wall">Wall Mirror</option>
                      <option value="full-length">Full-Length Mirror</option>
                      <option value="bathroom">Bathroom Mirror</option>
                      <option value="decorative">Decorative Mirror</option>
                      <option value="smart">Smart LED Mirror</option>
                      <option value="custom">Custom Shape</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-lg font-semibold mb-3 text-white">Message</label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-6 py-4 rounded-2xl bg-slate-700/50 border border-slate-600 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition-all resize-none text-white"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl font-black text-xl text-white hover:opacity-90 transition-all disabled:opacity-50 shadow-xl shadow-purple-600/40"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>

                  {submitStatus === 'success' && (
                    <div className="flex items-center space-x-3 text-green-400 text-lg font-semibold p-4 rounded-xl bg-green-400/10 border border-green-400/30">
                      <CheckCircle2 className="w-6 h-6" />
                      <span>Message sent successfully!</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="text-red-400 text-lg font-semibold p-4 rounded-xl bg-red-400/10 border border-red-400/30">
                      Failed to send message. Please try again.
                    </div>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
