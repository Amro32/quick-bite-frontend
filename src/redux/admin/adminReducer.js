/** @format */

import {
  FETCH_ADMINS_REQUEST,
  FETCH_ADMINS_SUCCESS,
  FETCH_ADMINS_FAIL,
} from "./adminTypes";

const initialState = {
  admins: [],
  loadingAdmins: false,
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADMINS_REQUEST:
      return {
        ...state,
        admins: [],
        loadingAdmins: true,
      };
    case FETCH_ADMINS_SUCCESS:
      return {
        ...state,
        admins: action.payload,
        loadingAdmins: false,
      };
    case FETCH_ADMINS_FAIL:
      return {
        ...state,
        admins: [],
        loadingAdmins: false,
      };

    default:
      return state;
  }
};
