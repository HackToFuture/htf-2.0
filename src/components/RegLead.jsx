import React from "react";

const RegLead = ({ leadData, onLeadChange }) => {
  return (
    <div className="p-6 border-2 border-blue1 rounded-xl">
      <input
        onChange={(e) => {
          onLeadChange("teamName", e.target.value);
        }}
        value={leadData.teamName}
        type="text"
        placeholder="Enter Team Name"
        className="w-full px-5 py-2 mb-4 rounded-lg border-2 border-blue2 bg-white bg-opacity-0 font-inter font-medium text-text_col_1"
      />
      <input
        onChange={(e) => {
          onLeadChange("name", e.target.value);
        }}
        value={leadData.name}
        type="text"
        placeholder="Enter Name"
        className="w-full px-5 py-2 mb-4 rounded-lg border-2 border-blue2 bg-white bg-opacity-0 font-inter font-medium text-text_col_1"
      />
      <input
        onChange={(e) => {
          onLeadChange("email", e.target.value);
        }}
        value={leadData.email}
        type="email"
        placeholder="Enter Email"
        className="w-full px-5 py-2 mb-4 rounded-lg border-2 border-blue2 bg-white bg-opacity-0 font-inter font-medium text-text_col_1"
      />
      <input
        onChange={(e) => {
          onLeadChange("phone", e.target.value);
        }}
        value={leadData.phone}
        type="number"
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
      <div className="flex justify-center">
        <label className="flex items-center cursor-pointer transition ease-in-out">
          <input
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
      <input
        onChange={(e) => {
          onLeadChange("college", e.target.value);
        }}
        value={leadData.college}
        type="text"
        placeholder="Enter College Name"
        className="w-full px-5 py-2 mt-4 rounded-lg border-2 border-blue2 bg-white bg-opacity-0 font-inter font-medium text-text_col_1"
      />
    </div>
  );
};

export default RegLead;
