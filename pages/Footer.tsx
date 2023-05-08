import Hero from "../components/home/Hero";
import Image from "next/image";
import Layout from "./Layout";
import Navbar from "@/components/nav-foot/Navbar";
import Searchpage from "@/components/search/SearchPage";
import Contacts from "@/components/contact-us/Contactpage";

export default function Contact() {
  return (
    <Layout>
      <Navbar fill="#171020" />
      <main className="">
        <Contacts />
      </main>
    </Layout>
  );
}
