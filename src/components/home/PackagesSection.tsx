import { FC } from "react";

import pkgImage from "@/images/Package-Card.png";
import Image from "next/image";
import line from "@/images/line-1.svg";
import { Button } from "../ui/Button";
import Link from "next/link";

interface PackagesSectionProps {}

const PackagesSection: FC<PackagesSectionProps> = ({}) => {
  return (
    <div id="packages" className="relative w-full max-w-[1400px] mx-auto py-10">
      <div className="bg-foreground rounded-3xl w-full bg-cover flex flex-col items-center p-5">
        <h1 className="relative self-stretch [text-shadow:0px_4px_4px_#00000040] font-bold text-transparent text-center text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl  leading-tight">
          <span className="text-secondary">DATA PACKAGES</span>
        </h1>
        <Image className="w-1/2 mt-3" alt="Line" src={line} />
        <p className="text-secondary text-center text-sm sm:text-base md:text-lg lg:text-xl">
          Stay connected with our affordable data plans
        </p>
        <div className="w-full max-w-5xl flex justify-around mt-5">
          <div className="w-[12rem] h-[10rem] bg-[url('/images/Package-Card.png')] bg-cover m-5">
            <div className="h-1/2 py-6">
              <h1 className="text-3xl font-black text-center">300MB</h1>
            </div>
            <div className="h-1/2 py-5 flex">
              <Button
                //  className="w-4/5 bg-stone-900 rounded-[26px] shadow-[0px_3px_2px_1px_#00000040] text-secondary text-center mx-auto p-2 -mt-2"
                className="w-4/5 bg-stone-900 hover:bg-slate-900 hover:scale-105 rounded-2xl shadow-[0px_1px_2px_1px_#00000040] text-secondary text-center mx-auto p-2 -mt-2"
                variant="default"
                size="lg"
              >
                <Link href="/#contact">CONTACT US</Link>
              </Button>
            </div>
          </div>

          <div className="w-[12rem] h-[10rem] bg-[url('/images/Package-Card.png')] bg-cover m-5 hidden sm:block">
            <div className="h-1/2 py-6">
              <h1 className="text-3xl font-black text-center">500MB</h1>
            </div>
            <div className="h-1/2 py-5 flex">
              <Button
                //  className="w-4/5 bg-stone-900 rounded-[26px] shadow-[0px_3px_2px_1px_#00000040] text-secondary text-center mx-auto p-2 -mt-2"
                className="w-4/5 bg-stone-900 hover:bg-slate-900 hover:scale-105 rounded-2xl shadow-[0px_1px_2px_1px_#00000040] text-secondary text-center mx-auto p-2 -mt-2"
                variant="default"
                size="lg"
              >
                <Link href="/#contact">CONTACT US</Link>
              </Button>
            </div>
          </div>

          <div className="w-[12rem] h-[10rem] bg-[url('/images/Package-Card.png')] bg-cover m-5 hidden lg:block">
            <div className="h-1/2 py-6">
              <h1 className="text-3xl font-black text-center">1GB</h1>
            </div>
            <div className="h-1/2 py-5 flex">
              <Button
                //  className="w-4/5 bg-stone-900 rounded-[26px] shadow-[0px_3px_2px_1px_#00000040] text-secondary text-center mx-auto p-2 -mt-2"
                className="w-4/5 bg-stone-900 hover:bg-slate-900 hover:scale-105 rounded-2xl shadow-[0px_1px_2px_1px_#00000040] text-secondary text-center mx-auto p-2 -mt-2"
                variant="default"
                size="lg"
              >
                <Link href="/#contact">CONTACT US</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesSection;
