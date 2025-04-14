import React from 'react';
import { div } from 'three/tsl';
// import placeholderImg from '../assets/placeholder.jpg'; // Import a placeholder

// Sample Data (replace with your actual skills)
const skillsData = [
  { id: 1, title: '3D Asset Creation & Visualization', description: 'Crafting high-quality 3D assets from concept to final render. Proficient in modelling (high/low poly, organic/hard-surface), UV mapping, PBR & stylized texturing, and cinematic lighting setups for impactful visuals.' ,
    icons: [{loc: 'src/assets/houdini.png', title: 'houdini'}, 
            {loc: 'src/assets/maya.png', title: 'maya'},
            {loc: 'src/assets/3ds.png', title: '3ds'},
            {loc: 'src/assets/painter.png', title: 'painter'},
            {loc: 'src/assets/zbrush.png', title: 'zbrush'}
    ]},
  { id: 2, title: 'Visual Effects & Simulation', description: ' Creating dynamic and believable visual effects through physics-based simulations. Specializing in particle systems, fluids, fire, smoke, and procedural destruction to enhance realism and visual storytelling.' , 
    icons: [{loc: 'src/assets/houdini.png', title: 'houdini'}
    ]},
  { id: 3, title: '2D & 3D Motion Graphics Production', description: 'Producing high-impact motion graphics for diverse video applications. Proficient in Adobe After Effects to create intricate 2D and 3D animations, complex visual effects sequences, and seamless composites. Specializing in bringing concepts to life through fluid animation, dynamic typography, and polished execution for commercials, broadcast graphics, web content, and interactive experiences.' , 
    icons: [{loc: 'src/assets/ae.png', title: 'ae'},
            {loc: 'src/assets/premiere.png', title: 'premiere'},
            {loc: 'src/assets/PS.png', title: 'photoshop'}
    ]},
  { id: 4, title: ' Interactive Web Development (with 3D)', description: 'Building engaging and interactive frontend experiences using React, JavaScript, and Node.js. Specializing in integrating real-time 3D graphics via React Three Fiber, creating novel applications that leverage both web and 3D expertise.', 
    icons: [{loc: 'src/assets/react.png', title: 'react'},
            {loc: 'src/assets/three.png', title: 'threejs'},
            {loc: 'src/assets/postgresql.png', title: 'postgresql'},
            {loc: 'src/assets/node-js.png', title: 'node'}
    ]},
  { id: 5, title: ' AI Integration & Automation', description: 'Implementing cutting-edge AI technologies to optimize workflows and automate repetitive tasks. Proficient with ComfyUI, Stable Diffusion, and similar platforms to streamline content creation, enhance visual quality, and build more efficient, intelligent production systems.', 
    icons: [{loc: 'src/assets/comfyui.png', title: 'comfyui'},
            {loc: 'src/assets/python.png', title: 'python'},

    ]},
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h2 className='subheading'>Here's what I do best</h2>
        <div className="card-grid">
          {skillsData.map(skill => (
            <div key={skill.id} className="card" tabIndex="0">
              <div className='icon-grid'>
              {skill.icons.map(icon => (
                  <img src={icon.loc} alt={icon.title} className='icons'/>
              ))}
              </div>
              <h3>{skill.title}</h3>
              <div className="card-description">
                <p>{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;