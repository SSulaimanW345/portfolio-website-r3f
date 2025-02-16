import React, { MouseEvent, useRef, useState } from 'react';
import { cn } from '../../../lib/utils';
import { motion } from 'framer-motion';
export const SkillCard = ({ children, spotlightUrl, index }) => {
  const boxWrapper = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = React.useState({
    x: null,
    y: null,
  });
  React.useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  const [overlayColor, setOverlayColor] = useState({ x: 0, y: 0 });
  const handleMouemove = ({ currentTarget, clientX, clientY }) => {
    let { left, top } = currentTarget.getBoundingClientRect();

    const x = clientX - left;
    const y = clientY - top;

    setOverlayColor({ x, y });
  };
  return (
    <motion.div
      className="relative p-6 max-w-xs max-h-sm rounded-md border-2 border-[#5A6472] bg-[#2D3239] bg-opacity-50"
      initial={{ x: -50, opacity: 0 }}
      transition={{
        delay: index * 0.1,
      }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.2 }}>
      <div
        onMouseMove={handleMouemove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        ref={boxWrapper}
        className={cn('group relative rounded-lg  overflow-hidden  mx-auto')}>
        {isHovered && (
          <div
            className="pointer-events-none absolute  z-50 rounded-xl w-full h-full group-hover:opacity-100  transition duration-300 "
            style={{
              background: `
              radial-gradient(
                250px circle at ${overlayColor.x}px ${overlayColor.y}px,
                rgba(255, 255, 255, 0.137),
                transparent 80%
              )
            `,
            }}
          />
        )}
        <div
          className="absolute inset-0 z-0  bg-fixed rounded-lg"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #ffffff6e 0%,transparent 10%,transparent) fixed`,
          }}></div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          className={`relative  border-black-300  w-30 h-30 flex flex-col items-center text-center rounded-2xl  z-10 px-0 py-4  h-full mx-auto`}>
          {children}
        </motion.div>{' '}
      </div>
    </motion.div>
  );
};
