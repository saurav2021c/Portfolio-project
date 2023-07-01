import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Experience';
function App() {
  return (
    <>
    <Navbar />
    <Header />
    <AboutMe />
    <Skills />
    <Experience />
    </>
  );
}

export default App;
