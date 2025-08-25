import React from 'react';

const Resume = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '../public/assets/cv.pdf'; // Update with your resume path
        link.download = 'Amit_Kumar_Mishra_Resume.pdf';
        link.click();
    };

    return (
        <section id="resume" className="resume">
            <h2>Resume</h2>
            <p>Click the button below to view or download my resume.</p>
            <button onClick={handleDownload} className="btn">Download Resume</button>
        </section>
    );
};

export default Resume;
