export default function Experience() {
  return (
    <div className="container mt-5">
      <h1>Experience</h1>

      <ul className="list-unstyled mt-4" style={{ lineHeight: '2rem' }}>
        <li>
          🤖 <strong style={{ color: 'white' }}>Software Engineering Intern @ </strong><strong style={{ color: 'white' }}>VDart</strong><br />
          <span style={{ fontSize: '0.95em' }}>May 2024 – Dec 2024 • Remote (USA)</span><br />
          <span>
            Built a GenAI recruitment bot MVP, which accelerated resume processing and analysis by 40%.
          </span>
        </li>

        <li className="mt-4">
          👨‍💻 <strong style={{ color: 'white' }}>Software Developer @ </strong><strong style={{ color: 'white' }}>The Wing Spot</strong><br />
          <span style={{ fontSize: '0.95em' }}>Oct 2023 – Sep 2024 • Toronto, ON</span><br />
          <span>
            Developed a full-stack app with an online ordering feature that boosted delivery volume by 50%.
          </span>
        </li>

        <li className="mt-4">
          📚 <strong style={{ color: 'white' }}>Research Assistant @ </strong><strong style={{ color: 'white' }}>University of Westminster</strong><br />
          <span style={{ fontSize: '0.95em' }}>Sep 2022 – Jul 2023 • Remote (UK)</span><br />
          <span>
            Designed an AI prototype for the <strong>Microsoft Imagine Cup Hackathon</strong>.
          </span>
        </li>
      </ul>
    </div>
  );
}
