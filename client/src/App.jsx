import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import SignIn from "./pages/SignIn.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<Landing />} />
        
        {/* Sign In Page */}
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}
