import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useState, useEffect } from 'react';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, []);

    return (
        <div>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>

                    <p>I am a highly motivated and organised individual who demonstrates the characteristics of independent and critical thinking through my university and work. </p>
                    <p>With strong attention to detail, I consistently meet personal and professional goals on time and to excellent criteria.</p>
                    <br />
                    <br />
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['S', 'k', 'i', 'l', 'l', 's', " ", "&", " ", "T", "o", "o", "l", "s"]}
                            idx={15}
                        />
                    </h1>
                    <p>Familiar : Python, JAVA (OOP), C# (ASP.NET), HTML/CSS/JavaScript, React.js, Node.js/Express.js, SQL (MSSQL server, SQLite), MongoDB, Git, REST API, Agile Methodology, Data Structures, Algorithms, R for Statistical Computing</p>
                    <br />
                    <p>Tools : Google Colab, Tableau, Microsoft Power BI Business data analytics, MS Project, VS code, Visual Studio</p>

                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faPython} color='#F0F8FF' />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color='##F06529' />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </div>
    );
}


export default About;