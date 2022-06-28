import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import Graph from "graphology";
import { SigmaContainer, useLoadGraph } from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function makeRandomColor() {
  var c = "";
  while (c.length < 7) {
    c += Math.random().toString(16).substr(-6).substr(-1);
  }
  return "#" + c;
}

const LoadGraph = () => {
  const loadGraph = useLoadGraph();

  var nodeData = useSelector((state) => state.nodesReducer); // Data get by redux

  useEffect(() => {
    const graph = new Graph();

    for (const key of Object.keys(nodeData)) {
      graph.addNode(`${nodeData[key].actorName}`, {
        x: getRandomInt(10),
        y: getRandomInt(10),
        size: 20,
        label: `${nodeData[key].actorName}`,
        color: makeRandomColor(),
      });
    }

    // graph.addEdge("first", "sec");

    loadGraph(graph);
  }, [loadGraph, nodeData]);

  return null;
};

const NotificationContent = () => {
  return (
    <div className="col-lg-4" id="notification">
      <div className="title">
        <h5>Alertes/Notifications</h5>
      </div>

      <div className="span4" id="row-notification">
        <h3 className="">
          <a href="#">Notification</a>
        </h3>
        <p className="smallTextNotification">04 April, 2021 | 04:00 PM</p>
      </div>

      <div className="span4" id="row-notification">
        <h3 className="">
          <a href="#">Notification</a>
        </h3>
        <p className="smallTextNotification">04 April, 2021 | 04:00 PM</p>
      </div>

      <div className="span4" id="row-notification">
        <h3 className="">
          <a href="#">Notification</a>
        </h3>
        <p className="smallTextNotification">04 April, 2021 | 04:00 PM</p>
      </div>

      <div className="span4" id="row-notification">
        <h3 className="">
          <a href="#">Notification</a>
        </h3>
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
          <SigmaContainer
            className="containerSigma"
            style={{
              height: "500px",
              width: "100%",
              border: "0.5px solid #aaa",
              margin: "0",
            }}
          >
            <LoadGraph />
          </SigmaContainer>
        </div>
        <NotificationContent />
      </div>
    </div>
  );
};

export default SecondRow;
