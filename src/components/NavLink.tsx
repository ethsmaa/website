import React, { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

interface NavLinkProps {
  href: string;
  title: string;
}


export const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
  return (
    <ScrollLink
      to={href.substring(1)} // Remove '#' from the href
      spy={true}
      smooth={true}
      offset={-70} 
      duration={500}
      className="block py-2 pl-3 pr-4 text-slate-200 sm:text-xl md:p-3 hover:text-pink-400 cursor-pointer"     >
      {title}
    </ScrollLink>
  );
};


