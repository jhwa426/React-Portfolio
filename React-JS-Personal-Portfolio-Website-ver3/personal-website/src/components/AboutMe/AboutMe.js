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
                        <Title>About Me</Title>

                        <Description>
                            Kia ora, welcome to my website! I recently graduated with a Bachelor of Science in IT Management and Software Development module from the <a href="https://www.auckland.ac.nz/" target="_blank" rel="noopener noreferrer" style={{ color: "cornflowerblue" }} >University of Auckland</a>, New Zealand.
                        </Description>

                        <Description>
                            I am a highly motivated and organised individual who demonstrates the characteristics of independent and critical thinking through my university and work. Continuous opportunities for growth and learning are invaluable for sustaining motivation and cultivating enduring interest.
                        </Description>

                        <Description>
                            I am passionate about integrating my expertise in software design, development and data analysis with solid leadership and culture-building skills. My goal is to contribute significantly to the success of the teams I engage with, leveraging a unique blend of technical proficiency and collaborative leadership to drive innovation and foster a positive work culture.
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