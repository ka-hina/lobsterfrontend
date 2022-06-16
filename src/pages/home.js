import React from "react";

import LeftNav from "../components/home/leftNav";
import Content from "../components/home/content";

const Home = () => {
  return (
    <div>
      <h1>Je suis le home</h1>
      <LeftNav />
      <Content />

    </div>
  );
};

/*
<SigmaContainer style={{ height: "500px", width: "500px" }}>
        <LoadGraph />
        
      </SigmaContainer>
      */

export default Home;
