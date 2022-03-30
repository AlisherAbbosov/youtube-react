import React from "react";
import LeftComponent from "./Components/LeftComponent/LeftComponent";
import Navbar from "./Components/Navbar/Navbar";

const AuthenticatedApp = () => {
  return (
    <div className="container">
      <Navbar />
      <LeftComponent />
    </div>
  );
};

export default AuthenticatedApp;
