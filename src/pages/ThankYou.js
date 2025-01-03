import React from "react";

function ThankYou() {
    return (
        <div>
            <h1>Thank You</h1>
            <p>Welcome, [User's Name]!</p>
            <button onClick={() => alert("Account Deleted!")}>Delete Account</button>
        </div>
    );
}

export default ThankYou;
