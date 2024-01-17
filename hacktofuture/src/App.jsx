import "./App.css";
import About from "./components/About";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  const Eg = "EG";
  const Sjec = "SJEC";
  const EgInfo =
    "EG provides Nordic vertical software that enables customers to further develop their business. EG has more than 1,700 employees who primarily work at locations in the Nordic countries and at a joint development center in Poland. EG develops, delivers and services their own software for more than 26,000 customers in the private and public sectors. Since 1978 they have brought enduring innovation year after year to the Scandinavian market within the industries. Vision - We enable our customers to become industry leaders.   Mission - We build market leading vertical software.";
  const Vission = "We enable our customers to become industry leaders.";
  const Mission = "We build market leading vertical software.";
  const SjecInfo =
    "St Joseph Engineering College (SJEC), Mangaluru, established in 2002, is a premier educational institution and a hub for Creativity and Innovations in Engineering. SJEC is an autonomous institution accredited by the All India Council for Technical Education (AICTE), New Delhi, and affiliated with Visvesvaraya Technological University, Karnataka. The institution recently received an A+ grade from the National Assessment and Accreditation Council. The National Board of Accreditation, New Delhi, has also granted accreditation to the institution’s programs in CSE, ME, ECE, EEE, Civil engineering, and MBA. The sprawling lush green SJEC campus is located 10 Km away from the City of Mangalore and is known for its picturesque beauty. The campus is a hub for innovators and SJEC students have made a mark for themselves in national and international championships of repute.";

  return (
    <>
    <Header />
      <Hero />
      <div className="bg-black flex flex-col sm:flex-row justify-center">
        <About title={Eg} info={EgInfo} Vission={Vission} Mission={Mission} Img="/eg-logo.svg"/>
        <About title={Sjec} info={SjecInfo} Img="/SJEC_logo_with_white_letter.png"/>
      </div>
      <Faq />
    </>
  );
}

export default App;
