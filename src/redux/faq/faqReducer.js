/** @format */

import {
  FETCH_FAQ_REQUEST,
  FETCH_FAQ_SUCCESS,
  FETCH_FAQ_FAIL,
} from "./faqTypes";

const initialState = {
  faqs: [],
  loadingFaqs: false,
};

export const faqReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FAQ_REQUEST:
      return {
        ...state,
        faqs: [],
        loadingFaqs: true,
      };
    case FETCH_FAQ_SUCCESS:
      return {
        ...state,
        faqs: action.payload,
        loadingFaqs: false,
      };
    case FETCH_FAQ_FAIL:
      return {
        ...state,
        faqs: [],
        loadingFaqs: false,
      };

    default:
      return state;
  }
};
