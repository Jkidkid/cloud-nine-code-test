import "./App.css";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Boka klippning</h1>
        <Nav />
      </header>
      <Main />
    </div>
  );
}

export default App;
