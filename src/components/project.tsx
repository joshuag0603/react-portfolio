import React from 'react';

interface Project {
  name: string;
  description: string;
  url: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{project.name}</h5>
          <p className="card-text">{project.description}</p>
          <a href={project.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

const GitHubProjects: React.FC = () => {
  const projects: Project[] = [
    {
      name: 'Project 1',
      description: 'Description for Project 1',
      url: 'https://github.com/joshuag0603/movieNsnackinator',
    },
    {
      name: 'Project 2',
      description: 'Description for Project 2',
      url: 'https://github.com/joshuag0603/candle-shop',
    },
    {
      name: 'Project 3',
      description: 'Description for Project 3',
      url: 'https://github.com/joshuag0603/vehicle-builder',
    },
    {
        name: 'Project 4',
        description: 'Description for Project 4',
        url: 'https://github.com/joshuag0603/readmeGenerator',
    },
    {
        name: 'Project 5',
        description: 'Description for Project 5',
        url: 'https://github.com/joshuag0603/kanban-board',
    },
    {
        name: 'Project 6',
        description: 'Description for Project 6',
        url: 'https://github.com/joshuag0603/weather-api',
    },
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default GitHubProjects;
