import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";


import { Doughnut, Pie, PolarArea} from "react-chartjs-2";
import faker from "faker";
import { forceCenter } from "d3";

ChartJS.register(
  RadialLinearScale,
  ArcElement,
  PointElement,
  LineElement,
  Filler,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

/* Bar */
const optionsBar = {
  indexAxis: "y",
  autoPadding: true,
  elements: {
    bar: {
      borderWidth: 3,
    },
  },
  barPercentage: 0.5,
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Tendance du moment",
    },
  },
};



function Datass() {
  var trendlabels = useSelector((state) => state.trendsReducer);

  useEffect(() => {}, [trendlabels]);
}

/*
var trendlabels = useSelector((state) => state.trendsReducer); // Data get by redux
const labelss = [];
trendlabels.forEach((element) => labelss.push(element.word));
console.table(labelss);
*/
const data = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datasets: [
      {
        label: "Hours Studied in Geeksforgeeks",
        data: [2, 5, 6, 7, 3],
        backgroundColor: ["blue", "green", "yellow", "pink", "orange"],
      }
    ]
}

const options = {
  scale: {
    display: false
},
maintainAspectRatio: false,
}

const dataPie = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

const optionsPie = {

}

const Content = () => {

  const [positiveCount, setPositiveCount] = useState(0);

  const trendlabels = useSelector((state) => state.trendsReducer);

  const labels = [];
const enrollment = [];


  return (
    <div className="page-content-first" id="first-content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md" id="first-row-content">
        
            <h4 className="text-center">             
                  Les tendances thématiques depuis début 2023
            </h4>
            <div  style={{ width: "100%", height: "80%", display: "flex", justifyContent: "center", alignItems: "center" }} >
            <PolarArea data={data} options={options}/>
            </div>
   
          </div>

          <div className="col-lg" id="first-row-content">
            <h4 className="text-center">Recentrage sur le mois d'Avril</h4>
            <div  style={{ width: "50%", height: "80%", display: "flex", justifyContent: "center", alignItems: "center", marginLeft : "25%" }} >
            <Pie data={dataPie} options={optionsPie} />
            </div>
          </div>

            </div>
      </div>
    </div>
  );
};




const FirstRow = () => {
  return <Content />;
};

export default FirstRow;
