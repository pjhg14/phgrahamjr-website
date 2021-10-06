import { useState } from 'react';
import './App.css';
import MainContent from './components/MainContent';
import Navigation from './components/Navigation';

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(true)    

    return (
        <div className={`App ${isDarkTheme ? "" : "light"}`}>
            <Navigation isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme}/>
            <MainContent />
        </div>
    );
}

export default App;
