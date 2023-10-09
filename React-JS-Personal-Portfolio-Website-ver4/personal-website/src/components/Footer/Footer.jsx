import './Footer.css';
import { Link } from 'react-scroll';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';

const Footer = () => {
    return (
        <footer>
            <Link
                to="Home"
                spy={true}
                smooth={true}
                duration={100}
                offset={-70}
                className="footer__logo"
            >
                Jeff Hwang 🇰🇷 🇳🇿
            </Link>

            <ul className="footer__lists">
                <li>
                    <Link
                        to="Home"
                        spy={true}
                        smooth={true}
                        duration={100}
                        offset={-70}
                    >
                        Home
                    </Link>
                </li>

                <li>
                    <Link
                        to="AboutMe"
                        spy={true}
                        smooth={true}
                        duration={100}
                        offset={-70}
                    >
                        About
                    </Link>
                </li>

                <li>
                    <Link
                        to="Skills"
                        spy={true}
                        smooth={true}
                        duration={100}
                        offset={-70}
                    >
                        Skills
                    </Link>
                </li>

                <li>
                    <Link
                        to="Projects"
                        spy={true}
                        smooth={true}
                        duration={100}
                        offset={-70}
                    >
                        Projects
                    </Link>
                </li>

                <li>
                    <Link
                        to="Education"
                        spy={true}
                        smooth={true}
                        duration={100}
                        offset={-70}
                    >
                        Education
                    </Link>
                </li>

                <li>
                    <Link
                        to="ContactMe"
                        spy={true}
                        smooth={true}
                        duration={100}
                        offset={-70}
                    >
                        Contact
                    </Link>
                </li>

            </ul>

            <div className="footer__socials">
                <a href="https://github.com/jhwa426" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://jeff-hwang.netlify.app/" target="_blank" rel="noopener noreferrer"><CgWebsite /></a>
                <a href="https://www.linkedin.com/in/jeffhwa411/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
            </div>

            <div className="footer__copyright">
                <small>
                    &copy; 2023 Jeff Hwang
                </small>
            </div>

        </footer>
    );
}

export default Footer;