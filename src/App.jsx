// import Navbar from './components/Navbar.jsx'
// import Hero from './components/Hero.jsx'
// import About from './components/About.jsx'
// import Projects from './components/Projects.jsx'
// import Contact from './components/Contact.jsx'
// import Footer from './components/Footer.jsx'

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <About />
//       <Projects />
//       <Contact />
//       <Footer />
//     </>
//   )
// }

// export default App
import React from 'react';
// import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact'; // Add this import
import Footer from './components/Footer';
import './styles.css';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Resume />
            <Contact /> {/* Add Contact component */}
            <Footer />
        </Router>
    );
};

export default App;
