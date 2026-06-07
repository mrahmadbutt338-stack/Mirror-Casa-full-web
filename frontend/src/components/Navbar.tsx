'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/app/providers';
import { Menu, X, Sun, Moon } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 ${
        isScrolled ? 'pt-2 pb-2' : 'pt-6 pb-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          animate={{
            height: isScrolled ? 'auto' : 'auto',
            padding: isScrolled ? '0.75rem 1.5rem' : '0 0',
          }}
          className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled
              ? 'bg-slate-900/90 backdrop-blur-2xl rounded-3xl border border-slate-700/50 px-8 py-3 shadow-2xl shadow-slate-900/50'
              : ''
          }`}
        >
          <Link href="/" className="flex items-center space-x-3">
            {/* Custom Logo */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              animate={{ scale: isScrolled ? 0.85 : 1 }}
              className="relative"
            >
              <div className="relative bg-linear-to-br from-blue-600 via-blue-500 to-blue-700 rounded-2xl p-2 shadow-xl border border-blue-400/60">
                <img
                  src="/logo.png"
                  alt="Mirror Casa Logo"
                  width={isScrolled ? 40 : 50}
                  height={isScrolled ? 40 : 50}
                  className="object-contain"
                />
              </div>
            </motion.div>

            <span className="text-2xl md:text-3xl font-black bg-linear-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
              Mirror Casa
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative group px-5 py-2 rounded-full text-sm font-semibold text-slate-200 hover:text-white hover:bg-slate-800/40 transition-all duration-300"
              >
                {item.name}
                <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-purple-400 to-pink-400 group-hover:w-1/2 transition-all duration-300`} />
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/60 transition-all"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-300" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center space-x-2 px-6 py-2.5 bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full font-bold text-white shadow-xl shadow-purple-600/40 hover:shadow-purple-600/60 transition-all"
            >
              <span>Get Quote</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>

            <button
              className="md:hidden p-3 rounded-xl bg-slate-800/50 text-slate-200 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </motion.div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 mx-4 bg-slate-900/95 backdrop-blur-2xl rounded-3xl border border-slate-700/50 p-6"
        >
          <div className="space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-lg font-semibold text-slate-200 hover:text-white hover:bg-slate-800/50 transition-all"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center mt-4 px-6 py-3 bg-linear-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-white"
            >
              Get Quote
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
