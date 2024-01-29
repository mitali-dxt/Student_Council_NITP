import React, { useState } from 'react';

const ComplaintForm = () => {
    const [complaint, setComplaint] = useState({
        name: '',
        email: '',
        message: ''
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
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" onChange={handleChange} />
            </label>
            <label>
                Email:
                <input type="email" name="email" onChange={handleChange} />
            </label>
            <label>
                Complaint:
                <textarea name="message" onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
};

export default ComplaintForm;