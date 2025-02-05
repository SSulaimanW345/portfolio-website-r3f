import { motion } from 'framer-motion';
import { Backdrop } from './BackDrop.jsx';
import { FaTimes } from 'react-icons/fa';

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};
export const Modal = ({ children, handleClose }) => {
  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };
  return (
    <Backdrop>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-700 py-1 w-[90vw] md:w-3/4 h-4/5 mt-20 overflow-y-scroll z-40 rounded-md flex flex-col items-center "
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit">
        <motion.div className="bg-green-600 rounded-md p-1 ml-auto z-50" onClick={handleClose}>
          <FaTimes size={24} onClick={handleClose} />
        </motion.div>
        {children}
      </motion.div>
    </Backdrop>
  );
};
