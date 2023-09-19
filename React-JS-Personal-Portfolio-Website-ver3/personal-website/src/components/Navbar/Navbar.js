import React, { useState } from "react";
import { useTheme } from "styled-components";
import { GiLaptop } from 'react-icons/gi';
import { FaBars } from 'react-icons/fa';
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'
import { personal_info } from '../../data/index';
// import { Link as LinkR } from 'react-router-dom';


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme();

    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    <a
                        style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}
                    >
                        <Span>Jeff Hwang</Span> <GiLaptop size="2rem" />
                    </a>
                </NavLogo>
                <MobileIcon>
                    <FaBars
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                    />
                </MobileIcon>
                <NavItems>
                    <NavLink href="#Home">Home</NavLink>
                    <NavLink href="#AboutMe">About</NavLink> {/* href="#AboutMe" === <div id="AboutMe"> */}
                    <NavLink href="#Skills">Skills</NavLink>
                    <NavLink href="#Projects">Projects</NavLink>
                    <NavLink href="#Education">Education</NavLink>
                    <NavLink href="#ContactMe">Contact</NavLink>
                </NavItems>
                <ButtonContainer>
                    <GitHubButton
                        href={personal_info.github}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github
                    </GitHubButton>
                </ButtonContainer>
            </NavbarContainer>
            {
                isOpen && (
                    <MobileMenu isOpen={isOpen}>
                        <MobileLink
                            href="#Home"
                            onClick={() => {
                                setIsOpen(!isOpen)
                            }}
                        >
                            Home
                        </MobileLink>
                        <MobileLink
                            href="#AboutMe"
                            onClick={() => {
                                setIsOpen(!isOpen)
                            }}
                        >
                            About
                        </MobileLink>
                        <MobileLink
                            href='#Skills'
                            onClick={() => {
                                setIsOpen(!isOpen)
                            }}
                        >
                            Skills
                        </MobileLink>
                        <MobileLink
                            href='#Projects'
                            onClick={() => {
                                setIsOpen(!isOpen)
                            }}
                        >
                            Projects
                        </MobileLink>
                        <MobileLink
                            href='#Education' onClick={() => {
                                setIsOpen(!isOpen)
                            }}
                        >
                            Education
                        </MobileLink>
                        <MobileLink
                            href='#ContactMe'
                            onClick={() => {
                                setIsOpen(!isOpen)
                            }}
                            style={{ paddingBottom: '5px' }}
                        >
                            Contact
                        </MobileLink>

                        {/* <br /> */}
                        <GitHubButton
                            style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }}
                            href={personal_info.github}
                            target="_blank"
                        >
                            Github
                        </GitHubButton>
                    </MobileMenu>
                )}
        </Nav>
    );
}


export default Navbar;