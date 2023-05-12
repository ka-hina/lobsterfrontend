import axios from "axios";

export const GET_OCCURENCE = "GET_OCCURENCE";

export const getOccurences = () => {
  return (dispatch) => {
    return axios
    .get(`${process.env.REACT_APP_API_URL}occurence`)
      .then((res) => {
        dispatch({ type: getOccurences, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};