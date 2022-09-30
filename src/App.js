import React from "react";
import { Route, Routes } from "react-router";
import { HomeView } from "./views/HomeView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
    </Routes>
  );
}

export default App;
