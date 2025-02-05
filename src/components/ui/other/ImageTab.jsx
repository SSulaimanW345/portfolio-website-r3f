'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { items } from '../../../constants';
export const ImageCarousel = () => {
  const [activeItem, setActiveItem] = useState(items[0]);
  const [width, setWidth] = useState(0);
  const carousel = useRef(null);
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [carousel]);
  return (
    <div className="w-full overflow-hidden">
      <motion.div
        ref={carousel}
        drag="x"
        whileDrag={{ scale: 0.95 }}
        dragElastic={0.2}
        dragConstraints={{ right: 0, left: -width }}
        dragTransition={{ bounceDamping: 30 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="flex will-change-transform cursor-grab active:cursor-grabbing">
        {items.slice(0, 10)?.map((itemData, index) => {
          return (
            <motion.div className="min-w-[20rem] min-h-[10rem] p-2">
              <div src={itemData?.url} alt="img" className="w-full h-full object-cover pointer-events-none  rounded-md">
                <img src={itemData?.url} className="w-full h-full object-cover pointer-events-none  rounded-md" />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
