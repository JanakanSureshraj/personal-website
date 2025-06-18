import Chatbot from './Chatbot';

export default function Me() {
  return (
    <div className="container mt-5 page-container">
      <h1>Hi, I'm Janakan 👋</h1>
      <h2>Software Engineer</h2>
      <ul className="list-unstyled mt-4">
        <li>💼 Prev. Software Engineer @ <strong>VDart</strong></li>
        <li>🎓 BSc Computer Science @ <strong>University of Hertfordshire</strong></li>
        <li>🎓 Computer Programming @ <strong>Seneca Polytechnic</strong></li>
      </ul>
      <p className="mt-4">
        🚀 Passionate about solving problems and building impactful software. Currently diving deep into AI product development — especially where Large Language Models meet real users.
      </p>
      <a
        href="/Janakan Sureshraj Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline-light resume-btn mt-4"
      >
        📄 View Janakan's Resume
      </a>

    </div>
  );
}
