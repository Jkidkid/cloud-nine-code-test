import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <body>
        <Main />
      </body>
    </div>
  );
}

export default App;
