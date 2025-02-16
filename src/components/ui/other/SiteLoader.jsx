import { motion } from 'framer-motion';

const styleContainer = {
  position: 'relative',
  width: '150px',
  height: '150px',
};

const styleSpan = {
  display: 'block',
  width: '150px',
  height: '150px',
  border: '4px solid #9EDD22',
  borderTop: '4px solid #2D3134',
  borderLeft: '4px solid #2D3134',
  borderRadius: '50%',
  boxSizing: 'border-box',
  position: 'absolute',
  top: 0,
  left: 0,
};

const spinTransition = {
  repeat: Infinity,
  ease: 'easeInOut',
  duration: 1,
};

export const SiteLoader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-950 z-50">
      {/* Container for GIF and Spinner */}
      <div style={styleContainer}>
        <motion.span style={styleSpan} animate={{ rotate: 360 }} transition={spinTransition} />
        <img
          src="assets/loading-gif.gif"
          alt="Loading..."
          className="w-44 h-44"
          style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        />
      </div>
    </div>
  );
};
