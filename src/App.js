import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Routes from "./Routes";
import TopBar from "./TopBar";

function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
