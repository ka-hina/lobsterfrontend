import {GET_THEMES} from "C:/Users/sarad/Documents/Master_MIAGE/FRONT/lobsterfrontend/src/actions/themes.actions.js";

const initialState = {};

export default function themesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_THEMES:
      console.log("EHHHH OHHH SARAH REGARDE ICI", action.payload)
      return action.payload;
    default:
      return state;
  }
};
