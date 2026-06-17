'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [phase, setPhase] = useState<'enter' | 'hold' | 'exit'>('enter');

  useEffect(() => {
    // Phase 1: logo + text fly in  (0 → 1.5s)
    // Phase 2: hold                (1.5s → 4.5s)
    // Phase 3: fade to black       (4.5s → 6s)
    const holdTimer  = setTimeout(() => setPhase('hold'), 1500);
    const exitTimer  = setTimeout(() => setPhase('exit'), 4500);
    const doneTimer  = setTimeout(() => setIsLoading(false), 6000);
    return () => { clearTimeout(holdTimer); clearTimeout(exitTimer); clearTimeout(doneTimer); };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === 'exit' ? 0 : 1 }}
          transition={{ duration: phase === 'exit' ? 1.2 : 0 }}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: '#000000',
            zIndex: 999999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Ambient glow blob */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.22 }}
            transition={{ duration: 1.6, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              width: '480px',
              height: '480px',
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(124,58,237,0.5) 0%, rgba(236,72,153,0.2) 50%, transparent 75%)',
              filter: 'blur(50px)',
              pointerEvents: 'none',
            }}
          />



          {/* ── Brand name: MIRROR ← from left | CASA → from right ── */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              overflow: 'hidden',
              zIndex: 1,
            }}
          >
            {/* MIRROR — slides from LEFT */}
            <motion.span
              initial={{ x: '-100px', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: '46px',
                fontWeight: 900,
                letterSpacing: '6px',
                background: 'linear-gradient(135deg, #c084fc 0%, #f472b6 55%, #818cf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: 'var(--font-playfair-display), Georgia, serif',
                textTransform: 'uppercase',
              }}
            >
              MIRROR
            </motion.span>

            {/* Slim vertical divider */}
            <motion.span
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 0.35, delay: 0.85 }}
              style={{
                display: 'inline-block',
                width: '1.5px',
                height: '38px',
                background: 'linear-gradient(180deg, transparent, #a78bfa, #f472b6, transparent)',
                margin: '0 13px',
              }}
            />

            {/* CASA — slides from RIGHT */}
            <motion.span
              initial={{ x: '100px', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: '46px',
                fontWeight: 900,
                letterSpacing: '6px',
                background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #c084fc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: 'var(--font-playfair-display), Georgia, serif',
                textTransform: 'uppercase',
              }}
            >
              CASA
            </motion.span>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            style={{
              marginTop: '12px',
              fontSize: '11px',
              letterSpacing: '4px',
              color: 'rgba(148,163,184,0.55)',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-poppins), sans-serif',
              zIndex: 1,
            }}
          >
            Premium Mirror Solutions
          </motion.p>

          {/* Animated underline bar */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '160px', opacity: 1 }}
            transition={{ duration: 1.0, delay: 1.15, ease: 'easeOut' }}
            style={{
              height: '1px',
              background:
                'linear-gradient(90deg, transparent, #a78bfa, #f472b6, transparent)',
              marginTop: '18px',
              zIndex: 1,
            }}
          />

          {/* Corner accent brackets */}
          {(
            [
              { top: '28px', left: '28px', borderTop: '1.5px solid', borderLeft: '1.5px solid' },
              { top: '28px', right: '28px', borderTop: '1.5px solid', borderRight: '1.5px solid' },
              { bottom: '28px', left: '28px', borderBottom: '1.5px solid', borderLeft: '1.5px solid' },
              { bottom: '28px', right: '28px', borderBottom: '1.5px solid', borderRight: '1.5px solid' },
            ] as React.CSSProperties[]
          ).map((style, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 0.45, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
              style={{
                position: 'absolute',
                width: '26px',
                height: '26px',
                borderColor: 'rgba(167,139,250,0.5)',
                ...style,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
