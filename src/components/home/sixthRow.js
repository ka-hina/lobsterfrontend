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
} from "chart.js";
import { Bar, Radar } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  RadialLinearScale,
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
const options = {
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


const Content = () => {
  const [positiveCount, setPositiveCount] = useState(0);

  const trendlabels = useSelector((state) => state.trendsReducer);

const labels = [];
const enrollment = [];

const data = {
  labels,
  datasets: [
    {
      axis: "y",
      label: "Occurence",
      data: enrollment,
      fill: false,
      borderColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
    },
  ],
};


/* Radar */
const dataRadar = {
  labels: ["Positifs", "Négatifs", "Neutres"],
  datasets: [
    {
      label: "Nombre de tweets",
      data: [175, 200, 150],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 2,
    },
  ],
};

Object.keys(trendlabels).map(key => {
labels.push(trendlabels[key].mots);
enrollment.push(trendlabels[key].freq);
});

  return (
    <div className="page-content-first" id="first-content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md" id="first-row-content">
            <h4 className="text-center">
            
              Twitter et la Transition Energétique
            </h4>
            <div  style={{ width: "100%", height : "90%" }} >
            <Bar options={options} data={data} />
            </div>
            
          </div>

          <div className="col-lg" id="first-row-content">
            <h4 className="text-center">Evolution degré controverses </h4>
            <div  style={{ width: "100%", height: "10%", justifyContent: "center", alignItems: "center" }} >

            <Radar data={dataRadar} />
            </div>
            
          </div>

          <div className="col-lg" id="first-row-content2">
            <div className="span4" id="row-first-content1">
              <h3 className="text-center">
                <a href="#">Top 10</a>
              </h3>
              <p className="text-center">Tweets sur le mot “éolienne”</p>
              <p className="text-center smallText">
                20% Increase from Last Week
              </p>
            </div>
            <div className="span4" id="row-first-content2">
              <h3 className="text-center" v>
              <a href="#">{positiveCount}</a>
              </h3>
              <p className="text-center">Nouveaux acteurs</p>
              <p className="text-center smallText">
                15% Increase from Last Month
              </p>
            </div>
            <div className="span4" id="row-first-content3">
              <h3 className="text-center">
                <a href="#">500</a>
              </h3>
              <p className="text-center">Nouveaux thèmes</p>
              <p className="text-center smallText">
                5% Increase from Last Week
              </p>
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
