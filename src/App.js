import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Global Layout Components
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

// Main Pages
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Services from "./components/Pages/Services";
import Courses from "./components/Pages/Courses";
import Faq from "./components/Pages/Faq";
import Aboutschool from "./components/Pages/Aboutschool";
import Aboutstudent from "./components/Pages/Aboutstudent";
import   Cert from './components/Pages/cert';


// Student Portal Pages
import Studentportal from "./components/Pages/Studentportal";
import Messages from "./components/Pages/Messages";
import Calendar from "./components/Pages/Calendar";
import Profile from "./components/Pages/Profile";
import Transcripts from "./components/Pages/Tanscripts";
import Login from "./components/Pages/Login";
import AdminDashboard from "./components/Pages/Admindashbord";
import Signup from "./components/Pages/Signup";
function App() {
  const isAuthenticated = localStorage.getItem("auth");

  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/aboutschool" element={<Aboutschool />} />
        <Route path="/courses" element={<Courses />} />
        < Route path="/cert" element={<Cert />} />
        <Route path="/aboutstudent" element={<Aboutstudent />} />
        <Route path="/login" element={<Login />} />
     
          
        {/* Protected Portal Pages */}
        <Route
          path="/studentportal"
          element={isAuthenticated ? <Studentportal /> : <Navigate to="/login" />}
        />
        <Route
          path="/messages"
          element={isAuthenticated ? <Messages /> : <Navigate to="/login" />}
        />
        <Route
          path="/calendar"
          element={isAuthenticated ? <Calendar /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
        />
        <Route
          path="/transcripts"
          element={isAuthenticated ? <Transcripts /> : <Navigate to="/login" />}
        />
        <Route
          path="/Admindashbord"
          element={isAuthenticated ? <AdminDashboard /> : <Navigate to="/login" />}
        />
 
          <Route
          path="/signup"
          element={isAuthenticated ? <Signup /> : <Navigate to="/Signup" />}
        />

        

      </Routes>

      <Footer />

      
    </Router>
    
  );
}

export default App;
