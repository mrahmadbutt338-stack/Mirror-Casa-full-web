'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const products = [
  { 
    id: 1, 
    name: 'Luxury Golden Wall Mirror', 
    description: 'Premium golden-framed decorative mirror that adds elegance and sophistication to any living space. Perfect for bedrooms, living rooms, and entryways.', 
    price: 'PKR 15,000', 
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20decorative%20golden%20mirror%20elegant%20home%20interior%20high%20quality%203D%20realistic&image_size=landscape_16_9',
    colors: ['Golden', 'Silver', 'Rose Gold', 'Black'],
    shapes: ['Round', 'Square', 'Oval', 'Rectangle'],
    specifications: {
      material: 'Premium Metal Frame',
      size: '24" x 36"',
      weight: '5 kg',
      warranty: '1 Year'
    }
  },
  { 
    id: 2, 
    name: 'Modern Minimalist Full-Length Mirror', 
    description: 'Sleek and contemporary full-body mirror with clean lines, ideal for dressing areas and bedrooms. Enhances space with its minimalist design.', 
    price: 'PKR 12,500', 
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20minimalist%20full%20length%20mirror%20luxury%20bedroom%20design&image_size=landscape_16_9',
    colors: ['White', 'Black', 'Wooden', 'Grey'],
    shapes: ['Rectangle', 'Arch'],
    specifications: {
      material: 'MDF Wood Frame',
      size: '65" x 20"',
      weight: '8 kg',
      warranty: '1 Year'
    }
  },
  { 
    id: 3, 
    name: 'Vintage Ornate Mirror', 
    description: 'Timeless vintage-style mirror with intricate ornate details. Adds classic charm and character to traditional and eclectic interiors.', 
    price: 'PKR 20,000', 
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=vintage%20ornate%20decorative%20mirror%20luxury%20classic%20living%20room&image_size=landscape_16_9',
    colors: ['Antique Gold', 'Antique Silver', 'Bronze'],
    shapes: ['Oval', 'Round', 'Rectangle'],
    specifications: {
      material: 'Resin & Wood Composite',
      size: '30" x 40"',
      weight: '7 kg',
      warranty: '1 Year'
    }
  },
  { 
    id: 4, 
    name: 'Smart LED Backlit Mirror', 
    description: 'Advanced bathroom mirror with integrated LED lighting and touch controls. Perfect for makeup application and creating a luxurious bathroom ambiance.', 
    price: 'PKR 25,000', 
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=smart%20LED%20backlit%20bathroom%20mirror%20modern%20luxury&image_size=landscape_16_9',
    colors: ['White LED', 'Warm LED', 'RGB LED'],
    shapes: ['Rectangle', 'Round', 'Square'],
    specifications: {
      material: 'Aluminum Frame',
      size: '32" x 24"',
      weight: '6 kg',
      warranty: '2 Years'
    }
  },
  { 
    id: 5, 
    name: 'Artistic Sunburst Mirror', 
    description: 'Stunning sunburst design mirror that serves as a focal point in any room. Brings artistic flair and visual interest to your space.', 
    price: 'PKR 18,000', 
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=sunburst%20artistic%20decorative%20mirror%20statement%20piece%20luxury&image_size=landscape_16_9',
    colors: ['Gold', 'Silver', 'Copper'],
    shapes: ['Round'],
    specifications: {
      material: 'Metal & Wood',
      size: '36" Diameter',
      weight: '4 kg',
      warranty: '1 Year'
    }
  },
  { 
    id: 6, 
    name: 'Geometric Custom Shape Mirror', 
    description: 'Unique geometric design mirror crafted to perfection. Custom-made to match your style and elevate your interior decor.', 
    price: 'PKR Custom', 
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=geometric%20decorative%20mirror%20modern%20luxury%20home%20decor&image_size=landscape_16_9',
    colors: ['Custom Colors Available'],
    shapes: ['Custom Shapes'],
    specifications: {
      material: 'Custom Materials',
      size: 'Custom Size',
      weight: 'Custom',
      warranty: '1 Year'
    }
  },
];

export default function Products() {
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.7 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="group relative rounded-3xl overflow-hidden"
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
              
              <div className="relative bg-linear-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 backdrop-blur-xl rounded-3xl p-0.5">
                <div className="bg-slate-900 rounded-3xl overflow-hidden">
                  <div className="relative w-full h-72">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-black mb-3 text-white">{product.name}</h3>
                    <p className="text-slate-400 mb-6 leading-relaxed">{product.description}</p>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-black bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                          {product.price}
                        </span>
                      </div>
                      <div className="flex flex-col gap-3">
                        <Link
                          href="https://wa.me/923223624954"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full px-6 py-3 bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 rounded-xl font-bold text-white hover:opacity-90 transition-all shadow-xl shadow-purple-600/30 text-center"
                        >
                          Enquire Now
                        </Link>
                        <Link
                          href={`/products/${product.id}`}
                          className="text-center text-slate-400 hover:text-white font-semibold transition-colors flex items-center justify-center gap-2 group/view"
                        >
                          View Details
                          <svg className="w-4 h-4 transition-transform group-hover/view:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
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
          className="mt-16"
        >
          <Link
            href="https://wa.me/923223624954"
            target="_blank"
            rel="noopener noreferrer"
            className="block mx-auto max-w-md"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-10 py-5 bg-linear-to-r from-green-500 via-green-600 to-green-700 rounded-full font-black text-xl text-white shadow-2xl shadow-green-600/40 hover:shadow-green-600/60 transition-all flex items-center justify-center gap-3"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
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
