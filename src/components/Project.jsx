import React from 'react';
import placeholderImg from '../assets/placeholder.jpg'; // Use a real or placeholder image

// Sample Data
const projectsData = [
  { id: 1, title: 'Project One', description: 'Description of project one...', image: placeholderImg, link: '#' },
  { id: 2, title: 'Project Two', description: 'Description of project two...', image: placeholderImg, link: '#' },
  { id: 3, title: 'Project Three', description: 'Description of project three...', image: placeholderImg, link: '#' },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2>What I did</h2>
        <div className="card-grid">
          {projectsData.map(project => (
            <div key={project.id} className="card project-card"> {/* Add specific class if needed */}
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link" style={{display: 'inline-block', marginTop: '10px', fontWeight: 'bold'}}>View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;