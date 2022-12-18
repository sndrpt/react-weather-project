import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was created by{" "}
          <a
            href="https://shimmering-basbousa-b25624.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Sandra Pytlik
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/sndrpt/react-weather-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
