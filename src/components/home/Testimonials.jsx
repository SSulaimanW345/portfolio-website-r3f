import React, { useRef } from 'react';
import { Section } from '../layout/section/Section';
import { motion, useScroll, useTransform } from 'framer-motion';
import { clientReviews } from '../../constants/index.js';
export const Testimonials = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);

  return (
    <Section id={'testimonials'} title={'Testimonials'}>
      <div className="client-container">
        <div className="w-full h-[250vh] mt-20" ref={targetRef}>
          <div className="h-screen sticky  top-32 sm:top-1/4 flex  justify-start overflow-hidden">
            <motion.div className="flex flex-row gap-[3vw] px-16" style={{ x }}>
              {clientReviews.map((item) => (
                <motion.div initial={{ opacity: 0, y: 150 }} whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}>
                  <div
                    key={`review-${item.id}`}
                    className="client-review  h-[400px] bg-[#0c0c0c] min-w-[350px] sm:min-w-[450px] max-w-[400px] ">
                    <div>
                      <div className="client-content">
                        <div className="flex gap-3 border-l-4 pl-2 border-[#7EB11B] rounded-md">
                          <img src={item.img} alt="reviewer" className="w-12 h-12 rounded-full" />
                          <div className="flex flex-col">
                            <p className="font-semibold text-[#F5FCE9]">{item.name}</p>
                            <p className="text-white-700 md:text-base text-sm font-light">{item.position}</p>
                          </div>
                        </div>

                        <div className="flex  items-center gap-2 ">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <img key={index} src="/assets/star.png" alt="star" className="w-5 h-5" />
                          ))}
                        </div>
                      </div>
                      <p className="text-[#F5FCE9] p-2 rounded-md bg-[#434B56] bg-opacity-70 font-light border-[#7EB11B] border-l-4">
                        {item.review}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};
