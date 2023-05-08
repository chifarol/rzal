import Image from "next/image";
import React, { useEffect } from "react";
import menuIcon from "../../assets/images/menu.svg";
import closeMenuIcon from "../../assets/images/cancel.svg";
import {
  openMenu,
  selectMenuIsOpen,
  closeMenu,
} from "../../store/features/menuOpenSlice";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import Link from "next/link";

type Props = {
  fill?: string;
};

const Navbar = ({ fill = "#221C29" }: Props) => {
  const dispatch = useAppDispatch();
  const menuIsOpen = useAppSelector(selectMenuIsOpen);

  useEffect(() => {
    // console.log(menuIsOpen);
  }, [menuIsOpen]);

  return (
    <div
      className={`tw-flex tw-items-center tw-justify-between tw-text-s1 tw-px-[4rem] tw-py-[2rem] tw-bg-[${fill}] md:tw-p-[1rem_1.5rem]`}
    >
      <Link href="/" className="tw-text-20 tw-text-bold md:tw-text-16">
        RITZ CAR HIRE
      </Link>
      <div className="tw-flex tw-gap-[1.5rem] tw-text-medium tw-text-16 md:tw-hidden">
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
      <div
        className="tw-relative tw-hidden md:tw-block"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {!menuIsOpen && (
          <div className="tw" onClick={() => dispatch(openMenu())}>
            <Image
              width={48}
              height={48}
              alt="menu-open"
              className="tw-h-[2rem] md:tw-h-[1.5rem] pointer"
              src={menuIcon}
            />
          </div>
        )}
        {menuIsOpen && (
          <div className="tw" onClick={() => dispatch(closeMenu())}>
            <Image
              width={48}
              height={48}
              alt="menu-close"
              className="tw-h-[2rem] md:tw-h-[1.5rem] pointer"
              src={closeMenuIcon}
            />
          </div>
        )}
        {menuIsOpen && (
          <div className="tw-absolute tw-z-[40] tw-p-[.5rem_1rem] tw-right-[0.75rem] tw-top-[2rem] tw-bg-s1 tw-flex tw-flex-col tw-text-n1 tw-w-[150px] tw-rounded-[12px] sh-410">
            <Link href="#" className="tw-py-[.5rem] border-s7-bottom">
              Home
            </Link>
            <Link href="#" className="tw-py-[.5rem] border-s7-bottom">
              Catalogue
            </Link>
            <Link href="#" className="tw-py-[.5rem] border-s7-bottom">
              Hire
            </Link>
            <Link href="#" className="tw-py-[.5rem] border-s7-bottom">
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
