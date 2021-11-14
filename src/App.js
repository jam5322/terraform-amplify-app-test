import logo from './logo.svg';
import './App.css';

const current_rek_snapshot = logo;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Current Rekognition Snapshot:</h1>
        <img src={current_rek_snapshot} className="Rekognition-Snaptshot" alt="latest AWS Rekognition Snapshot" />
        <p>
          Img filename: <code>insert filename of image here if desired</code>
        </p>
        <p>
          Img timestamp: <code>insert timestamp of image here if desired</code>
        </p>
        <a
          className="AWS-Management-Console-link"
          href="https://aws.amazon.com/console"
          target="_blank"
          rel="noopener noreferrer"
        >
          AWS Management Console
        </a>
      </header>
    </div>
  );
}

export default App;
