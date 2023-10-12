import './App.css';
import { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './utils/Themes';
import Menu from "./components/Navbar/Menu";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";




const Body = styled.div`
    background-color: ${({ theme }) => theme.bg};
    width: 100%;
    height: 100%;
    overflow-x: hidden;
`
const Wrapper = styled.div`
    background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
    width: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

function App() {
    const [darkMode, setDarkMode] = useState(true);
    const [openModal, setOpenModal] = useState({ state: false, project: null });

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Router>
                <Menu />
                <Navbar />
                <Body>
                    <Home />

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
