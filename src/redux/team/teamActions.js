import {
  FETCH_TEAM_REQUEST,
  FETCH_TEAM_SUCCESS,
  FETCH_TEAM_FAIL,
} from "./teamTypes";

import axios from "axios";

export const getTeamMembers = () => async (dispatch) => {
  dispatch({
    type: FETCH_TEAM_REQUEST,
  });
  try {
    const response = await axios.get(
      process.env.REACT_APP_API + "/api/employees"
    );
    console.log(response.data);
    dispatch({
      type: FETCH_TEAM_SUCCESS,
      payload: response.data?.employees?.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FETCH_TEAM_FAIL,
      payload:
        error.response && error.response.data && error.response.data.message,
    });
  }
};

export const deleteTeam = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(
      process.env.REACT_APP_API + "/api/employees/" + id
    );
    console.log(response.data);
    dispatch(getTeamMembers());
  } catch (e) {
    console.log(e);
  }
};
