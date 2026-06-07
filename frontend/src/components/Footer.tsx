'use client';


import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              {/* Custom Logo */}
              <div className="relative bg-linear-to-br from-blue-600 via-blue-500 to-blue-700 rounded-2xl p-1.5 shadow-xl border border-blue-400/60">
                <img
                  src="/logo.png"
                  alt="Mirror Casa Logo"
                  width={55}
                  height={55}
                  className="object-contain"
                />
              </div>

              <h2 className="text-2xl font-black bg-linear-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
                Mirror Casa
              </h2>
            </div>
            <p className="text-slate-500 text-lg leading-relaxed mb-6 max-w-lg">
              Elevating spaces with premium mirrors and elegant designs. From custom installations to timeless pieces, 
              we bring luxury and style to every home and office.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-slate-400 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Products', 'Services', 'Gallery', 'Contact'].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a
                    href={`/${link === 'Home' ? '' : link.toLowerCase()}`}
                    className="text-slate-600 hover:text-slate-400 transition-colors text-lg"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-slate-400 mb-6">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-slate-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-slate-500" />
                </div>
                <div>
                  <p className="text-slate-500 font-semibold text-sm">Address</p>
                  <p className="text-slate-600">Model Town, Lahore Cantt, Lahore, Pakistan</p>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-slate-800 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-slate-500" />
                </div>
                <div>
                  <p className="text-slate-500 font-semibold text-sm">Email</p>
                  <a href="mailto:mrahmadbutt338@gmail.com" className="text-slate-600 hover:text-slate-400 transition-colors">
                    mrahmadbutt338@gmail.com
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-slate-800 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-slate-500" />
                </div>
                <div>
                  <p className="text-slate-500 font-semibold text-sm">Phone</p>
                  <a href="tel:+923223624954" className="text-slate-600 hover:text-slate-400 transition-colors">
                    03223624954
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-slate-800 flex items-center justify-center shrink-0">
                  <span className="text-slate-500 font-bold text-sm">A</span>
                </div>
                <div>
                  <p className="text-slate-500 font-semibold text-sm">Owner</p>
                  <p className="text-slate-600">Ahmad Butt</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-slate-900 pt-8 pb-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-700 text-center md:text-left">
              © {new Date().getFullYear()} Mirror Casa. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
