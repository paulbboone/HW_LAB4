import "./App.css";
import useOnline from "./useOnline";

function App() {
  const online = useOnline();

  return (
    <div className="App">
      <h1>Network Checker</h1>
      <span>
        You are now...
        {online ? <div>ONLINE</div> : <div>OFFLINE</div>}
      </span>
    </div>
  );
}

export default App;