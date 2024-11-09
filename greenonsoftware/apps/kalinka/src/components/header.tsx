'use client';

import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <div className="flex items-center">
          <Image
            src="/images/placeholder.svg"
            alt="Kalinka Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <span
            className={`text-xl font-bold ${
              isScrolled ? 'text-blue-600' : 'text-white'
            }`}
          >
            Kalinka
          </span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {['About Us', 'Offer', 'Contact', 'Location'].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className={`hover:text-yellow-400 ${
                    isScrolled ? 'text-blue-600' : 'text-white'
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className={isScrolled ? 'text-blue-600' : 'text-white'} />
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <ul className="py-4">
            {['About Us', 'Offer', 'Contact', 'Location'].map((item) => (
              <li key={item} className="px-4 py-2">
                <Link
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-blue-600 hover:text-yellow-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export { Header };
