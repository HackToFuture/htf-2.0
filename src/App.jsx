import "./App.css";
import About from "./components/About";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Prize from "./components/Prize";
import Themes from "./components/Themes";
import { Route } from "react-router-dom";

function App() {
  return (
    <div id="bgimg">
      <Header />
      {/* <Route path="/Hero" component={Hero} />
      <Route path="/Prize" component={Prize} />
      <Route path="/Themes" component={Themes} />
      <Route path="/About" component={About} />
      <Route path="/Faq" component={Faq} /> */}
      <Hero />
      <Prize />
      <Themes />
      <div className=" flex flex-col sm:flex-row justify-center">
        <About Id="1" Img="/src/assets/eg-logo.svg" />
        <About Id="0" Img="/src/assets/SJEC_logo_with_white_letter.png" />
      </div>
      <Faq />

      <Footer />
    </div>
  );
}

export default App;
