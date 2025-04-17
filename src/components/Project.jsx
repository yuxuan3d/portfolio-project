import React from 'react';

// Sample Data
const projectsData = [
  { id: 1, title: 'Cinder', description: 'Virtual Human Project', image: '/cinder.jpg', link: '/cinder' },
  { id: 2, title: 'Visa - Future View', description: 'Description of project two...', image: '/visa.jpg', link: '/visa' },
  { id: 3, title: 'HPB', description: 'Description of project three...', image: '/HPB.jpg', link: '/hpb' },
  { id: 4, title: 'NUSS Nurses Day', description: 'Description of project three...', image: '/NUSS.jpg', link: '/nuss' },
  { id: 5, title: 'Betadine Sore Throat Spray', description: 'Description of project three...', image: '/Betadine.jpg', link: '/spray' },
  { id: 6, title: 'Betadine Sore Throat Lozenges', description: 'Description of project three...', image: '/Betadine_2.jpg', link: '/lozenges' },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2>What I did</h2>
        <div className="card-grid">
          {projectsData.map(project => (
            <div key={project.id} className="card project-card"> {/* Add specific class if needed */}
              <img src={project.image} alt={project.title} className="project-image" height={300}/>
              <h3 className='project-title'>{project.title}</h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project ⟶</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;