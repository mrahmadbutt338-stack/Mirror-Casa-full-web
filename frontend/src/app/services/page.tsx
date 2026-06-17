'use client';

import { motion } from 'framer-motion';
import { Truck, Wrench, Ruler, Home, Columns, Image as ImageIcon } from 'lucide-react';

const services = [
  {
    id: 1,
    name: 'Home Delivery',
    description: 'We deliver mirrors to your doorstep safely and securely. Our delivery team handles your mirrors with extreme care.',
    icon: <Truck className="w-8 h-8" />,
  },
  {
    id: 2,
    name: 'Professional Installation',
    description: 'Our expert team fits any type of mirror with precision and professionalism, ensuring perfect installation every time.',
    icon: <Wrench className="w-8 h-8" />,
  },
  {
    id: 3,
    name: 'Custom Sizing',
    description: 'Made-to-measure mirrors crafted exactly to your specifications. Any size, any shape you desire.',
    icon: <Ruler className="w-8 h-8" />,
  },
  {
    id: 4,
    name: 'On-Site Consultation',
    description: 'We visit your location to guide you on the best mirror options and placement for your space.',
    icon: <Home className="w-8 h-8" />,
  },
  {
    id: 5,
    name: 'Glass Partition Work',
    description: 'Modern glass partitions for offices and homes, creating elegant and functional spaces.',
    icon: <Columns className="w-8 h-8" />,
  },
  {
    id: 6,
    name: 'Frame & Border Customization',
    description: 'Custom frames and borders to match your interior design style perfectly.',
    icon: <ImageIcon className="w-8 h-8" />,
  },
];

export default function Services() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div className="bg-linear-to-br from-slate-950 via-purple-950/20 to-slate-950 min-h-screen">
      <section className="pt-36 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-black mb-4 bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-slate-400 text-xl">Comprehensive mirror solutions for every need</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 60, rotate: -2 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ delay: index * 0.12, duration: 0.6 }}
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
                  <div className="bg-slate-900 rounded-3xl p-6">
                    <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 text-white shadow-xl shadow-purple-500/40">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{service.name}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
