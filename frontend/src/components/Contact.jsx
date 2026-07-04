import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    // Remove this preventDefault (and the fetch below) if you'd rather let the
    // form POST directly to /submit-enquiry like the original static page did.
    e.preventDefault()
    console.log('Enquiry submitted:', form)
    // Example: send to your backend
    // fetch('/submit-enquiry', { method: 'POST', body: JSON.stringify(form) })
  }

  return (
    <section id="contact">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">
            <span className="num">Ch. 05</span> GET IN TOUCH
          </div>
          <h2>Tell us what you're building.</h2>
          <p>
            Whether it's an ERP for your campus or a placement-ready
            internship track for your students — write in, and we'll respond
            within one working day.
          </p>
        </div>

        <div className="contact-grid">
          <div>
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3887.644488952083!2d77.49428197507687!3d12.994575587322876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU5JzQwLjUiTiA3N8KwMjknNDguNyJF!5e0!3m2!1sen!2sin!4v1752774250942!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gnana CompuTech Solutions location"
              ></iframe>
            </div>

            <div className="contact-info">
              <div className="row">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <strong>Address</strong>
                  <span>
                    #126, 2nd Floor, 9th A Cross, 3rd Main, Vigneswaranagara,
                    Sunkadakatte, Bengaluru
                  </span>
                </div>
              </div>
              <div className="row">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <strong>Phone</strong>
                  <span>
                    <a href="tel:+919742543939">+91 97425 43939</a>
                  </span>
                </div>
              </div>
              <div className="row">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16v16H4z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                <div>
                  <strong>Email</strong>
                  <span>
                    <a href="mailto:gnanacomputech@gmail.com">gnanacomputech@gmail.com</a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <div className="eyebrow">SEND AN ENQUIRY</div>
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Your name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone number</label>
                <input
                  id="phone"
                  type="text"
                  name="phone"
                  placeholder="10-digit mobile number"
                  pattern="[6-9][0-9]{9}"
                  maxLength="10"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  title="Enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9"
                />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell us a little about what you need"
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-amber">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
