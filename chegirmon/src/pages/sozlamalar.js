import React from "react";
import Header from "../components/header";
import Navbar from "../components/navbar";
import SozlamalarComponent from "../components/sozlamalar";


const Sozlamalar = () => {
  return (
    <div>
      <Header />
      <SozlamalarComponent />
      <Navbar />
    </div>
  );
};

export default Sozlamalar;