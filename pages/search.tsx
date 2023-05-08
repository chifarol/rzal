import Hero from "../components/home/Hero";
import Image from "next/image";
import Layout from "./Layout";
import Navbar from "@/components/nav-foot/Navbar";
import Searchpage from "@/components/search/SearchPage";

export default function Search() {
  return (
    <Layout>
      <Navbar fill="#171020" />
      <main className="">
        <Searchpage />
      </main>
    </Layout>
  );
}
