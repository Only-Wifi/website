import Image from "next/image";
import { FC } from "react";
import line from "@/images/line-1.svg";
import language from "@/images/language.svg";
import monetization from "@/images/monetization-on.svg";
import howToReg from "@/images/how-to-reg.svg";
import heroImage from "@/images/hero-image.png";
import heroVector from "@/images/hero-vector.svg";

import { Button } from "../ui/Button";
import { Inter, Roboto, Open_Sans } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const roboto = Roboto({
  weight: ["900"],
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-heading",
});
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-btn" });

inter.className;

interface HeroSection {}

const HeroSection: FC<HeroSection> = ({}) => {
  return (
    <div id="hero" className="relative w-full max-w-[1400px] mx-auto">
      <div className="flex flex-col w-full items-center  relative m-1">
        <div className="flex flex-col justify-center w-full md:flex-row md:my-5 lg:my-10 xl:my-20">
          <div className=" relative flex flex-col items-center justify-center basis-1/2 m-1">
            <div className="flex flex-col items-center gap-3 mt-5 ">
              <h1 className="relative self-stretch [text-shadow:0px_4px_4px_#00000040] font-bold text-transparent text-center text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                <span className="text-primary">JOIN</span>
                <br />
                <span className="text-foreground">THE ONLY-WIFI </span>
                <br />
                <span className="text-primary">REVOLUTION!</span>
              </h1>
            </div>
            <div className="relative my-3">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center ">
                Bringing Affordable Internet to Your Community
              </p>
            </div>
            <div className="w-full max-w-md hidden gap-3 p-3  md:flex mt-10">
              <div className="basis-1/2 flex justify-center">
                <Button
                  className="hover:scale-105 rounded-2xl shadow-[0px_1px_2px_1px_#00000040] h-[3.5rem] p-3"
                  variant="default"
                  size="lg"
                >
                  <Link href="/#packages">EXPLORE DATA PACKAGES</Link>
                </Button>
              </div>
              <div className="basis-1/2 flex justify-center">
                <Button
                  className="hover:scale-105 rounded-2xl shadow-[0px_1px_2px_1px_#00000040] h-[3.5rem] p-3"
                  variant="outline"
                  size="lg"
                >
                  <Link href="/#resellers">BECOME A RESELLER</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className=" basis-1/2 m-1 flex flex-col items-center">
            <div className="relative w-[20rem] h-[20rem] sm:w-[24rem] sm:h-[24rem] md:w-[26rem] md:h-[26rem] lg:w-[32rem] lg:h-[32rem] bg-[url('/images/hero-image.png')] bg-cover bg-[50%_50%]">
              <Image
                className="bottom-0 absolute w-[5rem]"
                alt="Hero vector"
                src={heroVector}
                width={180}
                height={180}
              />
            </div>
            <div className="relative w-full max-w-md flex gap-3 p-3 mt-[3rem] md:hidden">
              <div className="basis-1/2 flex justify-center">
                <Button
                  className="hover:scale-105 rounded-2xl shadow-[0px_1px_2px_1px_#00000040] h-[3.5rem]"
                  variant="default"
                >
                  <Link href="/#packages">EXPLORE DATA PACKAGES</Link>
                </Button>
              </div>
              <div className="basis-1/2 flex justify-center">
                <Button
                  className="hover:scale-105 rounded-2xl shadow-[0px_1px_2px_1px_#00000040] h-[3.5rem] "
                  variant="outline"
                >
                  <Link href="/#resellers">BECOME A RESELLER</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-[11rem] lg:h-[12rem] bg-foreground flex justify-center gap-20 rounded-3xl">
          <div className="relative p-3 ">
            <div className="bg-[url('/images/card-benefit.png')] bg-cover bg-no-repeat  w-full p-7 ">
              {/* CONTENT */}
              <div className="flex flex-col items-center gap-[5px] relative ">
                <p className="relative lg:text-lg w-fit mt-[-1.00px] font-bold ">
                  Affordable Data Packages
                </p>
                <Image
                  className="relative w-[222px] lg:w-[250px] h-[12.36px] mx-auto"
                  alt="Line"
                  src={line}
                />
                <div className="relative w-[11.5rem] h-[2.5rem] lg:w-[12.5rem] lg:h-[3.5rem]">
                  <p className="text-sm lg:text-base text-center">
                    Get access to cheap data packages that fit your budget.
                  </p>
                </div>
              </div>
              {/* END CONTENT */}
            </div>
            <Image
              className="!absolute !w-[5rem] !h-[5rem] !-bottom-[3px] !-right-[6px]"
              src={monetization}
              alt=""
            />
          </div>
          <div className="relative p-3 hidden md:block">
            <div className="bg-[url('/images/card-benefit.png')] bg-cover bg-no-repeat  w-full p-7 ">
              {/* CONTENT */}
              <div className="flex flex-col items-center gap-[5px] relative ">
                <div className="relative lg:text-lg w-fit mt-[-1.00px] font-bold ">
                  High-Speed Internet
                </div>
                <Image
                  className="relative w-[222px] lg:w-[250px] h-[12.36px] mx-auto"
                  alt="Line"
                  src={line}
                />
                <div className="relative w-[11.5rem] h-[2.5rem] lg:w-[12.5rem] lg:h-[3.5rem]">
                  <p className="text-sm lg:text-base text-center">
                    Enjoy high-speed internet anywhere you go with Only-Wifi.
                  </p>
                </div>
              </div>
              {/* END CONTENT */}
            </div>
            <div className="!absolute !w-[4.3rem] !h-[4.4rem] !bottom-[2px] !-right-[0px] rounded-[37.5px]  bg-white shadow-[inset_0px_4px_4px_#00000040]">
              <Image src={language} alt="" className="p-1" />
            </div>
          </div>
          <div className="relative p-3 hidden lg:block">
            <div className="bg-[url('/images/card-benefit.png')] bg-cover bg-no-repeat  w-full p-7 ">
              {/* CONTENT */}
              <div className="flex flex-col items-center gap-[5px] relative ">
                <div className="relative lg:text-lg w-fit mt-[-1.00px] font-bold ">
                  Easy Sign-Up Process
                </div>
                <Image
                  className="relative w-[222px] lg:w-[250px] h-[12.36px] mx-auto"
                  alt="Line"
                  src={line}
                />
                <div className="relative w-[11.5rem] h-[2.5rem] lg:w-[12.5rem] lg:h-[3.5rem]">
                  <p className="text-sm lg:text-base text-center">
                    Sign up for Only-Wifi in minutes with our easy sign-up
                    process.
                  </p>
                </div>
              </div>
              {/* END CONTENT */}
            </div>
            <div className="!absolute !w-[4.3rem] !h-[4.4rem] !bottom-[2px] !-right-[0px] rounded-[37.5px]  bg-white shadow-[inset_0px_4px_4px_#00000040]">
              <Image
                src={howToReg}
                width={100}
                height={100}
                alt=""
                className="p-2"
              />
            </div>
          </div>
        </div>
         
      </div>
    </div>
  );
};

export default HeroSection;
