import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import React from 'react';
export const TextArrowButton = ({ btnText }) => {
  return (
    <>
      <motion.a
        href="#about"
        className="group relative cursor-pointer p-2 w-44  bg-[#9EDD22] rounded-full overflow-hidden text-[#2D3239] text-center font-semibold"
        initial={{ x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: 'spring',
          stiffness: 50,
          damping: 20,
          duration: 0.5,
        }}>
        <span className="translate-x-1 group-hover:translate-x-12 group-hover:opacity-0 transition-all duration-300 inline-block">
          {btnText}
        </span>
        <div className="flex gap-2 text-white z-10 items-center absolute top-0 h-full w-full justify-center translate-x-12 opacity-0 group-hover:-translate-x-1 group-hover:opacity-100 transition-all duration-300">
          <span>{btnText}</span>
          <FaArrowRight />
        </div>
        <div className="absolute top-[40%] left-[20%] h-2 w-2 group-hover:h-full group-hover:w-full rounded-lg bg-black scale-[1] dark:group-hover:bg-[#e7cb6e] group-hover:bg-[#43a724] group-hover:scale-[1.8] transition-all duration-300 group-hover:top-[0%] group-hover:left-[0%] "></div>
      </motion.a>
    </>
  );
};
