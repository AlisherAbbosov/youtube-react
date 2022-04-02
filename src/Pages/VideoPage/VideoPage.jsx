import React from "react";
import { Context } from "../../Content/HasMenu";

const VideoPage = () => {
  const { menu, setMenu } = React.useContext(Context);

  React.useEffect(() => {
    setMenu(!menu);
  }, []);
  return <div>vido</div>;
};

export default VideoPage;
