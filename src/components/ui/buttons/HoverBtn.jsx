import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect } from 'react';
import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { FiMousePointer } from 'react-icons/fi';

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 10 / 2;

export const HoverBtn = ({ btnText, className, tilt, content }) => {
  const ref = useRef(null);

  const x = useMotionValue(-7.6);
  const y = useMotionValue(tilt ? 17.6 : -19);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(-7.6);
    y.set(tilt ? 17.6 : -17.6);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform,
      }}
      className={`absolute hidden sm:block sm:w-32 lg:text-xl lg:w-48 sm:text-xs md:text-xl-0.5 md:text h-14  rounded-xl bg-gray-900 ${className}`}>
      <div
        style={{
          transform: 'translateZ(15px) ',
          transformStyle: 'preserve-3d',
        }}
        className="absolute inset-1 grid place-content-center rounded-xl bg-gray-700  shadow-lg">
        <div
          style={{
            transform: 'translateZ(10px)',
          }}
          className={`p-2 absolute ${tilt ? 'inset-1' : 'right-1 top-1'} text-green-500   border-gray-700 border-2 bg-gray-600 w-full h-fit rounded-lg`}>
          <FlyoutLink href="#" FlyoutContent={content}>
            {btnText}
          </FlyoutLink>
        </div>
      </div>
    </motion.div>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className="relative text-center h-fit">
      <a href={href} className="relative text-white">
        {children}
        <span
          style={{
            transform: showFlyout ? 'scaleX(1)' : 'scaleX(0)',
          }}
          className="absolute -bottom-2 -left-2  -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: '-50%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute left-1/2 top-12 bg-white text-black">
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent " />
            <div className="absolute left-1/2 top-0 h-4 w-4  -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white rounded-lg" />
            <div className="w-64 bg-white p-2 shadow-xl">
              <div className="mb-2 space-y-3">
                <p className="block text-sm font-semibold">{FlyoutContent}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
