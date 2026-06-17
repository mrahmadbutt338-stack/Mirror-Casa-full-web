'use client';

import React from 'react';

interface MCLogoProps {
  size?: number;
}

export const MCLogo: React.FC<MCLogoProps> = ({ size = 7 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      
      {/* Gradient Definitions */}
      <defs>
        <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff69b4" /> {/* Pink */}
          <stop offset="50%" stopColor="#a855f7" /> {/* Purple */}
          <stop offset="100%" stopColor="#3b82f6" /> {/* Blue */}
        </linearGradient>
        <linearGradient id="mGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" /> {/* Blue */}
          <stop offset="100%" stopColor="#a855f7" /> {/* Purple */}
        </linearGradient>
        <linearGradient id="cGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" /> {/* Purple */}
          <stop offset="100%" stopColor="#ff69b4" /> {/* Pink */}
        </linearGradient>
        <linearGradient id="mcTextGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" /> {/* Blue */}
          <stop offset="100%" stopColor="#ff69b4" /> {/* Pink */}
        </linearGradient>
      </defs>

      {/* Circular Border with Gap at Bottom */}
      <path
        d="M 250 50 
           A 200 200 0 1 1 250 450"
        stroke="url(#circleGradient)"
        strokeWidth="20"
        strokeLinecap="round"
        fill="none"
      />

      {/* Letter M (Left Part with Blue-Purple Gradient) */}
      <path
        d="M 145 175 
           L 175 325 
           L 215 225 
           L 255 325 
           L 285 175"
        stroke="url(#mGradient)"
        strokeWidth="28"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Letter C (Right Part with Purple-Pink Gradient) */}
      <path
        d="M 375 175 
           C 310 145 260 175 260 250 
           C 260 325 310 355 375 325"
        stroke="url(#cGradient)"
        strokeWidth="28"
        strokeLinecap="round"
        fill="none"
      />

      {/* Bottom MC Text */}
      <text
        x="250"
        y="475"
        textAnchor="middle"
        fontSize="65"
        fontFamily="serif"
        fontWeight="bold"
      >
        <tspan fill="url(#mcTextGradient)">MC</tspan>
      </text>
    </svg>
  );
};