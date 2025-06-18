import { useState } from 'react';
import './Chatbot.css';

const qaData = {
  "what did you do at vdart": "I developed an AI recruitment tool using WhisperX, FastAPI, and MongoDB. I fine-tuned Meta Llama3 and helped reduce recruiter workflow time by 30%.",
  "what tech stack do you use": "React, FastAPI, Python, JavaScript, MongoDB, Docker, and more.",
  "tell me about minute-mail": "Minute-Mail is an AI-powered email assistant that reduces manual writing time by 50% using OpenAI LLM and Flask.",
  "what do you study": "I'm pursuing a BSc in Computer Science from the University of Hertfordshire and a Diploma in Computer Programming at Seneca Polytechnic.",
  "what are your interests": "I'm passionate about AI product development, LLMs, open source, and building impactful software.",
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [chat, setChat] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    const reply =
      qaData[userMsg.toLowerCase()] || "I'm still learning! Try asking about my work, projects, or skills.";
    setChat([...chat, { type: 'user', text: userMsg }, { type: 'bot', text: reply }]);
    setInput('');
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">🤖 Ask me anything!</div>
          <div className="chat-body">
            {chat.map((msg, index) => (
              <div key={index} className={`chat-msg ${msg.type}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about my experience..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
      <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '×' : '💬'}
      </button>
    </div>
  );
}
