import {
  FETCH_MENUS_REQUEST,
  FETCH_MENUS_SUCCESS,
  FETCH_MENUS_FAIL,
} from "./menuTypes";

const initialState = {
  menus: [],
  loadingMenus: false,
  error: "",
};

export const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MENUS_REQUEST:
      return {
        ...state,
        loadingMenus: true,
      };
    case FETCH_MENUS_SUCCESS:
      return {
        ...state,
        loadingMenus: false,
        menus: action.payload,
        error: "",
      };
    case FETCH_MENUS_FAIL:
      return {
        ...state,
        loadingMenus: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
