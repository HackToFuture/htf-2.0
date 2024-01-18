import "./App.css";
import About from "./components/About";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Themes from "./components/Themes";

function App() {
  return (
<div id="bgimg">
      <Header />
      <Hero />
      <div className="bg-black flex flex-col sm:flex-row justify-center">
        <About Id="1" Img="/src/assets/eg-logo.svg"/>
        <About Id="0" Img="/src/assets/SJEC_logo_with_white_letter.png"/>
      </div>
      <Faq />
      <Themes />
      <Footer />
    </div>
  );
}

export default App;
