import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Blood Bank Management System",
      description: "A full-stack Blood Bank Management System with user authentication, donation tracking, and inventory management.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c",
      technologies: ["HTML", "MYSQL", "CSS", "JavaScript"],
      githubLink: "https://github.com/itsresearchdev/blood-bank-management-system",
      liveLink: "https://github.com/itsresearchdev/blood-bank-management-system"
    },
    {
      title: "Task Management System",
      description: "A collaborative task management application with real-time updates, user roles, and project tracking capabilities.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      technologies: ["Python", "Django", "React", "WebSocket"],
      githubLink: "https://github.com/yourusername/task-manager",
      liveLink: "https://your-taskmanager.com"
    },
    {
      title: "Blog Platform",
      description: "A modern blogging platform with markdown support, categories, and user engagement features.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      technologies: ["React", "Node.js", "MySQL", "Express"],
      githubLink: "https://github.com/yourusername/blog-platform",
      liveLink: "https://your-blog.com"
    }
  ];

  return (
    <div className="min-h-screen p-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-blue-400">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;