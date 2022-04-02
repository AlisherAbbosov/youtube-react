import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { Provider as TokenProvider } from "./Content/Authentication";
import { Provider as UsersProvider } from "./Content/UsersContent";
import { Provider as VideosProvider } from "./Content/Videos";
import { Provider as MenuProvider } from "./Content/HasMenu";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <VideosProvider>
        <TokenProvider>
          <UsersProvider>
            <MenuProvider>
              <App />
            </MenuProvider>
          </UsersProvider>
        </TokenProvider>
      </VideosProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
