// import React from 'react';
// // import './Navbar.css'; // Optional: for additional navbar styles

// const Navbar = () => {
//     const scrollToSection = (sectionId) => {
//         const element = document.getElementById(sectionId);
//         if (element) {
//             element.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     return (
//         <nav className="navbar">
//             <div className="container">
//                 <h1 className="logo">Amit Kumar Mishra</h1>
//                 <ul className="nav-links">
//                     <li><button onClick={() => scrollToSection('home')} className="nav-link">Home</button></li>
//                     <li><button onClick={() => scrollToSection('about')} className="nav-link">About</button></li>
//                     <li><button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button></li>
//                     <li><button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button></li>
//                     <li><button onClick={() => scrollToSection('resume')} className="nav-link">Resume</button></li>
//                     <li><button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button></li>
//                 </ul>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <a href="#home" className="logo">Amit Kumar Mishra</a>
        
        {/* Hamburger Icon for Mobile */}
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        {/* Navigation Links */}
        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <a href="#resume" onClick={() => setIsMenuOpen(false)}>Resume</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;