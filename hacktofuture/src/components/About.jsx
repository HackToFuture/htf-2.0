import React from "react";

const About = ({ Id, Img }) => {
  const Eg = "EG";
  const Sjec = "SJEC";
  const EgInfo =
    "EG provides Nordic vertical software that enables customers to further develop their business. EG has more than 1,700 employees who primarily work at locations in the Nordic countries and at a joint development center in Poland. EG develops, delivers and services their own software for more than 26,000 customers in the private and public sectors. Since 1978 they have brought enduring innovation year after year to the Scandinavian market within the industries. Vision - We enable our customers to become industry leaders.   Mission - We build market leading vertical software.";
  const Vision = "We enable our customers to become industry leaders.";
  const Mission = "We build market leading vertical software.";
  const SjecInfo =
    "St Joseph Engineering College (SJEC), Mangaluru, established in 2002, is a premier educational institution and a hub for Creativity and Innovations in Engineering. SJEC is an autonomous institution accredited by the All India Council for Technical Education (AICTE), New Delhi, and affiliated with Visvesvaraya Technological University, Karnataka. The institution recently received an A+ grade from the National Assessment and Accreditation Council. The National Board of Accreditation, New Delhi, has also granted accreditation to the institution’s programs in CSE, ME, ECE, EEE, Civil engineering, and MBA. The sprawling lush green SJEC campus is located 10 Km away from the City of Mangalore and is known for its picturesque beauty. The campus is a hub for innovators and SJEC students have made a mark for themselves in national and international championships of repute.";

  return (
    <div className="bg-black sm:w-1/2 w-5/6 h-auto sm:mx-5 mx-auto p-3 my-3 text-text_col_1 text-center rounded-3xl border-2">
      <img src={Img} alt="Logo" className="mx-auto w-48 h-48" />
      <p className="text-6xl my-4 font-semibold  ">
        About {Id === "1" ? Eg : Sjec}
      </p>
      <p className="text-xl font-extralight">
        {Id === "1" ? EgInfo : SjecInfo}
      </p>
      <br />
      {Id === "1" ? (
        <>
          <p className="text-xl font-extralight">
            <b>Vision</b>-{Vision}
          </p>
          <p className="text-xl font-extralight">
            <b>Mission</b>-{Mission}
          </p>
        </>
      ) : null}
    </div>
  );
};

export default About;
