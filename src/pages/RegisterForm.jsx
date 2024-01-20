import { useState } from "react";
import RegLead from "../components/RegLead";
import RegMem from "../components/RegMem";

const RegisterForm = () => {
  const [member4, setMember4] = useState(false);

  const [teamData, setTeamData] = useState({
    lead: {
      // data for RegLead
      teamName: "",
      name: "",
      email: "",
      phone: "",
      year: "",
      gender: "",
      college: "",
    },
    members: [
      {
        // data for RegMem1
        id: 1,
        name: "",
        email: "",
        year: "",
        gender: "",
      },
      {
        // data for RegMem2
        id: 2,
        name: "",
        email: "",
        year: "",
        gender: "",
      },
      {
        // data for RegMem3
        id: 3,
        name: "",
        email: "",
        year: "",
        gender: "",
      },
    ],
    pdfFile: null, // i love pdfs
  });

  // function to handle change in team lead data
  const handleLeadChange = (field, value) => {
    setTeamData((prevData) => ({
      ...prevData,
      lead: { ...prevData.lead, [field]: value },
    }));
  };

  // function to handle change in team member data
  const handleMemChange = (index, field, value) => {
    setTeamData((prevData) => {
      const newMembers = [...prevData.members];
      newMembers[index] = { ...newMembers[index], [field]: value };
      return { ...prevData, members: newMembers };
    });
  };

  const handlePdfChange = (e) => {
    const file = e.target.files[0];
    setTeamData((prevData) => ({ ...prevData, pdfFile: file }));
  };

  // function to check if any field is empty
  const [leadMissing, setLeadMissing] = useState(false);
  const [mem2Missing, setMem2Missing] = useState(false);
  const [mem3Missing, setMem3Missing] = useState(false);
  const [mem4Missing, setMem4Missing] = useState(false);
  const [pdfMissing, setPdfMissing] = useState(false);

  function checkMissing() {
    const { lead, members, pdfFile } = teamData;

    for (let key in lead) {
      if (lead[key] === "") {
        setLeadMissing(true);
        break;
      } else setLeadMissing(false);
    }

    for (let key in members[0]) {
      if (members[0][key] === "") {
        setMem2Missing(true);
        break;
      } else setMem2Missing(false);
    }

    for (let key in members[1]) {
      if (members[1][key] === "") {
        setMem3Missing(true);
        break;
      } else setMem3Missing(false);
    }

    if (member4) {
      for (let key in members[2]) {
        if (members[2][key] === "") {
          setMem4Missing(true);
          break;
        } else setMem4Missing(false);
      }
    } else setMem4Missing(false);

    if (pdfFile === null) {
      setPdfMissing(true);
    } else setPdfMissing(false);
  }

  // check if phone number is 10 digits or invalid
  const [phoneError, setPhoneError] = useState(false);
  const validNumber = new RegExp("[0-9]{10}");

  const handlePhoneInvalid = () => {
    if (teamData.lead.phone === "") return;
    if (!validNumber.test(teamData.lead.phone)) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };

  return (
    <div className="flex justify-center h-auto">
      <div className="w-11/12 md:w-2/5 mt-24 md:mt-32 mb-10 pb-10 bg-bg_color bg-opacity-20 backdrop-blur-blur1">
        <h1 className="text-center text-3xl md:text-4xl font-inter font-bold text-text_col_1 my-6">
          Registration
        </h1>
        <form action="">
          {/* Team lead section */}
          <section className="px-6 md:px-12">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl md:3xl font-inter font-bold text-text_col_1 ">
                Team Lead
              </h2>
              <div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setMember4((prev) => !prev);
                  }}
                  className="bg-blue1 px-4 py-2 rounded-3xl text-text_col_1 font-inter font-semibold"
                >
                  {member4 ? <p>4 Members</p> : <p>3 Members</p>}
                </button>
              </div>
            </div>
            <RegLead leadData={teamData.lead} onLeadChange={handleLeadChange} />
          </section>
          {/* Team member 1 */}
          <section className="mt-8 px-6 md:px-12">
            <h2 className="text-2xl md:3xl ml-6 mb-4 font-inter font-bold text-text_col_1">
              Team Member 2
            </h2>
            <RegMem
              memData={teamData.members[0]}
              onMemChange={(field, value) => handleMemChange(0, field, value)}
            />
          </section>
          <section className="mt-8 px-6 md:px-12">
            <h2 className="text-2xl md:3xl ml-6 mb-4 font-inter font-bold text-text_col_1">
              Team Member 3
            </h2>
            <RegMem
              memData={teamData.members[1]}
              onMemChange={(field, value) => handleMemChange(1, field, value)}
            />
          </section>
          {member4 && (
            <section className="mt-8 px-6 md:px-12">
              <h2 className="text-2xl md:3xl ml-6 mb-4 font-inter font-bold text-text_col_1">
                Team Member 4
              </h2>
              <RegMem
                memData={teamData.members[2]}
                onMemChange={(field, value) => handleMemChange(2, field, value)}
              />
            </section>
          )}
          <section className="mx-6 md:mx-12 mt-6 mb-4 px-6 py-4 border-2 border-blue1 rounded-xl font-inter font-medium text-text_col_1">
            <p className="mb-2 text-xl">Upload Abstract</p>
            <input
              onChange={handlePdfChange}
              type="file"
              accept="application/pdf"
              className="w-full bg-white bg-opacity-0 "
            />
          </section>
          <section className="flex flex-col items-center">
            {leadMissing && (
              <p className="text-red-500">Empty fields in Team Lead</p>
            )}
            {mem2Missing && (
              <p className="text-red-500">Empty fields in Team Member 2</p>
            )}
            {mem3Missing && (
              <p className="text-red-500">Empty fields in Team Member 3</p>
            )}
            {mem4Missing && (
              <p className="text-red-500">Empty fields in Team Member 4</p>
            )}
            {pdfMissing && (
              <p className="text-red-500">Abstract not uploaded</p>
            )}
            {phoneError && <p className="text-red-500">Invalid phone number</p>}
          </section>
          <section className="px-6 md:px-12 mt-6">
            <button
              onClick={(e) => {
                console.log({ teamData });
                e.preventDefault();
                checkMissing();
                handlePhoneInvalid();
              }}
              className="w-full bg-blue1 px-4 py-2 rounded-3xl text-text_col_1 font-inter font-semibold text-xl"
            >
              Submit
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
