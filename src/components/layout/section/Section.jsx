import React from 'react';
import { SectionHeading } from './SectionHeading';

export const Section = ({ children, id, title }) => {
  return (
    <section className="c-space mt-20 mb-20 " id={id}>
      <SectionHeading heading={title} />
      {children}
    </section>
  );
};
