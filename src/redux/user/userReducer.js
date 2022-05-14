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
        token: action.payload,
        isAuthenticated: true,
        error: "",
      };

    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
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
        response: "Your account has been registered successfully.",
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
        isAuthenticated: true,
      };

    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
