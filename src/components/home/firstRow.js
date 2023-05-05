import React, { useEffect } from "react";
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
      borderWidth: 2,
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

const labels = [];
const enrollment = [];

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

const Content = () => {
  var trendlabels = useSelector((state) => state.trendsReducer);

  for (const key of Object.keys(trendlabels)) {
    //console.log(`${trendlabels[key].word}`);
    labels.push(`${trendlabels[key].word}`);
    enrollment.push(`${trendlabels[key].enrollment}`)
  }

  console.log("Labels : " + labels);
  console.log("ENR : " + enrollment);

  return (
    <div className="page-content-first" id="first-content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg" id="first-row-content">
            <h4 className="text-center">
              Les sujets dont on parle le plus cette semaine
            </h4>
            <Bar options={options} data={data} />
          </div>

          <div className="col-lg" id="first-row-content">
            <h4 className="text-center">Avis positifs et avis négatifs</h4>
            <Radar data={dataRadar} />
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
                <a href="#">26</a>
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
