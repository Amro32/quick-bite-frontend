/** @format */

import {
  GET_CURRENCIES_REQUEST,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_FAIL,
} from "./currencyTypes";
import axios from "axios";

export const getCurrencies = () => async (dispatch) => {
  dispatch({
    type: GET_CURRENCIES_REQUEST,
  });
  try {
    const res = await axios.get(process.env.REACT_APP_API + "/api/currencies");
    console.log(res.data);
    dispatch({
      type: GET_CURRENCIES_SUCCESS,
      payload: res.data.currencies.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_CURRENCIES_FAIL,
    });
  }
};
