import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main
        style={{
          minHeight: "100vh",
        }}
      >
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/privacy-policy"
            element={<Privacy />}
          />

          <Route
            path="/terms"
            element={<Terms />}
          />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;