import { useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Link, NavLink, Route, Routes, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import './App.css';

const experience = [
  {
    period: 'Jun 2026 — Present', role: 'Software Developer', company: 'Best Buy Canada', location: 'Vancouver, BC · Remote',
    description: 'Contributing to backend services and integrations as part of a modernization effort for a large-scale returns and repairs platform. Working across APIs, messaging and legacy-system integration.',
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'Azure Service Bus', 'RabbitMQ', 'OpenShift']
  },
  {
    period: 'Sep 2024 — Aug 2025', role: 'Software Engineer Co-op', company: 'VDart – AI / Data Team ', location: 'GA, USA · Remote',
    description: 'Contributed to a generative AI-assisted recruitment workflow spanning speech transcription, resume analysis, data processing and a web interface.',
    technologies: ['Python', 'FastAPI', 'WhisperX', 'LLMs', 'MongoDB']
  },
  {
    period: 'Oct 2023 — Sep 2024', role: 'Software Developer', company: 'The Wing Spot', location: 'Toronto, ON',
    description: 'Worked on a full-stack ordering platform and analytics tooling to improve the digital ordering experience and operational visibility.',
    technologies: ['React', 'JavaScript', 'Python', 'SQL']
  },
  {
    period: 'Sep 2022 — Jul 2023', role: 'Research Assistant – Applied AI', company: 'University of Westminster', location: 'London, UK · Remote',
    description: 'Supported programming workshops and helped develop an AI-focused prototype for the Microsoft Imagine Cup 2023.',
    technologies: ['Python', 'Java', 'R', 'AI prototyping']
  }
];

const posts = [
  { slug: 'understanding-gradient-descent', published: true, title: 'Understanding Gradient Descent', date: '2026-10-12', category: 'Machine Learning', description: 'A compact note on how gradient descent updates model parameters to reduce a loss function.', file: '/articles/understanding-gradient-descent.md' },
  { slug: 'notes-on-robot-perception', published: true, title: 'Notes on Robot Perception', date: '2026-10-10', category: 'Robotics', description: 'A starting point for thinking about how robots turn sensor data into a useful representation of the world.', file: '/articles/notes-on-robot-perception.md' }
];

function MoonIcon({ isDark }) {
  return isDark ? (
    <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 15.4A8.5 8.5 0 0 1 8.6 3.8 8.5 8.5 0 1 0 20.2 15.4Z"/></svg>
  );
}

function Header({ theme, toggleTheme }) {
  return <header className="site-header">
    <Link to="/" className="site-name" aria-label="Janakan Sureshraj home">JS<span>.</span></Link>
    <nav className="main-nav" aria-label="Main navigation">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/experience">Experience</NavLink>
      <NavLink to="/blog">Blog</NavLink>
    </nav>
    <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}><MoonIcon isDark={theme === 'dark'} /></button>
  </header>;
}

function Home() {
  return <main className="home-page page-width">
    <div className="home-content">
      <p className="eyebrow">SOFTWARE · SYSTEMS · AI</p>
      <h1>Janakan<br />Sureshraj<span className="period">.</span></h1>
      <p className="role-line">Software Engineer exploring AI & Robotics</p>
      <div className="home-links">
        <a href="https://linkedin.com/in/janakansureshraj" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗&#xFE0E;</span></a>
        <a href="https://github.com/janakansureshraj" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗&#xFE0E;</span></a>
      </div>
    </div>
    <div className="home-footer"><span>Toronto, Canada</span><span>Documenting my learnings...</span></div>
  </main>;
}

