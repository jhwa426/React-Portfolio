import { AboutMeContainer, AboutMeBg, AboutMeLeftContainer, Img, AboutMeRightContainer, AboutMeInnerContainer, Title, Description, ResumeButton } from './AboutMeStyledComponent';
import { personal_info } from '../../data/index';
import BgAnimation from '../BgAnimation/BgAnimation';

const AboutMe = () => {
    return (
        <div id="AboutMe">
            <AboutMeContainer>
                <AboutMeBg>
                    <BgAnimation />
                </AboutMeBg>
                <AboutMeInnerContainer>

                    <AboutMeLeftContainer id="Left">
                        <Title>About Me</Title>

                        <Description>
                            Kia ora, welcome to my website! I'm an undergraduate student at the <a href="https://www.auckland.ac.nz/" target="_blank" rel="noopener noreferrer">University of Auckland</a>.
                        </Description>

                        <Description>
                            I am a highly motivated and organised individual who demonstrates the characteristics of independent and critical thinking through my university and work.
                        </Description>

                        <Description>
                            With strong attention to detail, I consistently meet personal and professional goals on time and to excellent criteria.
                        </Description>

                        <br />
                        <Description>
                            You can find me on <a href="https://www.linkedin.com/in/jeffhwa411/" target="_blank" rel="noopener noreferrer">Linkedin </a> or <a href="mailto:jeffhwa411@gmail.com" target="_blank" rel="noopener noreferrer">email me</a>.
                        </Description>

                        <ResumeButton href={personal_info.resume} target='display'>View Resume</ResumeButton>
                    </AboutMeLeftContainer>

                    <AboutMeRightContainer id="Right">
                        <Img src="./img/jeff.png" alt="AboutMe" />
                    </AboutMeRightContainer>

                </AboutMeInnerContainer>
            </AboutMeContainer>
        </div>
    );
}


export default AboutMe;