import Hero from "@/components/home/Hero";
import Image from "next/image";
import Layout from "../Layout";
import Navbar from "@/components/nav-foot/Navbar";
import Detailspage from "@/components/details/Detailspage";
import { getVehicleData, vehiclesData } from "@/components/functions/swr";
import { VehicleArrayType, VehicleType } from "@/components/functions/types";
import { GetStaticProps, GetStaticPropsContext } from "next";
import axios from "axios";

export default function Post({ vehicleData }: { vehicleData: VehicleType }) {
  return (
    <Layout>
      <Navbar fill="#171020" />
      <main className="">
        <Detailspage vehicleData={vehicleData} />
      </main>
    </Layout>
  );
}
export async function getStaticPaths() {
  const vehicles: VehicleArrayType = await axios
    .get(
      process.env.NEXT_PUBLIC_BACKEND_SERVER_URL +
        "/wp-json/wp/v2/vehicles?acf_format=standard"
    )
    .then((res) => res.data);
  // console.log("vehicles", vehicles);
  let vehicleSlugs = vehicles.map((vehicle) => ({
    params: {
      slug: vehicle.slug,
    },
  }));
  return {
    paths: vehicleSlugs,
    fallback: false, // can also be true or 'blocking'
  };
}
export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const vehicleData: VehicleType[] = await axios
    .get(
      process.env.NEXT_PUBLIC_BACKEND_SERVER_URL +
        `/wp-json/wp/v2/vehicles?slug=${params?.slug}&acf_format=standard`
    )
    .then((res) => res.data);
  // console.log("vehicleData", vehicleData);
  return {
    props: { vehicleData: vehicleData[0] },
    revalidate: 60 * 60 * 24, // 1 day in seconds
  };
};
