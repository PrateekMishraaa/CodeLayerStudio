import React from 'react';
import Navbar from '../Components/Navbar';
import { FaPaintBrush, FaCode, FaLaptopCode, FaIdBadge, FaAndroid, FaTools } from 'react-icons/fa';
import Footer from '../Components/Footer';

const services = [
  {
    icon: <FaPaintBrush className="text-3xl text-blue-500" />,
    title: 'Web Designing',
    description:
      'We craft beautiful, user-friendly designs that align with your brand and convert visitors into customers.',
  },
  {
    icon: <FaCode className="text-3xl text-blue-500" />,
    title: 'Web Development',
    description:
      'Robust front-end and back-end solutions using modern technologies tailored to your business needs.',
  },
  {
    icon: <FaLaptopCode className="text-3xl text-blue-500" />,
    title: 'Static Website',
    description:
      'Fast, secure, and SEO-friendly static websites perfect for showcasing your business or portfolio.',
  },
  {
    icon: <FaIdBadge className="text-3xl text-blue-500" />,
    title: 'Portfolio Website',
    description:
      'Personalized portfolio websites to showcase your work, skills, and experience in a professional manner.',
  },
  {
    icon: <FaAndroid className="text-3xl text-blue-500" />,
    title: 'Android App Development',
    description:
      'High-performance native Android applications to help grow your digital presence on mobile.',
  },
  {
    icon: <FaTools className="text-3xl text-blue-500" />,
    title: 'Website Maintenance',
    description:
      'Ongoing updates, backups, and technical support to ensure your website stays fresh and secure.',
  },
];

const Services = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-br from-white to-blue-50 min-h-screen py-12 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of digital solutions to help you establish and grow your online presence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 cursor-pointer rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{service.title}</h3>
              <p className="text-gray-200 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Services;
