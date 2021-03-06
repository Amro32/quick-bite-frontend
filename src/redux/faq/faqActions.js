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
    const res = await axios.get(process.env.REACT_APP_API + "/api/faqs");
    console.log(res.data);
    dispatch({
      type: FETCH_FAQ_SUCCESS,
      payload: res.data.FAQs.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FETCH_FAQ_FAIL,
    });
  }
};

export const addFaq = (data) => async (dispatch) => {
  try {
    const res = await axios.post(process.env.REACT_APP_API + "/api/faqs", data);
    console.log(res.data);
    dispatch(getFaqs());
  } catch (error) {
    console.log(error);
  }
};

export const deleteFaq = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(
      process.env.REACT_APP_API + "/api/faqs/" + id
    );
    console.log(res.data);
    dispatch(getFaqs());
  } catch (error) {
    console.log(error);
  }
};
