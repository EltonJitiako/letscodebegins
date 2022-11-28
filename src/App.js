import './App.css';
import waves from './movies/waves.mp4';

function App() {
  return (
    <div>
      <div className="overlay"></div>
        <video src={waves} autoPlay loop muted />
        <div className="content">
            <h1>ELTON L. JITIAKO</h1>
            <p>contact</p>
        </div>
    </div>
  );
}

export default App;
