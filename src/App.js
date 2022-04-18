import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import PagesSwitch from "./PagesSwitch";

function App() {
  return (
    <Router basename="/">
      <PagesSwitch />
    </Router>
  );
}

export default App;
