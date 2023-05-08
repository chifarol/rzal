import React from "react";
import Head from "next/head";
import Layout from "./Layout";
import Navbar from "@/components/nav-foot/Navbar";
import noResultsIcon from "@/assets/images/404.svg";
import Image from "next/image";
import Contactpage from "@/components/contact-us/Contactpage";

const PageNotFound = () => {
  return (
    <Layout>
      <Head>
        <title>Contact Us - Rzal Car Hire</title>
      </Head>
      <Navbar fill="#171020" />
      <Contactpage />
    </Layout>
  );
};

export default PageNotFound;
