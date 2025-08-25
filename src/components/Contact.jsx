// function Contact() {
//   return (
//     <section id="contact" className="container my-5">
//       <h2 className="text-center mb-4">Contact Me</h2>
//       <form className="mx-auto" style={{maxWidth: "500px"}}>
//         <div className="mb-3">
//           <input type="text" className="form-control" placeholder="Your Name" required />
//         </div>
//         <div className="mb-3">
//           <input type="email" className="form-control" placeholder="Your Email" required />
//         </div>
//         <div className="mb-3">
//           <textarea className="form-control" rows="4" placeholder="Your Message" required></textarea>
//         </div>
//         <button className="btn btn-primary w-100">Send Message</button>
//       </form>
//     </section>
//   )
// }

// export default Contact
function Contact() {
  return (
    <section id="contact" className="container my-5">
      <h2 className="text-center mb-4">Contact Me</h2>

      {/* Card */}
      <div className="card shadow-lg p-4" style={{ maxWidth: "600px", margin: "0 auto", backgroundColor: "#f8f9fa", borderRadius: "12px" }}>
        <div className="card-body text-center">
          <p><strong>📞 Phone:</strong> <a href="tel:+91950692">+91 9508123692</a></p>
          <p><strong>📧 Email:</strong> <a href="mailto:akm95081@gmail.com">akm95081@gmail.com</a></p>
          <p><strong>💼 LinkedIn:</strong> <a href="https://www.linkedin.com/in/amit-mishra-330aa2251/" target="_blank" rel="noopener noreferrer">linkedin.com/in/amitmishra</a></p>
          <p><strong>💻 GitHub:</strong> <a href="https://github.com/amitkmishra95" target="_blank" rel="noopener noreferrer">github.com/</a></p>
        </div>
      </div>
    </section>
  )
}

export default Contact
