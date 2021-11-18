import logo from "./logo.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="hero">
        <header className="App-header">
          <img src={logo} className="hero-logo" alt="logo" />
          <h1 className="hero-title">Dictionary</h1>
        </header>
      </div>
    </div>
  );
}

export default App;
