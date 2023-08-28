import AboutMe from "../AboutMe/AboutMe";
import Education from "../Education/Education";
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
            <Education />
        </div>
    );
}

export default Home;