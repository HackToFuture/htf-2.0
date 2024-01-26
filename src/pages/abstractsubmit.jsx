import React from "react";
import { useState, useEffect } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../config/firebase";
import { getFirestore, doc, addDoc, updateDoc, collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Abstract() {
    const [currentUserDetails, setCurrentUserDetails] = useState({});
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [isCurrentUserRegistered, setIsCurrentUserRegistered] = useState(true);
    const [pdfLink, setPdfLink] = useState(null);
    const db = getFirestore();

   
    const validation = () => {
        const colRef = collection(db, "registration");
        // const submit = doc(db, "registration", sessionStorage.getItem("email"));
        getDocs(colRef)
            .then((snapshot) => {
                const isEmailRegistered = snapshot.docs.some((doc) => {
                    setCurrentUserDetails({ ...doc.data(), id: doc.id });
                    const user_data = { ...doc.data(), id: doc.id }
                    return user_data.lead.email === sessionStorage.getItem("email");
                });
                // if (currentUserDetails.lead.pdfLink != undefined) {
                //     console.log("Abstract alraedy submitted")
                //     navigate("/")
                //    }
                // console.log(currentUserDetails)
                // setIsEmailExists(isEmailRegistered)

                if (!isEmailRegistered) {
                    setIsCurrentUserRegistered(false);
                    alert("This email is not registered.\nPlease register first to proceed");
                    navigate("/registration");
                    return;
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const googleAuth = () => {
        signInWithPopup(auth, provider).then((data) => {
            sessionStorage.setItem("email", data.user.email);
            sessionStorage.setItem("name", data.user.displayName);
            setLoggedInUser(data.user.displayName);
            validation()
        });
    };
    const navigate = useNavigate();
    // const [teamData, setTeamData] = useState({
    //   lead: {
    //     status: "2",
    //   },
    //   pdfLink: "",
    // });

    useEffect(() => {
        // navigate("/");
        if (sessionStorage.getItem("email") == undefined) {
            googleAuth();
        } else {
            validation();
        }
        // return () => {
        //   googleAuth()
        // }
    }, []);

    const [linkError, setLinkError] = useState(false);
    const validLink = new RegExp("^(?:https://)?docs.google.com/document/d/.+$");

    const handleLinkInvalid = (e) => {
        e.preventDefault();
        console.log(pdfLink);
        if (pdfLink === null) {
            setLinkError(true);
        }
        if (!validLink.test(pdfLink) || pdfLink == "") {
            setLinkError(true);
        } else {
            setLinkError(false);
            handleFormSubmission(e);
        }
    };

    if (linkError) {
        alert("Invalid abstract link. Please use Google Docs link only.");
        // return;
    }

    // const handleLeadChange = (field, value) => {
    //   setTeamData((prevData) => ({
    //     ...prevData,
    //     lead: { ...prevData.lead, [field]: value },
    //   }));
    // };

    const handlePdfChange = (e) => {
        // const link = e.target.value;
        // setTeamData((prevData) => ({ ...prevData, pdfLink: link }));
        setPdfLink(e.target.value);
    };

    const handleFormSubmission = (e) => {
        e.preventDefault();
        validation();
        if (isCurrentUserRegistered) {
            console.log(currentUserDetails);
            const userDetails = { ...currentUserDetails };
            userDetails.lead.status = "2";
            userDetails.lead.pdfLink = pdfLink;
            userDetails.lead.last_updated = new Date();
            const submit = doc(db, "registration", currentUserDetails.id);

            updateDoc(submit, userDetails)
                .then(() => {
                    alert("Document successfully updated!");
                })
                .catch((error) => {
                    console.error("Error updating document: ", error);
                });
        }
    };

    return (
        <>
            <div className="flex justify-center h-auto">
                <div className="w-11/12 md:w-2/5 mt-24 md:mt-32 mb-10 pb-10 bg-bg_color bg-opacity-20 backdrop-blur-blur1">
                    <h1 className="text-center text-3xl md:text-4xl font-inter font-bold text-text_col_1 my-6">
                        Abstract Submission
                    </h1>
                    <h1 className="text-center text-2xl lg:text-3xl font-inter font-bold text-text_col_1 my-6">
                        Welcome, {loggedInUser || sessionStorage.getItem("name")}
                    </h1>
                    <p className="text-text_col_1 my-6 mx-14 text-center ">
                        Submit your abstract link by 01 Febraury 2024. This can be done later as well by logging in through
                        same Google account.
                    </p>
                    <form
                        action=""
                        onSubmit={(e) => {
                            handleLinkInvalid(e);
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
                            // onClick={(e) => {
                            //   e.preventDefault();
                            //   // checkMissing();
                            //   handleLinkInvalid();
                            //   // handleFormSubmission(e);
                            //   submitForm();
                            // }}
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
