import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// TODO: Revert to HashRouter
// import { HashRouter as Router } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { NavContextProvider } from './utilities/context/NavContext';


ReactDOM.render(
    <Router>
        <React.StrictMode>
            <NavContextProvider>
                <App />
            </NavContextProvider>
        </React.StrictMode>
    </Router>,
    document.getElementById('root')
);
