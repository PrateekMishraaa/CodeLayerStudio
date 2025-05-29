import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Developer from '../assets/developer.jpg';
import Card from '../Components/FlipCards';
import styled from 'styled-components';

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/our-services');
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <img src={Developer} alt="Developer" className="h-full w-full object-cover" />
        <div className="absolute bottom-10 left-0 w-full px-6 flex justify-center">
          <div className="bg-blue-200 bg-opacity-60 p-6 rounded-lg max-w-4xl text-center shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Welcome to CodeLayer-Studio Company
            </h1>
            <p className="text-gray-800 text-base md:text-lg mb-4">
              We turn ideas into reality through clean code, creativity, and innovation.
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
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text mb-6">
            Web Designing & Web Development Company in Delhi
          </h2>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            CodeLayer Studio is a Delhi-based Website Designing & Development Company, specializing in Static, Dynamic, E-commerce, and WordPress websites, along with Mobile App Development.
            <br /><br />
            We serve global clients with professionalism, reliability, and deep technical expertise.
            <br /><br />
            Founded in 2024, we provide comprehensive services including Web Design, Domain Registration, Hosting, Email Solutions, and SSL Certificates.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-900 text-white px-6 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-800 to-cyan-400 text-transparent bg-clip-text mb-6">
            Services We Are Providing
          </h2>
          <Card />
          <div className="mt-6">
            <button
              onClick={handleNavigate}
              className="h-10 w-72 bg-transparent border border-white text-white rounded-2xl hover:bg-blue-800 transition"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="bg-white px-6 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold uppercase text-black mb-4">
            Website Designing Company in Badarpur, South Delhi
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            A website is your digital front door. It’s where people learn about you, engage with your brand, and convert into customers.
            <br /><br />
            Today, a responsive and visually stunning website is critical for success. It builds visibility, trust, and efficiency.
            <br /><br />
            Call the <strong>Website Designing Company in Delhi</strong> for development services.
            At CodeLayer Studio, we offer expert solutions in React.js, Next.js, WordPress, dynamic websites, and budget-friendly hosting with digital marketing support.
          </p>
        </div>
      </section>

      {/* Professional Works Section */}
      <section className="bg-gray-900 text-white px-6 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">Our Professional Works</h2>
          <StyledWrapper className="flex justify-between gap-4">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="title">FLIP CARD</p>
                  <p>Hover Me</p>
                </div>
                <div className="flip-card-back">
                  <p className="title">BACK</p>
                  <p>Leave Me</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="title">FLIP CARD</p>
                  <p>Hover Me</p>
                </div>
                <div className="flip-card-back">
                  <p className="title">BACK</p>
                  <p>Leave Me</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="title">FLIP CARD</p>
                  <p>Hover Me</p>
                </div>
                <div className="flip-card-back">
                  <p className="title">BACK</p>
                  <p>Leave Me</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="title">FLIP CARD</p>
                  <p>Hover Me</p>
                </div>
                <div className="flip-card-back">
                  <p className="title">BACK</p>
                  <p>Leave Me</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="title">FLIP CARD</p>
                  <p>Hover Me</p>
                </div>
                <div className="flip-card-back">
                  <p className="title">BACK</p>
                  <p>Leave Me</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="title">FLIP CARD</p>
                  <p>Hover Me</p>
                </div>
                <div className="flip-card-back">
                  <p className="title">BACK</p>
                  <p>Leave Me</p>
                </div>

              </div>
            </div>
          </StyledWrapper>
        </div>
      </section>
    </>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;

  .flip-card {
    background-color: transparent;
    width: 100%;
    max-width: 240px;
    height: 300px;
    perspective: 1000px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .title {
    font-size: 1.25rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 0.5rem;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    box-shadow: 0 8px 14px rgba(0, 0, 0, 0.25);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 1rem;
    padding: 1rem;
  }

  .flip-card-front {
    background: linear-gradient(145deg, #3b82f6, #06b6d4); /* blue to cyan */
    color: white;
  }

  .flip-card-back {
    background: linear-gradient(145deg, #06b6d4, #3b82f6); /* reverse blue to cyan */
    color: white;
    transform: rotateY(180deg);
  }

  @media (max-width: 768px) {
    .flip-card {
      max-width: 200px;
      height: 260px;
    }

    .title {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 480px) {
    .flip-card {
      max-width: 180px;
      height: 240px;
    }

    .title {
      font-size: 1rem;
    }
  }
`;


export default HomePage;
