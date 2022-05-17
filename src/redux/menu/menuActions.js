import {
  FETCH_MENUS_REQUEST,
  FETCH_MENUS_SUCCESS,
  FETCH_MENUS_FAIL,
  ADD_MENU_REQUEST,
  ADD_MENU_SUCCESS,
  ADD_MENU_FAIL,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_REQUEST,
  ADD_ITEM_FAIL,
} from "./menuTypes";

import axios from "axios";

export const getMenus = () => async (dispatch) => {
  dispatch({ type: FETCH_MENUS_REQUEST });
  try {
    const response = await axios.get(process.env.REACT_APP_API + "/api/menus");
    console.log(response.data);
    dispatch({
      type: FETCH_MENUS_SUCCESS,
      payload: response.data?.menus?.data,
    });
  } catch (e) {
    console.log(e);
    dispatch({
      type: FETCH_MENUS_FAIL,
      payload: e,
    });
  }
};

export const addMenu = (name) => async (dispatch) => {
  dispatch({ type: ADD_MENU_REQUEST });
  try {
    const response = await axios.post(
      process.env.REACT_APP_API + "/api/menus",
      { name }
    );
    console.log(response.data);
    dispatch({
      type: ADD_MENU_SUCCESS,
    });
    dispatch(getMenus());
  } catch (e) {
    console.log(e);
    dispatch({
      type: ADD_MENU_FAIL,
      payload: e,
    });
  }
};

export const addItem = (body) => async (dispatch) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API + "/api/items",
      body
    );
    console.log(response.data);
    dispatch(getMenus());
  } catch (e) {
    console.log(e);
    dispatch({
      type: ADD_ITEM_FAIL,
      payload: e,
    });
  }
};

export const editItem = (body) => async (dispatch) => {
  try {
    const response = await axios.put(
      process.env.REACT_APP_API + "/api/items/" + body.id,
      body
    );
    console.log(response.data);
    dispatch(getMenus());
  } catch (e) {
    console.log(e);
  }
};

export const deleteItem = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(
      process.env.REACT_APP_API + "/api/items/" + id
    );
    console.log(response.data);
    dispatch(getMenus());
  } catch (e) {
    console.log(e);
  }
};

export const deleteMenu = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(
      process.env.REACT_APP_API + "/api/menus/" + id
    );
    console.log(response.data);
    dispatch(getMenus());
  } catch (e) {
    console.log(e);
  }
};

export const editMenu = (body) => async (dispatch) => {
  try {
    const response = await axios.put(
      process.env.REACT_APP_API + "/api/menus/" + body.id,
      body
    );
    console.log(response.data);
    dispatch(getMenus());
  } catch (e) {
    console.log(e);
  }
};
