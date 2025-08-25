import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <img src="/me.jpg" alt="Amit Kumar Mishra" className="profile-image" />
                <h1>Hello, I'm <span className="highlight">Amit Kumar Mishra</span></h1>
                <p>A passionate developer skilled in web development, data structures, algorithms, and machine learning.</p>
                <div className="hero-buttons">
                    <a href="#projects" className="btn">View My Work</a>
                    <a href="#contact" className="btn btn-outline">Get In Touch</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
