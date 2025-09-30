import './App.css';

function App() {
  const headers = [
    'Thesis Statement',
    'Industry Context',
    'A Variety of Infrastructure',
    'Key Vulnerabilities Across All Areas',
    'Critical Overview for Attack',
    'Trust Relationships Between Partners',
    'What’s Your Perspective?',
    'How Does This Influence How You Think About This Project?',
    'How Will You Be Impacted If This Industry is Attacked?',
    'What Are the Unique Roles in Your Industry?',
    'Common Personality Traits Enabling Roles',
    'What Did You Learn From Industry Stakeholders?',
    '[Blue Sky] What’s Possible With Your Chosen Industry?',
    'What Features Are Needed From an LLM for Your Industry?',
    'How Important is Human in The Loop in an Agentic System?',
    'How Should AI Agents be Managed, Observed, Controlled?',
    'How Important is Evaluation of the AI Agents?',
    'What Are the Constraints of Running Attack with AI Agents?',
    'Citations',
    'LLM Disclosure',
  ];

  return (
    <div className="App">
      <h1 className="main-title">Logistics, Focus - Last-Mile Delivery Operations</h1>
      <header className="names-header">
        <p className="names">Jacqueline Flynn, Charlotte Liu, Munir Emam, Ellie Wu</p>
      </header>
      <main className="content-section">
        {
          headers.map((header) => (
            <h2 key={header}>{header}</h2>
          ))
        }
      </main>
      <footer className="app-footer">
        <p className="course-info">INFO 492 B: Agentic Cybersecurity with AI and Large Language Models</p>
        <div className="contact-info">
          <p>Contact Us:</p>
          <ul>
            <li>Jacqueline Flynn: <a href="mailto:jacqfly@uw.edu">jacqfly@uw.edu</a></li>
            <li>Charlotte Liu: <a href="mailto:lsh355@uw.edu">lsh355@uw.edu</a></li>
            <li>Munir Emam: <a href="mailto:memamy3@uw.edu">memamy3@uw.edu</a></li>
            <li>Ellie Wu: <a href="mailto:yuxinw24@uw.edu">yuxinw24@uw.edu</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;