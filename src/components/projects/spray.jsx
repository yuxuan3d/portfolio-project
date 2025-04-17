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
                            <div className='project-title'>Betadine Sore Throat Spray</div>
                            <p className='project-subheading'>Advertisement</p>
                            <h3>Project description</h3>
                            <div className='cinder-content-wrapper'>
                                <div className='project-description'>
                                <ul>
                                        <li>Provided on-set Visual Effects Supervision during the shoot involving Manchester City players.</li>
                                        <li>Handled compositing to integrate the animated 3D elements realistically into the live-action environments and shots with players.</li>
                                    </ul>
                                </div>
                            </div>
                            <h3>Technology used</h3>
                            <div className='tech-description'>
                                    <p>- Maya</p>
                                    <p>- AfterEffects</p>
                                </div>
                        </div>
                        <div className='video-wrapper'>
                            <iframe src="https://www.youtube.com/embed/inzXuSWji30?si=OO6WGZjUC_sNZPza" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='video'></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
  );
};

export default Cinder;