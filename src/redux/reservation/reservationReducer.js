import {
  RESERVATION_REQUEST,
  RESERVATION_SUCCESS,
  RESERVATION_FAIL,
} from "./reservationTypes";

const initialState = {
  reservation: [],
  loadingReservation: false,
  error: "",
};

export const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESERVATION_REQUEST:
      return {
        ...state,
        reservation: "",
        loadingReservation: true,
      };
    case RESERVATION_SUCCESS:
      return {
        ...state,
        loadingReservation: false,
        reservation: "Booked Successfully!",
        error: "",
      };
    case RESERVATION_FAIL:
      return {
        ...state,
        loadingReservation: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
