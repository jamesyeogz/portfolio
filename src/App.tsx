import { AnimatePresence } from 'framer-motion';
import React,{Suspense} from 'react';
import StartTransition from './Animations/StartTransition';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import HeroSection from './pages/HeroSection';
import Projects from './pages/Projects';
import Background from './Reactthree/Background';
import Pentagon from './Reactthree/Pentagon';
import { Container, Content, Footer } from './styles/General';

function App() {
  return (
    <Suspense fallback={null}>
    <HeroSection />
    {/* <Background/> */}
    <Projects/>
    <About />
    <Contact/>
    <Footer>This website is largely inspired by Kyson Dyle</Footer>
    



    </Suspense>
  );
}

export default App;
