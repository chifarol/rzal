import React from "react";
import useSWR from "swr";
import axios from "axios";

type Props = {
  key: string;
};

export const useSwrGet = (key: string) => {
  const { data, error, isLoading } = useSWR(key, (url) =>
    axios
      .get(process.env.NEXT_PUBLIC_BACKEND_SERVER_URL + url)
      .then((res) => res.data)
  );
  return { data, error, isLoading };
};

export const modelsData = () => {
  const { data, error, isLoading } = useSWR(
    "/wp-json/wp/v2/vehicle_models?_fields[]=id&_fields[]=title&_fields[]=slug&_fields[]=acf",
    (url) =>
      axios
        .get(process.env.NEXT_PUBLIC_BACKEND_SERVER_URL + url)
        .then((res) => res.data),
    { refreshInterval: 4000 * 60 }
  );
  return { data, error, isLoading };
};
export const manufacturersData = () => {
  const { data, error, isLoading } = useSWR(
    "/wp-json/wp/v2/vehicle_manufacturers?_fields[]=id&_fields[]=title&_fields[]=slug&_fields[]=acf",
    (url) =>
      axios
        .get(process.env.NEXT_PUBLIC_BACKEND_SERVER_URL + url)
        .then((res) => res.data)
  );
  return { data, error, isLoading };
};
export const vehiclesData = () => {
  const { data, error, isLoading } = useSWR(
    "/wp-json/wp/v2/vehicles?acf_format=standard&_fields[]=id&_fields[]=title&_fields[]=slug&_fields[]=featured_media&_fields[]=guid&_fields[]=acf",
    (url) =>
      axios
        .get(process.env.NEXT_PUBLIC_BACKEND_SERVER_URL + url)
        .then((res) => res.data)
  );
  return { data, error, isLoading };
};
export const getVehicleData = (slug: string) => {
  const { data, error, isLoading } = useSWR(
    `/wp-json/wp/v2/vehicles/?slug=${slug}&acf_format=standard&_fields[]=id&_fields[]=title&_fields[]=slug&_fields[]=featured_media&_fields[]=guid&_fields[]=acf`,
    (url) =>
      axios
        .get(process.env.NEXT_PUBLIC_BACKEND_SERVER_URL + url)
        .then((res) => res.data)
  );
  return { data, error, isLoading };
};
export const fImageData = (id: number) => {
  const { data, error, isLoading } = useSWR(
    `/wp-json/wp/v2/media/${id}`,
    (url) =>
      axios
        .get(process.env.NEXT_PUBLIC_BACKEND_SERVER_URL + url)
        .then((res) => res.data)
  );
  return { data, error, isLoading };
};
