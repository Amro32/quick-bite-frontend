import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./user/userReducer";
import { feedbackReducer } from "./feedback/feedbackReducer";
import { faqReducer } from "./faq/faqReducer";

const reducer = combineReducers({
  userReducer: userReducer,
  feedbackReducer: feedbackReducer,
  faqReducer: faqReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
