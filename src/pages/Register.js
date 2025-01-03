import React, { useState } from "react";
import api from "../api/api";

function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        companyName: "",
        age: "",
        dob: "",
        image: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value);
        });

        try {
            await api.post("/register", data);
            alert("Registration Successful");
            window.location.href = "/";
        } catch (error) {
            console.error(error);
            alert("Registration Failed");
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <input type="text" name="companyName" placeholder="Company Name" onChange={handleChange} />
                <input type="number" name="age" placeholder="Age" onChange={handleChange} />
                <input type="date" name="dob" placeholder="Date of Birth" onChange={handleChange} />
                <input type="file" name="image" accept="image/*" onChange={handleChange} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
