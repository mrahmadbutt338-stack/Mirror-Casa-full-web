'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const products = [
  { 
    id: 1, 
    name: 'Golden Geometric Mirror', 
    tag: 'Best Seller',
    description: 'Premium golden-framed geometric mirror that adds elegance and sophistication to any living space. Perfect for living rooms, vanity walls, and entryways.', 
    price: 'PKR 15,000', 
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=3D decorative golden geometric mirror luxury home decor high quality&image_size=square_hd',
    colors: ['Golden', 'Silver', 'Rose Gold', 'Black'],
    shapes: ['Round', 'Square', 'Oval', 'Rectangle'],
    specifications: {
      material: 'Premium Metal Frame',
      size: '30" x 30"',
      weight: '4.8 kg',
      warranty: '1 Year'
    }
  },
  { 
    id: 2, 
    name: 'Modern Round Mirror', 
    tag: 'New',
    description: 'Elegant wavy metallic frame, handcrafted details. Perfect for living rooms and vanity walls. Features a distortion-free HD reflection.', 
    price: 'PKR 12,500', 
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern 3D round mirror with decorative frame luxury interior&image_size=square_hd',
    colors: ['Silver', 'Golden', 'Rose Gold'],
    shapes: ['Round'],
    specifications: {
      material: 'Premium Metal Frame',
      size: '28" Diameter',
      weight: '4.2 kg',
      warranty: '1 Year'
    }
  },
  { 
    id: 3, 
    name: 'Vintage Ornate Mirror', 
    tag: 'Premium',
    description: 'Timeless vintage-style mirror with intricate ornate details. Adds classic charm, warmth, and character to traditional and eclectic interiors.', 
    price: 'PKR 20,000', 
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=vintage 3D ornate mirror antique style luxury decor&image_size=square_hd',
    colors: ['Antique Gold', 'Antique Silver', 'Bronze'],
    shapes: ['Oval', 'Round', 'Rectangle'],
    specifications: {
      material: 'Resin & Wood Composite',
      size: '32" x 40"',
      weight: '6.5 kg',
      warranty: '1 Year'
    }
  },
  { 
    id: 4, 
    name: 'Sunburst Art Mirror', 
    tag: 'Popular',
    description: 'Stunning sunburst design mirror that serves as a focal point in any room. Brings artistic flair, energy, and visual interest to your space.', 
    price: 'PKR 18,000', 
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=sunburst 3D decorative mirror artistic design luxury&image_size=square_hd',
    colors: ['Gold', 'Silver', 'Copper'],
    shapes: ['Round'],
    specifications: {
      material: 'Gold-Coated Steel Wire',
      size: '36" Diameter',
      weight: '3.5 kg',
      warranty: '1 Year'
    }
  },
  { 
    id: 5, 
    name: 'Smart LED Vanity', 
    tag: 'Trending',
    description: 'Advanced vanity mirror with integrated dimmable LED lighting, anti-fog tech, and smart touch controls. Perfect for makeup application and modern bathrooms.', 
    price: 'PKR 25,000', 
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=LED backlit 3D vanity mirror smart modern bathroom&image_size=square_hd',
    colors: ['White LED', 'Warm LED', 'RGB LED'],
    shapes: ['Rectangle', 'Round', 'Square'],
    specifications: {
      material: 'Aluminum Frame',
      size: '32" x 24"',
      weight: '5.5 kg',
      warranty: '2 Years'
    }
  },
  { 
    id: 6, 
    name: 'Hexagon Mirror Set', 
    tag: 'Exclusive',
    description: 'Unique hexagonal mirror set crafted to perfection. Customisable layout creates a beautiful, creative geometric pattern on your wall.', 
    price: 'PKR 22,000', 
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=hexagonal 3D mirror set modern wall decor luxury&image_size=square_hd',
    colors: ['Black', 'Gold'],
    shapes: ['Custom Shapes'],
    specifications: {
      material: 'Minimalist Metal Frame',
      size: 'Set of 6 (12" x 10" each)',
      weight: '3.0 kg',
      warranty: '1 Year'
    }
  },
];

export default function Products() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div className="bg-slate-950 min-h-screen pt-36 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-4 bg-linear-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
            Our Products
          </h1>
          <p className="text-slate-400 text-xl">Discover our premium mirror collection</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.7 }}
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
              
              <div className="relative bg-linear-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 backdrop-blur-xl rounded-3xl p-0.5 h-full z-20">
                <div className="bg-slate-900 rounded-3xl overflow-hidden h-full flex flex-col justify-between">
                  <div>
                    {/* Tag */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full bg-linear-to-r from-purple-600 to-pink-600 text-white text-xs font-bold shadow-lg">
                        {product.tag}
                      </span>
                    </div>

                    {/* Mirror Image */}
                    <div className="relative w-full h-64">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent" />
                    </div>

                    {/* Card Details */}
                    <div className="p-5">
                      <h3 className="text-xl font-black text-white mb-1.5 font-sans">
                        {product.name}
                      </h3>
                      <p className="text-2xl font-black bg-linear-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-3">
                        {product.price}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 flex flex-col gap-2.5">
                    <div className="relative z-40">
                      <Link href={`/products/${product.id}/buy`} className="block">
                        <button className="w-full py-3.5 bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 rounded-xl font-bold text-white shadow-lg shadow-purple-600/20 hover:shadow-xl hover:shadow-purple-600/40 transition-all cursor-pointer">
                          Buy Now
                        </button>
                      </Link>
                    </div>
                    <Link
                      href={`/products/${product.id}`}
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

        {/* WhatsApp Now Button Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12"
        >
          <Link
            href="https://wa.me/923223624954?text=Hello%20Mirror%20Casa!%20I'm%20interested%20in%20your%20premium%20mirrors."
            target="_blank"
            rel="noopener noreferrer"
            className="block mx-auto max-w-sm"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-8 py-3.5 bg-linear-to-r from-green-500 via-green-600 to-green-700 rounded-full font-black text-lg text-white shadow-2xl shadow-green-600/40 hover:shadow-green-600/60 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <svg className="w-6.5 h-6.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .162 5.333.162 11.889c0 2.099.547 4.142 1.588 5.94L.006 24l6.305-1.654a11.882 11.882 0 005.743 1.48h.004c6.552 0 11.889-5.336 11.889-11.89a11.812 11.812 0 00-3.49-8.434z"/>
              </svg>
              WhatsApp Now
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
