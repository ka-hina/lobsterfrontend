import React from "react";

import LeftNav from "../components/home/leftNav";
import FirstRow from "../components/home/firstRow"
import SecondRow from "../components/home/secondRow";
import NavBar from "../components/home/navbar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <LeftNav />
      <FirstRow />
      <SecondRow />

    </div>
  );
};

export default Home;
