import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./componets/Dashboard";
import ShowTable from "./componets/ShowTable";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/table" element={<ShowTable />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
