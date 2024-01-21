const RegMem = ({ memData, onMemChange }) => {
  return (
    <div className="p-6 border-2 border-blue1 rounded-xl">
      <input
        required="required"
        onChange={(e) => {
          onMemChange("name", e.target.value);
        }}
        value={memData.name}
        type="text"
        placeholder="Enter Name"
        className="w-full px-5 py-2 mb-4 rounded-lg border-2 border-blue2 bg-white bg-opacity-0 font-inter font-medium text-text_col_1"
      />
      <input
        required="required"
        onChange={(e) => {
          onMemChange("email", e.target.value);
        }}
        value={memData.email}
        type="email"
        placeholder="Enter Email"
        className="w-full px-5 py-2 mb-4 rounded-lg border-2 border-blue2 bg-white bg-opacity-0 font-inter font-medium text-text_col_1"
      />
      <select
        onChange={(e) => {
          onMemChange("year", e.target.value);
        }}
        value={memData.year}
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
      <div className="flex justify-center">
        <label className="flex items-center cursor-pointer transition ease-in-out">
          <input
            required="required"
            name={`gender-${memData.id}`}
            type="radio"
            value="male"
            checked={memData.gender === "male"}
            onChange={() => onMemChange("gender", "male")}
          />
          <span className="font-inter font-medium text-text_col_1 ml-3">
            Male
          </span>
        </label>
        <label className="flex items-center cursor-pointer transition ease-in-out ml-6">
          <input
            required="required"
            name={`gender-${memData.id}`}
            type="radio"
            value="female"
            checked={memData.gender === "female"}
            onChange={() => onMemChange("gender", "female")}
          />
          <span className="font-inter font-medium text-text_col_1 ml-3">
            Female
          </span>
        </label>
      </div>
    </div>
  );
};

export default RegMem;
