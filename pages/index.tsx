import Hero from "../components/home/Hero";
import Image from "next/image";
import Layout from "./Layout";
import Steps from "@/components/home/Steps";
import CarGrid from "@/components/home/CarGrid";
import ModelGrid from "@/components/home/ModelGrid";
import ManfGrid from "@/components/home/ManfGrid";

export default function Home() {
  return (
    <Layout>
      <main className="">
        <Hero />
        <Steps />
        <CarGrid />
        <ModelGrid />
        <ManfGrid />
      </main>
    </Layout>
  );
}
