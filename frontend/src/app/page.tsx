'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Star, ArrowRight, Sparkles, Zap, Shield, Award, Truck, Wrench, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const mirrorImages = [
  {
    url: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20elegant%20mirror%20interior%20design%20modern%20home%20decor%20premium%20quality%203D%20realistic&image_size=landscape_16_9',
    name: 'Luxury Elegant Mirror',
    description: 'Premium mirror design with elegant interior aesthetic'
  },
  {
    url: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20luxury%20bathroom%20mirror%20decor%20elegant%20home%20interior%20design%20modern%20design&image_size=landscape_16_9',
    name: 'Modern Luxury Mirror',
    description: 'Modern luxury mirror design for elegant interiors'
  },
  {
    url: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=vintage%20luxury%20mirror%20interior%20design%20classic%20home%20decor%20premium&image_size=landscape_16_9',
    name: 'Vintage Luxury Mirror',
    description: 'Vintage luxury mirror design with classic style'
  },
  {
    url: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=art%20deco%20luxury%20mirror%20interior%20design%20elegant%20home%20decor%20luxury&image_size=landscape_16_9',
    name: 'Art Deco Mirror',
    description: 'Art Deco inspired luxury mirror design'
  },
  {
    url: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=contemporary%20luxury%20mirror%20interior%20design%20modern%20home%20decor&image_size=landscape_16_9',
    name: 'Contemporary Mirror',
    description: 'Contemporary luxury mirror design for modern homes'
  },
  {
    url: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=minimalist%20luxury%20mirror%20interior%20design%20elegant%20home%20decor&image_size=landscape_16_9',
    name: 'Minimalist Luxury Mirror',
    description: 'Minimalist luxury mirror design with clean aesthetic'
  }
];

const mirrorCards = [
  {
    id: 1,
    url: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=3D decorative golden geometric mirror luxury home decor high quality&image_size=square_hd',
    name: 'Golden Geometric Mirror',
    price: 'PKR 15,000',
    tag: 'Best Seller'
  },
  {
    id: 2,
    url: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern 3D round mirror with decorative frame luxury interior&image_size=square_hd',
    name: 'Modern Round Mirror',
    price: 'PKR 12,500',
    tag: 'New'
  },
  {
    id: 3,
    url: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=vintage 3D ornate mirror antique style luxury decor&image_size=square_hd',
    name: 'Vintage Ornate Mirror',
    price: 'PKR 20,000',
    tag: 'Premium'
  },
  {
    id: 4,
    url: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=sunburst 3D decorative mirror artistic design luxury&image_size=square_hd',
    name: 'Sunburst Art Mirror',
    price: 'PKR 18,000',
    tag: 'Popular'
  },
  {
    id: 5,
    url: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=LED backlit 3D vanity mirror smart modern bathroom&image_size=square_hd',
    name: 'Smart LED Vanity',
    price: 'PKR 25,000',
    tag: 'Trending'
  },
  {
    id: 6,
    url: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=hexagonal 3D mirror set modern wall decor luxury&image_size=square_hd',
    name: 'Hexagon Mirror Set',
    price: 'PKR 22,000',
    tag: 'Exclusive'
  }
];

const features = [
  { icon: <Sparkles className="w-7 h-7" />, title: 'Premium Quality', desc: 'Only the finest materials used for every mirror' },
  { icon: <Zap className="w-7 h-7" />, title: 'Quick Installation', desc: 'Fast and efficient service by experts' },
  { icon: <Shield className="w-7 h-7" />, title: '1 Year Warranty', desc: 'Complete peace of mind on all products' },
  { icon: <Award className="w-7 h-7" />, title: 'Expert Team', desc: '10+ years of experience in mirror industry' },
];

