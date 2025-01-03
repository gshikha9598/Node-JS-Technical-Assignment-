import React, { useState } from "react";
import api from "../api/api";

function VerifyOtp() {
    const [otp, setOtp] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post("/verify-otp", { otp });
            alert("OTP Verified");
            window.location.href = "/thank-you";
        } catch (error) {
            console.error(error);
            alert("OTP Verification Failed");
        }
    };

    return (
        <div>
            <h1>Verify OTP</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                />
                <button type="submit">Verify</button>
            </form>
        </div>
    );
}

export default VerifyOtp;