function Experience() {
  return <main className="page-width inner-page">
    <div className="page-intro"><p className="eyebrow">Work that shaped how I build</p><h1>Experience<span className="period">.</span></h1><p className="intro-copy">From product development to backend engineering, each role has pushed me toward building systems that are useful, maintainable and resilient.</p></div>
    <section className="experience-list" aria-label="Work experience">
      {experience.map((item) => <article className="experience-item" key={`${item.company}-${item.role}`}>
        <div className="experience-date">{item.period}</div>
        <div className="experience-detail">
          <h2>{item.role}</h2><div className="company-line">{item.company}<span>·</span>{item.location}</div>
          <p>{item.description}</p>
          <div className="technology-list" aria-label="Technologies">{item.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
        </div>
      </article>)}
     </section>
  </main>;
}

function formatDate(date) {
  return new Date(`${date}T12:00:00`).toLocaleDateString('en-CA', { year: 'numeric', month: 'short', day: 'numeric' });
}

function Blog() {
  const sortedPosts = useMemo(() => posts.filter((post) => post.published).sort((a, b) => b.date.localeCompare(a.date)), []);
  return <main className="page-width inner-page blog-page">
    <div className="page-intro"><p className="eyebrow">NOTES & EXPLORATIONS</p><h1>Writing<span className="period">.</span></h1><p className="intro-copy">Short notes on ideas I'm learning, systems I'm exploring, and concepts worth coming back to.</p></div>
    <section className="post-list" aria-label="Articles">
      {sortedPosts.length === 0 ? <p className="empty-posts">No notes published yet. New writing will appear here.</p> : sortedPosts.map((post) => <article className="post-row" key={post.slug}>
        <div className="post-date">{formatDate(post.date)}</div>
        <div className="post-main"><Link className="post-title" to={`/blog/${post.slug}`}>{post.title}<span aria-hidden="true">↗&#xFE0E;</span></Link><p>{post.description}</p><span className="post-category">{post.category}</span></div>
      </article>)}
    </section>
    <p className="blog-footnote">A living notebook. New notes will appear here as they're written.</p>
  </main>;
}

function Article() {
  const { slug } = useParams();
  const post = posts.find((item) => item.slug === slug);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;
    if (!post) { setLoading(false); setError(true); return undefined; }
    fetch(post.file).then((response) => {
      if (!response.ok) throw new Error('Article could not be loaded');
      return response.text();
    }).then((text) => { if (active) { setContent(text); setLoading(false); } }).catch(() => { if (active) { setError(true); setLoading(false); } });
    return () => { active = false; };
  }, [post]);

  if (!post || error) return <main className="page-width inner-page"><p className="eyebrow">404 · NOT FOUND</p><h1>Note not found<span className="period">.</span></h1><Link className="text-link" to="/blog">← Back to writing</Link></main>;

  return <main className="page-width article-page">
    <Link className="back-link" to="/blog">← All writing</Link>
    <header className="article-header"><p className="post-category">{post.category}</p><h1>{post.title}<span className="period">.</span></h1><div className="article-meta"><time dateTime={post.date}>{formatDate(post.date)}</time><span>·</span><span>Learning note</span></div><p className="article-summary">{post.description}</p></header>
    <article className="markdown-body">{loading ? <p>Loading note…</p> : <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>{content}</ReactMarkdown>}</article>
    <footer className="article-footer"><span>End of note</span><Link to="/blog">Back to all writing ↑</Link></footer>
  </main>;
}

function AppLayout() {
  const [theme, setTheme] = useState(() => {
    try { return window.localStorage.getItem('janakan-theme') || 'light'; } catch { return 'light'; }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { window.localStorage.setItem('janakan-theme', theme); } catch { /* Storage is optional. */ }
  }, [theme]);
  const toggleTheme = () => setTheme((current) => current === 'light' ? 'dark' : 'light');
  return <div className="site-shell"><Header theme={theme} toggleTheme={toggleTheme} /><Routes><Route path="/" element={<Home />} /><Route path="/experience" element={<Experience />} /><Route path="/blog" element={<Blog />} /><Route path="/blog/:slug" element={<Article />} /><Route path="*" element={<main className="page-width inner-page"><p className="eyebrow">404 · NOT FOUND</p><h1>Page not found<span className="period">.</span></h1><Link className="text-link" to="/">Return home →</Link></main>} /></Routes><footer className="site-footer page-width"><span>© {new Date().getFullYear()} Janakan Sureshraj</span><span>Made for ideas worth keeping.</span></footer></div>;
}

export default function App() {
  return <BrowserRouter><AppLayout /></BrowserRouter>;
}
