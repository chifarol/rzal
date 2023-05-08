import Image from "next/image";
import React from "react";
import logo from "../../assets/images/logo.jpeg";
import emailIcon from "../../assets/images/email.svg";
import whatsappIcon from "../../assets/images/whatsapp-line-dark.svg";
import phoneIcon from "../../assets/images/phone-dark.svg";
import mapIcon from "../../assets/images/map-pin-dark.svg";
import copyrightIcon from "../../assets/images/copyright.svg";
import { ContactForm } from "./ContactForm";
import Link from "next/link";

type Props = {};

const Contactpage = (props: Props) => {
  return (
    <>
      <div className="tw-p-[4rem] md:tw-p-[1.5rem] tw-text-n1">
        <h4 className="tw-font-bold tw-text-24 tw-mb-[2rem] md:tw-text-20">
          CONTACT US
        </h4>
        <div className="tw-grid tw-grid-cols-2 tw-gap-[2rem] md:tw-grid-cols-1">
          <ContactForm />
          <div className="tw-flex tw-flex-col tw-gap-[1rem] tw-text-16 tw-text-n1 md:tw-gap-[.5rem] tw-font- sm:tw-items-start tw-pb-[1rem]">
            <Link
              href="mailto:ritzassociateslimited@gmail.com?"
              target="_blank"
              className="tw-flex tw-gap-[.5rem] tw-items-center sm:tw-items-start"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#221C29"
                viewBox="0 0 256 256"
              >
                <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>
              </svg>
              <p className="tw">ritzassociateslimited@gmail.com</p>
            </Link>
            <Link
              href="https://wa.me/2347060710099"
              target="_blank"
              className="tw-flex tw-gap-[.5rem] tw-items-center sm:tw-items-start"
            >
              <Image
                width={32}
                height={32}
                alt="vehicle"
                className="tw-h-[2rem] md:tw-h-[1.5rem]"
                src={whatsappIcon}
              />
              <p className="tw">+234(0)7060710099</p>
            </Link>
            <div className="tw-flex tw-gap-[.5rem] tw-items-center sm:tw-items-start">
              <Image
                width={32}
                height={32}
                alt="vehicle"
                className="tw-h-[2rem] md:tw-h-[1.5rem]"
                src={phoneIcon}
              />
              <p className="tw">+234(0)8121716390</p>
            </div>
            <div className="tw-flex tw-gap-[.5rem] tw-items-center sm:tw-items-start sm:tw-max-w-[18rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#221C29"
                viewBox="0 0 256 256"
              >
                <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
              </svg>
              <p className="">
                7 Captain Olajide George Street, Lekki Phase 1, Lagos State.
              </p>
            </div>
            <div className="tw-flex tw-gap-[.5rem] tw-items-center sm:tw-items-start sm:tw-max-w-[18rem]">
              <Image
                width={32}
                height={32}
                alt="vehicle"
                className="tw-h-[2rem] md:tw-h-[1.5rem]"
                src={mapIcon}
              />
              <p className="">70 AdaGeorge Road, Port Harcourt, Rivers State</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactpage;
