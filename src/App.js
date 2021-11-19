import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">What would you like to know?</h1>
        <h1 className="titlesecond">The Photos Of The Day</h1>
        <main>
          <Dictionary defaultKeyword="hello" />
        </main>
        <footer className="footer">
          Coded by{" "}
          <a
            href="https://www.linkedin.com/in/jasmine-tsunoda89/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jasmine Tsunoda
          </a>
          &nbsp;using&nbsp;
          <a
            href="https://github.com/Tsunoda-Stylings/react-dictionary-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-Source Code
          </a>{" "}
          and{" "}
          <a
            href="https://tsunodastylings-reactdictionary.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
