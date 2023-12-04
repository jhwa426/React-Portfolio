import './AboutMe.css';

const AboutMe = () => {
    return (
        <section id="AboutMe" className="about--section">
            <div className="about--section--img">
                <img src="./img/jeff.png" alt="AboutMe" />

            </div>
            <div className="intro--section--content--box about--section--box">
                <div className="intro--section--content">
                    <p className="section--title">About</p>
                    <h1 className="skills--section-heading">About Me</h1>

                    <p className="intro--section--description">Kia ora, welcome to my website! I recently graduated with a Bachelor of Science in IT Management and Software Development module from the <a href="https://www.auckland.ac.nz/" target="_blank" rel="noopener noreferrer">University of Auckland</a>.</p>
                    <p className="intro--section--description">I am a highly motivated and organised individual who demonstrates the characteristics of independent and critical thinking through my university and work.</p>
                    <p className="intro--section--description">With strong attention to detail, I consistently meet personal and professional goals on time and to excellent criteria.</p>
                    <br />
                    <p className="intro--section--description">You can find me on <a href="https://www.linkedin.com/in/jeffhwa411/" target="_blank" rel="noopener noreferrer">Linkedin </a> or <a href="mailto:jeffhwa411@gmail.com" target="_blank" rel="noopener noreferrer">email me.</a></p>
                </div>
            </div>
        </section>
    );
}


export default AboutMe;