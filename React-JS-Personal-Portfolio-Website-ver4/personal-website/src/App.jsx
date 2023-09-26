import "./index.css";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Navbar from "./components/Navbar/Navbar";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";


const App = () => {
    return (
        <>
            <Home />
            <Navbar />
            <AboutMe />
            <Skills />
            <Projects />
            <Education />
            <ContactMe />
            <Footer />
        </>
    );
}

export default App;
