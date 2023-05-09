import Image from "next/image";
import React, { useEffect, useState } from "react";
import car1 from "../../assets/images/Nissan-Vera.png";
import airConIcon from "../../assets/images/air-conditioned.svg";
import doorsIcon from "../../assets/images/doors.svg";
import seatsIcon from "../../assets/images/seats.svg";
import transmissionIcon from "../../assets/images/transmission.svg";
import { manufacturersData } from "../functions/swr";
import { ModelType } from "../functions/types";
import Link from "next/link";

type Props = {
  manfData: ModelType;
};

const ManfGrid = ({ manfData }: Props) => {
  const [manufacturers, setModels] = useState<ModelType>([]);
  useEffect(() => {
    setModels(manfData);
  }, []);
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-p-[4rem] md:tw-p-[1.5rem]">
      <p className="tw-text-n5 tw-font- tw-mb-[.5rem] md:tw-mb-0">
        Vehicle Manufacturers
      </p>
      <h3 className="tw-text-24 tw-text-n1 tw-font-bold md:tw-text-20 tw-text-center">
        SEARCH BY MANUFACTURER
      </h3>
      <div className="tw-flex tw-flex-wrap tw-justify-center tw-gap-[2rem] tw-mt-[2rem] md:tw-mt-[1.5rem] md:tw-gap-[1rem]">
        {/* GRID ITEM  */}
        {manufacturers?.map((manufacturer, index) => (
          <Link
            href={`search?manufacturer=${manufacturer.slug}`}
            className="tw-flex tw-flex-col tw-max-w-[22rem] tw-rounded-[12px] border-n4 tw-p-[1rem_2rem] tw-bg-s3 md:tw-p-[.5rem_1rem]"
            key={index}
          >
            <Image
              className="!tw-relative tw-min-h-[3rem] sm:tw-min-h-[1.5rem]"
              src={manufacturer.acf.image}
              fill
              alt="model"
              style={{ objectFit: "cover" }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ManfGrid;
