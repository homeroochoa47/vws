import { slide as Menu } from 'react-burger-menu'
import { useState } from 'react';
import Link from 'next/link';

import React from 'react'

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleMenuOpen = () => {
      setIsOpen(!isOpen);
    };
  
    const handleCloseMenu = () => {
      setIsOpen(false);
    };
  
    return (
      <Menu
        customCrossIcon={<img src="close.svg" />}
        width={'100%'}
        right
        className="fixed top-0 right-0 text-2xl font-frank z-50"
        isOpen={isOpen}
        onStateChange={({ isOpen }) => setIsOpen(isOpen)}
      >
        <Link
          href="/home"
          onClick={handleCloseMenu}
          className="mt-24 font-frank text-off-white text-4xl my-4 font-medium text-center bg-dark-grey-banner py-7 rounded-md p-4"
        >
          Home
        </Link>
        <Link
          href="/about"
          onClick={handleCloseMenu}
          className="font-frank text-off-white text-4xl my-4 font-medium text-center bg-dark-grey-banner py-7 rounded-md"
        >
          About
        </Link>
        <Link
          href="/services"
          onClick={handleCloseMenu}
          className="font-frank text-off-white text-4xl my-4 font-medium text-center bg-dark-grey-banner py-7 rounded-md"
        >
          Services
        </Link>
        <Link
          href="/contact"
          onClick={handleCloseMenu}
          className="font-frank text-off-white text-4xl my-4 font-medium text-center bg-dark-grey-banner py-7 rounded-md"
        >
          Contact
        </Link>
      </Menu>
    );
};
