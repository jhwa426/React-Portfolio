import { Link } from "react-scroll";
import React from "react";
import './Footer.css';

function Footer() {
    return (
        <footer className="footer--container">
            <div className="footer--link--container">
                <div>
                    <img src='./img/Jeff_Hwang_logo.PNG' alt="jeff_hwang logo" style={{ width: 200, height: 45 }} />
                </div>
                <div className="footer--items">
                    <ul>
                        <li>
                            <Link
                                activeClass="navbar--active-content"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                to="IntroSection"
                                className="text-md"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="navbar--active-content"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                to="About Me"
                                className="text-md"
                            >
                                About Me
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="navbar--active-content"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                to="MySkills"
                                className="text-md"
                            >
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="navbar--active-content"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                to="MyPortfolio"
                                className="text-md"
                            >
                                MyPortfolio
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="navbar--active-content"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                to="Education"
                                className="text-md"
                            >
                                Education
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="navbar--active-content"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                to="ContactMe"
                                className="text-md"
                            >
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer--social--icon">
                    <ul>
                        <li>
                            <a
                                href="https://github.com/jhwa426"
                                className="navbar--content"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 18 18"
                                    fill="#000000"
                                >
                                    <path
                                        d="M8 .198a8 8 0 00-2.534 15.602c.4.074.546-.174.546-.386 0-.192-.007-.7-.01-1.377-2.002.364-2.52-.49-2.68-.942-.09-.23-.48-.943-.825-1.135-.28-.15-.678-.52-.007-.527.627-.007 1.07.576 1.22.818.71 1.2 1.84.857 2.285.654.07-.52.28-.86.51-1.06-1.785-.2-3.648-.892-3.648-3.966 0-.88.31-1.6.818-2.16-.08-.2-.36-1.02.08-2.12 0 0 .67-.214 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.52-1.04 2.19-.82 2.19-.82.44 1.1.17 1.92.09 2.12.51.56.81 1.28.81 2.16 0 3.08-1.87 3.76-3.66 3.96.29.25.54.74.54 1.49 0 1.08-.01 1.95-.01 2.21 0 .21.14.46.55.38A8.002 8.002 0 008 .198z"
                                        fillRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/jeffhwa411/"
                                className="navbar--content"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 33 33"
                                    fill="none"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M7.33341 4.65479H26.0001C27.4729 4.65479 28.6667 5.84869 28.6667 7.32145V25.9881C28.6667 27.4609 27.4729 28.6548 26.0001 28.6548H7.33341C5.86065 28.6548 4.66675 27.4609 4.66675 25.9881V7.32145C4.66675 5.84869 5.86065 4.65479 7.33341 4.65479ZM11.3334 24.6548C11.7016 24.6548 12.0001 24.3563 12.0001 23.9881V14.6548C12.0001 14.2867 11.7016 13.9881 11.3334 13.9881H9.33342C8.96523 13.9881 8.66675 14.2867 8.66675 14.6548V23.9881C8.66675 24.3563 8.96523 24.6548 9.33342 24.6548H11.3334ZM10.3334 12.6548C9.22884 12.6548 8.33341 11.7594 8.33341 10.6548C8.33341 9.55021 9.22884 8.65479 10.3334 8.65479C11.438 8.65479 12.3334 9.55021 12.3334 10.6548C12.3334 11.7594 11.438 12.6548 10.3334 12.6548ZM24.0001 24.6548C24.3682 24.6548 24.6667 24.3563 24.6667 23.9881V17.8548C24.7101 15.7359 23.1435 13.9275 21.0401 13.6681C19.5694 13.5338 18.1445 14.2207 17.3334 15.4548V14.6548C17.3334 14.2867 17.0349 13.9881 16.6667 13.9881H14.6667C14.2986 13.9881 14.0001 14.2867 14.0001 14.6548V23.9881C14.0001 24.3563 14.2986 24.6548 14.6667 24.6548H16.6667C17.0349 24.6548 17.3334 24.3563 17.3334 23.9881V18.9881C17.3334 17.8836 18.2289 16.9881 19.3334 16.9881C20.4379 16.9881 21.3334 17.8836 21.3334 18.9881V23.9881C21.3334 24.3563 21.6319 24.6548 22.0001 24.6548H24.0001Z"
                                        fill="black"
                                    />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.facebook.com/wodud6359"
                                className="navbar--content"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 33 33"
                                    fill="none"
                                >
                                    <path
                                        d="M22.6667 8.65479H18.6667C17.9303 8.65479 17.3333 9.25175 17.3333 9.98812V13.9881H22.6667C22.8183 13.9848 22.9621 14.0553 23.0523 14.1773C23.1424 14.2993 23.1677 14.4575 23.12 14.6015L22.1333 17.5348C22.0424 17.804 21.7908 17.986 21.5067 17.9881H17.3333V27.9881C17.3333 28.3563 17.0348 28.6548 16.6667 28.6548H13.3333C12.9651 28.6548 12.6667 28.3563 12.6667 27.9881V17.9881H10.6667C10.2985 17.9881 10 17.6896 10 17.3215V14.6548C10 14.2867 10.2985 13.9881 10.6667 13.9881H12.6667V9.98812C12.6667 7.0426 15.0545 4.65479 18 4.65479H22.6667C23.0348 4.65479 23.3333 4.95327 23.3333 5.32145V7.98812C23.3333 8.35631 23.0348 8.65479 22.6667 8.65479Z"
                                        fill="black"
                                    />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/jeff_hjy/"
                                className="navbar--content"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 33 33"
                                    fill="none"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M22.0001 4.65479H11.3334C7.65152 4.65479 4.66675 7.63956 4.66675 11.3215V21.9881C4.66675 25.67 7.65152 28.6548 11.3334 28.6548H22.0001C25.6819 28.6548 28.6667 25.67 28.6667 21.9881V11.3215C28.6667 7.63956 25.6819 4.65479 22.0001 4.65479ZM26.3334 21.9881C26.3261 24.3783 24.3902 26.3141 22.0001 26.3215H11.3334C8.94321 26.3141 7.0074 24.3783 7.00008 21.9881V11.3215C7.0074 8.93125 8.94321 6.99544 11.3334 6.98812H22.0001C24.3902 6.99544 26.3261 8.93125 26.3334 11.3215V21.9881ZM23.0001 11.6548C23.7365 11.6548 24.3334 11.0578 24.3334 10.3215C24.3334 9.58508 23.7365 8.98812 23.0001 8.98812C22.2637 8.98812 21.6667 9.58508 21.6667 10.3215C21.6667 11.0578 22.2637 11.6548 23.0001 11.6548ZM16.6667 10.6548C13.353 10.6548 10.6667 13.3411 10.6667 16.6548C10.6667 19.9685 13.353 22.6548 16.6667 22.6548C19.9805 22.6548 22.6667 19.9685 22.6667 16.6548C22.6703 15.0624 22.0393 13.5342 20.9133 12.4082C19.7873 11.2822 18.2591 10.6512 16.6667 10.6548ZM13.0001 16.6548C13.0001 18.6799 14.6417 20.3215 16.6667 20.3215C18.6918 20.3215 20.3334 18.6799 20.3334 16.6548C20.3334 14.6297 18.6918 12.9881 16.6667 12.9881C14.6417 12.9881 13.0001 14.6297 13.0001 16.6548Z"
                                        fill="black"
                                    />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="divider" />
            <div className="footer--content--container">
                <p className="footer--content">Made by Jeff Hwang 🇰🇷 🇳🇿</p>
                <div className="footer--social--icon">
                    <ul>
                        <li>
                            <Link
                                activeClass="navbar--active-content"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                to="Privacy_Policy"
                                className="text-sm"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="navbar--active-content"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                to="Terms_of_Service"
                                className="text-sm"
                            >
                                Terms of Service
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="navbar--active-content"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                to="Cookies_Settings"
                                className="text-sm"
                            >
                                Cookies Settings
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
