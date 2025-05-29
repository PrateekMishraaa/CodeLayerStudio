import React from 'react';
import Navbar from '../Components/Navbar';
import Developer from '../assets/developer.jpg';
import Card from '../Components/FlipCards'; // Assuming this is where you saved the above component

const HomePage = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <img src={Developer} alt="Developer" className="h-full w-full object-cover" />
        <div className="absolute bottom-10 left-0 w-full px-6 flex justify-center">
          <div className="bg-blue-200 bg-opacity-60 p-6 rounded-lg max-w-4xl text-center shadow-lg">
            <p className="text-4xl md:text-5xl font-bold font-sans text-gray-900 mb-4">
              Welcome to CodeLayer-Studio
            </p>
            <p className="text-gray-800 font-sans text-base md:text-lg mb-4">
              At CodeLayer-Studio, we turn ideas into reality through clean code, creativity, and innovation.
              Whether you're a startup or a growing business, we help you build impactful digital experiences.
            </p>
            <button className="h-10 w-40 border-2 text-white rounded-2xl hover:bg-blue-900 transition bg-blue-600">
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white px-6 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text mb-6">
            Web Designing & Web Development Company in Delhi
          </p>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed font-sans">
            CodeLayer Studio is a Delhi-based Website Designing & Development Company, that works in Static Website Designing, Dynamic Website Designing, Mobile App Development, WordPress Website Designing, Redesigning, and E-commerce website development in Delhi. <br /><br />
            We also serve global customers. Professionalism, reliability, ability, and knowledge are the main resources of our team to provide results in the quickest possible time. <br /><br />
            CodeLayer Studio was established in 2024 with a vision to provide internet solutions with a comprehensive range of web services like Web Designing, Domain Name Registration, Cheap Domain and Hosting services, FTP Server Space, E-Mail Solutions, and SSL Integration Certificates.
          </p>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-gray-900 text-white w-full px-6 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-800 to-cyan-400 text-transparent bg-clip-text mb-6">
            Services We Are Providing
          </p>
          <Card />
        </div>
      </section>
    </>
  );
};

export default HomePage;
