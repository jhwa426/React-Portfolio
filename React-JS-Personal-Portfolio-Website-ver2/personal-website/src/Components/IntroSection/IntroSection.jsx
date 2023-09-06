import './IntroSection.css';
import { Link } from 'react-scroll';

const IntroSection = () => {
    return (
        <section id="IntroSection" className='intro--section'>
            <div className='intro--section-content-box'>
                <div className='intro--section-content'>
                    <p className='section--title'>Hello, I'm Jeff</p>
                    <h1 className='intro--section--title'>
                        <span className='intro--section-title--color'>Software Developer</span> {" "}
                        <br />
                        {/* Developer */}
                    </h1>
                    <p className='intro--section-description'>
                        Undergraduate Student / Frontend Developer
                        <br />
                    </p>
                </div>
                <Link to="ContactMe">
                    <button className='btn btn-primary'>Get In Touch</button>
                </Link>

            </div>
            <div className='intro--section--img'>
                <img src='./img/intro_img.JPG' alt='logo-img' />
            </div>
        </section>
    );
}

export default IntroSection;