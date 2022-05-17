import {
  FETCH_MENUS_REQUEST,
  FETCH_MENUS_SUCCESS,
  FETCH_MENUS_FAIL,
  FETCH_TRENDING_SUCCESS,
  FETCH_TRENDING_REQUEST,
  FETCH_TRENDING_FAIL,
} from "./menuTypes";

const initialState = {
  menus: [],
  trending: [],
  loadingMenus: false,
  loadingTrending: false,
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
    case FETCH_TRENDING_REQUEST:
      return {
        ...state,
        loadingTrending: true,
        trending: [],
      };
    case FETCH_TRENDING_SUCCESS:
      return {
        ...state,
        loadingTrending: false,
        trending: action.payload,
      };
    case FETCH_TRENDING_FAIL:
      return {
        ...state,
        loadingTrending: false,
      };
    default:
      return state;
  }
};
