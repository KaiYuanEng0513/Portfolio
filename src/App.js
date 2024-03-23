import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import Navbar from "./componenets/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme.js";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Section from "./componenets/Section";
import About from "./componenets/About";
import Skills from "./componenets/Skills";
import Projects from "./componenets/Projects";
import Contact from "./componenets/Contact";
import Footer from "./componenets/Footer";
import Experience from "./componenets/Experience";
import Education from "./componenets/Education";
import ProjectDetails from "./componenets/ProjectDetails";
import styled from "styled-components";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <Section />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} /> 
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
