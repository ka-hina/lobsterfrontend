import axios from "axios";

export const GET_THEMES = "GET_THEMES";

export const getTheme = () => {
  console.log("SAAAAAAAARAH Fetching sentiments from server...");
  return (dispatch) => {
    return axios
    .get(`${process.env.REACT_APP_API_URL}themes`)
      .then((res) => {
        console.log("Theme data:", res.data); 
        console.log("SAAAAAAAAAAAAAARAHH")
        console.log(res.data)
        dispatch({ type: GET_THEMES, payload: res.data });
      })
      .catch((err) => console.log(err));
  };


  
};
