import React from "react";
import Pdf from "/public/HTF-Rule-Book.pdf";

export default function downloadRule() {
  return (
    <a href={Pdf} download="HTF2-RuleBook.pdf" target="_blank" rel="noreferrer">
      <button className="text-white bg-transparent outline ring-offset-blue-500 outline-1 transition duration-300 ease-in-out text-lg font-bold px-5 py-1 hover:scale-105 rounded-3xl lg:mr-6 sm:mt-0 mt-5 sm:ml-5">
        Download Rule Book
      </button>
    </a>
  );
}
