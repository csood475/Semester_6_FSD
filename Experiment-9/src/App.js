import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPortal from "./components/LoginPortal";
import UserWorkspace from "./components/UserWorkspace";
import AdminWorkspace from "./components/AdminWorkspace";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPortal />} />
        <Route path="/workspace/user" element={<UserWorkspace />} />
        <Route path="/workspace/admin" element={<AdminWorkspace />} />
      </Routes>
    </Router>
  );
}

export default App;