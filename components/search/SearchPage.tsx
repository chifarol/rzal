import Image from "next/image";
import React, { useEffect, useState } from "react";
import car1 from "../../assets/images/Nissan-Vera.png";
import airConIcon from "../../assets/images/air-conditioned.svg";
import backIcon from "@/assets/images/arrow-left.svg";
import doorsIcon from "../../assets/images/doors.svg";
import seatsIcon from "../../assets/images/seats.svg";
import filterIcon from "../../assets/images/filter.svg";
import searchIcon from "../../assets/images/search.svg";
import transmissionIcon from "../../assets/images/transmission.svg";
import { manufacturersData, modelsData, vehiclesData } from "../functions/swr";
import { ModelType, VehicleArrayType } from "../functions/types";
import { useRouter } from "next/router";
import Link from "next/link";
import NoResult from "../NoResult";
import PageLoader from "../loaders/PageLoader";
type Props = {
  vehiclesData: VehicleArrayType;
  modelsData: ModelType;
  manfData: ModelType;
};

const Searchpage = ({
  vehiclesData: vData,
  modelsData: mData,
  manfData: mfData,
}: Props) => {
  const router = useRouter();
  const vehiclesResult = vData;
  const modelsResult = mData;
  const manufacturersResult = mfData;

  const [mobileFilter, setMobileFilter] = useState(false);
  const [manufacturers, setManufacturers] = useState<ModelType>([]);
  const [vehicles, setVehicles] = useState<VehicleArrayType>([]);
  const [models, setModels] = useState<ModelType>([]);

  const [modelSearch, setModelSearch] = useState<string[]>([""]);
  const [manfSearch, setManfSearch] = useState<string[]>([""]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    setManufacturers(manufacturersResult);
  }, [manufacturersResult]);

  useEffect(() => {
    const modelData: ModelType = modelsResult;
    setModels(modelData);
  }, [modelsResult]);

  // when next router is ready
  useEffect(() => {
    const modelSearchArray = models?.map((model) => model.slug);
    const modelQuery = router.query.model as string;
    if (modelQuery && modelQuery !== "all") {
      // console.log("modelQuery", modelQuery);
      setModelSearch([modelQuery]);
    } else {
      setModelSearch(modelSearchArray!);
    }
  }, [models, router]);

  useEffect(() => {
    const manfSearchArray = manufacturers?.map((manf) => manf.slug);
    const manfQuery = router.query.manufacturer as string;
    if (manfQuery && manfQuery !== "all") {
      // console.log("modelQuery", manfQuery);
      setManfSearch([manfQuery]);
    } else {
      setManfSearch(manfSearchArray!);
    }
  }, [manufacturers, router]);

  useEffect(() => {
    const modelQuery = router.query.model as string;
    const manfQuery = router.query.manufacturer as string;
    if (modelQuery && modelQuery !== "all") {
      let vehicleFilter = vehiclesResult?.filter(
        (vehicle: any, index: number) =>
          vehicle.acf.vehicle_model.post_name == modelQuery
      );
      setVehicles(vehicleFilter);
    } else if (manfQuery && manfQuery !== "all") {
      let vehicleFilter = vehiclesResult?.filter(
        (vehicle: any, index: number) =>
          vehicle.acf.vehicle_manufacturer.post_name == manfQuery
      );
      setVehicles(vehicleFilter);
    } else {
      setVehicles(vehiclesResult);
    }
  }, [vehiclesResult]);

  useEffect(() => {
    // console.log("vehicles", vehicles);
  }, [vehicles]);

  useEffect(() => {
    let v: VehicleArrayType = vehiclesResult?.map((item: any) => item);
    if (searchTerm.length > 0) {
      let vehicleFilter = v?.filter((vehicle, index) => {
        if (
          modelSearch?.includes(vehicle.acf.vehicle_model.post_name) &&
          manfSearch?.includes(vehicle.acf.vehicle_manufacturer.post_name) &&
          (vehicle.slug.includes(searchTerm) ||
            vehicle.title.rendered.includes(searchTerm))
        ) {
          return vehicle;
        }
      });
      setVehicles(vehicleFilter);
      // console.log("vehicleFilter w search", vehicleFilter);
    } else {
      let vehicleFilter = v?.filter(
        (vehicle, index) =>
          modelSearch.includes(vehicle.acf.vehicle_model.post_name) &&
          manfSearch.includes(vehicle.acf.vehicle_manufacturer.post_name)
      );
      setVehicles(vehicleFilter);
      // console.log("vehicleFilter empty search", vehicleFilter);
    }
  }, [manfSearch, searchTerm, modelSearch]);

  function addRemoveString(arr: string[], target: string, isChecked: boolean) {
    let arrClone = arr.map((item) => item);
    if (isChecked) {
      arrClone.push(target);
    } else {
      arrClone = arrClone.filter((e) => e != target);
    }
    // console.log("arrClone after", arrClone);
    return arrClone;
  }
  return (
    <div className="tw-relative tw-p-[4rem] md:tw-p-[1rem] tw-text-n1">
      {!vehiclesResult || !modelsResult || !manufacturersResult ? (
        <PageLoader />
      ) : (
        <>
          <div
            onClick={() => window.history.back()}
            className="md:tw-pt-[1rem]"
          >
            <Image
              className="!tw-relative pointer tw-mb-[1rem]"
              src={backIcon}
              height={24}
              width={24}
              alt="vehicle"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="tw-grid tw-grid-cols-[1fr_4fr] tw-gap-[2rem] md:tw-grid-cols-1">
            {/* filter section */}
            <div className="tw md:tw-hidden">
              <h4 className="tw-font-bold">FILTERS</h4>
              <div className="tw-flex tw-flex-col tw-gap-[2rem] tw-mt-[3rem]">
                {/* optiongroup */}
                <div className="tw">
                  <span
                    className="tw-text-n5"
                    onClick={() => {
                      console.log(modelSearch);
                    }}
                  >
                    Type
                  </span>
                  <div className="tw-flex tw-flex-col tw-gap-[.5rem] tw-mt-[.5rem]">
                    {/* input group */}
                    {models?.map((model, index) => (
                      <div
                        className="tw-flex tw-items-center tw-gap-[.5rem]"
                        key={index}
                      >
                        <label
                          className="checkbox-container"
                          htmlFor={model.slug}
                        >
                          <input
                            type="checkbox"
                            checked={modelSearch?.includes(model.slug)}
                            id={model.slug}
                            onChange={(e) => {
                              setModelSearch(
                                addRemoveString(
                                  modelSearch,
                                  model.slug,
                                  e.target.checked
                                )
                              );
                            }}
                          />
                          <span className="checkmark"></span>
                        </label>
                        <p className="tw">{model.title.rendered}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* manf optiongroup */}
                <div className="tw">
                  <span
                    className="tw-text-n5"
                    onClick={() => {
                      // console.log(manfSearch)
                    }}
                  >
                    Manufacturer
                  </span>
                  <div className="tw-flex tw-flex-col tw-gap-[.5rem] tw-mt-[.5rem]">
                    {/* input group */}
                    {manufacturers?.map((manf, index) => (
                      <div
                        className="tw-flex tw-items-center tw-gap-[.5rem]"
                        key={index}
                      >
                        <label
                          className="checkbox-container"
                          htmlFor={manf.slug}
                        >
                          <input
                            type="checkbox"
                            checked={manfSearch?.includes(manf.slug)}
                            id={manf.slug}
                            onChange={(e) => {
                              setManfSearch(
                                addRemoveString(
                                  manfSearch,
                                  manf.slug,
                                  e.target.checked
                                )
                              );
                            }}
                          />
                          <span className="checkmark"></span>
                        </label>
                        <p className="tw">{manf.title.rendered}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* grid section */}
            <div className="tw">
              {/* search */}
              <div className="tw-relative">
                <Image
                  height={16}
                  width={16}
                  alt="vehicle"
                  src={searchIcon}
                  className="tw-h-[1rem] tw-absolute tw-top-[1.25rem] tw-left-[0.75rem]"
                />
                <input
                  type="text"
                  placeholder="Search vehicles"
                  className="tw-bg-[#F5F5F8] tw-rounded-[4px] tw-w-[100%] tw-p-[1rem_2.5rem] tw-text-[1rem]"
                  onChange={(e) => setSearchTerm(e.target.value)}
                ></input>
              </div>
              {/* back icon & mobile filters */}
              <div
                className="tw-my-[2rem] md:tw-my-[1.5rem] tw-flex tw-gap-[3rem] tw-justify-between tw-items-center"
                onClick={() => {
                  // console.log("vehiclescat", vehicles)
                }}
              >
                <p className="tw-text-n4">
                  Showing {vehicles?.length} of {vehiclesResult?.length}
                </p>
                <div className="tw-relativ tw-w-[fit-content] tw-top-[10rem] tw-left-[2rem] tw-z-[10] pointer tw-hidden md:tw-block">
                  {/* mobile filter icon */}
                  <div
                    className="tw-h-[3rem] tw-w-[3rem] tw-grid tw-place-items-center tw-bg-s1 tw-rounded-[100px] sh-24"
                    onClick={() => setMobileFilter(!mobileFilter)}
                  >
                    <Image
                      alt="whatsapp-icon"
                      width={32}
                      height={32}
                      className=""
                      src={filterIcon}
                    />
                  </div>
                </div>
              </div>
              {/* mobile filter list */}
              <div
                className={`${
                  mobileFilter ? "tw-max-[1000px] tw-mb-[2rem]" : "tw-max-h-[0]"
                } tw-hidden tw-w-full tw-overflow-hidden tw-absolut tw-top-[-33rem] tw-left-[1rem] tw-rounded-[12px] tw-w-[14rem] md:tw-block`}
              >
                <h4 className="tw-font-bold">FILTERS</h4>
                <div className="tw-grid tw-grid-cols-2 tw-gap-[1rem] tw-mt-[1rem]">
                  {/* optiongroup */}
                  <div className="tw">
                    <span
                      className="tw-text-n5"
                      onClick={() => {
                        // console.log(modelSearch)
                      }}
                    >
                      Type
                    </span>
                    <div className="tw-flex tw-flex-col tw-gap-[.5rem] tw-mt-[.5rem]">
                      {/* input group */}
                      {models?.map((model, index) => (
                        <div
                          className="tw-flex tw-items-center tw-gap-[.5rem]"
                          key={index}
                        >
                          <label
                            className="checkbox-container"
                            htmlFor={model.slug}
                          >
                            <input
                              type="checkbox"
                              checked={modelSearch?.includes(model.slug)}
                              id={model.slug}
                              onChange={(e) => {
                                setModelSearch(
                                  addRemoveString(
                                    modelSearch,
                                    model.slug,
                                    e.target.checked
                                  )
                                );
                              }}
                            />
                            <span className="checkmark"></span>
                          </label>
                          <p className="tw">{model.title.rendered}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* manf optiongroup */}
                  <div className="tw">
                    <span
                      className="tw-text-n5"
                      onClick={() => {
                        // console.log(manfSearch)
                      }}
                    >
                      Manufacturer
                    </span>
                    <div className="tw-flex tw-flex-col tw-gap-[.5rem] tw-mt-[.5rem]">
                      {/* input group */}
                      {manufacturers?.map((manf, index) => (
                        <div
                          className="tw-flex tw-items-center tw-gap-[.5rem]"
                          key={index}
                        >
                          <label
                            className="checkbox-container"
                            htmlFor={manf.slug}
                          >
                            <input
                              type="checkbox"
                              checked={manfSearch?.includes(manf.slug)}
                              id={manf.slug}
                              onChange={(e) => {
                                setManfSearch(
                                  addRemoveString(
                                    manfSearch,
                                    manf.slug,
                                    e.target.checked
                                  )
                                );
                              }}
                            />
                            <span className="checkmark"></span>
                          </label>
                          <p className="tw">{manf.title.rendered}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="tw-grid md:tw-grid-cols-2 tw-grid-cols-3 tw-justify-center tw-gap-[2rem] tw-mt-[1rem] tw-mb-[2rem] s:tw-flex s:tw-flex-col md:tw-mt-[.5rem] sm:tw-gap-[.75rem]">
                {/* GRID ITEM  */}
                {vehicles?.map((vehicle, index) => (
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
                    <div className="tw-flex tw-flex-col tw-p-[1rem] tw-bg-s1 sm:tw-px-[.5rem]">
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
                          <p className="tw-text-n3">
                            {vehicle.acf.transmission}
                          </p>
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
                ))}
              </div>
              {!vehicles?.length && <NoResult />}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Searchpage;
