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
                    <p className="intro--section--description">This is a description section for About Me</p>
                </div>
            </div>
        </section>
    );
}


export default AboutMe;