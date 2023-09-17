import { AboutMeContainer, AboutMeBg, AboutMeLeftContainer, Img, AboutMeRightContainer, AboutMeInnerContainer, TextLoop, Title, Span, SubTitle, SocialMediaIcons, SocialMediaIcon, ResumeButton } from './AboutStyle';
import { personal_info } from '../../data/index';
import Typewriter from 'typewriter-effect';
import AboutMeBgAnimation from '../AboutMeBgAnimation/AboutMeBgAnimation';

const AboutMe = () => {
    return (
        <div id="AboutMe">
            <AboutMeContainer>
                <AboutMeBg>
                    <AboutMeBgAnimation />
                </AboutMeBg>
                <AboutMeInnerContainer>
                    <AboutMeLeftContainer id="Left">
                        <Title>Hi, I am
                            <br />
                            {personal_info.name}
                        </Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: personal_info.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{personal_info.description}</SubTitle>
                        <ResumeButton href={personal_info.resume} target='display'>Check Resume</ResumeButton>
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