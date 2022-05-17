import {
  FETCH_REVIEWS_REQUEST,
  FETCH_REVIEWS_SUCCESS,
  FETCH_REVIEWS_FAIL,
} from "./feedbackTypes";

import axios from "axios";

export const fetchReviewsRequest = () => {
  return { type: FETCH_REVIEWS_REQUEST };
};

export const fetchReviewsSuccess = (data) => {
  return {
    type: FETCH_REVIEWS_SUCCESS,
    payload: data,
  };
};
export const fetchReviewsFail = (error) => {
  return {
    type: FETCH_REVIEWS_FAIL,
    payload: error,
  };
};

export const getFeedbacks = () => async (dispatch) => {
  dispatch(fetchReviewsRequest());
  try {
    const response = await axios.get(
      process.env.REACT_APP_API + "/api/visit_feedbacks"
    );
    console.log(response.data);
    dispatch(fetchReviewsSuccess(response.data?.visit_feedbacks?.data));
  } catch (e) {
    console.log(e);
    dispatch(fetchReviewsFail(e));
  }
};
