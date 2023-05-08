import React, { useEffect, useState } from "react";
import Image from "next/image";
import heroImg from "../../../assets/images/image_bg.png";
import Navbar from "../nav-foot/Navbar";
import { manufacturersData, modelsData, useSwrGet } from "../functions/swr";
import { ModelType } from "../functions/types";

const Hero = () => {
  useState;
  const modelsResult = modelsData();
  const manufacturersResult = manufacturersData();
  const [models, setModels] = useState<ModelType>([]);
  const [makers, setMakers] = useState<ModelType>([]);
  const [model, setModel] = useState<string>("");
  const [maker, setMaker] = useState<string>("");

  // console.log("data", models);
  // console.log("error", result.error);
  useEffect(() => {
    setModels(modelsResult.data);
    setMakers(manufacturersResult.data);
  }, [modelsResult, manufacturersResult]);

  return (
    <div className="tw-relative tw-h-[fit-content] tw-bg-[#171020]">
      <Navbar fill="#171020" />
      <div
        className="tw-flex tw-flex-col tw-items-center tw-justify-between tw-min-h-[90vh] tw-h-full tw-pb-[4rem] hero-bg md:tw-pb-[2rem] md:tw-min-h-[60vh]"
        style={{
          background: "url('/images/image_bg.png')",
        }}
      >
        <h1 className="tw-w-full tw-z-20 tw-my-[4rem] tw-flex tw-justify-center tw-uppercase tw-text-s1 tw-text-32 tw-font-bold md:tw-text-3236 tw-text-center md:tw-text-24">
          RENT A CAR, <br></br>PULL UP IN STYLE
        </h1>

        {/* CTA */}
        <div className="tw-bg-s1 tw-flex tw-items-center tw-gap-[2rem] tw-p-[.5rem] tw-rounded-[1.5rem] tw-w-[fit-content] tw-mx-[auto] tw-mt-[10rem] md:tw-gap-[1rem] md:tw-max-w-[90vw] sm:tw-flex-col">
          <div className="tw-flex tw-gap-[.5rem] tw-font-bold tw-uppercase">
            <div className="tw-text-n1 tw-px-[1.5rem] border-n5-right md:tw-px-[.5rem]">
              <p className="tw-text-n5 tw-text-12 tw-mb-[.5rem] md:tw-mb-0">
                Manufacturer
              </p>
              <select
                name=""
                id=""
                className="tw-text-16 tw-uppercase pointer md:tw-text-[14px]"
              >
                {models?.map((model, index) => (
                  <option value="toyota" key={index}>
                    {model.title.rendered}
                  </option>
                ))}
              </select>
            </div>
            <div className="tw-text-n1 tw-px-[1.5rem] md:tw-px-[.5rem]">
              <p className="tw-text-n5 tw-text-12 tw-mb-[.5rem] md:tw-mb-0">
                Model
              </p>
              <select
                name=""
                id=""
                className="tw-text-16 tw-uppercase pointer md:tw-text-[14px]"
              >
                {makers?.map((maker, index) => (
                  <option value={maker.title.rendered} key={index}>
                    {maker.title.rendered}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* button */}
          <div className="pointer tw-bg-p4 tw-text-24 tw-text-s2 tw-p-[1rem_2rem] tw-rounded-[1rem] md:tw-p-[1rem] md:tw-text-16 sm:tw-w-full tw-text-center">
            Find Vehicle
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
