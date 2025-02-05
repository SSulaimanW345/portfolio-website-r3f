import { motion, time, useTime, useTransform } from 'framer-motion';

import { navLinks } from '../../../constants/index.js';
import { NavButton } from '../../ui/buttons/NavButton.jsx';

export const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((item, index) => (
      <NavButton item={item} index={index} onClick={onClick} />
    ))}
  </ul>
);
