import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// TODO: Revert to HashRouter
// import { HashRouter as Router } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { AppContextProvider } from './utilities/context/AppContext';


ReactDOM.render(
    <Router>
        <React.StrictMode>
            <AppContextProvider>
                <App />
            </AppContextProvider>
        </React.StrictMode>
    </Router>,
    document.getElementById('root')
);
