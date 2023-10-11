import Image from "next/image";
import { FC } from "react";

import resellerImage from "@/images/reseller-image.png";
import okImage from "@/images/ok.png";
import { Button } from "../ui/Button";
import Link from "next/link";

interface ResellerSectionProps {}

const ResellerSection: FC<ResellerSectionProps> = ({}) => {
  return (
    <div
      id="resellers"
      className="relative w-full max-w-[1400px] mx-auto flex flex-col items-center  py-10 px-3 -mt-20"
    >
      <div className=" flex flex-row justify-center w-full">
        <div className="relative w-full">
          <div className="relative flex flex-col lg:flex-row ">
            <div className="w-1/2 flex flex-col justify-center gap-3 min-h-[175px]">
              <h1 className="relative self-stretch [text-shadow:0px_4px_4px_#00000040] font-bold text-transparent text-center text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                <span className="text-primary">UNLOCK</span>
                <span className="text-foreground">
                  {" "}
                  A LUCRATIVE BUSINESS OPPORTUNITY
                </span>
              </h1>
              <p className="text-xs sm:text-sm md:text-md lg:text-lg text-center ">
                Become an Only-Wifi Reseller and Connect Your Community
              </p>
              <div className="w-full flex -mt-[8rem]">
                <div className="hidden p-5 lg:flex flex-col justify-center pt-[17rem]">
                  <p className="text-sm text-center">
                    Are you ready to be a trailblazer in the digital revolution?
                    Only-Wifi presents an exclusive reseller opportunity that
                    allows you to connect your community while earning
                    attractive commissions. <br />
                    <br />
                    Dive into our beta release phase and play a pivotal role in
                    providing fast and reliable internet access to your
                    neighborhood. Don&#39;t miss out on this chance to make a
                    positive impact while boosting your income. <br />
                    <br />
                    Sign up now and be part of the future of connectivity!
                  </p>
                  <div className="flex justify-center m-5">
                    <Button
                      // className=" bg-[#fed208] text-black  hover:shadow-inner hover:shadow-white/80 hover:scale-105  hover:bg-yellow-400 text-xs rounded-full shadow-[0px_1px_2px_1px_#00000040]  "
                      className="hover:scale-105 rounded-2xl shadow-[0px_1px_2px_1px_#00000040]"
                      variant="default"
                      size="lg"
                    >
                      <Link href="/#contact">BECOME A RESELLER</Link>
                    </Button>
                    {/* className={cn(
            buttonVariants({ variant: "default", size: "sm" }),
            "bg-[#fed208] text-black  hover:shadow-inner hover:shadow-white/80 hover:scale-105  hover:bg-yellow-400 text-xs"
          )} */}
                  </div>
                </div>
              </div>
            </div>
            <Image
              className="relative min-w-[30rem] max-w-[32rem] lg:max-w-fit w-full object-cover right-10 ml-auto"
              alt="Reseller image"
              src={resellerImage}
            />
          </div>
          <div className="w-full max-w-3xl mx-auto p-5 flex flex-col justify-center lg:hidden">
            <p className="text-sm text-center">
              Are you ready to be a trailblazer in the digital revolution?
              Only-Wifi presents an exclusive reseller opportunity that allows
              you to connect your community while earning attractive
              commissions. <br />
              <br />
              Dive into our beta release phase and play a pivotal role in
              providing fast and reliable internet access to your neighborhood.
              Don&#39;t miss out on this chance to make a positive impact while
              boosting your income. <br />
              <br />
              Sign up now and be part of the future of connectivity!
            </p>
            <div className="flex justify-center m-5">
              <Button
                className="hover:scale-105 rounded-2xl"
                variant="default"
                size="lg"
              >
                <Link href="/#contact">BECOME A RESELLER</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="relative w-full min-h-[5rem] flex ">
          <div className="relative w-full flex justify-center  bg-stone-900 ">
            <div className="flex m-2 max-w-[90%] ">
              <div className="flex content-center  p-1 lg:basis-1/6">
                <Image className="w-7 h-7 m-auto" alt="Ok" src={okImage} />
              </div>
              <div className="flex  my-auto">
                <p className="max-w-[12rem]">
                  <span className="text-[#f8df00]">Earn Commissions</span>
                  <span className="text-white hidden md:block">
                    {" "}
                    on Data Package Sales
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-full  flex justify-center  bg-[#383432] ">
            <div className="flex m-2 max-w-[80%] ">
              <div className="flex content-center  p-1 lg:basis-1/6">
                <Image className="w-7 h-7 m-auto" alt="Ok" src={okImage} />
              </div>
              <div className="flex  my-auto">
                <p className=" max-w-[12rem]  ">
                  <span className="text-[#f8df00]">
                    Empower Your Community{" "}
                  </span>
                  <span className="text-white hidden md:block">
                    {" "}
                    with Internet Access
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-full  justify-center  bg-stone-900 hidden sm:flex border">
            <div className="flex m-2 max-w-[80%] ">
              <div className="flex content-center  p-1 lg:basis-1/6">
                <Image className="w-7 h-7 m-auto" alt="Ok" src={okImage} />
              </div>
              <div className="flex  my-auto">
                <p className=" max-w-[12rem]  ">
                  <span className="text-[#f8df00]">
                    Flexible Business Model
                  </span>
                  <span className="text-white hidden md:block">
                    {" "}
                    Part-time or Full-time
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResellerSection;
