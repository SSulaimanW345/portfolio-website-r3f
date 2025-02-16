import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
const specialColors = ['#2C3038', '#202329', '#2E410A', '#2d3239b3', '#202C07']; // Your 5 different colors

export const Background = ({ fixed, scrollHeight }) => {
  const [numCols, setNumCols] = useState(0);
  const [numRows, setNumRows] = useState(0);
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const squareSize = isLargeScreen ? 60 : 30;
  const specialIndices = new Set();
  const totalDivs = numCols * numRows;
  const numSpecialDivs = Math.floor(totalDivs * 0.1);
  while (specialIndices.size < numSpecialDivs) {
    specialIndices.add(Math.floor(Math.random() * totalDivs));
  }
  useEffect(() => {
    const updateGrid = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setNumCols(Math.floor(width / squareSize));
      setNumRows(Math.floor(height / squareSize));
    };

    updateGrid();
    window.addEventListener('resize', updateGrid);
    return () => window.removeEventListener('resize', updateGrid);
  }, []);

  return (
    <motion.div
      className={`h-[100vh] ${fixed ? 'fixed' : 'absolute'} inset-0 flex overflow-clip flex-wrap justify-center items-center gap-0 lg:gap-0 z-[-1] `}>
      {Array.from({ length: numCols * numRows }).map((_, index) => {
        const randomDelay = Math.random() * 1.5;
        const isSpecial = specialIndices.has(index);
        const specialColor = isSpecial ? specialColors[Math.floor(Math.random() * specialColors.length)] : '#24282E';
        const opacity = isSpecial ? 1 : 0.5;
        return (
          <motion.div
            key={index}
            initial={{ backgroundColor: '#24282E' }}
            className="lg:w-16 lg:h-16 w-10 h-10 border-white border-opacity-5  background-box"
            whileHover={{
              backgroundColor: '#439c3e',
              scale: 1.2,
              animate: { backgroundColor: '#24282E', transition: { duration: 0.6, delay: 0.2 } },
            }}
            whileTap={{
              scale: 1.4,
              backgroundColor: '#439c3e',
              transition: { duration: 0.2 },
            }}
            animate={{
              backgroundColor: specialColor,
              opacity: opacity, // Fades back to original
              transition: { duration: 1, delay: 0.2 },
            }}
            whileInView={{ scale: [0.8, 1.2, 1], transition: { duration: 1, delay: randomDelay, ease: 'easeInOut' } }}
          />
        );
      })}
    </motion.div>
  );
};
