import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

export const HireForm = ({ vehicleData }) => {
  const [account, setAccount] = useState({
    startdate: "",
    enddate: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [emailMsg, setEmailMsg] = useState({ text: "", success: false });
  function showPickerS() {
    startDateRef.current.showPicker();
  }
  function showPickerE() {
    returnDateRef.current.showPicker();
  }

  const formRef = useRef(null);
  const fnameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const finalAdressRef = useRef(null);
  const takeoffAddressRef = useRef(null);
  const messageRef = useRef(null);
  const startDateRef = useRef(null);
  const returnDateRef = useRef(null);

  function submitForm(e) {
    console.dir(formRef.current)
    e.preventDefault();
    setIsSending(true)
    formRef.current.reportValidity()
    if (!formRef.current.reportValidity()) {
      setEmailMsg({ text: "some fields are missing", success: false });
      setIsSending(false)
      return
    }
    // console.log(fnameRef.current.value, emailRef.current.value, messageRef.current.value);
    axios.post("/api/hire",
      {
        name: fnameRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
        finalAdress: finalAdressRef.current.value,
        takeoffAddress: takeoffAddressRef.current.value,
        vehicle: vehicleData,
        vehiclePageFr: window.location.href,
        vehiclePage: vehicleData.guid.rendered,
        startDate: startDateRef.current.value,
        returnDate: returnDateRef.current.value,
        text: messageRef.current.value,
      },
    )
      .then((res) => {
        // console.log("mail status", res);
        setIsSending(false)
        if (res.data.emailStatus) {
          setEmailMsg({ text: "Your request was submitted successfully. One of our representatives will contact you shortly.", success: true });
          window.location.hash = "hire-contact-form"
        } else {
          setEmailMsg({ text: "Your request could not be sent please try again later.", success: false });
        }
      })
      .catch((err) => {
        // console.log("mail error", err.message);
      })
  }
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    // treat state as immutable!
    // you need to creaet a new object here
    // See https://stackoverflow.com/a/25333702/17487348 for how to create a property from a string in ES6
    setAccount({ ...account, [name]: value });
  }
  return (
    <div
      className="tw-bg-s3 tw-p-[1.5rem] tw-mt-[3rem] tw-max-w-[70rem] tw-mx-[auto] md:tw-p-[2.5rem_1.5rem] tw-text-neutral-0d"
      id="hire-contact-form"
    >
      <div className="tw-bg-yellow-f3 tw-justify-center tw-items-center">
        <form action="" ref={formRef} method="post">
          <span className="tw-text-24 tw-text-n1">
            HIRE THIS VEHICLE
          </span>
          <h2 className="tw-text-n4 tw-font-medium tw-mt-[1rem]">
            Kindly fill our form with your details and one of our representatives
            will contact you shortly.
          </h2>
          <p className={`${emailMsg.success ? "text-success" : "text-danger"} tw-mt-[1rem]`}>
            {emailMsg.text}
          </p>

          <div className="tw-mt-[.5rem] tw-grid tw-gap-[1rem]">
            <div>
              <span>Vehicle</span>
              <input
                type="text"
                placeholder=""
                defaultValue={vehicleData.title.rendered}
                className="tw-h-[3.5rem] tw-mt-[0.5rem] tw-p-[1rem] tw-w-[100%]"
                readOnly
              />
            </div>
            <div>
              <span>Name*</span>
              <input
                ref={fnameRef}
                type="text"
                placeholder="Enter your name"
                className="tw-h-[3.5rem] tw-mt-[0.5rem] tw-p-[1rem] tw-w-[100%]"
                required
              />
            </div>

            <div>
              <span>Email*</span>
              <input
                ref={emailRef}
                type="email"
                placeholder="Enter your email"
                className="tw-h-[3.5rem] tw-mt-[0.5rem] tw-p-[1rem] tw-w-[100%]"
                required
              />
            </div>
            <div>
              <span>Phone No*</span>
              <input
                ref={phoneRef}
                type="text"
                placeholder="Enter your phone number"
                className="tw-h-[3.5rem] tw-mt-[0.5rem] tw-p-[1rem] tw-w-[100%]"
                required
              />
            </div>
            <div>
              <span>Take Off Address*</span>
              <input
                ref={takeoffAddressRef}
                type="text"
                placeholder="Enter take off address"
                className="tw-h-[3.5rem] tw-mt-[0.5rem] tw-p-[1rem] tw-w-[100%]"
                required
              />
            </div>
            <div>
              <span>Final Address</span>
              <input
                ref={finalAdressRef}
                type="text"
                placeholder="Enter final address"
                className="tw-h-[3.5rem] tw-mt-[0.5rem] tw-p-[1rem] tw-w-[100%]"
              />
            </div>

            <div className="tw-flex tw-items-center tw-gap-[1.5rem]">
              <div className="tw-flex tw-flex-col tw-w-[100%]">
                <span>Pickup Date</span>
                <input
                  type="date"
                  className="tw-bg-s1 tw-h-[3.5rem] tw-mt-[0.5rem]  tw-w-[100%] tw-p-[1rem] sm:tw-max-w-[130px]"
                  id="date"
                  name="startdate"
                  ref={startDateRef}
                  min={new Date().toISOString().split("T")[0]}
                  onFocus={showPickerS}
                  onClick={showPickerS}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="tw-flex tw-flex-col tw-w-[100%]">
                <span>Return Date</span>
                <input
                  type="date"
                  className="tw-bg-s1 tw-h-[3.5rem] tw-mt-[0.5rem]  tw-w-[100%] tw-p-[1rem] sm:tw-max-w-[130px]"
                  id="date"
                  name="enddate"
                  ref={returnDateRef}
                  min={
                    account.startdate
                      ? new Date(account.startdate).toISOString().split("T")[0]
                      : ""
                  }
                  onFocus={showPickerE}
                  onClick={showPickerE}
                  onChange={handleChange}
                  required
                ></input>
              </div>
            </div>

            <div>
              <span>Any other thing you would like us to know?</span>
              <textarea
                ref={messageRef}
                name=""
                id=""
                cols="1"
                rows="4"
                className="tw-min-h-[5.5rem] tw-mt-[0.5rem] tw-p-[1rem] tw-w-[100%]"
                defaultValue=""
              ></textarea>
            </div>
            {/* button */}
            <button className={`${isSending || 'pointer'} tw-max-w-[fit-content] tw-mt-[1rem] tw-bg-p4 tw-text-s2 tw-p-[.5rem_2rem] tw-rounded-[.25rem] md:tw-p-[.5rem] ] tw-text-center`} onClick={(e) => submitForm(e)} disabled={isSending}>
              {isSending ? 'Sending...' : 'Send Request'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
