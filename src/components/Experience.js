export default function Experience() {
  return (
    <div className="container mt-5">
      <h1>Experience</h1>

      <ul className="list-unstyled mt-4" style={{ lineHeight: '2rem' }}>
        <li>
          🤖 <strong style={{ color: 'white' }}>Software Engineering Intern- GenAI @ </strong><strong style={{ color: 'white' }}>VDart</strong><br />
          <span style={{ fontSize: '0.95em' }}>May 2024 – Dec 2024 • Remote (GA, USA)</span><br />
          <span>
            Built an AI recruitment bot using <strong>Llama3</strong>, <strong>FastAPI</strong>, <strong>WhisperX</strong>, and <strong>MongoDB</strong>. 
            Transformed 500+ audio files and accelerated resume processing by 40%.
          </span>
        </li>

        <li className="mt-4">
          👨‍💻 <strong style={{ color: 'white' }}>Software Developer @ </strong><strong style={{ color: 'white' }}>The Wing Spot</strong><br />
          <span style={{ fontSize: '0.95em' }}>Oct 2023 – Sep 2024 • Toronto, ON</span><br />
          <span>
            Developed a full-stack app using <strong>React</strong> for online ordering. Boosted delivery volume by 50% 
            and built an <strong>analytics dashboard</strong> with <strong>Python</strong>.
          </span>
        </li>

        <li className="mt-4">
          📚 <strong style={{ color: 'white' }}>Research Assistant @ </strong><strong style={{ color: 'white' }}>University of Westminster</strong><br />
          <span style={{ fontSize: '0.95em' }}>Sep 2022 – Jul 2023 • Remote (London, UK)</span><br />
          <span>
            Conducted workshops in <strong>Java</strong>, <strong>Python</strong>, and <strong>R</strong>. 
            Designed an AI prototype for the <strong>Microsoft Imagine Cup</strong> (Lifestyle category).
          </span>
        </li>
      </ul>
    </div>
  );
}
