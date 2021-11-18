import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">What would you like to know?</h1>
        <main>
          <Dictionary />
        </main>
        <footer className="footer">Coded by Jasmine Tsunoda</footer>
      </div>
    </div>
  );
}

export default App;
