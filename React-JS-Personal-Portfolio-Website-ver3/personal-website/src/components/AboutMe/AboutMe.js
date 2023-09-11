import styled from "styled-components";
import { AboutMeContainer, AboutMeBg, AboutMeLeftContainer, Img, AboutMeRightContainer, AboutMeInnerContainer, TextLoop, Title, Span, SubTitle, SocialMediaIcons, SocialMediaIcon, ResumeButton } from './AboutStyle';
import { Bio } from '../../data/constants';
import Typewriter from 'typewriter-effect';
import AboutMeBgAnimation from '../AboutMeBgAnimation/AboutMeBgAnimation';

const AboutMe = () => {
    return (
        <div id="about">
            <AboutMeContainer>
                <AboutMeBg>
                    <AboutMeBgAnimation />
                </AboutMeBg>
                <AboutMeInnerContainer>
                    <AboutMeLeftContainer id="Left">
                        <Title>Hi, I am
                            <br />
                            {Bio.name}
                        </Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
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