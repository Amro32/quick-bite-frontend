import setAuthToken from "../../utils/setAuthToken";
import { LOGIN_REQUEST, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "./userTypes";

export const initialState = {
  user: {},
  token: "",
  isAutheticated: false,
  loading: false,
  error: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error1: "",
      };

    case LOGIN_SUCCESS:
      setAuthToken(action.payloadToken);
      return {
        ...state,
        loading: false,
        user: action.payloadData,
        token: action.payloadToken,
        isAutheticated: true,
        error: "",
        error1: "",
      };

    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        user: {},
        token: "",
        isAutheticated: false,
        error: {
          email: action.payload.email,
          password: action.payload.password,
        },
        error1: action.payload,
      };

    case LOGOUT:
      return {
        ...state,
        loading: false,
        user: {},
        token: "",
        isAutheticated: false,
      };
    default:
      return state;
  }
};
