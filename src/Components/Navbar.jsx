import React from 'react';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiCode } from 'react-icons/fi';

const Navbar = () => {
  const socialLinks = [
    { icon: <FaFacebookF />, name: 'Facebook' },
    { icon: <FaInstagram />, name: 'Instagram' }
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav className='w-full bg-gray-900 text-white shadow-md'>
        <div className='max-w-7xl mx-auto px-6 py-3 flex items-center justify-between'>

          {/* Social Icons */}
          <ul className='flex gap-5 items-center'>
            {socialLinks.map((item, index) => (
              <li key={index} className='hover:text-blue-400 text-lg transition-colors cursor-pointer'>
                {item.icon}
              </li>
            ))}
          </ul>

          {/* Logo */}
          <div className="text-2xl font-extrabold tracking-wide flex items-center gap-2">
            <FiCode className="text-blue-400" />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">CodeLayer</span>
            <span className="text-white">Studio</span>
          </div>

          {/* Contact Info */}
          <div className='text-sm text-gray-300'>
            Contact Us: <a href="mailto:pm921670@gmail.com" className="text-blue-400 hover:underline">pm921670@gmail.com</a>
          </div>
        </div>
      </nav>

      {/* Main Navigation Header */}
      <header className='w-full bg-blue-900 text-white shadow-md'>
        <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>

          {/* Logo Again (optional: link to homepage) */}
          <div className="text-2xl font-extrabold tracking-wide flex items-center gap-2">
            <FiCode className="text-blue-400" />
            <a href="/" className="flex items-center gap-1">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">CodeLayer</span>
              <span className="text-white">Studio</span>
            </a>
          </div>

          {/* Navigation Links */}
          <ul className='flex gap-8 text-lg font-medium'>
            <li><a href="/" className="hover:text-cyan-400 transition-colors">Home</a></li>
            <li><a href="/about" className="hover:text-cyan-400 transition-colors">About</a></li>
            <li><a href="/price" className="hover:text-cyan-400 transition-colors">Website-Price</a></li>
            <li><a href="/our-services" className="hover:text-cyan-400 transition-colors">Services</a></li>
            <li><a href="/projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
            <li><a href="/contact-us" className="hover:text-cyan-400 transition-colors">Contact Me</a></li>
          </ul>

        </div>
      </header>
    </>
  );
};

export default Navbar;
