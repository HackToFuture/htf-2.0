import React from "react";
import PS1 from "../Data/PS1.js";
import PS2 from "../Data/PS2.js";
import PS3 from "../Data/PS3.js";

const Tablelayout = ({ show }) => {
  //   const Data = { show };
  //    === "PS1" ? PS1 : PS2;
  //   const data = show;
  //   console.log(PS1.id, PS2.id);\
  //   let Data = NULL;
  //   console.log(show);

  return (
    <div>
      <p className="text-center text-text_col_1 font-urbanist w-full">
        The following teams have been shortlisted for {show}.
      </p>

      <table className="border p-4 m-4 text-sm lg:text-xl ">
        <thead className="border p-2 m-2 ">
          <tr className="border ">
            {/* <th className="border p-2">S.No</th> */}
            <th className="border p-2">Team Name</th>
            <th className="border p-2">College</th>
            <th className="border p-2">Team Leader</th>
          </tr>
        </thead>
        {show === "Problem Statement 1" && (
          <tbody className="border p-2 ">
            {PS1.map((data, id) => (
              <tr key={id} className="border p-2  ">
                {/* <td className="border p-2">{data.id}</td> */}
                <td className="border p-2">{data.team}</td>
                <td className="border p-2 ">{data.college}</td>
                <td className="border p-2">{data.lead}</td>
              </tr>
            ))}
          </tbody>
        )}
        {show === "Problem Statement 2" && (
          <tbody className="border p-2 ">
            {PS2.map((data, id) => (
              <tr key={id} className="border p-2">
                {/* <td className="border p-2">{data.id}</td> */}
                <td className="border p-2">{data.team}</td>
                <td className="border p-2 ">{data.college}</td>
                <td className="border p-2">{data.lead}</td>
              </tr>
            ))}
          </tbody>
        )}
        {show === "Problem Statement 3" && (
          <tbody className="border p-2">
            {PS3.map((data, id) => (
              <tr key={id} className="border p-2">
                {/* <td className="border p-2">{data.id}</td> */}
                <td className="border p-2 ">{data.team}</td>
                <td className="border p-2 ">{data.college}</td>
                <td className="border p-2 ">{data.lead}</td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default Tablelayout;
