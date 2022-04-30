/** @format */

import {
  FETCH_FAQ_REQUEST,
  FETCH_FAQ_SUCCESS,
  FETCH_FAQ_FAIL,
} from "./faqTypes";

const initialState = {
  faqs: [],
  loading: false,
};

export const faqReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FAQ_REQUEST:
      return {
        ...state,
        faqs: [],
        loading: true,
      };
    case FETCH_FAQ_SUCCESS:
      return {
        ...state,
        faqs: action.payload,
        loading: false,
      };
    case FETCH_FAQ_FAIL:
      return {
        ...state,
        faqs: [],
        loading: false,
      };

    default:
      return state;
  }
};
