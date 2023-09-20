import Image from "next/image";
import { FC } from "react";
import ellipse1 from "@/images/ellipse-1.svg";
import heroImage from "@/images/stock-image-hero.png";
import cardImage from "@/images/card-benefit.png";
import lineImage from "@/images/line-1.svg";
import dollarImage from "@/images/dollar-sign.svg";
import phoneHandImage from "@/images/phone-hand.svg";
import signUpImage from "@/images/sign-up.svg";
import { Button } from "../ui/Button";

interface HeroSection {}

const HeroSection: FC<HeroSection> = ({}) => {
  return (
    <div className="bg-white flex flex-row justify-center w-full ">
      <div className="bg-white  w-full h-screen ">
        <div className="relative left-px w-full h-[1024px] ">
          <div className="absolute top-0 left-0 w-full h-[1024px]">
            <Image
              width={100}
              height={100}
              className="absolute w-[693px] h-[1005px] top-0 left-[746px]"
              alt="Ellipse"
              src={ellipse1}
            />
            <div className="absolute w-[1441px] h-[197px] top-[827px] left-0 bg-[#0c0c0e] blur-sm" />
            <Image
              width={100}
              height={100}
              className="absolute w-[720px] h-[648px] top-[179px] left-[719px] object-cover"
              alt="Stock image hero"
              src={heroImage}
            />
            <Image
              width={100}
              height={100}
              className="top-[839px] left-[80px] absolute w-[320px] h-[170px]"
              alt="Card"
              src={cardImage}
            />
            <Image
              width={100}
              height={100}
              className="top-[840px] left-[560px] absolute w-[320px] h-[170px]"
              alt="Card"
              src={cardImage}
            />
            <Image
              width={100}
              height={100}
              className="top-[840px] left-[1042px] absolute w-[320px] h-[170px]"
              alt="Card"
              src={cardImage}
            />
            <Image
              width={100}
              height={100}
              className="w-[253px] top-[911px] left-[586px] absolute h-[12px]"
              alt="Line"
              src="line-2.svg"
            />
            <Image
              width={100}
              height={100}
              className="w-[252px] top-[911px] left-[1076px] absolute h-[12px]"
              alt="Line"
              src={lineImage}
            />
            <Image
              width={100}
              height={100}
              className="absolute w-[47px] h-[51px] top-[954px] left-[825px]"
              alt="Group"
              src={phoneHandImage}
            />
            <div className="absolute w-[243px] h-[81px] top-[881px] left-[116px]">
              <div className="relative w-[245px] h-[81px]">
                <Image
                  width={100}
                  height={100}
                  className="w-[252px] top-[28px] left-[-6px] absolute h-[12px]"
                  alt="Line"
                  src={lineImage}
                />
                <div className="absolute w-[243px] top-0 left-0 [font-family:'Roboto-ExtraBold',_Helvetica] font-extrabold text-black text-[20px] tracking-[0] leading-[normal]">
                  Affordable Data Packages
                </div>
                <div className="absolute w-[215px] h-[34px] top-[47px] left-[2px]">
                  <p className="absolute w-[213px] top-0 left-0 [font-family:'Open_Sans-Regular',_Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[normal]">
                    Get access to cheap data packages that fit your budget.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute w-[216px] h-[78px] top-[882px] left-[593px]">
              <div className="relative w-[245px] h-[81px]">
                <Image
                  width={100}
                  height={100}
                  className="w-[252px] top-[28px] left-[-6px] absolute h-[12px]"
                  alt="Line"
                  src={lineImage}
                />
                <div className="absolute w-[190px] top-0 left-0 [font-family:'Roboto-ExtraBold',_Helvetica] font-extrabold text-black text-[20px] tracking-[0] leading-[normal]">
                  High-Speed Internet
                </div>
                <div className="absolute w-[215px] h-[31px] top-[47px] left-[2px]">
                  <p className="absolute w-[213px] top-0 left-0 [font-family:'Inter-Regular',_Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[normal]">
                    Enjoy high-speed internet anywhere you go with Only-Wifi.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute w-[216px] h-[78px] top-[882px] left-[1083px]">
              <div className="absolute w-[205px] top-0 left-0 [font-family:'Roboto-ExtraBold',_Helvetica] font-extrabold text-black text-[20px] tracking-[0] leading-[normal]">
                Easy Sign-Up Process
              </div>
              <div className="absolute w-[215px] h-[31px] top-[47px] left-[2px]">
                <p className="absolute w-[213px] top-0 left-0 [font-family:'Inter-Regular',_Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[normal]">
                  Sign up for Only-Wifi in minutes with our easy sign-up
                  process.
                </p>
              </div>
            </div>
            <Image
              width={100}
              height={100}
              className="absolute w-[10px] h-[18px] top-[978px] left-[363px]"
              alt="Vector"
              src={dollarImage}
            />

            <Image
              width={100}
              height={100}
              className="absolute w-[23px] h-[24px] top-[953px] left-[1322px]"
              alt="Vector"
              src={signUpImage}
            />
          </div>
          <div className="absolute w-[614px] h-[546px] top-[145px] left-[89px]">
            <p className="absolute w-[612px] top-0 left-0 [text-shadow:0px_4px_4px_#00000040] [font-family:'Roboto-Black',_Helvetica] font-black text-transparent text-[50px] tracking-[0.25px] leading-[82.7px]">
              <span className="text-black">
                BRIDGING THE DIGITAL DIVIDE BY PROVIDING{" "}
              </span>
              <span className="text-[#f8df00]">AFFORDABLE</span>
              <span className="text-black">&nbsp;</span>
              <span className="text-[#f8df00]">INTERNET</span>
              <span className="text-black">
                {" "}
                ACCESS TO UNDER-SERVED AREAS
                <br />
              </span>
              <span className="text-black">{""}</span>
            </p>
            <Button className="flex w-[179px] h-[57px] items-center justify-center gap-[10px] px-[24px] py-[12px] absolute top-[489px] left-0 bg-[#f8df00] rounded-[4px] all-[unset] box-border">
              <div className="relative w-fit mt-[-0.50px] [font-family:'Roboto-Bold',_Helvetica] font-bold text-[color:var(--blue-gray-900)] text-[32px] tracking-[0] leading-[32px] whitespace-nowrap">
                SIGNUP
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
