import { GET_NODES } from "../actions/nodes.actions";

const initialState = {};

export default function nodesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NODES:
      return action.payload;
    default:
      return state;
  }
};
