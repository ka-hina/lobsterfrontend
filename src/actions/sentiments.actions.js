import axios from "axios";

export const GET_SENTIMENTS = "GET_SENTIMENTS";

export const getSentiment = () => {
  console.log("SAAAAAAAARAH Fetching sentiments from server...");
  return (dispatch) => {
    return axios
    .get(`${process.env.REACT_APP_API_URL}sentiments`)
      .then((res) => {
        console.log("Sentiment data:", res.data); 
        console.log("SAAAAAAAAAAAAAARAHH")
        console.log(res.data)
        dispatch({ type: GET_SENTIMENTS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };


  
};
