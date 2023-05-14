import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrends } from "C:/Users/sarad/Documents/Master_MIAGE/Test/lobsterfrontend/src/actions/trends.actions";
import { Bar } from "react-chartjs-2";

import Routes from "./components/routes"

const App = () => {
  const trends = useSelector((state) => state.trends);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("component mounted!");
    dispatch(getTrends());
  }, [dispatch]);

  return (
    <div>
      <Routes />
    </div>
  );
};

export default App;
