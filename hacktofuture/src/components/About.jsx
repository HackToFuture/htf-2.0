import React from "react";

const About = ({ title, info, Vission, Mission, Img }) => {
  return (
    <div className="bg-gradient-to-r from-neutral-900 to-zinc-900 w-1/2 h-auto m-3 p-3 text-white text-center  rounded-lg ">
      <img src={Img} alt="Logo" className="mx-auto w-48 h-48" />
      <p className="text-6xl font-light ">About {title}</p>
      <p className="text-xl font-extralight">{info}</p>
      <br />
      {Vission && <p className="text-xl font-extralight"><b>Vission</b>-{Vission}</p>}
      {Mission && <p className="text-xl font-extralight"><b>Mission</b>-{Mission}</p>}
    </div>
  );
};

export default About;