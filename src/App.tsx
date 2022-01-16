import { AnimatePresence } from 'framer-motion';
import { useContext, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './sass/styles.scss';
import AboutPage from './layouts/AboutPage';
import ContactPage from './layouts/ContactPage';
import LandingPage from './layouts/LandingPage';
import NullPath from './layouts/NullPath';
import Portfolio from './layouts/Portfolio';
import ProjectPage from './layouts/ProjectPage';
import { NavContext } from './utilities/context/NavContext';

export default function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(true)
    const { setNavActive } = useContext(NavContext)
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === "/") {
            setNavActive(false)
        }
    },[location, setNavActive])   
    
    return (
        <div className={`App ${isDarkTheme ? "" : "light"}`}>
            <AnimatePresence initial={false} exitBeforeEnter={true}>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<LandingPage />} />
                    <Route element={<Portfolio isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />}>
                        <Route path="about" element={<AboutPage />} />
                        <Route path="projects" element={<ProjectPage />} />
                        <Route path="contacts" element={<ContactPage />} />
                        <Route path="*" element={<NullPath />}/>
                    </Route>
                </Routes>
            </AnimatePresence>
        </div>
    );
}