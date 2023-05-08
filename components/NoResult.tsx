import React from "react";
import noResultsIcon from "@/assets/images/no-results.svg";
import Image from "next/image";

type Props = {};

const NoResult = (props: Props) => {
  return (
    <div className="tw-w-full tw-flex tw-flex-col tw-gap-[1rem] tw-items-center">
      <div className="tw-w-[20rem] tw-h-[auto] md:tw-w-[15rem]">
        <Image
          fill
          src={noResultsIcon}
          alt="404 image"
          className="!tw-relative"
          style={{ objectFit: "cover" }}
        />
      </div>
      <p className="tw-uppercaset tw-text-n1">No Results found</p>
    </div>
  );
};

export default NoResult;

{
  /* <a href="https://storyset.com/web">Web illustrations by Storyset</a> */
}
