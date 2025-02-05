import React, { useRef } from 'react';
import { Section } from '../layout/section/Section';
import { motion, useScroll, useTransform } from 'framer-motion';
import { clientReviews } from '../../constants/index.js';
export const Testimonials = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-70%']);

  return (
    <Section id={'testimonials'} title={'Testimonials'}>
      <div className="client-container">
        <div className="bg-gray-950 w-full h-[250vh] mt-20" ref={targetRef}>
          <div className="h-screen sticky  top-60 flex  justify-start overflow-hidden">
            <motion.div className="flex flex-row gap-[3vw] px-16" style={{ x }}>
              {clientReviews.map((item) => (
                <motion.div initial={{ opacity: 0, y: 150 }} whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}>
                  <div key={`review-${item.id}`} className="client-review w-[50vw]">
                    <div>
                      <p className="text-white-800 font-light">{item.review}</p>

                      <div className="client-content">
                        <div className="flex gap-3">
                          <img src={item.img} alt="reviewer" className="w-12 h-12 rounded-full" />
                          <div className="flex flex-col">
                            <p className="font-semibold text-white-800">{item.name}</p>
                            <p className="text-white-500 md:text-base text-sm font-light">{item.position}</p>
                          </div>
                        </div>

                        <div className="flex self-end items-center gap-2">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <img key={index} src="/assets/star.png" alt="star" className="w-5 h-5" />
                          ))}
                        </div>
                      </div>
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
