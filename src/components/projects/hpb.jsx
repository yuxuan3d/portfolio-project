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
                            <div className='project-title'>HPB</div>
                            <p className='project-subheading'>Advertisement</p>
                            <h3>Project description</h3>
                            <div className='cinder-content-wrapper'>
                                <div className='project-description'>
                                <ul>
                                        <li>Provided on-set Visual Effects Supervision during the shoot.</li>
                                        <li>Executed the entire 3D and VFX pipeline post-shoot for the animated 'Antibiotic' character.</li>
                                        <li>Responsibilities included: 3D modeling, texturing, lighting, rendering, and final compositing.</li>
                                        <li>Ensured seamless and photorealistic integration of the 3D character into live-action environments.</li>
                                    </ul>
                                </div>
                            </div>
                            <h3>Technology used</h3>
                            <div className='tech-description'>
                                    <p>- Maya, Vray</p>
                                    <p>- AfterEffects</p>
                                </div>
                        </div>
                        <div className='video-wrapper'>
                            <iframe src="https://www.youtube.com/embed/oBaRNGZ0A1U?si=UPYYnJ97KvnQRpRh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='video'></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
  );
};

export default Cinder;