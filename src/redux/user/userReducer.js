import setAuthToken from "../../utils/setAuthToken";
import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  AUTH,
} from "./userTypes";

const initialState = {
  user: {},
  token: "",
  isAuthenticated: false,
  loading: false,
  error: "",
  error1: "",
  response: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };

    case LOGIN_SUCCESS:
      setAuthToken(action.payloadToken);
      return {
        ...state,
        loading: false,
        user: action.payloadData,
        token: action.payloadToken,
        isAuthenticated: true,
        error: "",
      };

    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        user: {},
        token: "",
        isAuthenticated: false,
        error: action.payload,
      };

    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        error1: "",
        response: "",
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        error1: "",
        response: "A message has been sent to your email for verification!",
      };

    case SIGNUP_FAIL:
      return {
        ...state,
        loading: false,
        error1: action.payload,
      };

    case AUTH:
      return {
        ...state,
        user: action.data.result,
        token: action.data.token,
        isAuthenticated: true,
      };

    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
