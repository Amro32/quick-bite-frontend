import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SET_ROLE,
} from "./userTypes";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";

// action for request success and fail

export const login = (data) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  try {
    const res = await axios.post(
      process.env.REACT_APP_API + "/api/login",
      data
    );

    console.log(res.data); //* to be removed
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    dispatch({ type: SET_ROLE, payload: res.data.user?.role });
    window.location.href = "/";
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

//todo: login after signing up
export const signup =
  ({ firstName, lastName, email, password }) =>
  async (dispatch) => {
    dispatch({ type: SIGNUP_REQUEST });
    try {
      const res = await axios.post(process.env.REACT_APP_API + "/api/signup", {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
      });

      console.log(res.data);

      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: SIGNUP_FAIL, payload: error.response?.data?.message });
    }
  };
