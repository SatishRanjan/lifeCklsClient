import React, { useState } from 'react';
import "../styles/RegistrationForm.css"
import logo from "../images/lifeCkls_Logo1.png"

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        email: '',
        country: '',
        state: '',
        phoneNumber: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        console.log('Form submitted:', formData);

        // Replace the URL with your localhost API endpoint
        const apiUrl = "http://localhost:8001/v1/user/register";

        const res = await fetch(apiUrl, {
            method: "PUT",
            body: JSON.stringify(formData), // Use formData instead of state
            //credentials: "include",
            headers: {
                "content-type": "application/json",
            },
        });

        console.log(`form data = ${JSON.stringify(formData)}`)

        if (res.ok) {           
            console.log(await res.json());
            console.log(`${formData.firstName} registered.  You will now need to log in.`)            
        } else {
            const err = await res.json();
            console.log(err)
            //setError(err.error);
        }
    };

    return (
        <div>            
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />

                    {/* Repeat similar structure for other fields */}
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />

                    <label htmlFor="age">Age:</label>
                    <input
                        type="text"
                        id="age"
                        value={formData.age}
                        onChange={handleChange}
                    />

                    <label htmlFor="gender">Gender:</label>
                    <input
                        type="text"
                        id="gender"
                        value={formData.gender}
                        onChange={handleChange}
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <label htmlFor="country">Country:</label>
                    <input
                        type="text"
                        id="country"
                        value={formData.country}
                        onChange={handleChange}
                    />

                    <label htmlFor="state">State:</label>
                    <input
                        type="text"
                        id="state"
                        value={formData.state}
                        onChange={handleChange}
                    />

                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit">Register</button>

            </form>
        </div>
    );
};

export default RegistrationForm;