const testimonials = [
  { name: 'Ahmed Khan', text: 'Amazing service and quality! My new mirror looks fantastic in my living room.', rating: 5 },
  { name: 'Sarah Ahmed', text: 'Professional team and perfect installation. Highly recommended!', rating: 5 },
  { name: 'Ali Hassan', text: 'Best mirror shop in town. Great prices and excellent customer service.', rating: 5 },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mirrorImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mirrorImages.length) % mirrorImages.length);
  };

  useEffect(() => {
    timeoutRef.current = setInterval(nextSlide, 5000);
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (timeoutRef.current) clearInterval(timeoutRef.current);
    timeoutRef.current = setInterval(nextSlide, 5000);
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [currentSlide]);

  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Original Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Slideshow */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.15, rotateY: -5 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.9, rotateY: 5 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="absolute inset-0 z-5"
            style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
          >
            <motion.div
              animate={{
                x: [0, -30, 0, 30, 0],
                y: [0, 20, 0, -20, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0"
            >
              <Image
                src={mirrorImages[currentSlide].url}
                alt={mirrorImages[currentSlide].name}
                fill
                className="object-cover"
                unoptimized
                style={{ filter: 'drop-shadow(0 25px 50px rgba(168, 85, 247, 0.3))' }}
              />
            </motion.div>
            <div className="absolute inset-0 bg-linear-to-br from-slate-950/40 via-slate-950/20 to-slate-950/40" />
          </motion.div>
        </AnimatePresence>

        {/* Slideshow Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-slate-900/70 backdrop-blur-sm text-white hover:bg-slate-800/80 transition-all"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-slate-900/70 backdrop-blur-sm text-white hover:bg-slate-800/80 transition-all"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {mirrorImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-linear-to-r from-purple-400 to-pink-400 w-10'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Mirror Info */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`info-${currentSlide}`}
            initial={{ opacity: 0, x: 30, rotateY: 10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            exit={{ opacity: 0, x: -30, rotateY: -10 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="absolute bottom-24 right-12 z-30 max-w-md"
            style={{ transformStyle: 'preserve-3d', perspective: '800px' }}
          >
            <div className="p-6 rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-purple-400/40 shadow-2xl shadow-purple-900/50">
              <h3 className="text-2xl md:text-3xl font-black mb-3 bg-linear-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
                {mirrorImages[currentSlide].name}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {mirrorImages[currentSlide].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Hero Content */}
        <div className="relative z-20 h-full flex items-center pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="max-w-4xl"
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-linear-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 border border-purple-400/30 mb-4"
              >
                <Sparkles className="w-4 h-4 text-purple-300" />
                <span className="text-purple-200 font-semibold text-xs">Premium Mirror Solutions</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.7 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight"
              >
                <span className="block text-white">Transform Your</span>
                <span className="bg-linear-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">Space Today</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.9 }}
                className="text-base md:text-lg text-slate-300 mb-8 max-w-xl leading-relaxed"
              >
                Premium quality mirrors with professional installation. Make your home shine with our stunning collection of modern and classic mirrors.
              </motion.p>

              {/* Now the buttons moved down */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1.3 }}
                className="flex flex-col sm:flex-row gap-4 mt-12"
              >
                <Link href="/contact" className="block">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3.5 bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full font-black text-base text-white shadow-2xl shadow-purple-600/40 hover:shadow-purple-600/60 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
                  >
                    Get Free Quote
                    <ArrowRight className="w-4.5 h-4.5" />
                  </motion.button>
                </Link>
                <Link href="/gallery" className="block">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3.5 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full font-bold text-base text-slate-200 hover:bg-slate-700/60 transition-all w-full sm:w-auto"
                  >
                    View Gallery
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-8 right-12 z-20 flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-sm font-semibold">Scroll Down</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-white/70 rounded-full animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* 3D Mirror Cards Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-linear-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
              Our Premium Mirror Collection
            </h2>
            <p className="text-slate-400 text-xl">Explore our stunning range of luxury 3D decorative mirrors</p>
          </motion.div>

          {/* 3D Mirror Cards Carousel */}
          <div className="relative">
            {/* Cards Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 justify-items-center">
              {mirrorCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    boxShadow: '0 20px 40px -10px rgba(168, 85, 247, 0.35), 0 0 25px 2px rgba(168, 85, 247, 0.2)'
                  }}
                  onMouseMove={handleMouseMove}
                  className="relative group w-full max-w-sm overflow-hidden rounded-3xl cursor-pointer"
                >
                  {/* Soft Glowing Light Border/Aura on Hover */}
                  <div className="absolute -inset-0.5 rounded-3xl bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-md" />
                  <div className="absolute -inset-0.5 rounded-3xl bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                  
                  {/* Firefly glowing light follows cursor */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl z-10"
                    style={{
                      background: 'radial-gradient(circle 100px at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(168, 85, 247, 0.25), rgba(59, 130, 246, 0.15), transparent 80%)'
                    }}
                  />
                  
                  {/* Card Content */}
                  <div className="relative bg-linear-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 backdrop-blur-xl rounded-3xl p-0.5 h-full z-20">
                    <div className="bg-slate-900 rounded-3xl overflow-hidden h-full flex flex-col justify-between">
                      <div>
                        {/* Tag */}
                        <div className="absolute top-4 left-4 z-10">
                          <span className="px-3 py-1 rounded-full bg-linear-to-r from-purple-600 to-pink-600 text-white text-xs font-bold shadow-lg">
                            {card.tag}
                          </span>
                        </div>
                        
                        {/* Mirror Image */}
                        <div className="relative w-full h-64">
                          <Image
                            src={card.url}
                            alt={card.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            unoptimized
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent" />
                        </div>

                        {/* Card Details */}
                        <div className="p-5">
                          <h3 className="text-xl font-black text-white mb-1.5 font-sans">
                            {card.name}
                          </h3>
                          <p className="text-2xl font-black bg-linear-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-3">
                            {card.price}
                          </p>
                        </div>
                      </div>
                      
                      <div className="px-5 pb-5 flex flex-col gap-2.5">
                        <div className="relative z-40">
                          <button className="w-full py-3.5 bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 rounded-xl font-bold text-white shadow-lg shadow-purple-600/20 hover:shadow-xl hover:shadow-purple-600/40 transition-all cursor-pointer">
                            Buy Now
                          </button>
                        </div>
                        <Link
                          href={`/products/${card.id}`}
                          onClick={(e) => e.stopPropagation()}
                          className="relative z-40 text-center text-slate-400 hover:text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 group/view"
                        >
                          View Details
                          <svg className="w-3.5 h-3.5 transition-transform group-hover/view:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
            
            {/* Explore More Button */}
            <div className="mt-12 text-center">
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.08, boxShadow: '0 20px 40px -10px rgba(168, 85, 247, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3.5 bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full font-black text-base text-white shadow-2xl shadow-purple-600/40 hover:shadow-purple-600/60 transition-all flex items-center justify-center gap-3 mx-auto"
                >
                  Explore More
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-linear-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
              Why Choose Us
            </h2>
            <p className="text-slate-400 text-xl">Experience the difference with our premium services</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.9, type: "spring", stiffness: 90, damping: 12 }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  boxShadow: '0 20px 40px -10px rgba(168, 85, 247, 0.35), 0 0 25px 2px rgba(168, 85, 247, 0.2)'
                }}
                onMouseMove={handleMouseMove}
                className="relative group overflow-hidden rounded-3xl"
              >
                {/* Soft Glowing Light Border/Aura on Hover */}
                <div className="absolute -inset-0.5 rounded-3xl bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-md" />
                <div className="absolute -inset-0.5 rounded-3xl bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                
                {/* Firefly glowing light follows cursor */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl z-10"
                  style={{
                    background: 'radial-gradient(circle 100px at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(168, 85, 247, 0.25), rgba(59, 130, 246, 0.15), transparent 80%)'
                  }}
                />
                
                <div className="relative bg-linear-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 backdrop-blur-xl rounded-3xl p-0.5 h-full z-20">
                  <div className="bg-slate-900 rounded-3xl p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center text-white mb-4 shadow-xl shadow-purple-500/30">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-black mb-2 text-white">{feature.title}</h3>
                      <p className="text-slate-400 leading-relaxed text-sm">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW AWESOME SECTION: THE BEST MIRROR COMPANY */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-slate-900/30 via-purple-950/10 to-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT: HEADING AND DESCRIPTION */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl font-black mb-6 leading-tight"
              >
                <span className="block bg-linear-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">MC-Where Elegance</span>
                <span className="block bg-linear-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">Meets Reflection</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-4 text-slate-300 text-lg leading-relaxed"
              >
                <p>
                  Welcome to Mirror Casa, where elegance meets innovation. We specialize in crafting and installing the most exquisite mirrors that transform every space they touch.
                </p>
                <p>
                  Our collection features everything from timeless classic designs to cutting-edge modern pieces, all made with the finest materials and meticulous attention to detail. Every mirror we create is a testament to quality craftsmanship and artistic vision.
                </p>
                <p>
                  Whether looking for a statement piece for your living room, a functional vanity mirror, or custom mirror solutions for your business, we have the perfect mirror for you.
                </p>
                <p>
                  With over a decade of experience, our expert team ensures flawless installation and customer satisfaction. We create focal points that elevate your entire living experience.
                </p>
              </motion.div>
            </motion.div>

            {/* RIGHT: ANIMATED DIAMOND MIRROR BOX */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <div className="relative">
                {/* MAIN ANIMATED BOX */}
                <motion.div
                  initial={{ scale: 0.9, rotate: -2 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
                  className="relative bg-linear-to-br from-slate-800 to-slate-900 rounded-3xl border-2 border-slate-700/70 p-8 shadow-2xl shadow-blue-900/30 overflow-hidden"
                >
                  {/* ANIMATED COLORS BG */}
                  <div className="absolute inset-0 opacity-30">
                    <motion.div
                      animate={{
                        background: [
                          'linear-gradient(135deg, rgba(59,130,246,0.3) 0%, rgba(168,85,247,0.3) 50%, rgba(236,72,153,0.3) 100%)',
                          'linear-gradient(135deg, rgba(236,72,153,0.3) 0%, rgba(59,130,246,0.3) 50%, rgba(168,85,247,0.3) 100%)',
                          'linear-gradient(135deg, rgba(168,85,247,0.3) 0%, rgba(236,72,153,0.3) 50%, rgba(59,130,246,0.3) 100%)',
                        ]
                      }}
                      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute inset-0"
                    />
                  </div>

                  {/* DIAMOND SHAPED MIRROR ANIMATION */}
                  <div className="relative z-10 flex flex-col items-center">
                    <motion.div
                      animate={{
                        rotateY: [0, 360],
                        scale: [1, 1.05, 1],
                        rotateX: [0, 10, 0, -10, 0],
                      }}
                      transition={{
                        rotateY: { duration: 12, repeat: Infinity, ease: 'linear' },
                        scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                        rotateX: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                      }}
                      style={{ transformStyle: 'preserve-3d' }}
                      className="relative w-80 h-80 mb-8"
                    >
                      {/* Diamond Mirror SVG */}
                      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
                        <defs>
                          <linearGradient id="diamondMirror" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.9" />
                            <stop offset="50%" stopColor="#A855F7" stopOpacity="0.9" />
                            <stop offset="100%" stopColor="#EC4899" stopOpacity="0.9" />
                          </linearGradient>
                          <filter id="glow">
                            <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                            <feMerge>
                              <feMergeNode in="coloredBlur"/>
                              <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                          </filter>
                        </defs>
                        <polygon
                          points="100,10 180,100 100,190 20,100"
                          fill="url(#diamondMirror)"
                          stroke="white"
                          strokeWidth="4"
                          filter="url(#glow)"
                        />
                        <polygon
                          points="100,30 160,100 100,170 40,100"
                          fill="transparent"
                          stroke="rgba(255,255,255,0.4)"
                          strokeWidth="2"
                          strokeDasharray="10 5"
                        />
                      </svg>
                    </motion.div>



                    <h3 className="text-2xl font-black text-white mb-2">Luxury Diamond Mirror</h3>
                    <p className="text-slate-300 text-center mb-8">Premium Quality • Timeless Design</p>

                    {/* 4 ANIMATED SMALL BUTTONS - REELS STYLE */}
                    <div className="w-full overflow-hidden">
                      <motion.div
                        animate={{
                          x: [0, -1000],
                        }}
                        transition={{
                          x: {
                            duration: 15,
                            repeat: Infinity,
                            ease: 'linear',
                          },
                        }}
                        className="flex gap-4"
                      >
                        {/* BUTTON 1 - FREE DELIVERY */}
                        <div className="shrink-0 flex items-center gap-2 px-6 py-3 bg-linear-to-r from-purple-600 to-blue-600 rounded-full shadow-xl border border-white/20">
                          <Truck className="w-5 h-5 text-white" />
                          <span className="text-white font-bold text-sm">Free Delivery</span>
                        </div>
                        
                        {/* BUTTON 2 - EXPERT INSTALLATION */}
                        <div className="shrink-0 flex items-center gap-2 px-6 py-3 bg-linear-to-r from-blue-600 to-pink-600 rounded-full shadow-xl border border-white/20">
                          <Wrench className="w-5 h-5 text-white" />
                          <span className="text-white font-bold text-sm">Expert Installation</span>
                        </div>
                        
                        {/* BUTTON 3 - 100% SATISFACTION */}
                        <div className="shrink-0 flex items-center gap-2 px-6 py-3 bg-linear-to-r from-pink-600 to-purple-600 rounded-full shadow-xl border border-white/20">
                          <CheckCircle2 className="w-5 h-5 text-white" />
                          <span className="text-white font-bold text-sm">100% Satisfaction</span>
                        </div>
                        
                        {/* BUTTON 4 - 1 YEAR WARRANTY */}
                        <div className="shrink-0 flex items-center gap-2 px-6 py-3 bg-linear-to-r from-purple-600 to-blue-600 rounded-full shadow-xl border border-white/20">
                          <Shield className="w-5 h-5 text-white" />
                          <span className="text-white font-bold text-sm">1 Year Warranty</span>
                        </div>

                        {/* DUPLICATE FOR CONTINUOUS LOOP */}
                        {/* BUTTON 1 - FREE DELIVERY */}
                        <div className="shrink-0 flex items-center gap-2 px-6 py-3 bg-linear-to-r from-purple-600 to-blue-600 rounded-full shadow-xl border border-white/20">
                          <Truck className="w-5 h-5 text-white" />
                          <span className="text-white font-bold text-sm">Free Delivery</span>
                        </div>
                        
                        {/* BUTTON 2 - EXPERT INSTALLATION */}
                        <div className="shrink-0 flex items-center gap-2 px-6 py-3 bg-linear-to-r from-blue-600 to-pink-600 rounded-full shadow-xl border border-white/20">
                          <Wrench className="w-5 h-5 text-white" />
                          <span className="text-white font-bold text-sm">Expert Installation</span>
                        </div>
                        
                        {/* BUTTON 3 - 100% SATISFACTION */}
                        <div className="shrink-0 flex items-center gap-2 px-6 py-3 bg-linear-to-r from-pink-600 to-purple-600 rounded-full shadow-xl border border-white/20">
                          <CheckCircle2 className="w-5 h-5 text-white" />
                          <span className="text-white font-bold text-sm">100% Satisfaction</span>
                        </div>
                        
                        {/* BUTTON 4 - 1 YEAR WARRANTY */}
                        <div className="shrink-0 flex items-center gap-2 px-6 py-3 bg-linear-to-r from-purple-600 to-blue-600 rounded-full shadow-xl border border-white/20">
                          <Shield className="w-5 h-5 text-white" />
                          <span className="text-white font-bold text-sm">1 Year Warranty</span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-linear-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
              Our Work
            </h2>
            <p className="text-slate-400 text-xl">Watch our stunning mirror installations in action</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Dreamy Sunset Mirror Design',
                category: 'Living Room',
                video: '/videos/Dreamy sunset drive moments and clever inspiration for modern homes without spending too much 💡 - Pin-1131881318912510631.mp4'
              },
              {
                title: 'Stylish Christmas Mirror Decor',
                category: 'Festive',
                video: '/videos/Try Stylish Christmas craft ideas that feel fresh practical and surprisingly easy to try for ideas worth saving right now - Pin-1112178070477987159.mp4'
              }
            ].map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.7 }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  boxShadow: '0 20px 40px -10px rgba(168, 85, 247, 0.35), 0 0 25px 2px rgba(168, 85, 247, 0.2)'
                }}
                onMouseMove={handleMouseMove}
                className="relative group cursor-pointer overflow-hidden rounded-3xl"
              >
                {/* Soft Glowing Light Border/Aura on Hover */}
                <div className="absolute -inset-0.5 rounded-3xl bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-md" />
                <div className="absolute -inset-0.5 rounded-3xl bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                
                {/* Firefly glowing light follows cursor */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl z-10"
                  style={{
                    background: 'radial-gradient(circle 120px at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(168, 85, 247, 0.25), rgba(59, 130, 246, 0.15), transparent 80%)'
                  }}
                />
                
                <div className="relative bg-linear-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 backdrop-blur-xl rounded-3xl p-0.5 z-20 h-full">
                  <div className="bg-slate-900 rounded-3xl overflow-hidden h-full flex flex-col justify-between">
                    <div>
                      <div className="relative w-full h-64 md:h-56">
                        <video
                          className="w-full h-full object-cover"
                          autoPlay
                          loop
                          muted
                          playsInline
                        >
                          <source src={work.video} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/60 to-transparent" />
                      </div>
                      <div className="p-6">
                        <span className="inline-block px-3 py-1 rounded-full bg-purple-600/80 text-white text-xs font-bold mb-3">
                          {work.category}
                        </span>
                        <h3 className="text-xl font-black text-white">{work.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-linear-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
              What Our Customers Say
            </h2>
            <p className="text-slate-400 text-xl">Trusted by thousands of happy customers</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.9, type: "spring", stiffness: 90, damping: 12 }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  boxShadow: '0 20px 40px -10px rgba(168, 85, 247, 0.35), 0 0 25px 2px rgba(168, 85, 247, 0.2)'
                }}
                onMouseMove={handleMouseMove}
                className="relative group overflow-hidden rounded-3xl"
              >
                {/* Soft Glowing Light Border/Aura on Hover */}
                <div className="absolute -inset-0.5 rounded-3xl bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-md" />
                <div className="absolute -inset-0.5 rounded-3xl bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                
                {/* Firefly glowing light follows cursor */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl z-10"
                  style={{
                    background: 'radial-gradient(circle 100px at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(168, 85, 247, 0.25), rgba(59, 130, 246, 0.15), transparent 80%)'
                  }}
                />
                
                <div className="relative bg-linear-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 backdrop-blur-xl rounded-3xl p-0.5 h-full z-20">
                  <div className="bg-slate-900 rounded-3xl p-8 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex gap-1 mb-5">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-slate-300 mb-6 italic text-lg leading-relaxed">{testimonial.text}</p>
                      <div className="font-black text-white text-lg">{testimonial.name}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-purple-900/40 via-pink-900/30 to-blue-900/40">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Get in touch with us today for a free consultation and quote. Let us make your vision a reality!
            </p>
            <Link href="/contact" className="inline-block mx-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full font-black text-xl text-white shadow-2xl shadow-purple-600/50 hover:shadow-purple-600/70 transition-all flex items-center justify-center gap-3 cursor-pointer"
              >
                Contact Us Now
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
