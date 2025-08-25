// import React from 'react';

// const Projects = () => {
//     const projectData = [
//         {
//             title: "Project Management System",
//             description: "A full-stack web platform for managing academic projects.",
//             image: "https://via.placeholder.com/400x200?text=Project+Management+System",
//             link: "https://github.com/amitkmishra9595/projectmanagementsystem"
//         },
//         {
//             title: "Faculty Task Management System",
//             description: "A web-based system for assigning and tracking faculty tasks.",
//             image: "https://via.placeholder.com/400x200?text=Faculty+Task+Management+System",
//             link: "https://github.com/amitkmishra9595/task_management"
//         },
//         // Add more projects as needed
//     ];

//     return (
//         <section id="projects" className="projects">
//             <h2>Featured Projects</h2>
//             <div className="project-list">
//                 {projectData.map((project, index) => (
//                     <div key={index} className="project-card">
//                         <img src={project.image} alt={project.title} />
//                         <h3>{project.title}</h3>
//                         <p>{project.description}</p>
//                         <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default Projects;
import React from 'react';

// Your project data with images and links
const projects = [
  {
    name: 'Smart AI Assistant',
    description: 'Assists researchers by extracting key insights from large documents using NLP.',
    tags: ['Python', 'NLTK', 'SpaCy'],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://github.com/amitkmishra95/ai_assistant',
  },
  {
    name: 'Gemini Chatbot',
    description: 'A personalized chatbot for basic queries and user engagement using NLP.',
    tags: ['Python', 'NLP', 'Streamlit'],
    image: 'https://images.pexels.com/photos/7564193/pexels-photo-7564193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://github.com/amitkmishra95/GeminiChatbot',
  },
  {
    name: 'Customer Churn ML Model',
    description: 'Predicts customer churn likelihood to help businesses retain at-risk users.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'ML'],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://github.com/amitkmishra95/Customer-churn-Analysis',
  },
  {
    name: 'Fake News Detection',
    description: 'Classifies news articles as fake or real to combat misinformation using ML.',
    tags: ['Python', 'NLTK', 'Scikit-learn'],
    image: 'https://images.pexels.com/photos/3861457/pexels-photo-3861457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://github.com/amitkmishra95/Customer-churn-Analysis', // Note: This link was the same as Churn Analysis in your list
  },
  {
    name: 'Project Management System',
    description: 'A full-stack web platform for uploading, tracking, and managing academic projects.',
    tags: ['PHP', 'JavaScript', 'MySQL', 'CSS'],
    image: 'https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://github.com/amitkmishra95/projectmanagementsystem',
  },
  {
    name: 'Faculty Task Management',
    description: 'A web system for assigning daily/weekly tasks and tracking faculty progress.',
    tags: ['PHP', 'JavaScript', 'MySQL', 'CSS'],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://github.com/amitkmishra95/task_management',
  },
  {
    name: 'Hospital Management System',
    description: 'A centralized digital solution for patient appointments, records, and billing.',
    tags: ['PHP', 'MySQL', 'CSS', 'HTML'],
    image: 'https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://github.com/amitkmishra95/HealthCare-project',
  },
  {
    name: 'Discussion Forum',
    description: 'A collaborative platform enabling academic discussion and Q&A for students.',
    tags: ['PHP', 'JavaScript', 'MySQL'],
    image: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://github.com/amitkmishra95/discussion-forum',
  },
];

function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map(project => (
          <div key={project.name} className="project-card">
            <img src={project.image} alt={project.name} className="project-image" />
            <div className="project-content">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;