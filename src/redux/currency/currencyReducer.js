/** @format */

import {
  GET_CURRENCIES_REQUEST,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_FAIL,
  SET_CURRENCY,
} from "./currencyTypes";

const initialState = {
  currencies: [],
  currency: "$",
  currencyRate: 1,
  loadingCurrencies: false,
};

export const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENCIES_REQUEST:
      return {
        ...state,
        currencies: [],
        loadingCurrencies: true,
      };
    case GET_CURRENCIES_SUCCESS:
      return {
        ...state,
        currencies: action.payload,
        loadingCurrencies: false,
      };
    case GET_CURRENCIES_FAIL:
      return {
        ...state,
        currencies: [],
        loadingCurrencies: false,
      };
    case SET_CURRENCY:
      localStorage.setItem("currency", action.payload.currency);
      localStorage.setItem("rate", action.payload.currencyRate);
      return {
        ...state,
        currency: action.payload.currency,
        currencyRate: action.payload.currencyRate,
      };
    default:
      return state;
  }
};
