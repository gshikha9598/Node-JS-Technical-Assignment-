import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifyOtp from "./pages/VerifyOtp";
import ThankYou from "./pages/ThankYou";
import Header from "./components/Header"; // Import the Header component
import "./styles/global.css";

function App() {
    return (
        <Router>
            <Header /> {/* Add the Header component */}
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/verify-otp" element={<VerifyOtp />} />
                <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
        </Router>
    );
}

export default App;
