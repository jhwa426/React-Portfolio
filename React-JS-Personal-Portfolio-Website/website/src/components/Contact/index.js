import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, []);

    const sendEmail = (event) => {
        event.preventDefault()

        emailjs
            .sendForm(
                "service_jzoma5b",
                "template_akawo88",
                refForm.current,
                process.env.publicKey
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
        <div>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
                            idx={15}
                            letterClass={letterClass}
                        />
                    </h1>
                    <h2>
                        Flick me a quick message :)
                    </h2>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='text' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder="subject" type="text" name="subject" />
                                </li>
                                <li>
                                    <textarea placeholder='Leave your message' name="message" required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>

                <div className='info-map'>
                    Jeff Hwang,
                    <br />
                    Auckland, New Zealand <br />
                    <br />
                    <span>jeffhwa411@gmail.com</span>
                </div>

                <div className='map-wrap'>
                    <MapContainer center={[-36.8485, 174.7633]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[-36.8485, 174.7633]}>
                            <Popup>Kia ora, Jeff is here :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>

            </div>
            <Loader type='pacman' />
        </div>
    );
}


export default Contact;