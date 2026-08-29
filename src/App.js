import './App.css';

const experience = [
  {
    period: '2026 — present',
    role: 'Software Developer 1',
    company: 'Best Buy Canada',
    description:
      'Building backend integrations and APIs as part of a modernization effort for a large-scale returns and repairs platform.',
    tags: ['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'OpenShift'],
  },
  {
    period: 'May 2024 — Dec 2024',
    role: 'Software Engineering Intern',
    company: 'VDart',
    description:
      'Built a generative-AI recruitment workflow spanning speech transcription, resume analysis, data processing and a responsive web interface.',
    tags: ['Python', 'FastAPI', 'WhisperX', 'Llama 3', 'MongoDB'],
  },
  {
    period: 'Oct 2023 — Sep 2024',
    role: 'Software Developer',
    company: 'The Wing Spot',
    description:
      'Developed a full-stack ordering platform and analytics tooling that helped improve the digital ordering experience and operational visibility.',
    tags: ['React', 'JavaScript', 'Python', 'SQL'],
  },
  {
    period: 'Sep 2022 — Jul 2023',
    role: 'Research Assistant — Software Development',
    company: 'University of Westminster',
    description:
      'Led programming workshops and helped design an AI-driven prototype for the Microsoft Imagine Cup 2023.',
    tags: ['Python', 'Java', 'R', 'AI'],
  },
];

const projects = [
  {
    number: '01',
    title: 'Autonomous Vision Robot',
    status: 'Exploring',
    description:
      'A hands-on robotics project exploring camera-based perception, lightweight machine learning and autonomous navigation.',
    tags: ['Computer Vision', 'Python', 'Robotics', 'Embedded'],
  },
  {
    number: '02',
    title: 'Minute-Mail',
    status: 'Built',
    description:
      'An AI-assisted email tool designed to generate context-sensitive messages and reduce repetitive writing work.',
    tags: ['Python', 'Flask', 'OpenAI', 'SQL'],
  },
  {
    number: '03',
    title: 'Chrononet',
    status: 'Built',
    description:
      'A neural-network based electricity forecasting project focused on time-series modelling, preprocessing and model evaluation.',
    tags: ['R', 'Neural Networks', 'Time Series'],
  },
];

const skills = {
  'Backend & Systems': ['Java', 'Spring Boot', 'Python', 'FastAPI', 'REST APIs', 'Microservices', 'SQL'],
  'AI & Data': ['Computer Vision', 'Machine Learning', 'Hugging Face', 'Pandas', 'NumPy', 'scikit-learn'],
  'Frontend': ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Bootstrap'],
  'Tools & Cloud': ['Git', 'Docker', 'OpenShift', 'AWS', 'Azure', 'MongoDB', 'PostgreSQL'],
};

function Tag({ children }) {
  return <span className="tag">{children}</span>;
}

function SectionLabel({ index, children }) {
  return (
    <div className="section-label">
      <span>{index}</span>
      <span>{children}</span>
    </div>
  );
}

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Janakan home">JS</a>
        <nav aria-label="Main navigation">
          <a href="#work">work</a>
          <a href="#projects">projects</a>
          <a href="#about">about</a>
          <a href="#contact">contact</a>
        </nav>
        <a className="status" href="#now"><span /> available for what&apos;s next</a>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <p className="eyebrow">SOFTWARE · SYSTEMS · INTELLIGENCE</p>
            <h1>Janakan<br /><em>Sureshraj.</em></h1>
            <p className="hero-lede">
              Software developer building reliable systems today, while exploring the intersection of software, AI and robotics.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <span>↘</span></a>
              <a className="button button-ghost" href="/Janakan Sureshraj Resume.pdf" target="_blank" rel="noreferrer">Resume ↗</a>
            </div>
          </div>
          <div className="hero-aside" aria-label="Personal profile summary">
            <div className="terminal-card">
              <div className="terminal-top"><span>janakan@localhost</span><span>2026</span></div>
              <div className="terminal-body">
                <p><span className="muted">$</span> whoami</p>
                <p className="accent">software_developer</p>
                <p><span className="muted">$</span> focus</p>
                <p>backend / systems / AI / robotics</p>
                <p><span className="muted">$</span> location</p>
                <p>Toronto, Canada</p>
                <p><span className="muted">$</span> next</p>
                <p className="accent">build → learn → repeat</p>
              </div>
            </div>
          </div>
        </section>

        <section id="now" className="now-strip">
          <div className="section-pad now-grid">
            <div><span className="mini-label">NOW</span><strong>Building backend systems</strong></div>
            <div><span className="mini-label">LEARNING</span><strong>Computer vision · robotics</strong></div>
            <div><span className="mini-label">INTERESTED IN</span><strong>Intelligent systems</strong></div>
          </div>
        </section>

        <section id="work" className="section-pad content-section">
          <SectionLabel index="01" children="Selected experience" />
          <div className="section-heading-row">
            <h2>Work that shaped<br /><em>how I build.</em></h2>
            <p>From product development to backend engineering, each role has pushed me toward building systems that are useful, maintainable and resilient.</p>
          </div>
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-item" key={`${item.company}-${item.role}`}>
                <div className="experience-period">{item.period}</div>
                <div className="experience-main">
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                  <p>{item.description}</p>
                  <div className="tags">{item.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-pad content-section projects-section">
          <SectionLabel index="02" children="Selected projects" />
          <div className="section-heading-row">
            <h2>Things I&apos;ve built<br /><em>and things I&apos;m building.</em></h2>
            <p>Projects are where I turn curiosity into something tangible — especially when the problem crosses software, data and the physical world.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-meta"><span>{project.number}</span><span>{project.status}</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">{project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
                <span className="project-arrow">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section-pad content-section about-section">
          <SectionLabel index="03" children="About" />
          <div className="about-grid">
            <div>
              <h2>I like understanding<br /><em>what&apos;s underneath.</em></h2>
            </div>
            <div className="about-copy">
              <p className="large-copy">I&apos;m a software developer interested in the architecture behind useful products — APIs, distributed systems, data flows and the engineering decisions that make software dependable.</p>
              <p>My interests are gradually moving toward intelligent systems: computer vision, machine learning and robotics. I&apos;m especially drawn to projects where software has to perceive, decide and act in the real world.</p>
              <p>I learn best by building, taking systems apart, and then rebuilding them better.</p>
            </div>
          </div>
        </section>

        <section className="section-pad content-section skills-section">
          <SectionLabel index="04" children="Toolkit" />
          <div className="skills-grid">
            {Object.entries(skills).map(([group, items]) => (
              <div className="skill-group" key={group}>
                <h3>{group}</h3>
                <div className="skill-list">{items.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-pad trajectory">
          <div className="trajectory-card">
            <div>
              <span className="mini-label">THE DIRECTION</span>
              <h2>Software → Systems →<br /><em>Intelligent machines.</em></h2>
            </div>
            <div className="trajectory-line" aria-hidden="true">
              <span>software</span><i>→</i><span>systems</span><i>→</i><span>AI</span><i>→</i><span>robotics</span>
            </div>
          </div>
        </section>

        <section id="contact" className="section-pad contact-section">
          <SectionLabel index="05" children="Contact" />
          <div className="contact-content">
            <p className="eyebrow">HAVE A GOOD PROBLEM?</p>
            <h2>Let&apos;s build<br /><em>something useful.</em></h2>
            <a className="email-link" href="mailto:janakansureshraj2@gmail.com">janakansureshraj2@gmail.com <span>↗</span></a>
            <div className="social-links">
              <a href="https://github.com/janakansureshraj" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://linkedin.com/in/janakansureshraj" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-pad">
        <span>© {new Date().getFullYear()} Janakan Sureshraj</span>
        <span>Built with React · designed to evolve.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
