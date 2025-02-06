import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

import { TextArrowButton } from '../../ui/buttons/TextArrowButton';
import { IconButton } from '../../ui/buttons/IconButton';
export const HeroButtons = () => {
  return (
    <div className="flex w-full justify-center mt-10 space-x-4 px-8 overflow-hidden">
      {/* GitHub Icon */}
      <IconButton>
        <motion.a
          href="https://github.com/SSulaimanW345"
          target="_blank"
          className="flex items-center justify-center w-20 h-10  rounded-md transition-colors"
          initial={{ x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
          }}>
          <FaGithub className="text-2xl lg:text-3xl text-white" />
        </motion.a>
      </IconButton>
      {/* LinkedIn Icon */}
      <IconButton>
        <motion.a
          href="https://www.linkedin.com/in/sulaiman-waleed-softwaredeveloper/"
          target="_blank"
          className="flex items-center justify-center w-20 h-10  rounded-md transition-colors"
          initial={{ x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
          }}>
          <FaLinkedin className="text-3xl lg:text-4xl text-blue-600" />
        </motion.a>
      </IconButton>
      <TextArrowButton btnText={'Explore Me '} />
    </div>
  );
};
