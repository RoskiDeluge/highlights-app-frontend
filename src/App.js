import "./App.css";

function App() {
  fetch("http://localhost:1337/books")
    .then((res) => res.json())
    .then(console.log);

  return <div className="App">Highlights App</div>;
}

export default App;
