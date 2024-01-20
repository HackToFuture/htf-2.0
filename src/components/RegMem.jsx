const RegMem = () => {
  return (
    <div className="p-6 border-2 border-blue1 rounded-xl">
      <input
        onChange={(e) => {}}
        /* value={} */
        type="text"
        placeholder="Enter Name"
        className="w-full px-5 py-2 mb-4 rounded-lg border-2 border-blue2 bg-white bg-opacity-0 font-inter font-medium text-text_col_1"
      />
      <input
        onChange={(e) => {}}
        /* value={} */
        type="email"
        placeholder="Enter Email"
        className="w-full px-5 py-2 mb-4 rounded-lg border-2 border-blue2 bg-white bg-opacity-0 font-inter font-medium text-text_col_1"
      />
      <select
        onChange={(e) => {}}
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
          <input id="option1" name="radio-group" type="radio" checked />

          <span className="font-inter font-medium text-text_col_1 ml-3">
            Male
          </span>
        </label>
        <label className="flex items-center cursor-pointer transition ease-in-out ml-6">
          <input id="option2" name="radio-group" type="radio" />
          <span className="font-inter font-medium text-text_col_1 ml-3">
            Female
          </span>
        </label>
      </div>
    </div>
  );
};

export default RegMem;
