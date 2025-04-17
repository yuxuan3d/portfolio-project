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
                            <div className='project-title'>NUHS Nurses Day</div>
                            <p className='project-subheading'>Pre-Recorded Livestream</p>
                            <h3>Project description</h3>
                            <div className='cinder-content-wrapper'>
                                <div className='project-description'>
                                <ul>
                                        <li>Provided on-set Visual Effects Supervision to guide the filming process for optimal integration.</li>
                                        <li>Solely responsible for the entire post-production digital pipeline: 3D, Compositing, and Motion Graphics.</li>
                                        <li>Created the 3D virtual stage environment.</li>
                                        <li>Composited live-action host (Kumar) and virtual call participants seamlessly into the set.</li>
                                        <li>Designed and animated all motion graphics, including the countdown, title sequences, lower thirds, and screen layouts.</li>
                                    </ul>
                                </div>
                            </div>
                            <h3>Technology used</h3>
                            <div className='tech-description'>
                                    <p>- 3ds Max, Vray</p>
                                    <p>- AfterEffects</p>
                                </div>
                        </div>
                        <div className='video-wrapper'>
                            <iframe src="https://www.youtube.com/embed/3YNk3EZH9UM?si=uKKhLsmOeb1Y-h7_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='video'></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
  );
};

export default Cinder;