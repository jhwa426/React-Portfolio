import React from 'react';

import { Link, NavLink } from 'react-router-dom';
import './index.scss';

// import LogoJ from '../../assets/images/letter-j.png';
// import LogoSubtitle from '../../assets/images/Jeff_Hwang.png';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={require('../../assets/images/letter-j.png')} alt='Logo' />
                {/* <img scr={LogoJ} alt='Logo' /> */}
                {/* <img className="sub-logo" scr={LogoSubtitle} alt='slobodan' /> */}
                <img src={require('../../assets/images/Jeff_Hwang.png')} className="sub-logo" alt='LogoSubtitle' />
            </Link>

            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>

                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>

                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>

            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/jeffhwa411/'>
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com/jhwa426?tab=repositories'>
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.facebook.com/wodud6359'>
                        <FontAwesomeIcon icon={faFacebook} color='#4d4d4e' />
                    </a>
                </li>
            </ul>

        </div>
    );

}

export default Sidebar;