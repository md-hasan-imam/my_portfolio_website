import './App.css';
import Banner from './components/Banner';
import EmailSide from './components/EmailSide';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Skills></Skills>
      
      <SocialLinks></SocialLinks>
      <EmailSide></EmailSide>
      
    </div>
  );
}

export default App;
