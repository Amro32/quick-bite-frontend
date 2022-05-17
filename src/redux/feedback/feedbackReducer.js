import {
  FETCH_REVIEWS_REQUEST,
  FETCH_REVIEWS_SUCCESS,
  FETCH_REVIEWS_FAIL,
} from "./feedbackTypes";

const initialState = {
  feedbacks: [],
  loadingTestimonials: false,
  error: "",
};

export const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REVIEWS_REQUEST:
      return {
        ...state,
        loadingTestimonials: true,
      };
    case FETCH_REVIEWS_SUCCESS:
      return {
        ...state,
        loadingTestimonials: false,
        feedbacks: action.payload,
        error: "",
      };
    case FETCH_REVIEWS_FAIL:
      return {
        ...state,
        loadingTestimonials: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
