import React from "react";
import "./App.css";
import AuthenticatedApp from "./AuthenticatedApp";

import { Context } from "./Content/Authentication";
import UnauthenticatedApp from "./UnauthenticatedApp";

function App() {
  const { token } = React.useContext(Context);

  {
    if (token) {
      return <AuthenticatedApp />;
    } else {
      return <UnauthenticatedApp />;
    }
  }
}

export default App;
