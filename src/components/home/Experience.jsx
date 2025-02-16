import { Section } from '../layout/section/Section.jsx';
import { motion } from 'framer-motion';
import { workExperiences } from '../../constants/index.js';
export const Experience = () => {
  return (
    <Section id={'work'} title={'Work Experience'}>
      <div className="w-full text-[#F5FCE9] text-center">
        <div className="w-full lg:flex lg:flex-col items-center px-4">
          <div className="relative max-w-screen-lg lg:flex lg:flex-row gap-x-6 overflow-hidden">
            <motion.div
              className="absolute top-0 w-0.5 h-1 hidden lg:block bg-[#F5FCE9] left-1/2 rounded-lg"
              initial={{ height: 0 }}
              animate={{ height: '85%' }}
              transition={{ duration: 5, ease: 'easeInOut' }}></motion.div>
            <motion.div
              className="absolute top-20 w-0.5 h-full hidden lg:block bg-[#CAC302] left-1/2 ml-2 rounded-lg "
              initial={{ height: 0 }}
              animate={{ height: '100%' }}
              transition={{ duration: 5, ease: 'easeInOut' }}></motion.div>
            {workExperiences.map((item, index) => (
              <motion.div
                className={`lg:w-1/2 md:p-2 lg:p-3 h-full ${index % 2 === 0 ? 'lg:text-left text-left' : 'text-left lg:mt-40 mt-10 '}`}
                initial={{ opacity: 1, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                key={index}>
                <div
                  key={index}
                  className="work-content_container group bg-[#2D3239] bg-opacity-70 border-1 border-[#F5FCE9]">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full rounded-md" src={item.icon} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-[#F5FCE9] border-[#7EB11B] rounded-md border-t-4 border-r-4">
                      {item.name}
                    </p>
                    <p className="text-sm mb-5 border-[#7EB11B]  border-r-4">
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
                  className={`absolute hidden lg:block  w-4 h-0.5 z-50  ${index % 2 === 0 ? 'md:right-1/2 top-1/4 bg-[#F5FCE9]' : 'md:left-1/2 ml-2 top-3/4 bg-[#CAC302]'} `}
                  initial={{ width: 0 }}
                  animate={{ width: '4%' }}
                  transition={{ duration: 5, ease: 'easeInOut' }}></motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
