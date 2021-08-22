import './App.css';
import MainContent from './components/MainContent';
import Navigation from './components/Navigation';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Navigation />
        <MainContent />
        <Footer />
    </div>
  );
}

export default App;
