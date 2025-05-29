import React from 'react';
import styled from 'styled-components';

const CardData = [
  {
    title: 'E-Commerce Website Designing',
    description:
      'E-commerce website designing enables businesses to sell their products or services online both locally and globally.',
    color: '59, 130, 246', // blue (tailwind blue-500)
  },
  {
    title: 'WordPress Website Designing',
    description:
      'WordPress is a powerful CMS ideal for building websites and blogs. It’s user-friendly and highly customizable.',
    color: '16, 185, 129', // green (tailwind emerald-500)
  },
  {
    title: 'Responsive Website Designing',
    description:
      'Responsive design adapts your website to different screen sizes, ensuring a great user experience on all devices.',
    color: '239, 68, 68', // red (tailwind red-500)
  },
  {
    title: 'ReactJs Development',
    description:
      'React.js is a modern JavaScript library for building fast and scalable user interfaces for web applications.',
    color: '139, 92, 246', // purple (tailwind violet-500)
  },
  {
    title: 'Website Re-Design & Development',
    description:
      'We improve your existing website with a fresh design, better UX, and mobile optimization.',
    color: '202, 138, 4', // yellow (tailwind amber-700)
  },
  {
    title: 'NextJs Development',
    description:
      'Next.js enables fast, SEO-friendly websites with server-side rendering and static generation.',
    color: '249, 115, 22', // orange (tailwind orange-500)
  },
  {
    title: 'Website Maintenance Services',
    description:
      'We maintain and update websites built with Node.js, React.js, Next.js, and WordPress.',
    color: '30, 64, 175', // blue darker (tailwind blue-700)
  },
  {
    title: 'SvelteKit',
    description:
      'SvelteKit helps you build lightning-fast web apps with a reactive and minimal framework.',
    color: '14, 116, 144', // teal (tailwind teal-700)
  },
];

const Card = () => {
  return (
    <StyledWrapper>
      <div className="wrapper">
        <div className="inner">
          {CardData.map((card, index) => (
            <div
              key={index}
              className="card"
              style={{
                '--i': index,
                '--c': card.color,
                '--cards-length': CardData.length,
              }}
            >
              <div className="img">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  padding: 4rem 0;

  .wrapper {
    position: relative;
    width: 100%;
    height: 500px; /* Enough height for 3D rotation */
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 1200px;
  }

  .inner {
    width: 230px;
    height: 300px;
    position: relative;
    transform-style: preserve-3d;
    animation: rotate 20s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(360deg);
    }
  }

  .card {
    position: absolute;
    width: 230px;
    height: 300px;
    border: 2px solid rgba(var(--c), 0.8);
    border-radius: 16px;
    background: rgba(var(--c), 0.15);
    box-shadow: 0 5px 15px rgba(var(--c), 0.5);
    padding: 1rem;

    --angle: calc(360deg / ${CardData.length});
    transform: rotateY(calc(var(--i) * var(--angle))) translateZ(500px);
    transition: transform 0.3s ease;
  }

  .img {
    background: radial-gradient(
      circle,
      rgba(var(--c), 0.2) 0%,
      rgba(var(--c), 0.6) 80%,
      rgba(var(--c), 0.9) 100%
    );
    border-radius: 12px;
    padding: 1rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #000;
    font-weight: bold;
  }

  .img h3 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .img p {
    font-size: 0.95rem;
    line-height: 1.3rem;
  }
`;

export default Card;
