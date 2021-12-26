import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./componets/Dashboard";
import ShowTable from "./componets/ShowTable";
import EditShow from "./componets/EditShow";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/table" element={<ShowTable />} />
          <Route path="/editshow" element={<EditShow />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
