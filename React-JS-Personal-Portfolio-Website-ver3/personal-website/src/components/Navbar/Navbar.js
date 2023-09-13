import React, { useState } from "react";
import { useTheme } from "styled-components";
import { Link as LinkR } from 'react-router-dom';
import { GiLaptop } from 'react-icons/gi';
import { FaBars } from 'react-icons/fa';
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import { personal_info } from '../../data/index';


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
                    <NavLink href="#aboutMe">About</NavLink> {/* href="#aboutMe" === <div id="aboutMe"> */}
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#education">Education</NavLink>
                    <NavLink href="#contactMe">Contact</NavLink>
                </NavItems>
                <ButtonContainer>
                    <GitHubButton href={personal_info.github} target="_blank">Github</GitHubButton>
                </ButtonContainer>
            </NavbarContainer>
            {
                isOpen && (
                    <MobileMenu isOpen={isOpen}>
                        <MobileLink
                            href="#aboutMe"
                            onClick={() => {
                                setIsOpen(!isOpen)
                            }}
                        >
                            About
                        </MobileLink>
                        <MobileLink
                            href='#skills'
                            onClick={() => {
                                setIsOpen(!isOpen)
                            }}
                        >
                            Skills
                        </MobileLink>
                        <MobileLink
                            href='#projects'
                            onClick={() => {
                                setIsOpen(!isOpen)
                            }}
                        >
                            Projects
                        </MobileLink>
                        <MobileLink
                            href='#education' onClick={() => {
                                setIsOpen(!isOpen)
                            }}
                        >
                            Education
                        </MobileLink>
                        <MobileLink
                            href='#contactMe'
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