import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { Provider as TokenProvider } from "./Content/Authentication";
import { Provider as UsersProvider } from "./Content/UsersContent";
import { Provider as VideosProvider } from "./Content/Videos";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TokenProvider>
        <VideosProvider>
          <UsersProvider>
            <App />
          </UsersProvider>
        </VideosProvider>
      </TokenProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
