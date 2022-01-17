import { AnimatePresence } from 'framer-motion';
import { useContext, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './sass/styles.scss';
import About from './layouts/About';
import Contact from './layouts/Contact';
import Landing from './layouts/Landing';
import NullPath from './layouts/NullPath';
import Portfolio from './layouts/Portfolio';
import Project from './layouts/Projects';
import { AppContext } from './utilities/context/AppContext';

export default function App() {
    const { state, dispatch } = useContext(AppContext)
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === "/") {
            dispatch({
                type: "close"
            })
        }
    },[location, dispatch])   
    
    return (
        <div className={`App ${ state.isDarkTheme ? "" : "light"}`}>
            <AnimatePresence initial={false} exitBeforeEnter={true}>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Landing />} />
                    <Route element={<Portfolio />}>
                        <Route path="about" element={<About />} />
                        <Route path="projects" element={<Project />} />
                        <Route path="contacts" element={<Contact />} />
                        <Route path="*" element={<NullPath />}/>
                    </Route>
                </Routes>
            </AnimatePresence>
        </div>
    );
}