import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ThemeContextProvider } from "./context/ThemeContext";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Research from "./pages/Research";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Reports from "./pages/Reports";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <div className="portfolio-root">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/research" element={<Research />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </ThemeContextProvider>
    </Provider>
  );
}

export default App;