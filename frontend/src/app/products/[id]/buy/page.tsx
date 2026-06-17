'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { CheckCircle2, AlertCircle, ShoppingBag } from 'lucide-react';

const products = [
  { 
    id: 1, 
    name: 'Golden Geometric Mirror', 
    tag: 'Best Seller',
    price: 'PKR 15,000', 
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=3D decorative golden geometric mirror luxury home decor high quality&image_size=square_hd',
    colors: ['Golden', 'Silver', 'Rose Gold', 'Black'],
    shapes: ['Round', 'Square', 'Oval', 'Rectangle']
  },
  { 
    id: 2, 
    name: 'Modern Round Mirror', 
    tag: 'New',
    price: 'PKR 12,500', 
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern 3D round mirror with decorative frame luxury interior&image_size=square_hd',
    colors: ['Silver', 'Golden', 'Rose Gold'],
    shapes: ['Round']
  },
  { 
    id: 3, 
    name: 'Vintage Ornate Mirror', 
    tag: 'Premium',
    price: 'PKR 20,000', 
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=vintage 3D ornate mirror antique style luxury decor&image_size=square_hd',
    colors: ['Antique Gold', 'Antique Silver', 'Bronze'],
    shapes: ['Oval', 'Round', 'Rectangle']
  },
  { 
    id: 4, 
    name: 'Sunburst Art Mirror', 
    tag: 'Popular',
    price: 'PKR 18,000', 
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=sunburst 3D decorative mirror artistic design luxury&image_size=square_hd',
    colors: ['Gold', 'Silver', 'Copper'],
    shapes: ['Round']
  },
  { 
    id: 5, 
    name: 'Smart LED Vanity', 
    tag: 'Trending',
    price: 'PKR 25,000', 
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=LED backlit 3D vanity mirror smart modern bathroom&image_size=square_hd',
    colors: ['White LED', 'Warm LED', 'RGB LED'],
    shapes: ['Rectangle', 'Round', 'Square']
  },
  { 
    id: 6, 
    name: 'Hexagon Mirror Set', 
    tag: 'Exclusive',
    price: 'PKR 22,000', 
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=hexagonal 3D mirror set modern wall decor luxury&image_size=square_hd',
    colors: ['Black', 'Gold'],
    shapes: ['Custom Shapes']
  },
];

export default function BuyNowPage() {
  const params = useParams();
  const productId = Number(params.id);
  const product = products.find(p => p.id === productId);

  // Configuration States
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [selectedShape, setSelectedShape] = useState(product?.shapes[0] || '');

  // Checkout Form States
  const [customerName, setCustomerName] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Online Payment');

  // Submit states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  if (!product) {
    return (
      <div className="bg-slate-950 min-h-screen pt-36 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-black text-white mb-4">Product Not Found</h1>
          <Link href="/products" className="inline-block px-8 py-4 bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full font-bold text-white">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !shippingAddress || !city || !phone) {
      alert('Please fill out all billing details.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const orderPayload = {
      productId: product.id,
      productName: product.name,
      productPrice: product.price,
      selectedColor,
      selectedShape,
      customerName,
      shippingAddress,
      city,
      phone,
      paymentMethod
    };

    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderPayload),
      });

      setSubmitStatus('success');

      const message = `*NEW ORDER - MIRROR CASA*
---------------------------
*Product:* ${product.name}
*Price:* ${product.price}
*Color:* ${selectedColor}
*Shape:* ${selectedShape}

*Customer Details:*
---------------------------
*Name:* ${customerName}
*Address:* ${shippingAddress}
*City:* ${city}
*Phone:* ${phone}
*Payment:* ${paymentMethod}

Please confirm my order. Thank you!`;

      const encodedText = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/923223624954?text=${encodedText}`;
      
      // Wait briefly for feedback animation then redirect
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1200);
    } catch (err) {
      console.error(err);
      setSubmitStatus('success'); // Even if API fails, go to WhatsApp
      const message = `*NEW ORDER - MIRROR CASA*
---------------------------
*Product:* ${product.name}
*Price:* ${product.price}
*Color:* ${selectedColor}
*Shape:* ${selectedShape}

*Customer Details:*
---------------------------
*Name:* ${customerName}
*Address:* ${shippingAddress}
*City:* ${city}
*Phone:* ${phone}
*Payment:* ${paymentMethod}

