import Image from "next/image";
import { FC } from "react";
import line from "@/images/line-1.svg";
import language from "@/images/language.svg";
import monetization from "@/images/monetization-on.svg";
import howToReg from "@/images/how-to-reg.svg";

import { Button } from "../ui/Button";

interface HeroSection {}

const HeroSection: FC<HeroSection> = ({}) => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[1680px] h-[1024px] relative">
        <div className="absolute w-[640px] h-[361px] top-[175px] left-[126px]">
          <div className="absolute w-[540px] h-[33px] top-[221px] left-0">
            <p className="absolute top-0 left-0 [font-family:'Open_Sans-Regular',Helvetica] font-normal text-black text-[24px] tracking-[0] leading-[normal]">
              Bringing Affordable Internet to Your Community
            </p>
          </div>
          <p className="absolute w-[638px] top-0 left-0 [text-shadow:0px_4px_4px_#00000040] [font-family:'Roboto-Black',Helvetica] font-black text-transparent text-[64px] tracking-[0.32px] leading-[83.5px]">
            <span className="text-stone-900">JOIN THE ONLY-WIFI </span>
            <span className="text-[#f8df00]">REVOLUTION!</span>
          </p>
          <div className="absolute w-[441px] h-[49px] top-[312px] left-0">
            <div className="absolute w-[209px] h-[49px] top-0 left-0">
              <div className="relative w-[207px] h-[49px] bg-[#f8df00] rounded-[26px] shadow-[0px_1px_2px_1px_#00000040]">
                <div className="absolute top-[15px] left-[12px] [font-family:'Open_Sans-Bold',Helvetica] font-bold text-black text-[14px] tracking-[0.10px] leading-[20px] whitespace-nowrap">
                  EXPLORE DATA PACKAGES
                </div>
              </div>
            </div>
            <div className="absolute w-[209px] h-[49px] top-0 left-[234px]">
              <div className="relative w-[207px] h-[49px] bg-white rounded-[26px] border-[3px] border-solid border-[#1c1917c2] shadow-[0px_1px_2px_1px_#00000040]">
                <div className="absolute top-[12px] left-[29px] [font-family:'Open_Sans-Bold',Helvetica] font-bold text-black text-[14px] tracking-[0.10px] leading-[20px] whitespace-nowrap">
                  BECOME A RESELLER
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[1680px] h-[230px] top-[794px] left-0 bg-stone-900">
          <div className="h-[205px] left-[654px] absolute w-[381px] top-[16px]">
            <div className="relative h-[205px]">
              <div className="w-[75px] h-[75px] top-[130px] left-[306px] rounded-[37.5px] absolute bg-white shadow-[inset_0px_4px_4px_#00000040]">
                <Image
                  className="!absolute !w-[68px] !h-[68px] !top-[3px] !left-[3px]"
                  src={language}
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
              <div className="bg-[url('/images/card-benefit.png')] absolute w-[373px] h-[198px] top-0 left-0 bg-[100%_100%] bg-cover">
                <div className="relative w-[280px] h-[91px] top-[47px] left-[38px]">
                  <div className="relative w-[292px] h-[91px] left-[-6px]">
                    <Image
                      width={100}
                      height={100}
                      className="absolute w-[292px] h-[12px] top-[36px] left-0"
                      alt="Line"
                      src={line}
                    />
                    <div className="absolute w-[252px] h-[91px] top-0 left-[6px]">
                      <div className="absolute top-0 left-0 [font-family:'Roboto-ExtraBold',Helvetica] font-extrabold text-stone-900 text-[24px] tracking-[0] leading-[normal] whitespace-nowrap">
                        High-Speed Internet
                      </div>
                      <div className="absolute w-[250px] h-[36px] top-[55px] left-[2px]">
                        <p className="absolute w-[248px] top-0 left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-stone-900 text-[15px] tracking-[0] leading-[normal]">
                          Enjoy high-speed internet anywhere you go with
                          Only-Wifi.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[206px] left-[92px] absolute w-[381px] top-[16px]">
            <div className="relative h-[206px]">
              <div className="bg-[url('/images/card-benefit.png')] absolute w-[373px] h-[198px] top-0 left-0 bg-[100%_100%] bg-cover">
                <div className="relative w-[283px] h-[95px] top-[47px] left-[42px]">
                  <div className="relative w-[292px] h-[95px] left-[-6px]">
                    <Image
                      width={100}
                      height={100}
                      className="absolute w-[292px] h-[12px] top-[36px] left-0"
                      alt="Line"
                      src={line}
                    />
                    <div className="absolute w-[285px] h-[95px] top-0 left-[6px]">
                      <div className="absolute top-0 left-0 [font-family:'Roboto-ExtraBold',Helvetica] font-extrabold text-stone-900 text-[24px] tracking-[0] leading-[normal] whitespace-nowrap">
                        Affordable Data Packages
                      </div>
                      <div className="absolute w-[250px] h-[40px] top-[55px] left-[2px]">
                        <p className="absolute w-[248px] top-0 left-0 [font-family:'Open_Sans-Regular',Helvetica] font-normal text-stone-900 text-[15px] tracking-[0] leading-[normal]">
                          Get access to cheap data packages that fit your
                          budget.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Image
                className="!absolute !w-[80px] !h-[80px] !top-[126px] !left-[301px]"
                src={monetization}
                width={100}
                height={100}
                alt=""
              />
            </div>
          </div>
          <div className="h-[203px] left-[1216px] absolute w-[381px] top-[16px]">
            <div className="relative h-[203px]">
              <div className="bg-[url('/images/card-benefit.png')] absolute w-[373px] h-[198px] top-0 left-0 bg-[100%_100%] bg-cover">
                <div className="relative w-[280px] h-[91px] top-[47px] left-[46px]">
                  <div className="relative w-[292px] h-[91px] left-[-6px]">
                    <Image
                      width={100}
                      height={100}
                      className="absolute w-[292px] h-[12px] top-[36px] left-0"
                      alt="Line"
                      src={line}
                    />
                    <div className="absolute w-[252px] h-[91px] top-0 left-[8px]">
                      <div className="absolute top-0 left-0 [font-family:'Roboto-ExtraBold',Helvetica] font-extrabold text-stone-900 text-[24px] tracking-[0] leading-[normal] whitespace-nowrap">
                        Easy Sign-Up Process
                      </div>
                      <div className="absolute w-[250px] h-[36px] top-[55px] left-[2px]">
                        <p className="absolute w-[248px] top-0 left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-stone-900 text-[15px] tracking-[0] leading-[normal]">
                          Sign up for Only-Wifi in minutes with our easy sign-up
                          process.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[69px] h-[69px] top-[134px] left-[312px] rounded-[34.5px] absolute bg-white shadow-[inset_0px_4px_4px_#00000040]">
                <Image
                  className="!absolute !w-[51px] !h-[51px] !top-[8px] !left-[13px]"
                  src={howToReg}
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[783px] h-[748px] top-[10px] left-[832px]">
          <div className="relative w-[797px] h-[762px] top-[-2px] left-[-7px] bg-[url('/images/hero-image.png')] bg-cover bg-[50%_50%]">
            <Image
              width={100}
              height={100}
              className="absolute w-[174px] h-[168px] top-[573px] left-[30px]"
              alt="Hero vector"
              src="/images/hero-vector.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
