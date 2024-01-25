import React from "react";
import { useState, useEffect } from "react";
import {
  getFirestore,
  doc,
  addDoc,
  updateDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Abstract() {
  const db = getFirestore();

  const navigate = useNavigate();

  const [teamData, setTeamData] = useState({
    lead: {
      status: "2",
    },
    pdfLink: "",
  });

  useEffect(() => {
    if (sessionStorage.getItem("email") == undefined) {
      navigate("/");
    }

    const colRef = collection(db, "registration");

    // const submit = doc(db, "registration", sessionStorage.getItem("email"));

    getDocs(colRef)
      .then((snapshot) => {
        const isEmailRegistered = snapshot.docs.some((doc) => {
          const user_data = { ...doc.data(), id: doc.id };
          return user_data.lead.email === sessionStorage.getItem("email");
        });

        // setIsEmailExists(isEmailRegistered);

        // if (isEmailRegistered) {
        //   setPopupIsOpen2(true);
        // }

        /* if (isEmailRegistered) {
          alert("Leader email id is already registered");
          navigate("/");
        } */
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [linkError, setLinkError] = useState(false);
  const validLink = new RegExp("^(?:https://)?docs.google.com/document/d/.+$");

  const handleLinkInvalid = () => {
    // if (teamData.pdfLink === "") return;
    // if (!validLink.test(teamData.pdfLink) || teamData.pdfLink != "") {
    //   setLinkError(true);
    // } else {
    //   setLinkError(false);
    // }
  };

  if (linkError) {
    alert("Invalid abstract link. Please use Google Docs link only.");
    // return;
  }

  const handleLeadChange = (field, value) => {
    setTeamData((prevData) => ({
      ...prevData,
      lead: { ...prevData.lead, [field]: value },
    }));
  };

  const handlePdfChange = (e) => {
    const link = e.target.value;
    setTeamData((prevData) => ({ ...prevData, pdfLink: link }));
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();

    const submit = doc(db, "registration", sessionStorage.getItem("email"));

    updateDoc(submit, { status: "2" }, { pdfLink: link })
      .then(() => {
        console.log("Document successfully updated!");
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
      });
  };

  return (
    <>
      <div className="flex justify-center h-auto">
        <div className="w-11/12 md:w-2/5 mt-24 md:mt-32 mb-10 pb-10 bg-bg_color bg-opacity-20 backdrop-blur-blur1">
          <h1 className="text-center text-3xl md:text-4xl font-inter font-bold text-text_col_1 my-6">
            Abstract Submission
          </h1>
          <h1 className="text-center text-2xl lg:text-3xl font-inter font-bold text-text_col_1 my-6">
            Welcome, {sessionStorage.getItem("email")}
          </h1>
          <p className="text-text_col_1 my-6 mx-14 text-center ">
            Submit your abstract link by 01 Febraury 2024. This can be done
            later as well by logging in through same Google account.
          </p>
          <form
            action=""
            onSubmit={(e) => {
              handleFormSubmission(e);
            }}
          >
            <section className="mx-6 md:mx-12 mt-6 mb-4 px-6 py-4 border-2 border-blue1 rounded-xl font-inter font-medium text-text_col_1">
              <p className="mb-2 text-xl">Upload Abstract Link</p>
              <input
                onChange={handlePdfChange}
                type="url"
                // required="required"
                className="w-full bg-white border-2 border-blue2 rounded-xl bg-opacity-0 py-2 px-5"
              />
            </section>
            <button
              onClick={(e) => {
                e.preventDefault();
                // checkMissing();
                handleLinkInvalid();
                // handleFormSubmission(e);
                submitForm();
              }}
              className="w-full bg-blue1 px-4 py-2 rounded-xl text-text_col_1 font-inter font-semibold text-xl"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
