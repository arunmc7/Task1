import "./App.css";
import Maincontent from "./components/Maincontent";
import Taskbar from "./components/Taskbar";
import Top from "./components/Top";

function App() {
  return (
    <div className="pro">
      <Top />

      <div className="App">
        <Taskbar />
        <Maincontent />
      </div>
    </div>
  );
}

export default App;
