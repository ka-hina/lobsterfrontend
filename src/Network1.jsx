import React, {Component} from 'react';
import * as d3 from "d3";

class Network1 extends Component {
  
  constructor(props){
    super(props);
    this.myRef = React.createRef();
  }

  testmicro(){ 

    var margin = {top: 10, right: 30, bottom: 30, left: 40},
  width = 400 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

    var svg = d3.select("#my_dataviz")
    .append("svg")
    .attr("width", 330 + 40 + 30)
    .attr("height", 360 + 10 + 30)
    .append("g")
    .attr("transform", "translate(" + 40 + "," + 10 + ")");

    d3.json("./data.json", function( data) {

  var link = svg
    .selectAll("line")
    .data(data.links)
    .enter()
    .append("line")
      .style("stroke", "#aaa")


  var node = svg
    .selectAll("circle")
    .data(data.nodes)
    .enter()
    .append("circle")
      .attr("r", 20)
      .style("fill", "#69b3a2")


  var simulation = d3.forceSimulation(data.nodes)                 
      .force("link", d3.forceLink()                               
            .id(function(d) { return d.id; })                    
            .links(data.links)                                    
      )
      .force("charge", d3.forceManyBody().strength(-400))         
      .force("center", d3.forceCenter(width / 2, height / 2))     
      .on("end", ticked);

 
  function ticked() {
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node
         .attr("cx", function (d) { return d.x+6; })
         .attr("cy", function(d) { return d.y-6; });
  }

});



  }

  componentDidMount() {
    this.testmicro();
  }

  render(){
    return <>
    <div ref={this.myRef}> </div>
    </>
}

}

export default Network1;