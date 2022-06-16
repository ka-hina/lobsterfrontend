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

const NotificationContent = () => {
  return (

    <div className="col-lg-4" id="notification" >

      <div className="title">
        <h5>Alertes/ Notifications</h5>
      </div>

      <div className="span4" id="row-notification">
        <h3 className=""><a href="#">Notification</a></h3>
        <p className="smallTextNotification">04 April, 2021 | 04:00 PM</p>
      </div>

      <div className="span4" id="row-notification">
        <h3 className=""><a href="#">Notification</a></h3>
        <p className="smallTextNotification">04 April, 2021 | 04:00 PM</p>
      </div>

      <div className="span4" id="row-notification">
        <h3 className=""><a href="#">Notification</a></h3>
        <p className="smallTextNotification">04 April, 2021 | 04:00 PM</p>
      </div>

      <div className="span4" id="row-notification">
        <h3 className=""><a href="#">Notification</a></h3>
        <p className="smallTextNotification">04 April, 2021 | 04:00 PM</p>
      </div>

      <div className="footNotification">
        <p>Voir plus</p>
      </div>

    </div>

  );
};

const SecondRow = () => {
  return (
    <div className="page-content p-2" id="content">
      <div className="row">
        <div className="col-lg-8">
          <SigmaContainer className="containerSigma" style={{ height: "500px", width: "100%", border: "0.5px solid #aaa", margin: "0" }}>
            <LoadGraph />
          </SigmaContainer>
        </div>
        <NotificationContent />
      </div>
    </div>
  );
};

export default SecondRow;
