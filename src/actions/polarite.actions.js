import axios from "axios";

export const GET_POLARITE = "GET_POLARITE";

export const getPolarites = () => {
  return (dispatch) => {
    return axios
    .get(`${process.env.REACT_APP_API_URL}polarite`)
      .then((res) => {
        dispatch({ type: GET_POLARITE, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};