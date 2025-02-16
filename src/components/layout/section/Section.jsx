import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Background } from '../../home/hero/Background';

export const Section = ({ children, id, title }) => {
  return (
    <section className="c-space mt-20 mb-20 z-10 " id={id}>
      <SectionHeading heading={title} />
      {children}
    </section>
  );
};
