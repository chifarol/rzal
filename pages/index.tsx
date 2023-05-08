import Hero from "../components/home/Hero";
import Image from "next/image";
import Layout from "./Layout";
import Steps from "@/components/home/Steps";
import CarGrid from "@/components/home/CarGrid";
import ModelGrid from "@/components/home/ModelGrid";
import ManfGrid from "@/components/home/ManfGrid";
import { GetStaticPropsContext } from "next";
import {
  ModelType,
  VehicleArrayType,
  VehicleType,
} from "@/components/functions/types";
import axios from "axios";

export default function Home({
  vehiclesData,
  modelsData,
  manfData,
}: {
  vehiclesData: VehicleArrayType;
  modelsData: ModelType;
  manfData: ModelType;
}) {
  return (
    <Layout>
      <main className="">
        <Hero />
        <Steps />
        <CarGrid vehiclesData={vehiclesData} />
        <ModelGrid modelsData={modelsData} />
        <ManfGrid manfData={manfData} />
      </main>
    </Layout>
  );
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  let vehiclesData: VehicleArrayType = await axios
    .get(
      process.env.NEXT_PUBLIC_BACKEND_SERVER_URL +
        `/wp-json/wp/v2/vehicles?acf_format=standard&_fields[]=id&_fields[]=title&_fields[]=slug&_fields[]=featured_media&_fields[]=guid&_fields[]=acf`
    )
    .then((res) => res.data);
  vehiclesData = vehiclesData.filter((x, index) => index < 7);
  const modelsData = await axios
    .get(
      process.env.NEXT_PUBLIC_BACKEND_SERVER_URL +
        `/wp-json/wp/v2/vehicle_models?acf_format=standard&_fields[]=id&_fields[]=title&_fields[]=slug&_fields[]=acf`
    )
    .then((res) => res.data);
  const manfData = await axios
    .get(
      process.env.NEXT_PUBLIC_BACKEND_SERVER_URL +
        `/wp-json/wp/v2/vehicle_manufacturers?acf_format=standard&_fields[]=id&_fields[]=title&_fields[]=slug&_fields[]=acf`
    )
    .then((res) => res.data);
  // console.log("vehiclesData", vehiclesData);
  return {
    props: { vehiclesData, modelsData, manfData },
    revalidate: 60 * 60 * 24, // 1 day in seconds
  };
};
