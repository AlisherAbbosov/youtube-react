import "./Pages.scss";
import HomePage from "./HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import ChannelPage from "./ChannelPage/ChannelPage";
const Pages = () => {
  return (
    <div className="pages">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/channel/:user_id" element={<ChannelPage />} />
      </Routes>
    </div>
  );
};

export default Pages;
