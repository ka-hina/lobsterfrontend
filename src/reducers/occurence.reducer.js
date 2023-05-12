import { GET_OCCURENCE } from "../actions/occurence.actions";

const initialState = {};

export default function occurenceReducer(state = initialState, action) {
  switch (action.type) {
    case GET_OCCURENCE:
      return action.payload;
    default:
      return state;
  }
};
