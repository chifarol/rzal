import React from "react";
import Head from "next/head";
import Layout from "./Layout";
import Navbar from "@/components/nav-foot/Navbar";
import noResultsIcon from "@/assets/images/404.svg";
import Image from "next/image";

const PageNotFound = () => {
  return (
    <Layout>
      <Head>
        <title>Page Not Found - Rzal Car Hire</title>
      </Head>
      <Navbar fill="#171020" />
      <div className="tw-w-full tw-flex tw-flex-col tw-gap-[1rem] tw-items-center tw-my-[4rem]">
        <div className="tw-w-[20rem] tw-h-[auto] md:tw-w-[15rem]">
          <Image
            fill
            src={noResultsIcon}
            alt="404 image"
            className="!tw-relative"
            style={{ objectFit: "cover" }}
          />
        </div>
        <p className="tw-uppercaset tw-text-n1">Page not found</p>
      </div>
    </Layout>
  );
};

export default PageNotFound;
