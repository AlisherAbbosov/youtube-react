import "./Pages.scss";
import HomePage from "./HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import ChannelPage from "./ChannelPage/ChannelPage";
import VideoPage from "./VideoPage/VideoPage";
const Pages = () => {
  return (
    <div className="pages">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/channel/:user_id" element={<ChannelPage />} />
        <Route path="/video/:video_id" element={<VideoPage />} />
      </Routes>
    </div>
  );
};

export default Pages;
