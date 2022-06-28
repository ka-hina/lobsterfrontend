import axios from "axios";

export const GET_TRENDS = "GET_TRENDS";

export const getTrends = () => {
  return (dispatch) => {
    return axios
    .get(`${process.env.REACT_APP_API_URL}trends`)
      .then((res) => {
        dispatch({ type: GET_TRENDS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};