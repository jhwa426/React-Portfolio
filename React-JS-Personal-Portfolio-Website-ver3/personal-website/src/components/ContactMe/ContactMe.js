import { Container, Wrapper, Title, Description, ContactForm, ContactTitle, ContactInput, ContactInputMessage, ContactSendButton } from './ContactMeStyledComponent';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';

const ContactMe = () => {

    //hooks
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
            // .then(
            //     () => {
            //         alert('Message successfully sent!')
            //         window.location.reload(false)
            //     },
            //     () => {
            //         alert('Failed to send the message, please try again')
            //     }
            // )

            .then(
                (result) => {
                    setOpen(true);
                    refForm.current.reset();
                },
                (error) => {
                    console.log(error.text);
                    alert('Failed to send the message, please try again')
                }
            );
    }


    return (
        <Container id="ContactMe">
            <Wrapper>
                <Title>Contact Me</Title>
                <Description>Flick me a quick message :)</Description>
                <ContactForm ref={refForm} onSubmit={sendEmail}>
                    <ContactTitle>Get In Touch 🚀</ContactTitle>
                    <ContactInput
                        name="user_name"
                        placeholder="Your Name"
                        required
                    />
                    <ContactInput
                        name="user_email"
                        placeholder="Your Email"
                        required
                    />
                    <ContactInput
                        name="contact_number"
                        placeholder="Your Contact Number"
                        required
                    />
                    <ContactInputMessage
                        placeholder="Leave your message"
                        rows="8"
                        name="message"
                        required
                    />
                    <ContactSendButton type="submit" value="Send" />
                </ContactForm>

                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={() => setOpen(false)}
                    message="Message successfully sent!"
                    severity="success"
                />

            </Wrapper>
        </Container>
    );
}

export default ContactMe;