Please confirm my order. Thank you!`;

      const encodedText = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/923223624954?text=${encodedText}`;
      
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1200);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen pt-36 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link href={`/products/${product.id}`} className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2">
            ← Back to Details
          </Link>
        </motion.div>

        <h1 className="text-3xl md:text-5xl font-black text-white font-serif mb-12 tracking-tight text-center">
          Checkout Order - <span className="bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">{product.name}</span>
        </h1>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: Product summary card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 bg-linear-to-br from-slate-900 to-slate-950 rounded-3xl border border-slate-800 p-6 md:p-8 space-y-6 shadow-2xl"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-950 border border-slate-900">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            
            <div className="border-t border-slate-900 pt-6 space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-400 text-sm font-semibold">Product Name:</span>
                <span className="text-white text-sm font-black">{product.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 text-sm font-semibold">Mirror Price:</span>
                <span className="text-pink-400 text-sm font-black">{product.price}</span>
              </div>
            </div>

            {/* Config details */}
            <div className="space-y-4 pt-4 border-t border-slate-900">
              <div>
                <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">
                  Select Frame Color
                </label>
                <select
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-purple-500 transition-all cursor-pointer font-bold"
                >
                  {product.colors.map((color) => (
                    <option key={color} value={color}>{color}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">
                  Select Mirror Shape
                </label>
                <select
                  value={selectedShape}
                  onChange={(e) => setSelectedShape(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-purple-500 transition-all cursor-pointer font-bold"
                >
                  {product.shapes.map((shape) => (
                    <option key={shape} value={shape}>{shape}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          {/* Right: Checkout form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 bg-linear-to-br from-slate-900 to-slate-950 rounded-3xl border border-slate-800/80 p-6 md:p-8 space-y-6 shadow-2xl"
          >
            <h2 className="text-2xl font-black text-white border-b border-slate-800 pb-3 flex items-center gap-2.5">
              <ShoppingBag className="w-6 h-6 text-purple-400" />
              Customer & Delivery Details
            </h2>

            <form onSubmit={handlePlaceOrder} className="space-y-5">
              <div>
                <label htmlFor="customerName" className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="customerName"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Enter full name"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition-all placeholder:text-slate-600"
                />
              </div>

              <div>
                <label htmlFor="shippingAddress" className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">
                  Shipping Address
                </label>
                <input
                  type="text"
                  id="shippingAddress"
                  required
                  value={shippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                  placeholder="House/Street/Area details"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition-all placeholder:text-slate-600"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Lahore, Karachi"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition-all placeholder:text-slate-600"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 03001234567"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition-all placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">
                  Payment Method
                </label>
                <div className="flex flex-wrap gap-4 mt-2">
                  <label className="flex items-center gap-3 cursor-pointer group text-slate-300 select-none text-sm">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="Cash on Delivery"
                      checked={paymentMethod === 'Cash on Delivery'}
                      onChange={() => setPaymentMethod('Cash on Delivery')}
                      className="hidden"
                    />
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                      paymentMethod === 'Cash on Delivery' ? 'border-pink-500 bg-pink-500/10' : 'border-slate-800 bg-slate-950'
                    }`}>
                      {paymentMethod === 'Cash on Delivery' && (
                        <div className="w-2.5 h-2.5 rounded-full bg-pink-500" />
                      )}
                    </div>
                    <span>Cash on Delivery</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer group text-slate-300 select-none text-sm">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="Online Payment"
                      checked={paymentMethod === 'Online Payment'}
                      onChange={() => setPaymentMethod('Online Payment')}
                      className="hidden"
                    />
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                      paymentMethod === 'Online Payment' ? 'border-pink-500 bg-pink-500/10' : 'border-slate-800 bg-slate-950'
                    }`}>
                      {paymentMethod === 'Online Payment' && (
                        <div className="w-2.5 h-2.5 rounded-full bg-pink-500" />
                      )}
                    </div>
                    <span>Online Payment</span>
                  </label>
                </div>
              </div>

              <div className="pt-4 space-y-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl font-black text-white text-base hover:shadow-2xl hover:shadow-purple-600/40 transition-all disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? 'Processing Order...' : 'Place Order via WhatsApp'}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="flex items-center space-x-3 text-green-400 text-sm font-semibold p-4 rounded-xl bg-green-400/10 border border-green-400/20">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>Redirecting to WhatsApp to complete checkout...</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center space-x-3 text-red-400 text-sm font-semibold p-4 rounded-xl bg-red-400/10 border border-red-400/20">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>Failed to place order. Please try again.</span>
                  </div>
                )}

                <p className="text-center text-xs text-slate-500 mt-2 font-medium">
                  Complete your order via WhatsApp for fastest processing.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
