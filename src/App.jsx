import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeaderReg from "./components/HeaderReg";
import Hero from "./components/Hero";
import Prize from "./components/Prize";
import Themes from "./components/Themes";
import sjeclogo from "./assets/SJEC_logo_with_white_letter.png";
import eglogo from "./assets/eg-logo-red-white.png";
import RegisterForm from "./pages/RegisterForm";
import Abstract from "./pages/abstractsubmit";

const App = () => {
  return (
    <>
      <Router>
        <div id="bgimg " className="font-urbanist">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <div id="hero">
                    <Hero />
                  </div>
                  <div
                    id="about"
                    className=" flex flex-col sm:flex-row justify-center"
                  >
                    <About Id="1" Img={eglogo} />
                    <About Id="0" Img={sjeclogo} />
                  </div>
                  <div id="prize">
                    <Prize />
                  </div>
                  <div id="theme">
                    <Themes />
                  </div>
                  <div id="faq">
                    <Faq />
                  </div>
                  <Footer />
                </>
              }
            />
            <Route
              path="/registration"
              element={
                <>
                  <HeaderReg />
                  <RegisterForm />
                  <Footer />
                </>
              }
            />
            <Route path="/submit" element={<Abstract />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
