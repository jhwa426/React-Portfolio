import './Navbar.css';
import React, { useState } from "react";
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { GiLaptop } from 'react-icons/gi';
import { GoProjectSymlink } from 'react-icons/go';
import { BiBook } from 'react-icons/bi';
import { BiMessageSquareDetail } from 'react-icons/bi';
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
                <GoProjectSymlink />
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
                <BiBook />
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
                <BiMessageSquareDetail />
            </Link>

            {/* <a
                href="#Home"
                onClick={() => setActiveNavbar("#Home")}
                className={activeNavbar === "#Home" ? "active" : ""}
            >
                <AiOutlineHome />
            </a> 

            <a
                href="#AboutMe"
                onClick={() => setActiveNavbar("#AboutMe")}
                className={activeNavbar === "#AboutMe" ? "active" : ""}
            >
                <AiOutlineUser />
            </a>

            <a
                href="#Skills"
                onClick={() => setActiveNavbar("#Skills")}
                className={activeNavbar === "#Skills" ? "active" : ""}
            >
                <GiLaptop />
            </a>

            <a
                href="#Projects"
                onClick={() => setActiveNavbar("#Projects")}
                className={activeNavbar === "#Projects" ? "active" : ""}
            >
                <GoProjectSymlink />
            </a>

            <a
                href="#Education"
                onClick={() => setActiveNavbar("#Education")}
                className={activeNavbar === "#Education" ? "active" : ""}
            >
                <BiBook />
            </a>

            <a
                href="#ContactMe"
                onClick={() => setActiveNavbar("#ContactMe")}
                className={activeNavbar === "#ContactMe" ? "active" : ""}
            >
                <BiMessageSquareDetail />
            </a> */}

        </nav >
    );
}

export default Navbar;