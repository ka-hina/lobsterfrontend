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


import { Line} from "react-chartjs-2";
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
  labels: ['Jan', 'Mar', 'May', 'July', 'Oct'],
  datasets: [
    {
      label: 'Iphone sales',
      data: [400, 1000, 4000, 800, 1500],
      fill: true,
      backgroundColor:"#B166BB",
      pointBorderColor:"#4C2052",
      pointBorderWidth:5,
      pointRadius:8,
      tension: 0.4
    },
  ],
};

const options = {
  plugins:{legend:{display:false}},
  layout:{padding:{bottom:100}},
  scales: {
    y:{
      ticks:{
        color:"white",
        font:{
          size:18
        }
      },
      grid:{
        color:"#243240"
      }
    },
    x:{
      ticks:{
        color:"white",
        font:{
          size:18
        }
      }
    }
  },
};

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
                  Fluctuation sur les échanges basés sur la Transition Energétique
            </h4>
            <div  style={{ width: "65%", height: "110%", display: "flex", justifyContent: "center", alignItems: "center", marginTop : "2%" , marginLeft: "10%"}} >
            <Line data={data} options={options}/>
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
