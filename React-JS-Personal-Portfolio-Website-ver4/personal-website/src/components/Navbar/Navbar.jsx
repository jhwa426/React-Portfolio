import './Navbar.css';
import React, { useState } from "react";
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { GiLaptop } from 'react-icons/gi';
import { GoProjectSymlink } from 'react-icons/go';
import { BiBook } from 'react-icons/bi';
import { BiMessageSquareDetail } from 'react-icons/bi';

const Navbar = () => {

    const [activeNavbar, setActiveNavbar] = useState("#Home");

    return (
        <nav>
            <a
                href="#Home"
                onClick={() => setActiveNavbar("#Home")}
                className={activeNavbar === "Home" ? "active" : ""}
            >
                <AiOutlineHome />
            </a>

            <a
                href="#AboutMe"
                onClick={() => setActiveNavbar("#AboutMe")}
                className={activeNavbar === "AboutMe" ? "active" : ""}
            >
                <AiOutlineUser />
            </a>

            <a
                href="#Skills"
                onClick={() => setActiveNavbar("#Skills")}
                className={activeNavbar === "Skills" ? "active" : ""}
            >
                <GiLaptop />
            </a>

            <a
                href="#Projects"
                onClick={() => setActiveNavbar("#Projects")}
                className={activeNavbar === "Projects" ? "active" : ""}
            >
                <GoProjectSymlink />
            </a>

            <a
                href="#Education"
                onClick={() => setActiveNavbar("#Education")}
                className={activeNavbar === "Education" ? "active" : ""}
            >
                <BiBook />
            </a>

            <a
                href="#ContactMe"
                onClick={() => setActiveNavbar("#ContactMe")}
                className={activeNavbar === "ContactMe" ? "active" : ""}
            >
                <BiMessageSquareDetail />
            </a>

        </nav >
    );
}

export default Navbar;