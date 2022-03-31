import "./Pages.scss";
import HomePage from "./HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
const Pages = () => {
  return (
    <div className="pages">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default Pages;
