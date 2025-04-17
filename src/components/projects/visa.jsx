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
                            <div className='project-title'>Visa - Future View</div>
                            <p className='project-subheading'>Advertisement</p>
                            <h3>Project description</h3>
                            <div className='cinder-content-wrapper'>
                                <div className='project-description'>
                                    <ul>
                                        <li>Performed the majority of the keying, compositing, and UI motion graphics animation, integrating digital elements seamlessly with extensive green screen footage.</li>
                                        <li>Executed complex composites involving 3D backgrounds and camera movements, notably featured in the "Smart Data / Home Buying Assistant" sequence (2:55 onwards).</li>
                                        <li>Supervised and ensured the quality of green screen keying work completed by junior animators.</li>
                                        <li>Delivered polished, high-fidelity visual effects essential to the video's futuristic aesthetic and conceptual storytelling.</li>
                                    </ul>
                                </div>
                            </div>
                            <h3>Technology used</h3>
                            <div className='tech-description'>
                                    <p>- After Effects</p>
                                    <p>- 3ds Max</p>
                                </div>
                        </div>
                        <div className='video-wrapper'>
                            <iframe src="https://www.youtube.com/embed/qMt4t6bVV_M?si=yRHmUr_JhCIYJiy0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='video'></iframe>
                            <iframe src="https://www.youtube.com/embed/T5G8bhMAY54?si=unfWkv4LvZpJuQOc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='video'></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
  );
};

export default Cinder;