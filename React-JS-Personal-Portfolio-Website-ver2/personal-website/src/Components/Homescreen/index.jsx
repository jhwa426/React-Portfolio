import AboutMe from "../AboutMe/AboutMe";
import IntroSection from '../IntroSection/IntroSection';
import MyPortfolio from "../MyPortfolio/MyPortfolio";
import MySkills from '../MySkills/MySkills';

const Home = () => {
    return (
        <div>
            <IntroSection />
            <MySkills />
            <AboutMe />
            <MyPortfolio />
        </div>
    );
}

export default Home;