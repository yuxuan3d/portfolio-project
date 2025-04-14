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
                <h1 className='name-title'>Hi, I'm <span className='span-bold'>Yu Xuan</span></h1>
                <p className='hero-subtitle'>3D Generalist and aspiring Full-stack Developer</p>
                <a href="https://vimeo.com/673431850" target="_blank">
                  <button className='hero-button'>Demoreel 2021</button>
                </a>
                
            </div>
          </div>
      </section>
    </>
  );
};

export default Hero;
