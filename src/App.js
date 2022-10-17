import './App.css';
import Banner from './components/Banner';
import EmailSide from './components/EmailSide';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import SocialLinks from './components/SocialLinks';
import Contact from './pages/home/Contact';
import './App.css'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
      <SocialLinks></SocialLinks>
      <EmailSide></EmailSide>
      <Contact></Contact>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
