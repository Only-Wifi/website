import Image from "next/image";
import { FC } from "react";

import coverageMap from "@/images/coverage-map.png";
import line from "@/images/line-1.svg";

interface CoverageSectionProps {}

const CoverageSection: FC<CoverageSectionProps> = ({}) => {
  return (
    <div id="coverage" className="relative w-full max-w-[1400px] mx-auto py-10">
      <div className="w-full p-2">
        <h1 className="relative self-stretch [text-shadow:0px_4px_4px_#00000040] font-bold text-transparent text-center text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
          <span className="text-foreground">COVERAGE MAP</span>
        </h1>
        <div className="relative items-center flex flex-col content-center">
          <Image className="relative my-3" alt="Line" src={line} />
          <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl">
            Explore our rapidly expanding coverage
          </p>
          <Image className="relative m-5 mt-10" alt="Image" src={coverageMap} />
        </div>
      </div>
    </div>
  );
};

export default CoverageSection;
