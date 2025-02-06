import { useState } from 'react';
import Globe from 'react-globe.gl';
import { BeamAnimation } from '../ui/other/BeamAnimation';
import { ImageCarousel } from '../ui/other/ImageTab';
import { Section } from '../layout/section/Section';
import { motion } from 'framer-motion';
export const About = () => {
  return (
    <Section id="about" title={'About Me'}>
      <div className="grid xl:grid-cols-2 xl:grid-rows-2 md:grid-cols-2 grid-cols-1 gap-5 h-full w-full sm:w-3/4 mx-auto overflow-hidden">
        <motion.div
          className="col-span-1 xl:row-span-1"
          initial={{ x: -200, y: -100, opacity: 1 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            delay: 0.3,
          }}
          viewport={{ once: true }}>
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Sulaiman Waleed</p>
              <p className="grid-subtext">
                With 2.5 to 3 years of experience, I have been developing and designing frontend and backend systems,
                creating dynamic and responsive websites, applications, and software solutions.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="col-span-1 xl:row-span-1"
          initial={{ x: 200, y: -100, opacity: 1 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            delay: 0.3,
          }}
          viewport={{ once: true }}>
          <div className="grid-container">
            <div className="w-full sm:h-[276px] h-fit object-contain">
              <BeamAnimation />
            </div>

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I actively explore and build using various languages, frameworks, and tools, enabling me to create
                scalable applications across different domains.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="col-span-1 xl:row-span-1"
          initial={{ x: -200, y: 100, opacity: 1 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            delay: 0.3,
          }}
          viewport={{ once: true }}>
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[266px] h-fit flex justify-center items-center">
              <ImageCarousel />
            </div>
            <div>
              <p className="grid-headtext">I’m highly adaptable and passionate about learning</p>
              <p className="grid-subtext">
                I’m constantly taking courses on various e-learning platforms like Coursera, Udemy, and ZTM Academy to
                expand my skill set and stay up to date with the latest technologies.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="xl:col-span-1 xl:row-span-1"
          initial={{ x: 200, y: 100, opacity: 1 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            delay: 0.3,
          }}
          viewport={{ once: true }}>
          <div className="grid-container">
            <img src="assets/duolingo-arabic.jpeg" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">I am learning a new Language</p>
              <p className="grid-subtext">
                I'm learning Arabic to communicate with my family and friends and to explore its rich culture. It’s an
                exciting journey, and I’m eager to deepen my connection with the language and its traditions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
