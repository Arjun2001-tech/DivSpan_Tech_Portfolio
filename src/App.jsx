import React, { useState } from "react";
import {
  ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, Layers3, Smartphone, Globe, Sparkles, ExternalLink
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const projects = [
  {
    number: "01",
    title: "Wedding Photography",
    // type: "Creative website",
    description: "A visual-first portfolio for showcasing wedding stories, galleries, and booking enquiries.",
    tags: ["React", "Responsive UI", "Gallery"],
    className: "project-peach",
    initials: "WP",
    link: "https://pixelverse-photography.vercel.app/home"
  },
  {
    number: "02",
    title: "SS Catering",
    // type: "Dashboard · UI concept",
    description: "A professional catering website showcasing food services, menu offerings, and event catering solutions with a user-friendly design.",
    tags: ["React", "Dashboard", "Data UI"],
    className: "project-lime",
    initials: "SS",
    link: "https://sscatering.netlify.app",
  }
];

const services = [
  { icon: Code2, title: "Frontend development", text: "Fast, maintainable interfaces with React and modern JavaScript." },
  { icon: Layers3, title: "UI implementation", text: "Turning designs and ideas into polished, responsive web experiences." },
  { icon: Smartphone, title: "Responsive websites", text: "Layouts that feel natural across mobile, tablet, and desktop." },
  { icon: Globe, title: "Full-stack foundations", text: "Connecting user interfaces to APIs, backend services, and data." }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Arjun home">
          <span className="brand-mark">DS</span><span>DIVSPAN<span className="brand-dot">/</span>TECH</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            {/* <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR SELECT PROJECTS</div> */}
            <h1>Building digital<br />experiences that<br /><span className="accent-text">feel different</span></h1>
            <p className="hero-description">I'm Arjun, a software developer focused on thoughtful interfaces, useful products, and clean code</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17} /></a>
              {/* <a className="text-link" href="#contact">Get in touch <ArrowUpRight size={16} /></a> */}
            </div>
            <div className="hero-meta">
              <span><span className="meta-icon"><Code2 size={15} /></span> React · JavaScript · UI</span>
              <span className="meta-divider" />
              <span>Based in India</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract developer illustration">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-sun" />
            <div className="art-card art-card-top"><span className="tiny-square" /> <span>DESIGN / BUILD</span><Sparkles size={15} /></div>
            <div className="art-monogram">DS</div>
            <div className="art-card art-card-bottom"><span className="code-bracket">&lt;/&gt;</span><div><strong>Ideas into interfaces</strong><small>One thoughtful detail at a time</small></div></div>
            <div className="art-cross cross-one">+</div><div className="art-cross cross-two">+</div>
            {/* <div className="art-label">CREATIVE<br />DEVELOPER</div> */}
          </div>
          {/* <a className="scroll-note" href="#work"><span className="scroll-line" /> SCROLL TO EXPLORE</a> */}
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading">
            <div><p className="eyebrow">VIEW PROJECTS <span className="heading-line" /></p><h2>A few things I've<br /><span className="muted-heading">put into the world</span></h2></div>
            <p className="section-intro">A selection of concepts and builds that show how I approach design, detail, and problem-solving</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div
                  className={`project-art ${project.className}`}
                  onClick={() => window.open(
                    project.link,
                    "_blank",
                    "noopener,noreferrer"
                  )}
                  role="link"
                  tabIndex={0}
                >
                  {/* <span className="project-number">{project.number} / 03</span> */}
                  <div className="project-art-shape"><span>{project.initials}</span></div>
                  <span className="project-open"><ArrowUpRight size={19} /></span>
                  <div className="project-art-caption">{project.type}</div>
                </div>
                <div className="project-info">
                  <div><h3>{project.title}</h3><p>{project.description}</p></div>
                  <div className="tag-row">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
          <p className="project-note">Project previews are editable placeholders — replace them with your live project links and screenshots.</p>
        </section>

        <section className="about-section" id="about">
          <div className="section-wrap about-grid">
            <div><p className="eyebrow">A LITTLE ABOUT ME <span className="heading-line" /></p><h2>Curious by nature<br /><span className="accent-text">Developer by craft</span></h2></div>
            <div className="about-copy">
              <p className="about-lead">I enjoy making the web feel simple, clear, and a little more human</p>
              <p>I work across the frontend, from structuring React components to refining responsive layouts. I care about practical solutions, readable code, and the small details that make a product easier to use.</p>
              <div className="skill-list"><span>React.js</span><span>JavaScript</span><span>HTML & CSS</span><span>REST APIs</span><span>Git & GitHub</span><span>Responsive UI</span></div>
            </div>
          </div>
        </section>

        <section className="services-section section-wrap" id="services">
          <div className="section-heading compact-heading">
            <div><p className="eyebrow">WHAT I CAN HELP WITH <span className="heading-line" /></p><h2>Good work starts<br />with <span className="muted-heading">good thinking</span></h2></div>
          </div>
          <div className="services-grid">
            {services.map(({ icon: Icon, title, text }, index) => (
              <article className="service-card" key={title}>
                <div className="service-top"><span className="service-icon"><Icon size={20} /></span><span className="service-index">0{index + 1}</span></div>
                <h3>{title}</h3><p>{text}</p><ArrowUpRight className="service-arrow" size={18} />
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            {/* <p className="eyebrow"><span className="status-dot" /> HAVE A PROJECT IN MIND?</p> */}
            <h2>Let's make something<br /><span className="accent-text">worth remembering</span></h2>
            <p className="contact-copy">Have a project idea in mind. Get in touch and let's chat!</p>
            {/* <a className="button button-light" href="mailto:hello@example.com">hello@example.com <ArrowUpRight size={17} /></a> */}
            <div className="contact-socials">
              {/* <a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ExternalLink size={12} /></a> */}
              <a href="https:www.linkedin.com/in/arjun-s-780549270" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ExternalLink size={12} /></a>
              <a href="mailto:arjunarun2542@gmail.com"><Mail size={17} /> Email <ExternalLink size={12} /></a>
              <a
                href="https://wa.me/919981287924?text=Hello%2C%20I%20am%20interested%20in%20your%20services."
                // href="https://wa.me/919981287934"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={17} />
                WhatsApp
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home"><span className="brand-mark">DS</span><span>DIVSPAN<span className="brand-dot">/</span>TECH</span></a>
        <p>Designed with intent. Built with care.</p>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
        <span className="copyright">© {new Date().getFullYear()} DIVSPAN TECH</span>
      </footer>
    </div>
  );
}

export default App;