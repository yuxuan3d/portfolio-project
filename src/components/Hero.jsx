import React, { Suspense }  from 'react';
import './Hero.css';
// import {BallTest} from './Balltest';

const Hero = () => {
  return (
    <>
      <section id="home" className="hero-section" style={{ minHeight: 'calc(100vh - 80px)', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
        <div className="canvas-background-wrapper">
              {/* <Suspense fallback={null}>
                <BallTest />
              </Suspense> */}
            </div>
        <div className="hero-content-container">
          <h1 className='name-title'>Hi, I'm Yu Xuan</h1>
          <p className='hero-subtitle' style={{ fontSize: '1.25rem', marginBottom: '30px', color: '#fff' }}>3D Generalist and aspiring Full-stack Developer</p>
      </div>
    </section>
    </>
  );
};

export default Hero;