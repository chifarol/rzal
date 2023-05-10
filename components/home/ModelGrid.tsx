import Image from "next/image";
import React, { useEffect, useState } from "react";
import car1 from "../../assets/images/Nissan-Vera.png";
import airConIcon from "../../assets/images/air-conditioned.svg";
import doorsIcon from "../../assets/images/doors.svg";
import seatsIcon from "../../assets/images/seats.svg";
import transmissionIcon from "../../assets/images/transmission.svg";
import { modelsData } from "../functions/swr";
import { ModelType } from "../functions/types";
import Link from "next/link";

type Props = {
  modelsData: ModelType;
};

const ModelGrid = ({ modelsData }: Props) => {
  const [models, setModels] = useState<ModelType>([]);
  useEffect(() => {
    setModels(modelsData);
  }, []);
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-p-[4rem] md:tw-p-[2rem_1rem]">
      <p className="tw-text-n5 tw-font- tw-mb-[.5rem] md:tw-mb-0">
        Vehicle Model/Type
      </p>
      <h3 className="tw-text-24 tw-text-n1 tw-font-bold md:tw-text-20 tw-text-center">
        SEARCH BY MODEL
      </h3>
      <div className="tw-grid tw-grid-cols-3 tw-justify-center tw-gap-[2rem] tw-mt-[2rem] md:tw-mt-[1.5rem] md:tw-grid-cols-2 sm:tw-gap-[.75rem]">
        {/* GRID ITEM  */}
        {models?.map((model, index) => (
          <Link
            key={index}
            href={`search?model=${model.slug}`}
            className="tw-flex tw-flex-col car-grid-item tw-w-full"
          >
            <div className="tw-w-full tw-h-[12.5rem] tw-bg-s2 sm:tw-h-[8rem]">
              <Image
                className="!tw-relative"
                src={model.acf.image}
                fill
                alt="model"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="tw-flex tw-text-center tw-flex-col tw-p-[1rem] tw-bg-s1">
              <h6 className="tw-text-n1 tw-lowercse tw-text-24 tw-font-bold md:tw-text-16">
                {model.title.rendered}
              </h6>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ModelGrid;
