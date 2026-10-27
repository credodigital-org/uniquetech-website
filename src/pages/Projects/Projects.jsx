import { useState } from 'react';

const filters = ['All', 'MEP Works', 'Maintenance', 'Interior Works', 'Landscaping', 'Material Supply'];
const projects = [
  { title: 'Commercial Building Maintenance', description: 'Comprehensive building maintenance and technical support for commercial properties.', category: 'General Maintenance', image: '/assets/project-hvac.png', tags: ['Maintenance'] },
  { title: 'MEP Installation Works', description: 'Electrical, plumbing, and mechanical system installation and coordination.', category: 'MEP Works', image: '/assets/project-maintenance-team.png', tags: ['MEP Works', 'Maintenance'] },
  { title: 'Interior Fit-Out & Renovation', description: 'Interior finishing, ceiling installation, flooring, and renovation works.', category: 'Civil & Interior Works', image: '/assets/services-interior.png', tags: ['Interior Works'] },
  { title: 'Landscape & Outdoor Maintenance', description: 'Garden care, irrigation systems, and outdoor facility maintenance.', category: 'Landscaping', image: '/assets/services-landscaping.png', tags: ['Landscaping', 'Maintenance'] },
  { title: 'HVAC & Chiller Maintenance', description: 'Professional HVAC system inspection, equipment servicing, and maintenance to support efficient cooling and reliable building operations.', category: 'HVAC Maintenance', image: '/assets/project-hvac.png', tags: ['MEP Works', 'Maintenance'] },
  { title: 'Water Tank Cleaning & Treatment', description: 'Water tank cleaning, disinfection, and specialized water system maintenance to support hygiene and water quality.', category: 'Water & Specialized Maintenance', image: '/assets/project-water-tank.png', tags: ['Maintenance'] },
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleProjects = activeFilter === 'All' ? projects : projects.filter((project) => project.tags.includes(activeFilter));
  return <>
    <section className="projects-page-hero"><div className="wrap"><h1>Our Projects</h1></div></section>
    <section className="projects-overview">
      <div className="wrap">
        <header className="projects-intro">
          <h2>Delivering Quality. Building Trust.</h2>
          <p>Explore our project portfolio showcasing our commitment to quality, technical excellence, and reliable maintenance solutions across residential, commercial, and industrial properties.</p>
        </header>
        <div className="project-filters" role="group" aria-label="Filter projects">
          {filters.map((filter) => <button key={filter} type="button" className={activeFilter === filter ? 'filter-button active' : 'filter-button'} aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)}>{filter}</button>)}
        </div>
        <div className="project-gallery" aria-live="polite">
          {visibleProjects.map((project, index) => <article className="portfolio-card" key={project.title}>
            <div className="portfolio-photo"><img src={project.image} alt={project.title} loading={index > 2 ? 'lazy' : 'eager'} /></div>
            <div className="portfolio-copy"><h3>{project.title}</h3><p>{project.description}</p><strong>{project.category}</strong></div>
          </article>)}
          {visibleProjects.length === 0 && <p className="no-projects">More projects in this category will be added soon.</p>}
        </div>
      </div>
    </section>
  </>;
}

export default Projects;
