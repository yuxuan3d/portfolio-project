import React from 'react';
// import placeholderImg from '../assets/placeholder.jpg'; // Import a placeholder

// Sample Data (replace with your actual skills)
const skillsData = [
  { id: 1, title: '3D Asset Creation & Visualization', description: 'Crafting high-quality 3D assets from concept to final render. Proficient in modelling (high/low poly, organic/hard-surface), UV mapping, PBR & stylized texturing, and cinematic lighting setups for impactful visuals.'/* , icon: placeholderImg */ },
  { id: 2, title: 'Visual Effects & Simulation', description: ' Creating dynamic and believable visual effects through physics-based simulations. Specializing in particle systems, fluids, fire, smoke, and procedural destruction to enhance realism and visual storytelling.'/* , icon: placeholderImg */ },
  { id: 3, title: 'Digital Compositing', description: 'Integrating diverse visual elements into seamless shots. Expertise in green/blue screen keying, rotoscoping, 2D/3D tracking, colour correction, and final image polish for film, VFX, and motion graphics.'/* , icon: placeholderImg */ },
  { id: 4, title: ' Interactive Web Development (with 3D)', description: 'Building engaging and interactive frontend experiences using React, JavaScript, and Node.js. Specializing in integrating real-time 3D graphics via React Three Fiber, creating novel applications that leverage both web and 3D expertise.'/* , icon: placeholderImg */ },
  { id: 5, title: ' AI Integration & Automation', description: 'Implementing cutting-edge AI technologies to optimize workflows and automate repetitive tasks. Proficient with ComfyUI, Stable Diffusion, and similar platforms to streamline content creation, enhance visual quality, and build more efficient, intelligent production systems.'/* , icon: placeholderImg */ },
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h2 className='subheading'>Here's what I do best</h2>
        <div className="card-grid">
          {skillsData.map(skill => (
            <div key={skill.id} className="card" tabIndex="0">
              {/* <img src={skill.icon} alt={skill.title} /> You can add icons later */}
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;