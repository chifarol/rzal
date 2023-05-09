import Image from "next/image";
import React from "react";
import logo from "../../assets/images/logo.jpeg";
import emailIcon from "../../assets/images/email-dark.svg";
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
        <div className="tw-grid tw-grid-cols-2 tw-gap-[2rem] md:tw-flex md:tw-flex-col-reverse">
          <ContactForm />
          <div className="tw-flex tw-flex-col tw-gap-[1rem] tw-text-16 tw-text-n1 md:tw-gap-[.5rem] tw-font- sm:tw-items-start tw-pb-[1rem]">
            <Link
              href="mailto:ritzassociateslimited@gmail.com?"
              target="_blank"
              className="tw-flex tw-gap-[.5rem] tw-items-center sm:tw-items-start"
            >
              <Image
                width={32}
                height={32}
                alt="vehicle"
                className="tw-h-[2rem] md:tw-h-[1.5rem]"
                src={emailIcon}
              />
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
              <Image
                width={32}
                height={32}
                alt="vehicle"
                className="tw-h-[2rem] md:tw-h-[1.5rem]"
                src={mapIcon}
              />
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
