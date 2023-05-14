import React from "react";
import LeftNav from "../components/home/leftNav";
import FirstRow from "../components/home/firstRow"
import SecondRow from "../components/home/secondRow";
import ThirdRow from "../components/home/thirdRow";
import NavBar from "../components/home/navbar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <LeftNav />
      <FirstRow />
      <SecondRow />
      <ThirdRow />
    </div>
  );
};

export default Home;
