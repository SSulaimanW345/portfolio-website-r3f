import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

export const Background = () => {
  const [numCols, setNumCols] = useState(0);
  const [numRows, setNumRows] = useState(0);
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const squareSize = isLargeScreen ? 60 : 30;
  useEffect(() => {
    const updateGrid = () => {
      const width = window.innerWidth;
      const height = window.innerHeight - 100;
      setNumCols(Math.floor(width / squareSize));
      setNumRows(Math.floor(height / squareSize));
    };

    updateGrid();
    window.addEventListener('resize', updateGrid);
    return () => window.removeEventListener('resize', updateGrid);
  }, []);

  return (
    <motion.div
      className={'h-[100vh] absolute inset-0 flex overflow-clip flex-wrap justify-center items-center gap-2  '}>
      {Array.from({ length: numCols * numRows }).map((_, index) => {
        const randomDelay = Math.random() * 1.5;
        return (
          <motion.div
            key={index}
            initial={{ backgroundColor: '#101113' }}
            className="lg:w-20 lg:h-20 w-10 h-10 rounded-md background-box"
            whileHover={{
              backgroundColor: '#439c3e',
              scale: 1.2,
              animate: { backgroundColor: '#101113', transition: { duration: 0.6, delay: 0.2 } },
            }} // Blue on hover
            whileInView={{ scale: [0.8, 1.2, 1], transition: { duration: 1, delay: randomDelay, ease: 'easeInOut' } }}
          />
        );
      })}
    </motion.div>
  );
};
