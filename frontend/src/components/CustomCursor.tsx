'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const cursorXSpring = useSpring(cursorX, { stiffness: 500, damping: 28 });
  const cursorYSpring = useSpring(cursorY, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
              className="fixed top-0 left-0 w-3 h-3 bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full pointer-events-none z-50 shadow-lg shadow-purple-500/50"
              style={{
                x: cursorXSpring,
                y: cursorYSpring,
                translateX: '-50%',
                translateY: '-50%',
                scale: isClicking ? 0.5 : 1
              }}
              transition={{ type: 'spring', stiffness: 600, damping: 25 }}
            />
            {/* Outer ring (mirror theme) */}
            <motion.div
              className="fixed top-0 left-0 w-10 h-10 border-2 border-purple-400/60 rounded-full pointer-events-none z-50"
              style={{
                x: cursorXSpring,
                y: cursorYSpring,
                translateX: '-50%',
                translateY: '-50%',
                scale: isHovering ? 1.5 : 1
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
            {/* Mirror shine effect */}
            <motion.div
              className="fixed top-0 left-0 w-6 h-6 bg-linear-to-br from-purple-400/20 to-pink-400/20 rounded-full pointer-events-none z-40"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovering ? 1.8 : 1
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 18 }}
      />
    </>
  );
}
