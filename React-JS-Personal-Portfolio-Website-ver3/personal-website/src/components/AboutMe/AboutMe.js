import { AboutMeContainer, AboutMeBg, AboutMeLeftContainer, Img, AboutMeRightContainer, AboutMeInnerContainer, Title, Description, LineBreak, CVButton } from './AboutMeStyledComponent';
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
                        <Title>ABOUT ME</Title>

                        <Description>
                            Kia ora, welcome to my website! I graduated with a Bachelor of Science in IT Management and Software Development module from the <a href="https://www.auckland.ac.nz/" target="_blank" rel="noopener noreferrer" style={{ color: "cornflowerblue" }} >University of Auckland</a>, New Zealand.
                        </Description>

                        <Description>
                            I am a highly motivated and organised individual who demonstrates the characteristics of independent and critical thinking through my university and work. Continuous opportunities for growth and learning are invaluable for sustaining motivation and cultivating enduring interest.
                        </Description>

                        <Description>
                            My decision to pursue a career in Software Development and IT management stems from a profound interest in software engineering and a deep-seated respect for innovation. I find immense satisfaction in integrating my software design, development, and data analysis expertise with solid leadership and culture-building skills.
                        </Description>

                        <Description>
                            Look forward to the possibility of discussing how my skills and experiences align with your team's needs.
                        </Description>

                        <LineBreak />
                        <Description>
                            You can find me on <a href="https://www.linkedin.com/in/jeffhwa411/" target="_blank" rel="noopener noreferrer" style={{ color: "cornflowerblue" }}>Linkedin </a> or <a href="mailto:jeffhwa411@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: "crimson" }} >email me</a>.
                        </Description>

                        <AboutMeInnerContainer>
                            <CVButton href={personal_info.cv} target='display'>
                                View CV
                            </CVButton>
                        </AboutMeInnerContainer>
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