import background from "./logo.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "750px",
          }}
        >
          <h1 className="hero-title">Dictionary</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
