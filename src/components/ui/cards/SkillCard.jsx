import React, { MouseEvent, useRef, useState } from 'react';
import { cn } from '../../../lib/utils';
import { motion } from 'framer-motion';
export const SkillCard = ({ children, spotlightUrl }) => {
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
    <div className="relative p-4 rounded-md border-2 border-black-300 bg-black-200">
      <div
        onMouseMove={handleMouemove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        ref={boxWrapper}
        className={cn('group relative rounded-lg  overflow-hidden  mx-auto')}>
        {isHovered && (
          <div
            className="pointer-events-none absolute opacity-0 z-50 rounded-xl w-full h-full group-hover:opacity-100  transition duration-300 "
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
          className={`relative  border-black-300 bg-black-200 w-30 h-30 flex flex-col items-center text-center rounded-2xl  z-10 px-0 py-10  h-full mx-auto`}>
          {children}
        </motion.div>{' '}
      </div>
    </div>
    // <div className="w-full max-w-[422px] mx-auto [background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent animate-border ">
    //   <div
    //     className={$`relative text-center z-10 px-0 py-16 rounded-2xl  w-fit bg-[${spotlightUrl}])]  h-full mx-auto`}>
    //     {children}
    //   </div>
    // </div>
  );
};
