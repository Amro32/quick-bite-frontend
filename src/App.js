import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import "./custom.scss";
import PagesSwitch from "./PagesSwitch";
import { SET_CURRENCY } from "./redux/currency/currencyTypes";
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
    //check if user changed the curency
    let currency = localStorage.getItem("currency");
    let rate = localStorage.getItem("rate");
    if (currency && rate) {
      dispatch({
        type: SET_CURRENCY,
        payload: {
          currency: currency,
          currencyRate: rate,
        },
      });
    }
  }, []);
  return (
    <Router basename="/">
      <PagesSwitch />
    </Router>
  );
}

export default App;
