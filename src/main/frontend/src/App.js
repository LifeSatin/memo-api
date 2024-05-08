import { Route, Routes } from "react-router-dom";
import BoardList from "./routes/BoardList";
import React from "react";
import BoardDetail from "./routes/BoardDetail";
import BoardWrite from "./routes/BoardWrite"
import BoardUpdate from "./routes/BoardUpdate";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BoardList/>}/>
      <Route path="/:id" element={<BoardDetail/>}/>
      <Route path="/update/:id" element={<BoardUpdate/>}/>
      <Route path="/write" element={<BoardWrite/>}/>
    </Routes>
  );
};

export default App;
