import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllHours from "./Components/AllHours";
import Timer from "./Components/Timer";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Timer />} />
        <Route exact path="/allHours" element={<AllHours />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
