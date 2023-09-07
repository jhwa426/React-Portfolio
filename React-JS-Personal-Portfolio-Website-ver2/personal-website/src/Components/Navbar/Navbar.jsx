import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {

    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    };

    const closeMenu = () => {
        setNavActive(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                return closeMenu;
            }
        }
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1200) {
            return closeMenu;
        }
    }, []);


    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div>
                <Link
                    to="IntroSection"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <button className="home-button">
                        <img className="logo--img" src='./img/Jeff_Hwang_logo.PNG' alt="jeff_hwang logo" /> {/* style={{ width: 200, height: 45 }} /> */}
                    </button>
                </Link>
            </div>

            <a
                className={`nav__hamburger ${navActive ? "active" : ""}`}
                onClick={toggleNav}
            >
                <span className='nav__hamburger__line'></span>
                <span className='nav__hamburger__line'></span>
                <span className='nav__hamburger__line'></span>
            </a>

            <div className={`navbar--items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="IntroSection" //it has to match with section ID
                            className="navbar--content"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="AboutMe"
                            className="navbar--content"
                        >
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="MySkills"
                            className="navbar--content"
                        >
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="MyPortfolio"
                            className="navbar--content"
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="Education"
                            className="navbar--content"
                        >
                            Education
                        </Link>
                    </li>
                </ul>
            </div>

            <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="ContactMe"
                className="btn btn-outline-primary"
            >
                Contact Me
            </Link>
        </nav>
    );
}

export default Navbar;