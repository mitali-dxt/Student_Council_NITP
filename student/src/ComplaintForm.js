import React, { useState } from 'react';
import './ComplaintForm.css';

const ComplaintForm = () => {
    const [complaint, setComplaint] = useState({
        name: '',
        email: '',
        subject: '',
        details: ''
    });

    const handleChange = (e) => {
        setComplaint({
            ...complaint,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(complaint);
        // Here you would send the complaint to your server
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h2>Complaint Form</h2>
                <label>
                    Full Name:
                    <input type="text" name="name" onChange={handleChange} />
                </label>
                <label>
                    Email Address:
                    <input type="email" name="email" onChange={handleChange} />
                </label>
                <label>
                    Subject of Complaint:
                    <input type="text" name="subject" onChange={handleChange} />
                </label>
                <label>
                    Details of Complaint:
                    <textarea name="details" onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ComplaintForm;