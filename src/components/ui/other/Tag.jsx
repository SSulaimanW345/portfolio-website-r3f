import { motion } from 'framer-motion';

export const Tag = ({ text, bgColor = 'bg-gray-800', textColor = 'text-white' }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} className={`px-3 py-1 rounded-full ${bgColor} ${textColor} `}>
      {text}
    </motion.div>
  );
};
