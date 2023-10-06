import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
// import { FaReact } from 'react-icons/fa';


const HomeIcons = () => {
    return (
        <div className="header__socials">
            <a href="https://github.com/jhwa426" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://jeff-hwang.netlify.app/" target="_blank" rel="noopener noreferrer"><CgWebsite /></a>
            <a href="https://www.linkedin.com/in/jeffhwa411/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
        </div>
    )
}

export default HomeIcons