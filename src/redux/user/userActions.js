import { LOGIN_REQUEST, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "./userTypes";
import axios from "axios";

// action for request success and fail
export const loginRequestAction = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccessAction = (userData, token) => {
  return {
    type: LOGIN_SUCCESS,
    payloadData: userData,
    payloadToken: token,
  };
};

export const loginFailAction = (error) => {
  return {
    type: LOGIN_FAIL,
    payload: error,
  };
};

export const logoutAction = () => {
  return {
    type: LOGOUT,
  };
};

export const login = (email, password) => async (dispatch) => {
  // send user data
  // if login success take the token from the response and store it in the localStorage
  // else send a fail login

  dispatch(loginRequestAction());

  // send the api for login
  try {
    const response = await axios.post(
      process.env.REACT_APP_API + "/api/user/login",
      { email, password }
    );
    const token = response.data.token; // get the token from the response
    const userData = response.data.user; // get the userData from the response

    localStorage.setItem("token", token); // put the token in the local storage
    localStorage.setItem("userData", JSON.stringify(userData)); // put the userData in the local storage
    dispatch(loginSuccessAction(userData, token)); // login success
  } catch (e) {
    dispatch(loginFailAction(e.response.data.error)); // login failed
  }
};
