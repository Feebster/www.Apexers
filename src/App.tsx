import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import ClientDevelopmentPage from './pages/ClientDevelopmentPage';
import AISolutionsPage from './pages/AISolutionsPage';
import EducationalTechPage from './pages/EducationalTechPage';
import IndustrialSolutionsPage from './pages/IndustrialSolutionsPage';
import PrivacyBeleidPage from './pages/PrivacyBeleidPage';
import AlgemeneVoorwaardenPage from './pages/AlgemeneVoorwaardenPage';

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Contact />
            <Footer />
            <Chatbot />
          </>
        } />
        <Route path="/services/client-development" element={<ClientDevelopmentPage />} />
        <Route path="/services/ai-solutions" element={<AISolutionsPage />} />
        <Route path="/services/educational-tech" element={<EducationalTechPage />} />
        <Route path="/services/industrial-solutions" element={<IndustrialSolutionsPage />} />
        <Route path="/privacy-beleid" element={<PrivacyBeleidPage />} />
        <Route path="/algemene-voorwaarden" element={<AlgemeneVoorwaardenPage />} />
      </Routes>
    </div>
  );
}

export default App;