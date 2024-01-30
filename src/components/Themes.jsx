import React from "react";
import blockchain from "/src/assets/blockchain.png";
import hacker from "/src/assets/hacker.png";
import markettrend from "/src/assets/market-trends.png";
import laptop from "/src/assets/laptop.png";

const Themes = () => {
  return (
    <div className="h-auto lg:mx-32 my-20 text-text_col_1 text-lg md:text-xl leading-tight md:leading-tight font-urbanist font-medium">
      <div className="bg-bg_color_2 bg-opacity-20 backdrop-blur-blur1 rounded-xl mx-6 mb-6 py-10 p-4 flex flex-col items-start">
        <div className="flex md:flex-row flex-col justify-evenly">
          <img
            src={markettrend}
            alt="themelogo"
            className="aspect-square h-24 w-24 md:h-24 flex-shrink-0 p-4 md:mt-8 "
          />
          <div>
            <h2 className=" text-2xl ml-4 font-bold bg-gradient-right bg-clip-text text-transparent">
              Problem Statement 1
            </h2>
            <p className="p-4 text-xl font-bold">
              Develop an ethical and secure machine learning framework that
              helps businesses uncover customer trends while anonymizing user
              identities, addressing privacy concerns in today's data-driven
              world.
            </p>
          </div>
        </div>
        <p className="p-6 leading-6">
          Develop a framework for leveraging machine learning to uncover
          customer trends and behaviors while adhering to the highest standards
          of ethical data usage. In today's rapidly evolving business landscape,
          understanding customer preferences is crucial; however, privacy
          concerns have taken precedence. We are actively seeking innovative
          solutions to anonymize user identities within extensive databases,
          enabling the responsible application of machine learning techniques.
          Your objective is to construct a robust and privacy-centric framework
          that enables organizations to extract valuable insights without
          compromising individual rights.
        </p>
      </div>
      <div className="bg-bg_color_2 bg-opacity-20 backdrop-blur-blur1 rounded-xl mx-6 mb-6 py-10 p-4 flex flex-col items-start ">
        <div className="flex md:flex-row flex-col items-start justify-start">
          <img
            src={blockchain}
            alt="themelogo"
            className=" aspect-square h-24 w-24 flex-shrink-0 p-4 md:mt-8 mt-4"
          />
          <div>
            <h2 className="text-2xl ml-4 font-bold bg-gradient-right bg-clip-text text-transparent">
              Problem Statement 2
            </h2>
            <p className="p-4 text-xl font-bold">
              Design a blockchain platform for secure, automatic data leasing
              with user-controlled deletion and built-in trust mechanisms.
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-evenly">
          <p className="p-6 leading-6">
            Design a cutting-edge blockchain platform that empowers users to
            lease their information to various services while ensuring automatic
            and irreversible data deletion upon exiting each service. The
            challenge is to create a seamless, transparent, and user-centric
            system, leveraging blockchain technology to guarantee data privacy
            and instill trust in the evolving digital landscape. Data is the new
            oil. Your task is to architect a secure and user-friendly solution
            that revolutionizes data transactions, providing individuals with
            control over their information and bringing about a new era of
            responsible data sharing.
          </p>
        </div>
      </div>
      <div className="bg-bg_color_2 bg-opacity-20 backdrop-blur-blur1 rounded-xl mx-6 mb-6 py-10 p-4 flex flex-col items-start ">
        <div className="flex md:flex-row flex-col justify-evenly">
          <img
            src={hacker}
            alt="themelogo"
            className=" aspect-square h-24 w-24 flex-shrink-0 p-4 mt-8"
          />
          <div>
            <h2 className="text-2xl ml-4 font-bold bg-gradient-right bg-clip-text text-transparent">
              Problem Statement 3
            </h2>
            <p className="p-4 text-xl font-bold">
              Develop an AI based solution to offer timely insights into current
              global hacking trends, prioritising potential threats based on
              their likelihood of targeting specific enterprises.
            </p>
          </div>
        </div>
        <p className="p-6 leading-6">
          Today's reactive Cyber security leaves businesses vulnerable to unseen
          hacking trends, with attackers exploiting novel methods tailored to
          specific industries. Build an AI-powered solution that delves beyond
          traditional threat feeds, analyzing hidden forums, vulnerability
          databases, and emerging technologies to unearth nascent attack vectors
          before they strike. By continuously learning and simulating potential
          attack scenarios, your system be able to predict upcoming threats and
          prioritize them based on industry relevance, enabling businesses to
          shift from reactive defense to proactive prediction, optimized
          security investments, and gain a competitive edge in the ever-evolving
          threat landscape.
        </p>
      </div>
      <div className="bg-bg_color_2 bg-opacity-20 backdrop-blur-blur1 rounded-xl mx-6 mb-6 py-10 p-4 flex md:flex-row flex-col items-center justify-between">
        <img
          src={laptop}
          alt="themelogo"
          className=" aspect-auto w-24 flex-shrink-0 px-4"
        />
        <div>
          <h2 className="text-2xl ml-4 font-bold bg-gradient-right bg-clip-text text-transparent w-full">
            Open Theme
          </h2>
          <p className="p-4 text-xl font-bold">
            Work on your own problem statement under the theme 'Social
            Innovation'. Open to first and second semester students of BE only.
            Priority is given to novelty and innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Themes;
