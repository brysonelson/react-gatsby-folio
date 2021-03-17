import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import DarkMode from './DarkMode/DarkMode';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import variables from '../style/abstracts/_variables.scss';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';

const darkStyles = {
  transition: 'background .25s ease-out, color .25s ease-out',
  background: variables.darkgrey,
  color: variables.white,
};

const lightStyles = {
  transition: 'background .25s ease-out, color .25s ease-out',
  background: variables.white,
  color: variables.darkbluetext,
};

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  const [darkTheme, setDark] = useState({ dark: false, styles: lightStyles });

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  const updateStyles = () => {
    let themeStyles = {};

    if (!darkTheme.dark) {
      themeStyles = { dark: true, styles: darkStyles };
    } else {
      themeStyles = { dark: false, styles: lightStyles };
    }

    setDark(themeStyles);
  };

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <DarkMode onClick={updateStyles} />
      <Hero theme={darkTheme.styles} />
      <About />
      <Projects theme={darkTheme.styles} />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
