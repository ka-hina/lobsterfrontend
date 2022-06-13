import React, {Component} from 'react';
import * as d3 from "d3";

class BarChart extends Component {
    constructor(props){
        super(props);
        this.myRef = React.createRef();
    }
    
    drawChart() {
  
        const data = [70, 5, 6, 6, 900, 10];
          
        const svg = d3.select(this.myRef.current).append("svg").attr("width", 500).attr("height", 400);
        svg.selectAll("rect").data(data).enter().append("rect").attr("x", (d, i) => i * 70).attr("y", 0).attr("width", 25).attr("height", (d, i) => d).attr("fill", "green");
      }

    componentDidMount() {
        this.drawChart();
      }

    render(){
        return <>
        <div ref={this.myRef}> </div>
        </>
    }

}

export default BarChart;