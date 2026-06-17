'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState } from 'react';

const products = [
  { 
    id: 1, 
    name: 'Golden Geometric Mirror', 
    description: 'Premium golden-framed decorative mirror that adds elegance and sophistication to any living space. Perfect for bedrooms, living rooms, and entryways.', 
    price: 'PKR 15,000', 
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=3D decorative golden geometric mirror luxury home decor high quality&image_size=square_hd',
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
    name: 'Modern Round Mirror', 
    description: 'Sleek and contemporary round mirror with clean lines, ideal for dressing areas and bedrooms. Enhances space with its minimalist design.', 
    price: 'PKR 12,500', 
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern 3D round mirror with decorative frame luxury interior&image_size=square_hd',
    colors: ['Silver', 'Golden', 'Rose Gold'],
    shapes: ['Round'],
    specifications: {
      material: 'Premium Metal Frame',
      size: '24" Diameter',
      weight: '4 kg',
      warranty: '1 Year'
    }
  },
  { 
    id: 3, 
    name: 'Vintage Ornate Mirror', 
    description: 'Timeless vintage-style mirror with intricate ornate details. Adds classic charm and character to traditional and eclectic interiors.', 
    price: 'PKR 20,000', 
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=vintage 3D ornate mirror antique style luxury decor&image_size=square_hd',
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
    name: 'Sunburst Art Mirror', 
    description: 'Stunning sunburst design mirror that serves as a focal point in any room. Brings artistic flair and visual interest to your space.', 
    price: 'PKR 18,000', 
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=sunburst 3D decorative mirror artistic design luxury&image_size=square_hd',
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
    id: 5, 
    name: 'Smart LED Vanity', 
    description: 'Advanced LED backlit vanity mirror with integrated lighting. Perfect for makeup application and creating a luxurious bathroom ambiance.', 
    price: 'PKR 25,000', 
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=LED backlit 3D vanity mirror smart modern bathroom&image_size=square_hd',
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
    id: 6, 
    name: 'Hexagon Mirror Set', 
    description: 'Unique hexagonal mirror set crafted to perfection. Adds modern style and elevates your interior decor.', 
    price: 'PKR 22,000', 
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=hexagonal 3D mirror set modern wall decor luxury&image_size=square_hd',
    colors: ['Black', 'Gold'],
    shapes: ['Custom Shapes'],
    specifications: {
      material: 'Premium Materials',
      size: 'Custom Size',
      weight: '5 kg',
      warranty: '1 Year'
    }
  },
];

const colorToGradient = (color: string) => {
  const gradients: { [key: string]: string } = {
    'Golden': 'from-yellow-400 to-yellow-600',
    'Silver': 'from-gray-300 to-gray-500',
    'Rose Gold': 'from-pink-300 to-rose-500',
    'Black': 'from-gray-700 to-gray-900',
    'White': 'from-gray-100 to-gray-300',
    'Wooden': 'from-yellow-600 to-yellow-800',
    'Grey': 'from-gray-400 to-gray-600',
    'Antique Gold': 'from-yellow-500 to-yellow-700',
    'Antique Silver': 'from-gray-400 to-gray-600',
    'Bronze': 'from-yellow-700 to-yellow-900',
    'White LED': 'from-blue-100 to-blue-300',
    'Warm LED': 'from-orange-200 to-orange-400',
    'RGB LED': 'from-purple-400 via-pink-400 to-blue-400',
    'Gold': 'from-yellow-400 to-yellow-600',
    'Copper': 'from-orange-400 to-red-600',
    'Custom Colors Available': 'from-purple-400 via-pink-400 to-blue-400'
  };
  return gradients[color] || 'from-gray-400 to-gray-600';
};

const shapeToPath = (shape: string) => {
  switch (shape) {
    case 'Round':
      return 'rounded-full';
    case 'Square':
      return 'rounded-xl';
    case 'Oval':
      return 'rounded-[50%]';
    case 'Rectangle':
      return 'rounded-lg';
    case 'Arch':
      return 'rounded-t-[50%] rounded-b-lg';
    case 'Custom Shapes':
      return 'rounded-2xl';
    default:
      return 'rounded-xl';
  }
};

