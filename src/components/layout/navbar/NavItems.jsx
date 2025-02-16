import { motion, time, useTime, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

import { navLinks } from '../../../constants/index.js';
import { NavButton } from '../../ui/buttons/NavButton.jsx';

export const NavItems = ({ onClick = () => {}, isDesktop }) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
              console.log(activeSection);
            }
          });
        },
        { threshold: 0.3 },
      );

      navLinks.forEach((link) => {
        const section = document.getElementById(link.sectionId);
        if (section) observer.observe(section);
      });

      return () => observer.disconnect();
    };

    handleScroll();
  }, []);
  const filteredNavLinks = isDesktop ? navLinks.filter((item) => item.isDesktop) : navLinks;
  return (
    <ul className="nav-ul">
      {filteredNavLinks.map((item, index) => (
        <NavButton item={item} index={index} onClick={onClick} selected={activeSection === item.sectionId} />
      ))}
    </ul>
  );
};
