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
                            <div className='project-title'>Cinder</div>
                            <p className='project-subheading'>Virtual Human Project</p>
                            <h3>Project description</h3>
                            <div className='cinder-content-wrapper'>
                                <div className='project-description'>
                                    <p>Spearheaded the development of Cinder, a pioneering virtual influencer, leading the team at WAS Singapore. </p>
                                    <p>We brought Cinder to life using Unreal Engine, integrating real-time, full-body and facial motion capture for seamless interactivity. </p>
                                    <p>This groundbreaking technology enabled Cinder to engage audiences dynamically across diverse platforms – from captivating Twitch gaming streams and presenting at conferences, to starring in a complex, interactive live event at SXSW in Austin, Texas, where she personally mixed drinks and played games with attendees.</p>
                                </div>
                            </div>
                            <h3>Technology used</h3>
                            <div className='tech-description'>
                                    <p>- Maya, Redshift</p>
                                    <p>- Unreal Engine</p>
                                    <p>- OBS</p>
                                    <p>- Xsens</p>
                                </div>
                        </div>
                        <div className='video-wrapper'>
                            <iframe src="https://www.youtube.com/embed/Zg7VXwn8b2M?si=vlxtHcv2zhOBFaLt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='video'></iframe>
                            <img src="/cinder_still.jpg" alt="Cinder" className='project-image-focused'/>
                            <img src="/cinder_stream.jpg" alt="Cinder" className='project-image-small'/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
  );
};

export default Cinder;