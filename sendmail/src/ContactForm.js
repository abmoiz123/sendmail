import React, { useState } from "react";
// import axios from 'axios'

const ContactForm = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        console.log(details)
        // axios.post('https://sendmail.atriom.co.uk/insert.php', details)
        //     .then(res => console.log(res.data))
        // axios.post('http://localhost:5000/Server.js', details)
        //     .then(res => console.log(res.data))
        let response = await fetch("/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        const result = await response.json();
        if(result.status === 422 || !result) {
            window.alert("invalid")
            console.log("invalid")
        }else {
            window.alert("valid")
            console.log("valid")
        }
        alert(result.status);
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" required />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" required />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea id="message" required />
            </div>
            <button type="submit">{status}</button>
        </form>
    );
};

export default ContactForm;