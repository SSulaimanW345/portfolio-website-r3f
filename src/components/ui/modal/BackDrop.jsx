import { motion } from 'framer-motion';
export const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      className="fixed h-[100vh] w-[100vw]  bg-transparent left-0 top-0 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClick}>
      {children}
    </motion.div>
  );
};
