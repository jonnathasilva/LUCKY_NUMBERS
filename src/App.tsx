import React from "react";
import { APIProvider } from "./context/APIContext";
import Home from "./pages/Home";

function App() {
  return (
    <APIProvider>
      <Home />
    </APIProvider>
  );
}

export default App;
