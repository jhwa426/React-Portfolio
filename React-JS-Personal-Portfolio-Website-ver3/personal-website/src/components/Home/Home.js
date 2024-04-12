import { HomeContainer, Title, HomeInnerContainer, HomeLeftContainer, HomeRightContainer, Img, TextLoop, Span, HomeBg, ContactMeButton, NavLink } from './HomeStyledComponent';
import Typewriter from 'typewriter-effect';
import { personal_info } from '../../data/index';
import BgAnimation from '../BgAnimation/BgAnimation';

const Home = () => {
    return (
        <div id="Home">
            <HomeContainer>
                <HomeBg>
                    <BgAnimation />
                </HomeBg>

                <HomeInnerContainer>
                    <HomeLeftContainer id="Left">
                        <Title>Hello, I am
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

                        <HomeInnerContainer>
                            <ContactMeButton>
                                <NavLink href="#ContactMe">
                                    Get In Touch
                                </NavLink>
                            </ContactMeButton>
                        </HomeInnerContainer>
                    </HomeLeftContainer>

                    <HomeRightContainer id="Right">
                        <Img src="./img/home_img.JPG" alt="Home" />
                    </HomeRightContainer>

                </HomeInnerContainer>
            </HomeContainer>
        </div>
    );
}

export default Home;