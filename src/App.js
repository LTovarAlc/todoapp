import "./reset.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Dashboard from "./pages/dashboard/dashboard";
import Calendar from "./pages/calendar/calendard";

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Calendar" element={<Calendar/>}/>
      </Routes>
    </Router>
  )
}

export default App;
