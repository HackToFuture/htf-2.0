import "./App.css";
import About from "./components/About";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Prize from "./components/Prize";
import Themes from "./components/Themes";

const App = () => {
  return (
    <div id="bgimg">
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="prize">
        <Prize />
      </div>
      <div id="theme">
        <Themes />
      </div>
      <div id="about" className=" flex flex-col sm:flex-row justify-center">
        <About Id="1" Img="/src/assets/eg-logo.svg" />
        <About Id="0" Img="/src/assets/SJEC_logo_with_white_letter.png" />
      </div>
      <div id="faq">
        <Faq />
      </div>
      <Footer />
    </div>
  );
};

export default App;
