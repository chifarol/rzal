import Hero from "../components/home/Hero";
import Image from "next/image";
import Layout from "./Layout";
import Navbar from "@/components/nav-foot/Navbar";
import Searchpage from "@/components/search/SearchPage";
import { ModelType, VehicleArrayType } from "@/components/functions/types";
import { GetStaticPropsContext } from "next";
import axios from "axios";
import parse from "html-react-parser";
import Head from "next/head";

export default function Search({
  vehiclesData,
  modelsData,
  manfData,
}: {
  vehiclesData: VehicleArrayType;
  modelsData: ModelType;
  manfData: ModelType;
}) {
  const fullHead = parse(vehiclesData[0].yoast_head || "");
  // console.log("fullHead", fullHead, "yoast_head", vehiclesData[0].yoast_head);
  return (
    <Layout>
      <Navbar fill="#171020" />
      <Head>
        {fullHead}
        <title>Search Vehicles - Rzal Car Hire</title>
      </Head>
      <main className="">
        <Searchpage
          vehiclesData={vehiclesData}
          modelsData={modelsData}
          manfData={manfData}
        />
      </main>
    </Layout>
  );
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  let vehiclesData: VehicleArrayType = await axios
    .get(
      process.env.NEXT_PUBLIC_BACKEND_SERVER_URL +
        `/wp-json/wp/v2/vehicles?acf_format=standard&_fields[]=id&_fields[]=title&_fields[]=slug&_fields[]=featured_media&_fields[]=guid&_fields[]=acf&_fields[]=yoast_head&_fields[]=yoast_head_json`
    )
    .then((res) => res.data);
  vehiclesData = vehiclesData.filter((x, index) => index < 7);
  const modelsData = await axios
    .get(
      process.env.NEXT_PUBLIC_BACKEND_SERVER_URL +
        `/wp-json/wp/v2/vehicle_models?acf_format=standard&_fields[]=id&_fields[]=title&_fields[]=slug&_fields[]=acf&_fields[]=yoast_head&_fields[]=yoast_head_json`
    )
    .then((res) => res.data);
  const manfData = await axios
    .get(
      process.env.NEXT_PUBLIC_BACKEND_SERVER_URL +
        `/wp-json/wp/v2/vehicle_manufacturers?acf_format=standard&_fields[]=id&_fields[]=title&_fields[]=slug&_fields[]=acf&_fields[]=yoast_head&_fields[]=yoast_head_json`
    )
    .then((res) => res.data);
  // console.log("vehiclesData", vehiclesData);
  return {
    props: { vehiclesData, modelsData, manfData },
    revalidate: 60 * 60 * 24, // 1 day in seconds
  };
};
