import React, { Suspense }  from 'react';
import './Hero.css';
import { FloatingScene } from './FloatingScene';

const Hero = () => {
  return (
    <>
      <section id="home" className="hero-section" >
        <div className="canvas-background-wrapper">
                <Suspense fallback={null}>
                  <FloatingScene />
                </Suspense>
          </div>
          <div className="hero-content-wrapper" >
            <div className="hero-content-container">
                <h1 className='name-title'>Hi, I'm Yu Xuan</h1>
                <p className='hero-subtitle'>3D Generalist and aspiring Full-stack Developer</p>
            </div>
          </div>
      </section>
    </>
  );
};

export default Hero;
