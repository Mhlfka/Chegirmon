import React from "react";
import Header from "./components/header";
import Navbar from "./components/navbar";
// import Sozlamalar from "./components/sozlamalar";
// import Karusel from "./components/karusel";
// import Kategoriyalar from "./components/kategoriyalar";
import BizHaqimizda from "./components/bizHaqimizda";

function App() {
  return (
    <div>
      <Header />
      {/* <Sozlamalar /> */}
      {/* <Karusel />
      <Kategoriyalar />*/}
      <BizHaqimizda /> 
      <Navbar />
    </div>
  );
}

export default App;
