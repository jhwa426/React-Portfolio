import './AboutMe.css';

const AboutMe = () => {
    return (
        <section id="AboutMe">
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me_img">
                        <img src="../../img/jeff.png" alt="AboutMe_jeff_img" />
                    </div>
                </div>

                <div className="about__content">
                    <div>
                        <p>Kia ora, welcome to my website! I recently graduated with a Bachelor of Science in IT Management and Software Development module from <a href="https://www.auckland.ac.nz/" target="_blank" rel="noopener noreferrer" style={{ color: "cornflowerblue" }} >University of Auckland</a>, New Zealand.</p>
                        <p>I am a highly motivated and organised individual who demonstrates the characteristics of independent and critical thinking through my university and work.</p>
                        <p>With strong attention to detail, I consistently meet personal and professional goals on time and to excellent criteria.</p>
                        <p>You can find me on <a href="https://www.linkedin.com/in/jeffhwa411/" target="_blank" rel="noopener noreferrer" style={{ color: "cornflowerblue" }}>Linkedin </a> or <a href="mailto:jeffhwa411@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: "crimson" }} >email me</a>.</p>
                    </div>

                    <a href="#ContactMe" className="btn btn-primary">Get In Touch</a>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;