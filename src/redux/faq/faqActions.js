/** @format */

import {
  FETCH_FAQ_REQUEST,
  FETCH_FAQ_SUCCESS,
  FETCH_FAQ_FAIL,
} from "./faqTypes";
import axios from "axios";

export const getFaqs = () => async (dispatch) => {
  dispatch({
    type: FETCH_FAQ_REQUEST,
  });
  try {
    const res = await axios.get(process.env.REACT_APP_API + "/faq");
    console.log(res.data);
    dispatch({
      type: FETCH_FAQ_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FETCH_FAQ_FAIL,
    });
  }
};
