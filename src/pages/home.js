import React from "react";
import LeftNav from "../components/home/leftNav";
import FirstRow from "../components/home/firstRow"
import SecondRow from "../components/home/secondRow";
import FourthRow from "../components/home/fourthRow";
import FifthRow from "../components/home/fifthRow";
import NavBar from "../components/home/navbar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <LeftNav />
      <FirstRow />
      <FifthRow />
      <FourthRow />
      <SecondRow />

    </div>
  );
};

export default Home;
