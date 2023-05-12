import axios from "axios";

export const GET_TWEETS = "getTweetes";

export const getTweetes = () => {
  return (dispatch) => {
    return axios
    .get(`${process.env.REACT_APP_API_URL}tweets`)
      .then((res) => {
        dispatch({ type: getTweetes, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};