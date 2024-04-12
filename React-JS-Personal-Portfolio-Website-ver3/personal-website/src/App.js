import './App.css';
import { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Body, Wrapper } from "./AppStyledComponent";
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './utils/Themes';
import Menu from "./components/Navbar/Menu";
import Navbar from "./components/Navbar/Navbar";
import ThemeButton from "./components/Navbar/ThemeButton";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";



function App() {
    const [darkMode, setDarkMode] = useState(true);
    const [openModal, setOpenModal] = useState({ state: false, project: null });

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Router>
                <Menu />
                <Navbar />
                <ThemeButton onClick={() => setDarkMode((prevDarkMode) => !prevDarkMode)} />

                <Body>
                    <Wrapper>
                        <Home />
                    </Wrapper>

                    <Wrapper>
                        <AboutMe />
                    </Wrapper>

                    <Wrapper>
                        <Skills />
                        <Projects openModal={openModal} setOpenModal={setOpenModal} />
                    </Wrapper>

                    <Wrapper>
                        <Education />
                    </Wrapper>

                    <Wrapper>
                        <ContactMe />
                    </Wrapper>

                    <Footer />

                    {/* Project Details area */}
                    {
                        openModal.state &&
                        <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
                    }

                </Body>
            </Router>
        </ThemeProvider>
    );
}

export default App;
