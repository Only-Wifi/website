import Image from "next/image";
import { FC } from "react";

import coverageMap from "@/images/coverage-map.png";
import line from "@/images/line-1.svg";

interface CoverageSectionProps {}

const CoverageSection: FC<CoverageSectionProps> = ({}) => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[1680px] h-[1199px] relative">
        <Image
          className="absolute w-[1386px] h-[868px] top-[276px] left-[121px] object-cover"
          alt="Image"
          src={coverageMap}
        />
        <p className="absolute top-[92px] left-[80px] [font-family:'Roboto-Black',Helvetica] font-black text-stone-900 text-[50px] tracking-[0.25px] leading-[82.7px] whitespace-nowrap">
          COVERAGE MAP- EXPLORE OUR RAPIDLY EXPANDING COVERAGE
        </p>
        <Image
          className="absolute w-[1432px] h-[12px] top-[224px] left-[122px]"
          alt="Line"
          src={line}
        />
      </div>
    </div>
  );
};

export default CoverageSection;