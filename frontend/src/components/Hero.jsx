export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="wrap">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="num">Est. Bengaluru</span> EDUCATION × TECHNOLOGY
          </div>
          <h1>
            Where <em>Gnana</em> meets
            <br />
            the digital age.
          </h1>
          <p className="hero-lede">
            We build the software, training and systems that carry Indian
            institutions from the chalkboard to the cloud — ERPs, exam
            platforms, teacher training and industry-ready internships,
            engineered by educators who code.
          </p>
          <div className="hero-ctas">
            <a href="#courses" className="btn btn-primary">
              Explore Courses
            </a>
            <a href="#contact" className="btn btn-ghost">
              Partner With Us
            </a>
          </div>
          <div className="ledger-row">
            <div className="ledger-stat">
              <div className="n">500+</div>
              <div className="l">Students trained</div>
            </div>
            <div className="ledger-stat">
              <div className="n">20+</div>
              <div className="l">Institution partners</div>
            </div>
            <div className="ledger-stat">
              <div className="n">12</div>
              <div className="l">Live course tracks</div>
            </div>
            <div className="ledger-stat">
              <div className="n">5 Yrs</div>
              <div className="l">In ed-tech</div>
            </div>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <svg viewBox="0 0 460 460" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="26" height="26" patternUnits="userSpaceOnUse">
                <circle cx="1.2" cy="1.2" r="1.2" fill="#DCD2B4" />
              </pattern>
            </defs>
            <rect x="20" y="20" width="420" height="420" fill="url(#grid)" />

            <circle cx="330" cy="120" r="90" fill="#D9A441" opacity="0.16" />
            <circle cx="90" cy="360" r="70" fill="#16705F" opacity="0.13" />

            <g stroke="#10233D" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M60 300 C 100 285, 155 285, 220 300 L 220 130 C 155 115, 100 115, 60 130 Z" fill="#FFFFFF" />
              <path d="M380 300 C 340 285, 285 285, 220 300 L 220 130 C 285 115, 340 115, 380 130 Z" fill="#FFFFFF" />
              <path d="M75 150 L 205 138" opacity="0.35" />
              <path d="M75 175 L 205 163" opacity="0.35" />
              <path d="M75 200 L 205 188" opacity="0.35" />
              <path d="M75 225 L 205 213" opacity="0.35" />
              <path d="M235 138 L 365 150" opacity="0.35" />
              <path d="M235 163 L 365 175" opacity="0.35" />
              <path d="M235 188 L 365 200" opacity="0.35" />
              <path d="M235 213 L 365 225" opacity="0.35" />
            </g>

            <g stroke="#16705F" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M110 260 L 150 260 L 175 220 L 210 220 L 235 170 L 265 170 L 290 110" />
            </g>
            <circle cx="110" cy="260" r="4.5" fill="#16705F" />
            <circle cx="175" cy="220" r="4.5" fill="#16705F" />
            <circle cx="235" cy="170" r="4.5" fill="#16705F" />

            <g stroke="#10233D" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="300" cy="80" r="34" fill="#F7F3E8" />
              <path d="M288 108 L 312 108" />
              <path d="M291 118 L 309 118" />
              <path d="M300 46 L 300 34" opacity="0.5" />
              <path d="M328 52 L 337 43" opacity="0.5" />
              <path d="M272 52 L 263 43" opacity="0.5" />
              <path d="M338 80 L 350 80" opacity="0.5" />
            </g>
            <path d="M290 96 C 292 84, 308 84, 310 96" stroke="#D9A441" strokeWidth="3" fill="none" strokeLinecap="round" />

            <line x1="220" y1="115" x2="220" y2="305" stroke="#D9A441" strokeWidth="2" strokeDasharray="1 7" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </section>
  )
}
