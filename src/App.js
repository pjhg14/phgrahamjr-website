import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './sass/main.scss';
import AboutPage from './layouts/AboutPage';
import ContactPage from './layouts/ContactPage';
import LandingPage from './layouts/LandingPage';
import NullPath from './layouts/NullPath';
import Portfolio from './layouts/Portfolio';
import ProjectPage from './layouts/ProjectPage';

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(true)    

    return (
        <div className={`App ${isDarkTheme ? "" : "light"}`}>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route element={<Portfolio isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />}>
                    <Route path="about" element={<AboutPage />} />
                    <Route path="projects" element={<ProjectPage />} />
                    <Route path="contacts" element={<ContactPage />} />
                    <Route path="*" element={<NullPath />}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
