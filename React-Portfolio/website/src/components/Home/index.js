import { Link } from 'react-router-dom';
// import LogoTitle from '../../assets/images/logo-s.png';
import LogoTitle from '../../assets/images/letter-j.png';

import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';

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

                    <img src={LogoTitle} alt='developer' />
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
                <h2>Student / Frontend Developer</h2>
                <Link to="/contact" className='flat-button'> CONTACT ME </Link>
            </div>
        </div>
    );
}

export default Home;