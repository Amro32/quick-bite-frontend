import {
  FETCH_TEAM_REQUEST,
  FETCH_TEAM_SUCCESS,
  FETCH_TEAM_FAIL,
} from "./teamTypes";

const initialState = {
  team: [],
  loadingTeam: false,
  error: "",
};

export const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEAM_REQUEST:
      return {
        ...state,
        loadingTeam: true,
      };
    case FETCH_TEAM_SUCCESS:
      return {
        ...state,
        loadingTeam: false,
        team: action.payload,
        error: "",
      };
    case FETCH_TEAM_FAIL:
      return {
        ...state,
        loadingTeam: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
