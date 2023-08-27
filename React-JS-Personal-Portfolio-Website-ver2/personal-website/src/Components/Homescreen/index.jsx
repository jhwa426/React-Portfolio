import AboutMe from "../AboutMe/AboutMe";
import IntroSection from '../IntroSection/IntroSection';
import MyPortfolio from "../MyPortfolio/MyPortfolio";
import MySkills from '../MySkills/MySkills';

const Home = () => {
    return (
        <div>
            <IntroSection />
            <AboutMe />
            <MySkills />
            <MyPortfolio />
        </div>
    );
}

export default Home;