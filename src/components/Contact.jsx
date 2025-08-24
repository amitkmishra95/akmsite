function Contact() {
  return (
    <section id="contact" className="container my-5">
      <h2 className="text-center mb-4">Contact Me</h2>
      <form className="mx-auto" style={{maxWidth: "500px"}}>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Your Name" required />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Your Email" required />
        </div>
        <div className="mb-3">
          <textarea className="form-control" rows="4" placeholder="Your Message" required></textarea>
        </div>
        <button className="btn btn-primary w-100">Send Message</button>
      </form>
    </section>
  )
}

export default Contact
