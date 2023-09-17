import { Container, Wrapper, Title, Description, ContactForm, ContactTitle, ContactInput, ContactInputMessage, ContactSendButton } from './ContactMeStyledComponent';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';


const ContactMe = () => {

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
        <Container id="ContactMe">

        </Container>
    );
}

export default ContactMe;