import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const borderVariants = {
  initial: { opacity: 0, x: -50 }, // Initially no border
  hover: {
    transition: { duration: 0.2, ease: 'easeInOut' },
    scale: 1.3, // Smooth transition
  },
};
export const Project = ({ project, onClickHandler }) => {
  return (
    <>
      <div className="absolute top-0 right-0">
        <img src={project.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
      </div>

      <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={project.logoStyle}>
        <img className=" h-10 shadow-sm" src={project.logo} alt="logo" />
      </div>

      <div className="flex flex-col gap-5 text-white-600 my-5">
        <p className="text-[#F5FCE9] text-2xl font-semibold animatedText">{project.title}</p>
        <p className="animatedText">{project.desc}</p>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-5">
        <div className="flex items-center gap-3">
          {project.tags.map((tag, index) => (
            <div key={index} className="tech-logo">
              <img src={tag.path} alt={tag.name} />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 cursor-pointer text-white-600">
          {project.moreDetails && (
            <motion.div
              className="flex items-center gap-2 mx-2 pb-1 border-b-2 border-[#9EDD22] cursor-pointer text-white-600"
              onClick={() => onClickHandler(project)}>
              <p>More Details</p>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </motion.div>
          )}
          {project.checkLiveSite && (
            <motion.div>
              <a
                className="flex items-center mx-2 gap-2 pb-1 rounded-sm border-b-2 border-[#9EDD22]  cursor-pointer text-white-600"
                href={project.liveSiteUrl}
                target="_blank"
                rel="noreferrer">
                <p>Check Live Site</p>
                <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};
