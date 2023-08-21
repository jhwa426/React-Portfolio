import { Link } from 'react-router-dom';
// import LogoTitle from '../../assets/images/logo-s.png';
import LogoJ from '../../assets/images/letter-j.png';

import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders'

import Logo from './Logo';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ["e", "f", "f", " ", "H", "w", "a", "n", "g"];
    const jobArray = ["W", "e", "b", " ", "d", "e", "v", "e", "l", "o", "p", "e", "r"];


    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, []);


    return (
        <div>
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>e</span>
                        <span className={`${letterClass} _12`}>l</span>
                        <span className={`${letterClass} _12`}>l</span>
                        <span className={`${letterClass} _12`}>o</span>
                        <span className={`${letterClass} _12`}>,</span>

                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>

                        <img src={LogoJ} alt='developer' />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15}
                        />
                        <br />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={22}
                        />
                    </h1>
                    <h2>Kia ora, welcome to my website! I'm an undergraduate student at the University of Auckland. You can find me on Linkedin or email me.</h2>
                    <h3>Student / Frontend Developer</h3>
                    <Link to="/contact" className='flat-button'> CONTACT ME </Link>
                </div>
                <Logo />
            </div>
            <Loader type='pacman' />
        </div>
    );
}

export default Home;