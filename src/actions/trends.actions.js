import axios from "axios";

export const GET_TRENDS = "GET_TRENDS";

export const getTrends = () => {
  console.log("SAAAAAAAARAH Fetching trends from server...");
  return (dispatch) => {
    return axios
    .get(`${process.env.REACT_APP_API_URL}trends`)
      .then((res) => {
        console.log("Trends data:", res.data); 
        console.log("SAAAAAAAAAAAAAARAHH")
        console.log(res.data)
        dispatch({ type: GET_TRENDS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };


  
};
