import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { FiCode } from 'react-icons/fi';
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const socialLinks = [
    { icon: <FaFacebookF />, name: 'Facebook' },
    { icon: <FaInstagram />, name: 'Instagram' },
    { icon: <FaGithub />, name: 'Github' }
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav className="w-full bg-gray-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0">

          {/* Social Icons */}
          <ul className="flex gap-4 items-center justify-center md:justify-start">
            {socialLinks.map((item, index) => (
              <li key={index} className="hover:text-blue-400 text-lg transition-colors cursor-pointer">
                {item.icon}
              </li>
            ))}
          </ul>

          {/* Centered Logo */}
          <div className="text-lg sm:text-xl font-extrabold tracking-wide flex items-center justify-center gap-2 text-center">
            <FiCode className="text-blue-400" />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">CodeLayer</span>
            <span className="text-white">Studio</span>
            <span className="hidden sm:inline text-xs md:text-sm italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500 font-serif ml-2">
              — By Prateek Mishra
            </span>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right space-y-1 text-sm text-gray-300">
            <div>
              Contact Email:{' '}
              <a href="mailto:pm921670@gmail.com" className="text-blue-400 hover:underline">pm921670@gmail.com</a>
            </div>
            <div>
              Contact No:{' '}
              <a href="tel:9540802061" className="text-blue-400 hover:underline">9540802061</a>
            </div>
          </div>

        </div>
      </nav>

      {/* Main Navigation Header */}
      <header className="w-full bg-blue-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

          {/* Logo */}
          <div className="text-xl sm:text-2xl font-extrabold tracking-wide flex items-center gap-2">
            <FiCode className="text-blue-400" />
            <a href="/" className="flex items-center gap-1">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">CodeLayer</span>
              <span className="text-white">Studio Pvt.Ltd</span>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex gap-6 text-base font-medium">
            <li><a href="/" className="hover:text-cyan-400 transition-colors">Home</a></li>
            <li><a href="/about" className="hover:text-cyan-400 transition-colors">About</a></li>
            <li><a href="/packages" className="hover:text-cyan-400 transition-colors">Packages</a></li>
            {/* <li><a href="/technologies" className="hover:text-cyan-400 transition-colors">Technologies</a></li> */}
            <li><a href="/our-services" className="hover:text-cyan-400 transition-colors">Services</a></li>
            <li><a href="/contact-us" className="hover:text-cyan-400 transition-colors">Contact Me</a></li>
          </ul>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <RxCross2 size={24} /> : <RxHamburgerMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-blue-800 px-4 pb-6">
            <ul className="flex flex-col gap-4 text-base font-medium pt-2">
              <li><a href="/" className="hover:text-cyan-300">Home</a></li>
              <li><a href="/about" className="hover:text-cyan-300">About</a></li>
              <li><a href="/packages" className="hover:text-cyan-300">Packages</a></li>
              {/* <li><a href="/technologies" className="hover:text-cyan-300">Technologies</a></li> */}
              <li><a href="/our-services" className="hover:text-cyan-300">Services</a></li>
              <li><a href="/contact-us" className="hover:text-cyan-300">Contact Me</a></li>
            </ul>

            <div className="mt-6 text-sm italic text-cyan-300 text-center font-serif">
              — By Prateek Mishra
            </div>
            <div className="mt-2 text-sm italic text-cyan-300 text-center font-serif">
              <a href="tel:9540802061">Contact No: <span>9540802061</span></a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
