import Image from "next/image";
import React from "react";
import logo from "../../assets/images/logo.jpeg";
import emailIcon from "../../assets/images/email.svg";
import whatsappIcon from "../../assets/images/whatsapp-line.svg";
import phoneIcon from "../../assets/images/phone.svg";
import mapIcon from "../../assets/images/map-pin.svg";
import copyrightIcon from "../../assets/images/copyright.svg";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <div className="tw-bg-[#171020] tw-flex tw-flex-col tw-gap-[2rem] tw-items-center tw-p-[3rem] tw-mt-[auto] md:tw-gap-[1.5rem] md:tw-p-[2rem_1rem] sm:tw-items-start">
        <Image
          width={120}
          alt="vehicle"
          src={logo}
          className="!tw-relative tw-h-[auto] md:tw-h-[5rem]"
        />
        <div className="tw-flex tw-gap-[2rem] tw-text-20 tw-text-s1 md:tw-text-16">
          <Link href="/" className="tw">
            Home
          </Link>
          <Link href="/search?model=all&manufacturer=all" className="tw">
            Hire
          </Link>
          <Link href="/contact-us" className="tw">
            Contact Us
          </Link>
        </div>
        <div className="tw-flex tw-flex-col tw-items-center tw-gap-[1rem] tw-text-16 tw-text-s1 md:tw-gap-[.5rem] tw-font-light sm:tw-items-start tw-pb-[1rem]">
          <Link
            href="mailto:ritzassociateslimited@gmail.com?"
            target="_blank"
            className="tw-flex tw-gap-[.5rem] tw-items-center sm:tw-items-start"
          >
            <Image
              width={20}
              height={20}
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
              width={20}
              height={20}
              alt="vehicle"
              className="tw-h-[2rem] md:tw-h-[1.5rem]"
              src={whatsappIcon}
            />
            <p className="tw">+234(0)7060710099</p>
          </Link>
          <div className="tw-flex tw-gap-[.5rem] tw-items-center sm:tw-items-start">
            <Image
              width={20}
              height={20}
              alt="vehicle"
              className="tw-h-[2rem] md:tw-h-[1.5rem]"
              src={phoneIcon}
            />
            <p className="tw">+234(0)8121716390</p>
          </div>
          <div className="tw-flex tw-gap-[.5rem] tw-items-center sm:tw-items-start sm:tw-max-w-[18rem]">
            <Image
              width={20}
              height={20}
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
              width={20}
              height={20}
              alt="vehicle"
              className="tw-h-[2rem] md:tw-h-[1.5rem]"
              src={mapIcon}
            />
            <p className="">70 AdaGeorge Road, Port Harcourt, Rivers State</p>
          </div>
        </div>
        <div className="tw-flex tw-items-center tw-justify-center tw-gap-[1rem] tw-text-16 tw-font-light tw-text-s1 tw-w-full tw-pt-[1rem] sm:tw-justify-start  border-s7-top">
          <Image
            width={20}
            height={20}
            alt="vehicle"
            className="tw-h-[1rem]"
            src={copyrightIcon}
          />
          <p className="tw">2023 All rights reserved.</p>
        </div>
      </div>
      <div className="tw-flex tw-ml-[auto] tw-mt-[-4.5rem] tw-items-end tw-sticky tw-bottom-[2rem] tw-right-[2rem]">
        <Link
          href="https://wa.me/2347060710099"
          target="_blank"
          className="tw-ml-[auto] tw-mr-[0] tw-h-[3rem] tw-w-[3rem] tw-grid tw-place-items-center tw-bg-[#25D366] tw-rounded-[100px] sh-24"
        >
          <Image
            alt="whatsapp-icon"
            width={32}
            height={32}
            className=""
            src={whatsappIcon}
          />
        </Link>
      </div>
    </>
  );
};

export default Footer;
