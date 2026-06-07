'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 bg-linear-to-br from-slate-950 via-purple-950/30 to-slate-950 z-9999 flex items-center justify-center overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />

          <div className="relative z-10">
            {/* Custom Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.8, type: 'spring', stiffness: 100 }}
              className="mb-8"
            >
              <div className="relative bg-linear-to-br from-blue-600 via-blue-500 to-blue-700 rounded-3xl p-5 shadow-2xl border border-blue-400/60">
                <img
                  src="/logo.png"
                  alt="Mirror Casa Logo"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="mt-4 text-center"
            >
              <h2 className="text-4xl font-black bg-linear-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">Mirror Casa</h2>
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-slate-300 mt-3 text-lg font-semibold"
              >
                Loading Luxury...
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
