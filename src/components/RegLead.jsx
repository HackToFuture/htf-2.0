import React from "react";

const RegLead = ({ leadData, onLeadChange }) => {
  return (
    <div className="p-6 border-2 border-blue1 rounded-xl">
        <input
            required ="required"
        onChange={(e) => {
          onLeadChange("teamName", e.target.value);
        }}
        value={leadData.teamName}
        type="text"
        placeholder="Enter Team Name"
        className="w-full px-5 py-2 mb-4 rounded-lg border-2 border-blue2 bg-white bg-opacity-0 font-inter font-medium text-text_col_1"
      />
        <input
          required ="required"
        onChange={(e) => {
          onLeadChange("name", e.target.value);
        }}
        value={leadData.name}
        type="text"
        placeholder="Enter Name"
        className="w-full px-5 py-2 mb-4 rounded-lg border-2 border-blue2 bg-white bg-opacity-0 font-inter font-medium text-text_col_1"
      />
        <input
          required ="required"
        readOnly
        value={localStorage.getItem("email")}
        
        type="email"
        // placeholder="Enter Email"
        className="w-full px-5 py-2 mb-4 rounded-lg border-2 border-blue2 bg-white bg-opacity-0 font-inter font-medium text-text_col_1"
      />
        <input
          required ="required"
        onChange={(e) => {
          onLeadChange("phone", e.target.value);
        }}
        value={leadData.phone}
        type="text"
        placeholder="Enter Phone Number"
        className="w-full px-5 py-2 mb-4 rounded-lg border-2 border-blue2 bg-white bg-opacity-0 font-inter font-medium text-text_col_1"
      />
      <select
        onChange={(e) => {
          onLeadChange("year", e.target.value);
        }}
        value={leadData.year}
        className="w-full px-5 py-2 mb-4 rounded-lg border-2 border-blue2 bg-white bg-opacity-0 font-inter font-medium text-text_col_1"
      >
        <option className="text-bg_color font-semibold">
          Select Year of Study
        </option>
        <option value="1" className="text-bg_color font-semibold">
          1st year
        </option>
        <option value="2" className="text-bg_color font-semibold">
          2nd year
        </option>
        <option value="3" className="text-bg_color font-semibold">
          3rd year
        </option>
        <option value="4" className="text-bg_color font-semibold">
          4th year
        </option>
      </select>
        <input
          required ="required"
        onChange={(e) => {
          onLeadChange("college", e.target.value);
        }}
        value={leadData.college}
        type="text"
        placeholder="Enter College Name"
        className="w-full px-5 py-2 mb-4 rounded-lg border-2 border-blue2 bg-white bg-opacity-0 font-inter font-medium text-text_col_1"
      />
      <div className="flex justify-center">
        <label className="flex items-center cursor-pointer transition ease-in-out">
            <input
              required ="required"
            type="radio"
            name={`gender-${leadData.id}`}
            value="male"
            checked={leadData.gender === "male"}
            onChange={() => onLeadChange("gender", "male")}
          />
          <span className="font-inter font-medium text-text_col_1 ml-3">
            Male
          </span>
        </label>
        <label className="flex items-center cursor-pointer transition ease-in-out ml-6">
            <input
              required ="required"
            type="radio"
            name={`gender-${leadData.id}`}
            value="female"
            checked={leadData.gender === "female"}
            onChange={() => onLeadChange("gender", "female")}
          />
          <span className="font-inter font-medium text-text_col_1 ml-3">
            Female
          </span>
        </label>
      </div>
      </div>
     
  );
};

export default RegLead;
