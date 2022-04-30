import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from "./userTypes";
import axios from "axios";

// action for request success and fail

export const login = (data, navigate) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  try {
    const res = await axios.post(process.env.REACT_APP_API + "/login", data, {
      Accept: "application/json",
      "Content-Type": "application/json",
    });

    console.log(res.data); //* to be removed
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.result));
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    navigate("/");
  } catch (error) {
    console.log(
      error.response && error.response.data && error.response.data.message
    );
    dispatch({
      type: LOGIN_FAIL,
      payload:
        error.response && error.response.data && error.response.data.message,
    });
  }
};

export const signup =
  ({ firstName, lastName, email, password }) =>
  async (dispatch) => {
    dispatch({ type: SIGNUP_REQUEST });
    try {
      const res = await axios.post(process.env.REACT_APP_API + "/signup", {
        firstName,
        lastName,
        email,
        password,
      });

      console.log(res.data);

      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: SIGNUP_FAIL, payload: error.response.data.message });
    }
  };
