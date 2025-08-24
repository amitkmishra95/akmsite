import React from 'react';

const Projects = () => {
    const projectData = [
        {
            title: "Project Management System",
            description: "A full-stack web platform for managing academic projects.",
            image: "https://via.placeholder.com/400x200?text=Project+Management+System",
            link: "https://github.com/amitkmishra95/projectmanagementsystem"
        },
        {
            title: "Faculty Task Management System",
            description: "A web-based system for assigning and tracking faculty tasks.",
            image: "https://via.placeholder.com/400x200?text=Faculty+Task+Management+System",
            link: "https://github.com/amitkmishra95/task_management"
        },
        // Add more projects as needed
    ];

    return (
        <section id="projects" className="projects">
            <h2>Featured Projects</h2>
            <div className="project-list">
                {projectData.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
