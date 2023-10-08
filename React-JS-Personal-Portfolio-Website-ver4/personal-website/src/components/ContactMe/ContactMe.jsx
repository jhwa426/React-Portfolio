import './ContactMe.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { Snackbar } from '@mui/material';

const ContactMe = () => {

    //hooks for Snackbar
    const [open, setOpen] = useState(false);

    // Email JS API
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
                (result) => {
                    setOpen(true);
                    refForm.current.reset();
                },
                (error) => {
                    alert('Failed to send the message, please try again')
                }
            );
    }

    return (
        <div id="ContactMe">
            <h2 className="contactMe__title">Contact Me</h2>

            <div className="container contactMe__container">
                <div className="contactMe__options">
                    <article className="contactMe__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>jeffhwa411@gmail.com</h5>
                        <a href="mailto:jeffhwa411@gmail.com" target="_blank" rel="noreferrer" >Send a Message</a>
                    </article>

                    <article className="contactMe__option">
                        <RiMessengerLine className="contact__option-icon" />
                        <h4>Messenger</h4>
                        <h5>Facebook - Jeff Hwang</h5>
                        <a href="https://m.me/facebook.wodud6359" target="_blank" rel="noreferrer">Send a Message</a>
                    </article>

                    <article className="contactMe__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>WhatsApp</h4>
                        <h5>+64 🇳🇿 2102252350</h5>
                        <a href="https://api.whatsapp.com/send/?phone=642102252350&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">Send a Message</a>
                    </article>
                </div>

                <form ref={refForm} onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        required
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        required
                    />
                    <input
                        type="text"
                        name="contact_number"
                        placeholder="Your Contact Number"
                        required
                    />
                    <textarea
                        name="message"
                        rows="7"
                        placeholder="Leave your message"
                        required
                    />
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>


                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={() => setOpen(false)}
                    message="Message successfully sent!"
                    severity="success"
                />

            </div>
        </div>
    );
}

export default ContactMe;