import './App.css';
import NavigationBar from './components/layout/NavigationBar';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Experiences from './components/sections/Experiences';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <main>
        <Home />
        <About />
        <Experiences />
        <Skills />
        <Contact />
      </main>
      <Footer />
      
    </div>
  );
}

export default App;
