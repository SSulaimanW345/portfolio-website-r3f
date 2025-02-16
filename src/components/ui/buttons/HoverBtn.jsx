import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect } from 'react';
import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { FiMousePointer } from 'react-icons/fi';

const ROTATION_RANGE = 20;
const HALF_ROTATION_RANGE = 10 / 2;

export const HoverBtn = ({ btnText, className, tilt, content }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

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
    x.set(0);
    y.set(0);
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
      whileInView={{ scale: [1, 1.5, 1] }}
      transition={{
        duration: 0.5,
      }}
      whileHover={{
        backgroundColor: '#212E07',
      }}
      className={`absolute hidden sm:block sm:w-32 lg:text-base lg:w-48 sm:text-xs md:text-xl-0.5 md:text h-12 border-[#5A6472] border bg-[#5A6472] bg-opacity-5  rounded-md ${className}`}>
      <motion.div
        style={{
          transform: 'translateZ(15px) ',
          transformStyle: 'preserve-3d',
        }}
        whileInView={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 1,
        }}
        whileHover={{
          backgroundColor: '#3F580D',
        }}
        className="absolute h-12 inset-1 grid place-content-center rounded-md bg-[#434B56] border-[#5A6472] bg-opacity-10 border  shadow-lg">
        <motion.div
          whileInView={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 0.5,
          }}
          style={{
            transform: 'translateZ(10px)',
          }}
          whileHover={{
            backgroundColor: '#ECF8D3',
            color: '#24282E',
            fontWeight: 600,
          }}
          className={`px-1 py-2 absolute top-2 right-1 font-light text-[#F5FCE9]   border-[#ECF8D3] border bg-[#4E5864] w-[95%] bg-opacity-40  h-fit rounded-md`}>
          <FlyoutLink href="#" FlyoutContent={content}>
            {btnText}
          </FlyoutLink>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className="relative text-center h-fit">
      <a href={href} className="relative">
        {children}
        <span
          style={{
            transform: showFlyout ? 'scaleX(1)' : 'scaleX(0)',
          }}
          className="absolute -bottom-0 -left-2  -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
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
            className="absolute left-1/2 top-12 bg-white text-black pointer-events-none rounded-md">
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent " />
            <div className="absolute left-1/2 top-0 h-4 w-4  -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white rounded-lg " />
            <div className="w-64 bg-[#434B56] border-[#ECF8D3] border-2 p-2 shadow-xl text-white rounded-md">
              <div className="mb-2 space-y-3">
                <p className="block text-sm font-normal">{FlyoutContent}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
