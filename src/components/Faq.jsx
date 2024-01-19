import React, { useState } from "react";
import faqData from "/src/Data/faq.json";

const Faq = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  return (
    <div className=" p-6 w-full shadow-md flex flex-col items-start ">
      <div className="text-3xl md:text-4xl text-center font-inter font-bold bg-gradient-right bg-clip-text text-transparent mx-auto">
        Queries? Quick Fixes Here!
      </div>
      <div className="flex flex-col w-full items-start mt-4 mx-auto max-w-screen-md">
        {faqData.map((faq, index) => (
          <div key={index} className="w-full mb-4">
            <button
              className={`transition bg-bg_color_2 bg-opacity-20 backdrop-blur-blur1 py-2 px-7 text-lg font-inter font-medium leading-tight text-text_col_1 w-full text-left flex justify-between items-center ${
                selectedQuestion === index
                  ? "rounded-t-xl rounded-b-none"
                  : "rounded-xl"
              }`}
              onClick={() =>
                setSelectedQuestion(selectedQuestion === index ? null : index)
              }
            >
              {faq.question}
              <span
                className={`text-text_col_1 transition-transform duration-200 ${
                  selectedQuestion === index ? "transform rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            {selectedQuestion === index && (
              <p className=" bg-bg_color_2 bg-opacity-40 backdrop-blur-blur1 pt-2  pb-3 px-7 rounded-b-lg text-text_col_1 text-base font-inter font-medium leading-tight">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
