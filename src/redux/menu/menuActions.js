import {
  FETCH_MENUS_REQUEST,
  FETCH_MENUS_SUCCESS,
  FETCH_MENUS_FAIL,
} from "./menuTypes";

import axios from "axios";

export const getMenus = () => async (dispatch) => {
  dispatch({ type: FETCH_MENUS_REQUEST });
  try {
    const response = await axios.get(process.env.REACT_APP_API + "/api/menus");
    console.log(response.data);
    dispatch({
      type: FETCH_MENUS_SUCCESS,
      payload: response.data?.menus?.data,
    });
  } catch (e) {
    console.log(e);
    dispatch({
      type: FETCH_MENUS_FAIL,
      payload: e,
    });
  }
};
