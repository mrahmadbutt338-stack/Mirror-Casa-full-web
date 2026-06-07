'use client';

import { motion } from 'framer-motion';

export default function ThreeDMirror() {
  return (
    <div className="w-full h-125 md:h-150 flex items-center justify-center">
      <motion.div
        animate={{
          rotateY: [0, 360],
          y: [0, -20, 0],
        }}
        transition={{
          rotateY: { duration: 10, repeat: Infinity, ease: "linear" },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative"
      >
        <div className="w-64 h-80 rounded-3xl bg-linear-to-br from-gray-200 via-gray-100 to-gray-300 shadow-2xl shadow-purple-500/30 border-4 border-gray-300">
          <div className="w-full h-full rounded-3xl bg-linear-to-br from-white/80 via-gray-100/60 to-white/80 backdrop-blur-sm border border-white/50 flex items-center justify-center overflow-hidden">
            <div className="w-full h-full bg-linear-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10"></div>
          </div>
        </div>
        <div className="absolute -inset-8 bg-linear-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
      </motion.div>
    </div>
  );
}
