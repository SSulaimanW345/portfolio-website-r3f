import { Experience } from '../components/home/Experience';
import { Hero } from '../components/home/hero/Hero';
import { About } from '../components/home/About';
import { Skills } from '../components/home/Skills';
import { Testimonials } from '../components/home/Testimonials';
import { Contact } from '../components/home/Contact';

export const HomePage = () => {
  return (
    <>
      <Hero />

      <About />
      <Experience />
      <Skills />
      <Testimonials />
      <Contact />
    </>
  );
};
