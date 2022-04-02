import React from "react";

const Context = React.createContext(null);

function Provider({ children }) {
  const [menu, setMenu] = React.useState(true);

  return (
    <Context.Provider value={{ menu, setMenu }}>{children}</Context.Provider>
  );
}

export { Context, Provider };
