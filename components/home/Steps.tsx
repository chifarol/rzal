import React from "react";

type Props = {};

const Steps = (props: Props) => {
  return (
    <div className="section1 tw-flex tw-flex-col tw-items-center tw-p-[4rem] md:tw-p-[1rem]">
      <h3 className="tw-text-32 tw-text-n1 tw-font-bold md:tw-text-24 md:tw-mb-[1rem]">
        RENT A CAR IN 3 STEPS
      </h3>
      <div className="tw-w-full tw-flex tw-justify-between tw-gap-[1rem] md:tw-justify-center  md:tw-flex-wrap md:tw-gap-[1rem]">
        {/* 1st step */}
        <div className="tw-flex tw-flex-col tw-gap-[1.5rem] tw-items-center md:tw-gap-[1rem]  tw-w-[18.75rem] tw-p-[1rem_2rem] tw-text-center">
          <div className="tw-grid tw-bg-s4 tw-text-32 tw-font-bold md:tw-text-24 tw-place-items-center tw-h-[4.5rem] tw-w-[4.5rem] md:tw-h-[3rem] md:tw-w-[3rem] tw-rounded-[50%]">
            1
          </div>
          <div className="tw-flex tw-flex-col tw-items-center tw-gap-[.5rem]">
            <h6 className="tw-text-n1 tw-font-bold">SEARCH</h6>
            <p className="tw-text-n3">
              Find a car of your choice using the filter options
            </p>
          </div>
        </div>
        {/* 2nd step */}
        <div className="tw-flex tw-flex-col tw-gap-[1.5rem] tw-items-center md:tw-gap-[1rem]  tw-w-[18.75rem] tw-p-[1rem_2rem] tw-text-center tw-mt-[6rem] md:tw-mt-0">
          <div className="tw-grid tw-bg-s4 tw-text-32 tw-font-bold md:tw-text-24 tw-place-items-center tw-h-[4.5rem] tw-w-[4.5rem] md:tw-h-[3rem] md:tw-w-[3rem] tw-rounded-[50%]">
            2
          </div>
          <div className="tw-flex tw-flex-col tw-items-center tw-gap-[.5rem]">
            <h6 className="tw-text-n1 tw-font-bold">CONFIRM AVAILABILITY</h6>
            <p className="tw-text-n3">
              Check if the car is available via the details page
            </p>
          </div>
        </div>
        {/* 3rd step */}
        <div className="tw-flex tw-flex-col tw-gap-[1.5rem] tw-items-center md:tw-gap-[1rem]  tw-w-[18.75rem] tw-p-[1rem_2rem] tw-text-center">
          <div className="tw-grid tw-bg-s4 tw-text-32 tw-font-bold md:tw-text-24 tw-place-items-center tw-h-[4.5rem] tw-w-[4.5rem] md:tw-h-[3rem] md:tw-w-[3rem] tw-rounded-[50%]">
            3
          </div>
          <div className="tw-flex tw-flex-col tw-items-center tw-gap-[.5rem]">
            <h6 className="tw-text-n1 tw-font-bold">PLACE ORDER</h6>
            <p className="tw-text-n3">
              Fill and submit the booking form and our representative will
              contact you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
