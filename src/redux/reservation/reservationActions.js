import {
  RESERVATION_REQUEST,
  RESERVATION_SUCCESS,
  RESERVATION_FAIL,
} from "./reservationTypes";

import axios from "axios";

export const addReservation = (data) => async (dispatch) => {
  dispatch({
    type: RESERVATION_REQUEST,
  });
  try {
    data.date = data.date.split("T").join(" ");
    console.log(data);
    const response = await axios.post(
      process.env.REACT_APP_API + "/api/reservations",
      data
    );
    console.log(response.data);
    dispatch({
      type: RESERVATION_SUCCESS,
    });
  } catch (e) {
    console.log(e.response.data.message);
    dispatch({
      type: RESERVATION_FAIL,
      payload: e.response.data.message,
    });
  }
};
