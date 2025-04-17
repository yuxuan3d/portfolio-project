import React from 'react';
import Icon from '@mdi/react';
import { mdiArrowLeftCircle  } from '@mdi/js';


const Cinder = () => {


  return (
    <>
        <main>
            <section>
                <div className='project-wrapper'>
                    <div className='back-button-wrapper'>
                        <a href="/">
                            <Icon path={mdiArrowLeftCircle} size={2} className='back-button'/>
                        </a>
                    </div>
                    <div className='project-text-image-wrapper'>
                        <div className='project-content'>
                            <div className='project-title'>Betadine Sore Throat Lozenges</div>
                            <p className='project-subheading'>Advertisement</p>
                            <h3>Project description</h3>
                            <div className='cinder-content-wrapper'>
                                <div className='project-description'>
                                Solely responsible for crafting the entire 3D workflow and visual execution for this Betadine Sore Throat Lozenge advertisement. Brought the central 'germ' character from concept to screen through dynamic animation, texturing, lighting, and rendering, integrated via compositing. Engineered the interactive rope rig and simulation, key to visualizing the product's efficacy.
                                </div>
                            </div>
                            <h3>Technology used</h3>
                            <div className='tech-description'>
                                    <p>- Maya, Vray</p>
                                    <p>- After Effects</p>
                                </div>
                        </div>
                        <div className='video-wrapper'>
                            <iframe src="https://www.youtube.com/embed/-jxSneQwaLU?si=S5xSQgAp3IZo6ZY6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='video'></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
  );
};

export default Cinder;