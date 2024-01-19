import React from "react";

const About = ({ Id, Img }) => {
  const Eg = "EG";
  const Sjec = "SJEC";
  const EgInfo =
    "EG provides Nordic vertical software that enables customers to further develop their business. EG has more than 1,700 employees who primarily work at locations in the Nordic countries and at a joint development center in Poland.";
  const EgInfo2 =
    "EG develops, delivers and services their own software for more than 26,000 customers in the private and public sectors. Since 1978 they have brought enduring innovation year after year to the Scandinavian market within the industries.";
  const Vision = "We enable our customers to become industry leaders.";
  const Mission = "We build market leading vertical software.";
  const SjecInfo =
    "St Joseph Engineering College (SJEC), Mangaluru, established in 2002, is a premier educational institution and a hub for Creativity and Innovations in Engineering. SJEC is an autonomous institution accredited by the All India Council for Technical Education (AICTE), New Delhi, and affiliated with Visvesvaraya Technological University, Karnataka.";
  const SjecInfo2 =
    "The institution recently received an A+ grade from the National Assessment and Accreditation Council. The National Board of Accreditation, New Delhi, has also granted accreditation to the institution’s programs in CSE, ME, ECE, EEE, Civil engineering, and MBA. The sprawling lush green SJEC campus is located 10 Km away from the City of Mangalore and is known for its picturesque beauty. The campus is a hub for innovators and SJEC students have made a mark for themselves in national and international championships of repute.";

  return (
    <div className="bg-bg_color_2 bg-opacity-20 backdrop-blur-blur1 md:w-1/2 w-11/12 h-auto sm:mx-5 mx-auto md:mx-7 py-10 px-6 md:px-16 my-20 font-intermed leading-tight text-text_col_1 rounded-3xl">
      <img src={Img} alt="Logo" className="mx-auto w-48 h-48 mb-10" />
      <p className="text-3xl md:text-4xl my-4 font-intersemi leading-tight bg-gradient-right bg-clip-text text-transparent">
        About {Id === "1" ? Eg : Sjec}
      </p>
      <p className="text-base md:text-lg leading-tight md:leading-tight">
        {Id === "1" ? EgInfo : SjecInfo}
      </p>
      <br />
      <p className="text-base md:text-lg leading-tight md:leading-tight">
        {Id === "1" ? EgInfo2 : SjecInfo2}
      </p>
      <br />
      {Id === "1" ? (
        <>
          <br />
          <br />
          <p className="text-base md:text-lg leading-tight">
            <span className="font-interbold text-lg md:text-xl bg-gradient-right bg-clip-text text-transparent">
              Vision:
            </span>{" "}
            {Vision}
          </p>
          <p className="text-base md:text-lg leading-tight">
            <span className="font-interbold text-lg md:text-xl bg-gradient-right bg-clip-text text-transparent">
              Mission:{" "}
            </span>{" "}
            {Mission}
          </p>
        </>
      ) : null}
    </div>
  );
};

export default About;
