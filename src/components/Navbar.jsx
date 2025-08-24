import React from 'react';
// import './Navbar.css'; // Optional: for additional navbar styles

const Navbar = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">
            <div className="container">
                <h1 className="logo">Amit Kumar Mishra</h1>
                <ul className="nav-links">
                    <li><button onClick={() => scrollToSection('home')} className="nav-link">Home</button></li>
                    <li><button onClick={() => scrollToSection('about')} className="nav-link">About</button></li>
                    <li><button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button></li>
                    <li><button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button></li>
                    <li><button onClick={() => scrollToSection('resume')} className="nav-link">Resume</button></li>
                    <li><button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
