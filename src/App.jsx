import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

function App({ toggleTheme }) {
  return (
    <Router>
      <Header toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Future routes can be added here */}
      </Routes>
    </Router>
  );
}

export default App;
