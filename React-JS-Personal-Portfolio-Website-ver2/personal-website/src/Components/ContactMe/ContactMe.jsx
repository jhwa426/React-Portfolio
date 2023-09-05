import './ContactMe.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const ContactMe = () => {
    const refForm = useRef();

    const sendEmail = (event) => {
        event.preventDefault()

        emailjs
            .sendForm(
                process.env.REACT_APP_serviceID,
                process.env.REACT_APP_templateID,
                refForm.current,
                process.env.REACT_APP_publicKey
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return (
        <section id="ContactMe" className="contact--section">
            <div>
                <p className="sub--title">Get In Touch</p>
                <h2>Contact Me</h2>
                <p className="text-lg">Flick me a quick message :)</p>
            </div>
            <form ref={refForm} onSubmit={sendEmail} className="contact--form--container">
                <div className="container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-md">First Name</span>
                        <input
                            type="text"
                            className="contact--input text-md"
                            name="user_name"
                            id="first-name"
                            required
                        />
                    </label>
                    <label htmlFor="last-name" className="contact--label">
                        <span className="text-md">Last Name</span>
                        <input
                            type="text"
                            className="contact--input text-md"
                            name="user_name"
                            id="last-name"
                            required
                        />
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">Email</span>
                        <input
                            type="text"
                            className="contact--input text-md"
                            name="user_email"
                            id="email"
                            required
                        />
                    </label>
                    <label htmlFor="contact-number" className="contact--label">
                        <span className="text-md">Contact Number</span>
                        <input
                            type="text"
                            className="contact--input text-md"
                            name="contact_number"
                            id="contact-number"
                            required
                        />
                    </label>
                </div>

                <label htmlFor="choose-topic" className="contact--label">
                    <span className="text-md">Choose a topic</span>
                    <select id="choose-topic" className="contact--input text-md">
                        <option>Select one</option>
                        <option>Question</option>
                        <option>Feedback</option>
                    </select>
                </label>
                <label htmlFor="message" className="contact--label">
                    <span className="text-md">message</span>
                    <textarea
                        className="contact--input text-md"
                        id="message"
                        rows="8"
                        placeholder="Leave your message"
                        name="message"
                    />
                </label>

                <label htmlFor="checkbox" className="checkbox--label">
                    <input
                        type="checkbox"
                        name="checkbox"
                        id="checkbox"
                        required />
                    <span className="text-sm">Accept the terms</span>
                </label>

                <div>
                    <button className="btn btn-primary contact--form--btn">Send</button>
                    {/* <input className="btn btn-primary contact--form--btn" type='submit' value="SEND" /> */}
                </div>
            </form>
        </section >
    );
}

export default ContactMe;