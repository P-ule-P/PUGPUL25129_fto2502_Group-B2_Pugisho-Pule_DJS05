import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShowDetail from "./pages/ShowDetail";

/**
 * Root component that defines the routing structure for the app.
 *
 * @returns {JSX.Element} The application with routing setup.
 */
export default function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the homepage displaying all podcasts */}
        <Route path="/" element={<Home />} />

        {/* Route for detailed view of a podcast show based on ID */}
        <Route path="/show/:id" element={<ShowDetail />} />
      </Routes>
    </Router>
  );
}
