import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ButtonBackToTop from "./components/BackToTop/BackToTopButton";
import About from "./components/About/Introduction";
import Presentation from "./components/About/Presentation";
import Hobbies from "./components/About/Hobbies";
import Skills from "./components/Skills/Skills";
import SoftSkills from "./components/Skills/SoftSkills";
import HardSkills from "./components/Skills/FrontEnd";
import Portfolio from "./components/PortFolio/PortFolio";

// styles :
import "./sass/main.scss";
import "./sass/reset.scss";

function App() {
  return (
    <>
      <BrowserRouter>
            <Navbar />
            <div className="wrapper">
            <Header />
              <main>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />

                    {/* routes imbriquées : */}
                    <Route path="/introduction" element={<About />}>
                      <Route
                        path="/introduction/presentation"
                        element={<Presentation />}
                      />
                      <Route
                        path="/introduction/hobbies"
                        element={<Hobbies />}
                      />
                    </Route>

                    <Route path="/skills" element={<Skills />}>
                      <Route
                        path="/skills/sofSkills"
                        element={<SoftSkills />}
                      />
                      <Route path="/skills/frontend" element={<HardSkills />} />
                      <Route path="/skills/backend" element={<HardSkills />} />
                    </Route>

                    <Route path="/portfolio" element={<Portfolio />}></Route>
                    <Route path="*" element={<NotFound />} />
                  </Routes>
              </main>
                  <ButtonBackToTop />
                  <Footer />
            </div>
      </BrowserRouter>
    </>
  );
}

export default App;
