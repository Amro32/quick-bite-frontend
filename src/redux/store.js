import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./user/userReducer";
import { feedbackReducer } from "./feedback/feedbackReducer";
import { faqReducer } from "./faq/faqReducer";
import { menuReducer } from "./menu/menuReducer";
import { teamReducer } from "./team/teamReducer";
import { currencyReducer } from "./currency/currencyReducer";
import { reservationReducer } from "./reservation/reservationReducer";
import { adminReducer } from "./admin/adminReducer";

const reducer = combineReducers({
  userReducer: userReducer,
  feedbackReducer: feedbackReducer,
  faqReducer: faqReducer,
  menuReducer: menuReducer,
  teamReducer: teamReducer,
  currencyReducer: currencyReducer,
  reservationReducer: reservationReducer,
  adminReducer: adminReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
