import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import CinematicLoader from './components/CinematicLoader';
import WhatsAppWidget from './components/WhatsAppWidget';
import Reveal from './components/Reveal';
import AIChatWidget from './components/AIChatWidget';

import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth).toFixed(4);
      const y = (e.clientY / window.innerHeight).toFixed(4);

      document.documentElement.style.setProperty('--mouse-x', x);
      document.documentElement.style.setProperty('--mouse-y', y);
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        {loading ? (
          <CinematicLoader onComplete={() => setLoading(false)} />
        ) : (
          <div className="main-content">
            <WhatsAppWidget />
            <AIChatWidget />
            <Header />
            <Hero />
            <Reveal><About /></Reveal>
            <Reveal><Services /></Reveal>
            <Reveal><WhyChooseUs /></Reveal>
            <Reveal><Process /></Reveal>
            <Reveal><Contact /></Reveal>
            <Footer />
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
