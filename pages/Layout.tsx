import Footer from "@/components/nav-foot/Footer";
import Navbarr from "@/components/nav-foot/Navbar";
import React, { PropsWithChildren } from "react";
import { Navbar } from "react-bootstrap";
import Head from "next/head";

import { closeMenu } from "../store/features/menuOpenSlice";
import { useAppSelector, useAppDispatch } from "../store/hooks";

type Props = { children: JSX.Element[] | JSX.Element };

const Layout = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.jpg"></link>
      </Head>

      <div
        className="tw-w-full tw-font-josefin tw-flex tw-flex-col tw-min-h-[100vh]"
        onClick={() => {
          dispatch(closeMenu());
        }}
      >
        {/* <Navbarr /> */}
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
