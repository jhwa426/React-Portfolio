import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../ContactMe/ContactMe";
import Education from "../Education/Education";
import Footer from "../Footer/Footer";
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
            <ContactMe />
            <Footer />
        </div>
    );
}

export default Home;