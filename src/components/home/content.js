import React, { useEffect } from "react";

import Graph from "graphology";
import { SigmaContainer, useLoadGraph } from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";

const LoadGraph = () => {
  const loadGraph = useLoadGraph();

  useEffect(() => {
    const graph = new Graph();
    graph.addNode("first", {
      x: 0,
      y: 0,
      size: 15,
      label: "Oni le Boss de Sarah",
      color: "#FA4F40",
    });

    graph.addNode("sec", {
      x: 0,
      y: 3,
      size: 15,
      label: "Sarah l'esclave d'Oni",
      color: "noir",
    });

    graph.addNode("trois", {
      x: 2,
      y: 2,
      size: 15,
      label: "François l'esclave d'Oni 💩",
      color: "blue",
    });

    // Adding an edge
    graph.addEdge("first", "sec");
    graph.addEdge("first", "trois", { type: "arrow", label: "works with", size: 5 });
    

    loadGraph(graph);
  }, [loadGraph]);

  return null;
};

const Content = () => {
  return (
    <div className="page-content p-5" id="content">
      <SigmaContainer style={{ height: "500px", width: "1000px" }}>
        <LoadGraph />
      </SigmaContainer>
    </div>
  );
};

export default Content;
