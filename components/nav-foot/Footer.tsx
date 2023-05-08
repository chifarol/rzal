import Image from "next/image";
import React from "react";
import logo from "../../assets/images/logo.jpeg";
import emailIcon from "../../assets/images/email.svg";
import whatsappIcon from "../../assets/images/whatsapp-line.svg";
import whatsappSticky from "../../assets/images/whatsapp-icon.png";
import copyrightIcon from "../../assets/images/copyright.svg";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <div className="tw-bg-[#171020] tw-flex tw-flex-col tw-gap-[2rem] tw-items-center tw-p-[3rem] tw-mt-[auto] md:tw-gap-[1.5rem] md:tw-p-[2rem_1.5rem] md:tw-text-center">
        <Image
          width={120}
          alt="vehicle"
          src={logo}
          className="!tw-relative tw-h-[auto] md:tw-h-[5rem]"
        />
        <div className="tw-flex tw-gap-[1.5rem] tw-text-20 tw-text-s1 md:tw-flex-col md:tw-gap-[.5rem]">
          <a href="#" className="tw">
            Home
          </a>
          <a href="#" className="tw">
            Catalogue
          </a>
          <a href="#" className="tw">
            Hire
          </a>
          <a href="#" className="tw">
            Contact Us
          </a>
        </div>
        <div className="tw-flex tw-items-center tw-gap-[1.5rem] tw-text-16 tw-text-s1 md:tw-gap-[1rem]">
          <a href="mailto:goodchoirworld@gmail.com?" target="_blank">
            <Image
              width={32}
              height={32}
              alt="vehicle"
              className="tw-h-[2rem] md:tw-h-[1.5rem]"
              src={emailIcon}
            />
          </a>
          <a href="https://wa.me/2349044031237" target="_blank">
            <Image
              width={32}
              height={32}
              alt="vehicle"
              className="tw-h-[2rem] md:tw-h-[1.5rem]"
              src={whatsappIcon}
            />
          </a>
        </div>
        <div className="tw-flex tw-items-center tw-gap-[1rem] tw-text-16 tw-font-light tw-text-s1">
          <Image
            width={24}
            height={24}
            alt="vehicle"
            className="tw-h-[1rem]"
            src={copyrightIcon}
          />
          <p className="tw">2023 All rights reserved.</p>
        </div>
      </div>
      <div className="tw-flex tw-w-full tw-mt-[-4.5rem] tw-items-end tw-sticky tw-bottom-[2rem] tw-right-[2rem]">
        <a
          href="https://wa.me/2349044031237"
          target="_blank"
          className="tw-ml-[auto] tw-mr-[2rem] tw-h-[3rem] tw-w-[3rem] tw-grid tw-place-items-center tw-bg-[#25D366] tw-rounded-[100px] sh-24"
        >
          <Image
            alt="whatsapp-icon"
            width={32}
            height={32}
            className=""
            src={whatsappIcon}
          />
        </a>
      </div>
    </>
  );
};

export default Footer;
