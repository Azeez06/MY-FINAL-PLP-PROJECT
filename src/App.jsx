import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ResumeBuilder from "./pages/ResumeBuilder";
import CoverLetterBuilder from "./pages/CoverLetterBuilder";
import SOPBuilder from "./pages/SOPBuilder";
import JobAlerts from "./pages/JobAlerts";
import PortfolioBuilder from "./pages/PortfolioBuilder";
import  Settings  from "./pages/Settings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ResumeBuilder" element={<ResumeBuilder />} />
        <Route path="/CoverLetterBuilder" element={<CoverLetterBuilder />} />
        <Route path="/SOPBuilder" element={<SOPBuilder />} />
        <Route path="/JobAlerts" element={<JobAlerts />} />
        <Route path="/PortfolioBuilder" element={<PortfolioBuilder />} />
        <Route path="/Settings" element={<Settings />} />

      </Routes>
    </Router>
  );
}

export default App;
