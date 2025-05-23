import React from 'react';
import { div } from 'three/tsl';
// import placeholderImg from '../assets/placeholder.jpg'; // Import a placeholder

// Sample Data (replace with your actual skills)
const skillsData = [
  { id: 1, title: '3D Asset Creation & Visualization', description: 'Crafting high-quality 3D assets from concept to final render. Skilled in modelling (high/low poly, organic/hard-surface), UV mapping, PBR & stylized texturing, and cinematic lighting setups for impactful visuals.' ,
    icons: [{loc: '/houdini.png', title: 'houdini'}, 
            {loc: '/maya.png', title: 'maya'},
            {loc: '/3ds.png', title: '3ds'},
            {loc: '/Painter.png', title: 'painter'},
            {loc: '/zbrush.png', title: 'zbrush'}
    ]},
  { id: 2, title: 'Visual Effects & Simulation', description: '  Creating dynamic, believable visual effects through physics-based simulations. Specializing in particle systems, fluids, fire, smoke, and procedural destruction to enhance realism and visual storytelling.' , 
    icons: [{loc: '/houdini.png', title: 'houdini'}
    ]},
  { id: 3, title: '2D & 3D Motion Graphics Production', description: '2D/3D motion graphics: Animation, visual effects compositing, and dynamic typography for commercial, broadcast, web, and interactive applications.' , 
    icons: [{loc: '/ae.png', title: 'ae'},
            {loc: '/premiere.png', title: 'premiere'},
            {loc: '/PS.png', title: 'photoshop'}
    ]},
  { id: 4, title: ' Interactive Web Development (with 3D)', description: ' Building engaging and interactive frontend experiences. Specializing in integrating real-time 3D graphics, particularly using libraries like React Three Fiber, to create novel applications leveraging both web and 3D expertise.', 
    icons: [{loc: '/react.png', title: 'react'},
            {loc: '/three.png', title: 'threejs'},
            {loc: '/Postgresql.png', title: 'postgresql'},
            {loc: '/node-js.png', title: 'node'}
    ]},
  { id: 5, title: ' AI Integration & Automation', description: ' Leveraging AI tools (like ComfyUI, Stable Diffusion) for workflow optimization, task automation, and streamlined high-quality content creation.', 
    icons: [{loc: '/comfyui.png', title: 'comfyui'},
            {loc: '/Python.png', title: 'python'},

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
              <h3>{skill.title}</h3>
              <div className='icon-grid'>
                {skill.icons.map(icon => (
                    <img key={icon.title} src={icon.loc} alt={icon.title} className='icons'/>
                ))}
              </div>
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