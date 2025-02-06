import { Section } from '../layout/section/Section.jsx';
import { motion } from 'framer-motion';
import { workExperiences } from '../../constants/index.js';
export const Experience = () => {
  return (
    <Section id={'work'} title={'Work Experience'}>
      <div className="w-full text-white-600 text-center">
        <div className="w-full md:flex md:flex-col items-center px-4">
          <div className="relative max-w-screen-lg md:flex md:flex-row ">
            <motion.div
              className="absolute top-5 w-0.5 h-50  bg-green-500 md:left-1/2 "
              initial={{ height: 0 }}
              animate={{ height: '100%' }}
              transition={{ duration: 5, ease: 'easeInOut' }}>
              <motion.div
                className="absolute w-0.5 h-0.5   bg-green-500 rounded-full"
                initial={{ scale: 2, opacity: 1 }}
                animate={{ scale: 5, opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}></motion.div>
              <motion.div
                className="absolute w-0.5 h-0.5 bottom-0 bg-green-500 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 5, opacity: 1 }}
                transition={{ duration: 6, ease: 'easeIn' }}></motion.div>
            </motion.div>
            {/* <div className="absolute w-1 bg-gray-300 h-full left-1/2 transform -translate-x-1/2"></div> */}
            {workExperiences.map((item, index) => (
              <motion.div
                className={`md:w-1/2 md:p-2 lg:p-3 h-full ${index % 2 === 0 ? 'md:text-left text-left' : 'text-left md:mt-40 mt-10 '}`}
                initial={{ opacity: 1, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                key={index}>
                <div
                  key={index}
                  // onClick={() => setAnimationName(item.animation.toLowerCase())}
                  // onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                  // onPointerOut={() => setAnimationName('idle')}
                  className="work-content_container group bg-[#0c0c0c]">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full rounded-md" src={item.icon} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    {/* <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p> */}
                    <ul className="list-disc pl-3 mb-4 group-hover:text-white transition-all ease-in-out duration-500">
                      <li>{item.point1}</li>
                      <li>{item.point2}</li>
                      <li>{item.point3}</li>
                      <li>{item.point4}</li>
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <motion.div
                          key={tag.id}
                          className={`px-3 py-1 rounded-lg  ${tag.color} text-white  text-sm`}
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: 'spring', stiffness: 200 }}>
                          {tag.text}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
                <motion.div
                  className={`absolute  w-4 h-0.5 z-50 bg-green-500 ${index % 2 === 0 ? 'md:right-1/2 top-1/4 ' : 'md:left-1/2 top-3/4'} `}
                  initial={{ width: 0 }}
                  animate={{ width: '4%' }}
                  transition={{ duration: 5, ease: 'easeInOut' }}>
                  <motion.div
                    className={`absolute w-0.5 h-0.5 ${index % 2 === 0 ? 'md:left-0 right-0 ' : 'right-0'}   bg-green-500 rounded-full `}
                    initial={{ scale: 2, opacity: 1 }}
                    animate={{ scale: 5, opacity: 1 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}></motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
