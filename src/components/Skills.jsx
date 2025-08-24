import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <h2>Technical Skills</h2>
            <div className="skills-list">
                <div className="skill-category">
                    <h3>Programming Languages</h3>
                    <span className="skill-pill">Python</span>
                    <span className="skill-pill">Java</span>
                    <span className="skill-pill">C++</span>
                    <span className="skill-pill">JavaScript</span>
                </div>
                <div className="skill-category">
                    <h3>Frontend Development</h3>
                    <span className="skill-pill">HTML5</span>
                    <span className="skill-pill">CSS3</span>
                    <span className="skill-pill">React.js</span>
                    <span className="skill-pill">Bootstrap</span>
                </div>
                <div className="skill-category">
                    <h3>Backend Development</h3>
                    <span className="skill-pill">Spring Boot</span>
                    <span className="skill-pill">Node.js</span>
                    <span className="skill-pill">Express.js</span>
                </div>
                <div className="skill-category">
                    <h3>Databases</h3>
                    <span className="skill-pill">MySQL</span>
                    <span className="skill-pill">MongoDB</span>
                </div>
            </div>
        </section>
    );
};

export default Skills;
