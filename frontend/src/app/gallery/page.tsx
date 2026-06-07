'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';

const galleryItems = [
  { 
    id: 1, 
    title: 'Bridal Shower',
    category: 'Bedroom', 
    description: 'Beautiful mirror installation perfect for your bedroom.',
    videoUrl: '/videos/Bridal Shower Ideas for a More Beautiful Life 96463 - Pin-609534130842785836.mp4'
  },
  { 
    id: 2, 
    title: 'Dreamy Sunset',
    category: 'Living Room', 
    description: 'Stunning living room mirror that complements any decor.',
    videoUrl: '/videos/Dreamy sunset drive moments and clever inspiration for modern homes without spending too much 💡 - Pin-1131881318912510631.mp4'
  },
  { 
    id: 3, 
    title: 'Get Inspired',
    category: 'Bathroom', 
    description: 'Modern bathroom vanity mirror with LED lighting.',
    videoUrl: '/videos/Get inspired by Modern journaling prompts that feel fresh practical and surprisingly easy to try for your next inspiration board - Pin-814025701437797946.mp4'
  },
  { 
    id: 4, 
    title: 'Try Stylish',
    category: 'Office', 
    description: 'Professional office mirror installation for corporate spaces.',
    videoUrl: '/videos/Try Stylish Christmas craft ideas that feel fresh practical and surprisingly easy to try for ideas worth saving right now - Pin-1112178070477987159.mp4'
  },
];

const categories = ['All', 'Bedroom', 'Living Room', 'Bathroom', 'Office'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Header */}
      <section className="pt-36 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, type: "spring", stiffness: 100 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-black mb-4 bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Our Work
            </h1>
            <p className="text-slate-400 text-xl mb-10">See our mirrors in real homes</p>

            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.08, boxShadow: '0 10px 30px -5px rgba(168, 85, 247, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-bold transition-all ${
                    activeCategory === category
                      ? 'bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-600/30'
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.9, type: "spring", stiffness: 90, damping: 12 }}
                className="relative group"
              >
                {/* Round Light Blink Animation */}
                <div className="absolute -inset-0.5 rounded-3xl bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                <motion.div
                  className="absolute -inset-0.5 rounded-3xl bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-70"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                
                <div className="relative bg-linear-to-br from-slate-800/70 to-slate-900/70 border border-slate-700/50 backdrop-blur-xl rounded-3xl p-0.5">
                  <div className="flex flex-col md:flex-row gap-8 items-center bg-slate-900 rounded-3xl p-8">
                    {/* Left Side - Video */}
                    <div className="shrink-0">
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        className="relative rounded-2xl overflow-hidden border border-slate-700 w-full md:w-80 h-64 cursor-pointer group/video"
                        onClick={() => setSelectedVideo(item)}
                      >
                        <video
                          className="w-full h-full object-cover relative z-10"
                          src={item.videoUrl}
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 to-transparent flex items-center justify-center z-20">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-16 h-16 bg-linear-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-xl"
                          >
                            <Play className="w-8 h-8 text-white ml-1" />
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Right Side - Info */}
                    <div className="grow">
                      <span className="inline-block px-3 py-1 rounded-full bg-purple-600/80 text-white text-xs font-bold mb-3">
                        {item.category}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-black text-white mb-3">{item.title}</h2>
                      <p className="text-slate-400 text-lg leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Screen Modal with Blurred Background */}
      <AnimatePresence>
        {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-slate-950/85 backdrop-blur-xl"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-slate-800/90 backdrop-blur-sm text-white hover:bg-blue-600/90 transition-all"
          >
            <X className="w-6 h-6" />
          </button>

          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.5, opacity: 0, y: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full max-w-2xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-slate-900/95 backdrop-blur-xl rounded-3xl p-4 shadow-2xl shadow-blue-900/30 border border-blue-400/30">
              <video
                key={selectedVideo.id}
                src={selectedVideo.videoUrl}
                className="w-full h-auto rounded-2xl object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="mt-4 text-center">
                <h3 className="text-xl md:text-2xl font-black text-white mb-1">{selectedVideo.title}</h3>
                <span className="inline-block px-3 py-1 rounded-full bg-blue-600/80 text-white text-xs font-bold">
                  {selectedVideo.category}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
}
