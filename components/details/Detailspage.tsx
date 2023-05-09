import React, { useEffect, useState } from "react";
import { VehicleType } from "../functions/types";
import { HireForm } from "@/components/details/HireForm";
import backIcon from "@/assets/images/arrow-left.svg";
import Image from "next/image";
import Link from "next/link";
import PageLoader from "../loaders/PageLoader";

type Props = {
  vehicleData: VehicleType;
};

const Detailspage = ({ vehicleData }: Props) => {
  // console.log("vehicleData", vehicleData);
  const [currentImage, setCurrentImage] = useState("");
  useEffect(() => {
    setCurrentImage(vehicleData.acf.main_image);
  }, []);

  return (
    <div className="tw-p-[4rem] md:tw-p-[1rem] tw-text-n1">
      {!vehicleData ? (
        <PageLoader />
      ) : (
        <>
          <div onClick={() => window.history.back()}>
            <Image
              className="!tw-relative pointer"
              src={backIcon}
              height={24}
              width={24}
              alt="vehicle"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="tw-grid tw-grid-cols-[1fr_3fr] tw-gap-[2rem] md:tw-grid-cols-1">
            {/* left */}
            <div className="tw-mt-[3rem] md:tw-mt-0">
              {/* details section lg */}
              <div className="tw md:tw-hidden">
                <h4 className="tw-font-bold">DETAILS</h4>
                <div className="tw-flex tw-flex-col tw-gap-[2rem] tw-mt-[3rem]">
                  <div className="tw-flex tw-flex-col tw-gap-[.5rem] tw-mt-[.5rem]">
                    {/* detailsgroup */}
                    <div className="tw-flex tw-items-center tw-justify-between tw-gap-[.5rem] border-s7-bottom">
                      <p className="tw-text-n4">Avalability</p>
                      <p className="tw-text-n1">
                        {vehicleData.acf.available
                          ? "available"
                          : "unavailable"}
                      </p>
                    </div>
                    {/* detailsgroup */}
                    <div className="tw-flex tw-items-center tw-justify-between tw-gap-[.5rem] border-s7-bottom">
                      <p className="tw-text-n4">Transmission</p>
                      <p className="tw-text-n1">
                        {vehicleData.acf.transmission}
                      </p>
                    </div>
                    {/* detailsgroup */}
                    <div className="tw-flex tw-items-center tw-justify-between tw-gap-[.5rem] border-s7-bottom">
                      <p className="tw-text-n4">Doors</p>
                      <p className="tw-text-n1">
                        {vehicleData.acf.number_of_doors}
                      </p>
                    </div>
                    {/* detailsgroup */}
                    <div className="tw-flex tw-items-center tw-justify-between tw-gap-[.5rem] border-s7-bottom">
                      <p className="tw-text-n4">Seats</p>
                      <p className="tw-text-n1">
                        {vehicleData.acf.number_of_seats}
                      </p>
                    </div>
                    {/* detailsgroup */}
                    <div className="tw-flex tw-items-center tw-justify-between tw-gap-[.5rem] border-s7-bottom">
                      <p className="tw-text-n4">Air Conditioned</p>
                      <p className="tw-text-n1">
                        {vehicleData.acf.airconditioned ? "Yes" : "No"}
                      </p>
                    </div>
                    {/* button */}
                    <Link
                      href="#hire-contact-form"
                      className="pointer tw-mt-[1rem] tw-bg-p4 tw-text-s2 tw-p-[.5rem_1rem] tw-rounded-[.25rem] md:tw-p-[.5rem]tw-w-full tw-text-center"
                    >
                      Hire
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="">
              <div
                className="tw-text-32 tw-uppercase tw-text-n1 tw-font-bold tw-mb-[1rem] md:tw-mb-[.5rem] md:tw-text-20"
                onClick={() => {
                  // console.log("vehicleDatacat", vehicleData)
                }}
              >
                {vehicleData.acf.vehicle_name}
              </div>
              {/* Pic Section  */}
              <div className="tw-flex tw-flex-col tw-mt-[1rem] tw-gap-[1rem] tw-mt-[1rem] md:tw-mt-[.5rem]">
                <div className="tw-flex tw-flex-col tw-w-full">
                  <div className="tw-w-full tw-h-[30rem] tw-bg-s3 tw-rounded-[12px] sm:tw-h-[15rem]">
                    <Image
                      className="!tw-relative"
                      src={currentImage}
                      fill
                      alt="vehicle"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="tw-grid tw-grid-cols-6 tw-gap-[1rem] tw-justify-between tw-mt-[1rem] md:tw-grid-cols-3">
                    {/* grid item */}
                    <div className="tw-w-full tw-h-[120px] sm:tw-h-[6rem]">
                      <Image
                        className="!tw-relative pointer"
                        src={vehicleData.acf.main_image}
                        onClick={() =>
                          setCurrentImage(vehicleData.acf.main_image)
                        }
                        fill
                        alt="vehicle"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    {vehicleData.acf.images?.map((image, index) => (
                      <div
                        className="tw-bg-s3 tw-w-full tw-h-[120px] sm:tw-h-[6rem] tw-flex tw-justify-center"
                        onClick={() => setCurrentImage(image.full_image_url)}
                        key={index}
                      >
                        <Image
                          className="!tw-relative pointer"
                          key={index}
                          src={image.thumbnail_image_url}
                          fill
                          alt="vehicle"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="tw-mt-[2rem] tw-mt-[1.5rem]">
                <h4 className="tw-font-bold">DESCRIPTION</h4>
                <p className="tw-text-n3">
                  {vehicleData.acf.vehicle_description}
                </p>
              </div>
              {/* details section lg */}
              <div className="tw-hidden md:tw-block tw-mt-[2rem]">
                <h4 className="tw-font-bold">DETAILS</h4>
                <div className="tw-flex tw-flex-col tw-gap-[2rem] tw-mt-[.5rem]">
                  <div className="tw-flex tw-flex-col tw-gap-[.5rem] tw-mt-[.5rem]">
                    {/* detailsgroup */}
                    <div className="tw-flex tw-items-center tw-justify-between tw-gap-[.5rem] border-s7-bottom">
                      <p className="tw-text-n4">Avalability</p>
                      <p className="tw-text-n1">
                        {vehicleData.acf.available
                          ? "available"
                          : "unavailable"}
                      </p>
                    </div>
                    {/* detailsgroup */}
                    <div className="tw-flex tw-items-center tw-justify-between tw-gap-[.5rem] border-s7-bottom">
                      <p className="tw-text-n4">Transmission</p>
                      <p className="tw-text-n1">
                        {vehicleData.acf.transmission}
                      </p>
                    </div>
                    {/* detailsgroup */}
                    <div className="tw-flex tw-items-center tw-justify-between tw-gap-[.5rem] border-s7-bottom">
                      <p className="tw-text-n4">Doors</p>
                      <p className="tw-text-n1">
                        {vehicleData.acf.number_of_doors}
                      </p>
                    </div>
                    {/* detailsgroup */}
                    <div className="tw-flex tw-items-center tw-justify-between tw-gap-[.5rem] border-s7-bottom">
                      <p className="tw-text-n4">Seats</p>
                      <p className="tw-text-n1">
                        {vehicleData.acf.number_of_seats}
                      </p>
                    </div>
                    {/* detailsgroup */}
                    <div className="tw-flex tw-items-center tw-justify-between tw-gap-[.5rem] border-s7-bottom">
                      <p className="tw-text-n4">Air Conditioned</p>
                      <p className="tw-text-n1">
                        {vehicleData.acf.airconditioned ? "Yes" : "No"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* contact form */}
              <HireForm vehicleData={vehicleData} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Detailspage;
