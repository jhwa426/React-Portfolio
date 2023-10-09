import './Navbar.css';
import React, { useState } from "react";
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { GiLaptop } from 'react-icons/gi';
import { PiProjectorScreenChartBold } from 'react-icons/pi';
import { IoSchoolSharp } from 'react-icons/io5';
import { AiOutlineMessage } from 'react-icons/ai';
import { Link } from 'react-scroll';


const Navbar = () => {

    const [activeNavbar, setActiveNavbar] = useState("#Home");

    const handleSetActive = (to) => {
        setActiveNavbar(to);
    };

    return (
        <nav>
            <Link
                to="Home"
                spy={true}
                smooth={true}
                duration={100}
                offset={-70}
                onClick={() => handleSetActive("Home")}
                className={activeNavbar === "" ? "active" : ""}
            >
                <AiOutlineHome />
            </Link>

            <Link
                to="AboutMe"
                spy={true}
                smooth={true}
                duration={100}
                offset={-70}
                onClick={() => handleSetActive("AboutMe")}
                className={activeNavbar === "AboutMe" ? "active" : ""}
            >
                <AiOutlineUser />
            </Link>

            <Link
                to="Skills"
                spy={true}
                smooth={true}
                duration={100}
                offset={-70}
                onClick={() => handleSetActive("Skills")}
                className={activeNavbar === "Skills" ? "active" : ""}
            >
                <GiLaptop />
            </Link>

            <Link
                to="Projects"
                spy={true}
                smooth={true}
                duration={100}
                offset={-70}
                onClick={() => handleSetActive("Projects")}
                className={activeNavbar === "Projects" ? "active" : ""}
            >
                <PiProjectorScreenChartBold />
            </Link>

            <Link
                to="Education"
                spy={true}
                smooth={true}
                duration={100}
                offset={-70}
                onClick={() => handleSetActive("Education")}
                className={activeNavbar === "Education" ? "active" : ""}
            >
                <IoSchoolSharp />
            </Link>

            <Link
                to="ContactMe"
                spy={true}
                smooth={true}
                duration={100}
                offset={-70}
                onClick={() => handleSetActive("ContactMe")}
                className={activeNavbar === "ContactMe" ? "active" : ""}
            >
                <AiOutlineMessage />
            </Link>
        </nav >
    );
}

export default Navbar;