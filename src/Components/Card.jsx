import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div data-text="Github" style={{ '--r': '-15' }} className="glass">
          <svg viewBox="0 0 496 512" height="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M165.9 397.4c...z" />
          </svg>
        </div>
        <div data-text="Code" style={{ '--r': '5' }} className="glass">
          <svg viewBox="0 0 640 512" height="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M392.8 1.2c...z" />
          </svg>
        </div>
        <div data-text="Earn" style={{ '--r': '-25' }} className="glass">
          <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M64 64C...z" />
          </svg>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container .glass {
    position: relative;
    width: 180px;
    height: 200px;
    background: linear-gradient(#fff2, transparent);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 25px 25px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    border-radius: 10px;
    margin: 0 -45px;
    backdrop-filter: blur(10px);
    transform: rotate(calc(var(--r) * 1deg));
  }

  .container:hover .glass {
    transform: rotate(0deg);
    margin: 0 10px;
  }

  .container .glass::before {
    content: attr(data-text);
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    background: rgba(255, 255, 255, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }

  .container .glass svg {
    font-size: 2.5em;
    fill: #fff;
  }
`;

export default Card;
