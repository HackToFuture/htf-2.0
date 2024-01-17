import React from "react";

const About = ({ title, info, Vission, Mission, Img }) => {
  return (
    <div className="bg-gradient-to-r from-neutral-900 to-zinc-900 sm:w-1/2 w-5/6 h-auto sm:mx-6 mx-auto p-3 my-3 text-text_col_1 text-center rounded-lg ">
      <img src={Img} alt="Logo" className="mx-auto w-48 h-48" />
      <p className="text-6xl my-4 font-light  ">About {title}</p>
      <p className="text-xl font-extralight">{info}</p>
      <br />
      {Vission && <p className="text-xl font-extralight"><b>Vision</b>-{Vission}</p>}
      {Mission && <p className="text-xl font-extralight"><b>Mission</b>-{Mission}</p>}
    </div>
  );
};

export default About;