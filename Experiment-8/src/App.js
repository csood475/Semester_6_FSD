import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPortal from "./components/AuthPortal";
import AnalyticsHub from "./components/AnalyticsHub";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPortal />} />
        <Route path="/hub" element={<AnalyticsHub />} />
      </Routes>
    </Router>
  );
}

export default App;