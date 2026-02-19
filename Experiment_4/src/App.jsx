import { Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Research from "./pages/Research";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import SavedAnalytics from "./pages/SavedAnalytics";

import "./App.css";

function App() {
  return (
    <AppProvider>
      <div className="portfolio-root">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/research" element={<Research />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/saved" element={<SavedAnalytics />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;