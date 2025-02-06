import React from 'react';
import { motion, time, useTime, useTransform } from 'framer-motion';

export const NavLogo = () => {
  const time = useTime();

  const rotate = useTransform(time, [0, 3000], [0, 360], { clamp: false });
  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, #ff4545, #00ff99, #006aff, #ff0095, #ff4545)`;
  });
  return (
    <div>
      <div className="relative flex justify-center items-center w-full h-full p-0.5">
        <motion.div className="absolute inset-0 rounded-md " style={{ background: rotatingBg }} />
        <a
          href="/"
          className="relative whitespace-nowrap text-neutral-400 font-bold text-xl hover:text-white transition-colors bg-black px-2 py-2 rounded-lg z-10">
          SS Waleed
        </a>
      </div>
    </div>
  );
};
