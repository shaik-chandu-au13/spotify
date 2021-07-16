import React from "react";

import Routes from "./routes";
import StoreProvider from "./store";

function App() {
  return (
    <StoreProvider>
      <div className="app-container">
        <Routes />
      </div>
    </StoreProvider>
  );
}

export default App;
