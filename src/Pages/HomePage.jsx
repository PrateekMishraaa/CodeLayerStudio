import React from 'react';
import Navbar from '../Components/Navbar';
import Developer from '../assets/developer.jpg';
import Card from '../Components/FlipCards'; // Assuming this is where you saved the above component
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
  const navigate = useNavigate();


  const handleNavigate = () => {
    navigate('/our-services')
  }
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
          <button onClick={() => handleNavigate()} className='h-10 w-72 font-sans hover:bg-blue-900 rounded-2xl transition cursor-pointer border-1 border-gray-800'>View All Services</button>
        </div>
      </section>
      <section className="w-full min-h-screen text-black px-6 py-4">
        <div className="text-2xl font-sans font-bold px-[15%] w-full uppercase">
          <p>Website Designing Company in Badarpur, South Delhi</p>
        </div>
        <div className="text-xl py-4 font-sans text-gray-800 px-[15%] ">
          <p>
            A website serves as a central hub for presenting your business or brand to the world. It allows users to gather, exchange, and interact with your information online. In today's digital era, having a responsive and well-designed website is essential for every business or service. With millions of people connecting online daily, a website boosts your visibility, credibility, and productivity on the World Wide Web. Ensure your business stands out with a powerful digital presence.
          </p>
          <p className='py-8 text-xl '>So call the <span className='font-bold'>Website Designing Company in Delhi</span> India for Website developing and designing services. We CodeLayer Studio are the best option for <span className='font-bold'>website designing, Website Development, WordPress development, ReactJs Website, NextJs Website, Dynamic Website as well as Cheap Web Hosting services in Delhi India. Now you can easily promote your business services in India with the help of our complete digital marketing services.  Our Company entirely focuses on creating a custom website, mobile-friendly, search engine services, and user-friendly.</span> Our expert implements all types of web development and design services for small businesses to a large scale of business. So, now contact us and join with your business in the online market as well as promote your services online worldwide.</p>
       
        </div>
      </section>
      <section className='bg-gray-900 h-screen w-full'></section>

    </>
  );
};

export default HomePage;