export default function ProductDetail() {
  const params = useParams();
  const productId = Number(params.id);
  const product = products.find(p => p.id === productId);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [selectedShape, setSelectedShape] = useState(product?.shapes[0] || '');

  if (!product) {
    return (
      <div className="bg-slate-950 min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-black text-white mb-4">Product Not Found</h1>
          <Link href="/products" className="inline-block px-8 py-3 bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full font-bold text-white">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Link href="/products" className="text-purple-400 hover:text-purple-300 font-semibold text-sm flex items-center gap-2">
            ← Back to Products
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-2xl md:text-3xl font-black mb-6 bg-linear-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
              {product.name}
            </h1>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/40">
              <Image
                src={product.image}
                alt={product.name}
                width={800}
                height={600}
                className="w-full object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/50 via-transparent to-transparent" />
            </div>

            <p className="text-slate-400 text-sm md:text-base mt-6 leading-relaxed">
              {product.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-linear-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-slate-700/50 backdrop-blur-xl p-6 mb-6">
              <h2 className="text-xl font-black text-white mb-5">Specifications</h2>
              <div className="space-y-3">
                {Object.entries(product.specifications).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center justify-between p-3 bg-slate-900/50 rounded-xl border border-slate-700/50"
                  >
                    <span className="text-slate-400 font-semibold capitalize text-sm">{key}</span>
                    <span className="text-white font-bold text-sm">{value}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-linear-to-br from-slate-800/80 to-slate-900/80 rounded-2xl border border-slate-700/50 backdrop-blur-xl p-6 mb-6">
              <h2 className="text-xl font-black text-white mb-5">Price</h2>
              <p className="text-2xl md:text-3xl font-black bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                {product.price}
              </p>
            </div>

            <Link
              href="https://wa.me/923223624954"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-block px-6 py-3.5 bg-slate-800 border border-slate-700 rounded-full font-bold text-white text-center text-base shadow-xl shadow-slate-800/40 hover:shadow-slate-800/60 transition-all mb-3"
            >
              Enquire Now
            </Link>

            <Link
              href={`/products/${product.id}/buy`}
              className="w-full inline-block px-6 py-3.5 bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full font-bold text-white text-center text-base shadow-xl shadow-purple-600/40 hover:shadow-purple-600/60 transition-all"
            >
              Buy Now
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <h2 className="text-xl md:text-2xl font-black mb-6 bg-linear-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
            Available Colors
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {product.colors.map((color, index) => (
              <motion.div
                key={color}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                onClick={() => setSelectedColor(color)}
                className={`cursor-pointer rounded-xl p-4 border-2 ${selectedColor === color ? 'border-purple-400' : 'border-transparent'} bg-linear-to-br from-slate-800/80 to-slate-900/80`}
              >
                <div className={`w-full h-16 rounded-lg bg-linear-to-br ${colorToGradient(color)} mb-3`} />
                <p className="text-white font-bold text-center text-sm">{color}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <h2 className="text-xl md:text-2xl font-black mb-6 bg-linear-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
            Available Shapes
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {product.shapes.map((shape, index) => (
              <motion.div
                key={shape}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                onClick={() => setSelectedShape(shape)}
                className={`cursor-pointer rounded-xl p-4 border-2 ${selectedShape === shape ? 'border-purple-400' : 'border-transparent'} bg-linear-to-br from-slate-800/80 to-slate-900/80`}
              >
                <div className={`w-full h-16 ${shapeToPath(shape)} bg-linear-to-br from-purple-500/30 via-pink-500/30 to-blue-500/30 flex items-center justify-center border border-slate-600`}>
                  <div className={`w-12 h-12 ${shapeToPath(shape)} bg-linear-to-br from-purple-400 via-pink-400 to-blue-400`} />
                </div>
                <p className="text-white font-bold text-center text-sm mt-3">{shape}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <Link
            href="https://wa.me/923223624954"
            target="_blank"
            rel="noopener noreferrer"
            className="block mx-auto max-w-md"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 15px 30px -10px rgba(34, 197, 94, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-10 py-3.5 bg-linear-to-r from-green-500 via-green-600 to-green-700 rounded-full font-black text-base text-white shadow-2xl shadow-green-600/40 hover:shadow-green-600/60 transition-all flex items-center justify-center gap-2.5"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
