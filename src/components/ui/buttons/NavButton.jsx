import { motion } from 'framer-motion';
const borderVariants = {
  initial: { opacity: 0, x: -50 }, // Initially no border
  hover: {
    transition: { duration: 0.2, ease: 'easeInOut' },
    scale: 1.3, // Smooth transition
  },
};
export const NavButton = ({ item, index, onClick }) => {
  return (
    <a href={item.href} className="nav-li_a" onClick={onClick}>
      <motion.button
        key={item.id}
        className="nav-li relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-green 
        after:bg-green-500 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
        initial="initial"
        variants={borderVariants}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1, duration: 0.2 }}
        drag="x"
        dragConstraints={{ left: 2, right: 2, top: 2, bottom: 2 }}
        whileHover={{ scale: 1.3, transition: { duration: 0.1 } }}>
        {item.name}
      </motion.button>
    </a>
  );
};
