// import React from 'react';

// const Resume = () => {
//     const handleDownload = () => {
//         const link = document.createElement('a');
//         link.href = '/cv.pdf'; // Update with your resume path
//         link.download = 'Amit_Kumar_Mishra_Resume.pdf';
//         link.click();
//     };

//     return (
//         <section id="resume" className="resume">
//             <h2>Resume</h2>
//             <p>Click the button below to view or download my resume.</p>
//             <button onClick={handleDownload} className="btn">Download Resume</button>
//         </section>
//     );
// };

// export default Resume;
import React from 'react';

const Resume = () => {
  return (
    <div id="resume">
      <h2>Resume</h2>

  <p>
    <a href="/cv.pdf" target="_blank" rel="noopener">
      📄 View CV
    </a>
  </p>

  
  <p>
    <a href="/cv.pdf" download="My_Resume.pdf">
      ⬇️ Download CV
    </a>
  </p>
</div>
  );
};

export default Resume;
