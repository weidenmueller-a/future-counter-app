import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <div className="react-logo-container">
        <img src={logo} className="react-logo" alt="logo" />
      </div>

      <main>
        <h1>Future Counter App</h1>
        <Counter />  {/* Hier ist jetzt der Counter! */}
      </main>
    </div>
  );
}

export default App;
