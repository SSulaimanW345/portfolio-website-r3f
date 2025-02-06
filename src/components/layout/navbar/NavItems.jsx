import { motion, time, useTime, useTransform } from 'framer-motion';

import { navLinks } from '../../../constants/index.js';
import { NavButton } from '../../ui/buttons/NavButton.jsx';

export const NavItems = ({ onClick = () => {}, isDesktop }) => {
  const filteredNavLinks = isDesktop ? navLinks.filter((item) => item.isDesktop) : navLinks;
  return (
    <ul className="nav-ul">
      {filteredNavLinks.map((item, index) => (
        <NavButton item={item} index={index} onClick={onClick} />
      ))}
    </ul>
  );
};
