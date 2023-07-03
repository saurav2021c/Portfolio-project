import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <Navbar />
    <Header />
    <AboutMe />
    <Skills />
    <Experience />
    <Projects />
    <Contacts />
    <Footer />
    </>
  );
}

export default App;
