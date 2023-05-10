import Image from "next/image";
import React, { useEffect, useState } from "react";
import car1 from "../../assets/images/Nissan-Vera.png";
import airConIcon from "../../assets/images/air-conditioned.svg";
import doorsIcon from "../../assets/images/doors.svg";
import seatsIcon from "../../assets/images/seats.svg";
import transmissionIcon from "../../assets/images/transmission.svg";
import { vehiclesData } from "../functions/swr";
import { ModelType, VehicleArrayType } from "../functions/types";
import Link from "next/link";

type Props = {
  vehiclesData: any;
};

const CarGrid = ({ vehiclesData }: Props) => {
  const [vehicles, setVehicles] = useState<VehicleArrayType>([]);
  useEffect(() => {
    setVehicles(vehiclesData);
  }, []);

  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-p-[4rem] md:tw-p-[2rem_1rem]">
      <p className="tw-text-n5 tw-font- tw-mb-[.5rem]  tw-text-center md:tw-mb-0">
        Vehicles you may like
      </p>
      <h3 className="tw-text-32 tw-text-n1 tw-font-bold md:tw-text-20  tw-text-center">
        TRENDING
      </h3>
      <div className="tw-grid md:tw-grid-cols-2 tw-grid-cols-3 tw-justify-center tw-gap-[1.5rem] tw-mt-[2rem] m:tw-flex sm:tw-flex-col sm:tw-gap-[.75rem] s:tw-flex-col md:tw-mt-[1.5rem]">
        {/* GRID ITEM  */}
        {vehicles?.map(
          (vehicle, index) =>
            index < 6 && (
              <Link
                key={index}
                href={`/details/${vehicle.slug}`}
                className="tw-flex tw-flex-col tw-w-full car-grid-item sm:tw-w-full"
              >
                <div className="tw-w-full tw-h-[12.5rem] tw-bg-s3 tw-rounded-[12px]">
                  <Image
                    className="!tw-relative"
                    src={vehicle.acf.main_image}
                    fill
                    alt="vehicle"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="tw-flex tw-flex-col tw-p-[1rem] tw-bg-s1 sm:tw-p-[.5rem]">
                  <h6 className="tw-text-n1 tw-text-24 tw-font-bold md:tw-text-20 truncate-sm">
                    {vehicle.acf.vehicle_name}
                  </h6>
                  <p className="tw-text-n3">
                    {vehicle.acf.vehicle_manufacturer.post_title}
                  </p>
                  {/* details grid */}
                  <div className="tw-flex tw-flex-wrap tw-gap-[.5rem] tw-mt-[1rem] md:tw-grid-cols-1">
                    {/* grid item */}
                    <div className="tw-flex tw-gap-[.5rem] tw-items-center">
                      <Image
                        className="tw"
                        src={doorsIcon}
                        height={16}
                        width={16}
                        alt="vehicle"
                      />
                      <p className="tw-text-n3">
                        {vehicle.acf.number_of_doors} Doors
                      </p>
                    </div>
                    {/* grid item */}
                    <div className="tw-flex tw-gap-[.5rem] tw-items-center">
                      <Image
                        className="tw"
                        src={seatsIcon}
                        height={16}
                        width={16}
                        alt="vehicle"
                      />
                      <p className="tw-text-n3">
                        {vehicle.acf.number_of_seats} Seats
                      </p>
                    </div>
                    {/* grid item */}
                    <div className="tw-flex tw-gap-[.5rem] tw-items-center">
                      <Image
                        className="tw"
                        src={transmissionIcon}
                        height={16}
                        width={16}
                        alt="vehicle"
                      />
                      <p className="tw-text-n3">{vehicle.acf.transmission}</p>
                    </div>
                    {/* grid item */}
                    {vehicle.acf.airconditioned && (
                      <div className="tw-flex tw-gap-[.5rem] tw-items-center">
                        <Image
                          className="tw"
                          src={airConIcon}
                          height={16}
                          width={16}
                          alt="vehicle"
                        />
                        <p className="tw-text-n3">Air Conditioned</p>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export default CarGrid;
