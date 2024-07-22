import { FooterContainer, FooterWrapper, Logo, NavItems, NavLink, SocialMediaIcons, SocialMediaIcon, Copyright } from './FooterStyledComponent';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { personal_info } from '../../data/index';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <Logo href="/">Jeff Hwang 🇰🇷 🇳🇿</Logo>
                <NavItems>
                    <NavLink href="#Main">Home</NavLink>
                    <NavLink href="#AboutMe">About</NavLink>
                    <NavLink href="#Skills">Skills</NavLink>
                    <NavLink href="#Projects">Projects</NavLink>
                    <NavLink href="#Education">Education</NavLink>
                    <NavLink href="#ContactMe">Contact</NavLink>
                </NavItems>
                <SocialMediaIcons>
                    <SocialMediaIcon
                        href={personal_info.github}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <GitHubIcon />
                    </SocialMediaIcon>

                    <SocialMediaIcon
                        href={personal_info.linkedin}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <LinkedInIcon />
                    </SocialMediaIcon>

                    <SocialMediaIcon
                        href={personal_info.facebook}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FacebookIcon />
                    </SocialMediaIcon>

                    <SocialMediaIcon
                        href={personal_info.instagram}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <InstagramIcon />
                    </SocialMediaIcon>

                </SocialMediaIcons>
                <Copyright>
                    &copy; 2024 Jeff Hwang
                    All rights reserved.
                </Copyright>
            </FooterWrapper>
        </FooterContainer>
    );
}

export default Footer;