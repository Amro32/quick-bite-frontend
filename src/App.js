import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import "./custom.scss";
import PagesSwitch from "./PagesSwitch";
import { AUTH } from "./redux/user/userTypes";
import setAuthToken from "./utils/setAuthToken";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
      dispatch({ type: AUTH });
    }
  }, []);
  return (
    <Router basename="/">
      <PagesSwitch />
    </Router>
  );
}

export default App;
