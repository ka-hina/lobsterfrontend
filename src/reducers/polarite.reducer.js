import { GET_POLARITE } from "../actions/polarite.actions";

const initialState = {};

export default function polariteReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POLARITE:
      return action.payload;
    default:
      return state;
  }
};
