import Image from "next/image";
import { FC } from "react";

import resellerImage from "@/images/reseller-image.png";
import okImage from "@/images/ok.png";

interface ResellerSectionProps {}

const ResellerSection: FC<ResellerSectionProps> = ({}) => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[1680px] h-[1376px] relative">
        <div className="absolute w-[1520px] h-[1058px] top-[10px] left-[160px]">
          <Image
            className="absolute w-[1182px] h-[1058px] top-0 left-[338px] object-cover"
            alt="Reseller image"
            src={resellerImage}
          />
          <div className="absolute w-[829px] h-[835px] top-[98px] left-0">
            <div className="absolute w-[209px] h-[49px] top-[786px] left-[2px]">
              <div className="relative w-[207px] h-[49px] bg-[#f8df00] rounded-[26px] shadow-[0px_1px_2px_1px_#00000040]">
                <div className="absolute w-[195px] top-[15px] left-[6px] [font-family:'Open_Sans-Bold',Helvetica] font-bold text-black text-[14px] text-center tracking-[0.10px] leading-[20px]">
                  BECOME A RESELLER
                </div>
              </div>
            </div>
            <p className="absolute w-[569px] top-[317px] left-[2px] [font-family:'Inter-Regular',Helvetica] font-normal text-stone-900 text-[24px] tracking-[0] leading-[normal]">
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
            <p className="absolute w-[823px] top-[227px] left-0 [font-family:'Inter-Bold',Helvetica] font-bold text-stone-900 text-[24px] tracking-[0] leading-[normal]">
              Become an Only-Wifi Reseller and Connect Your Community
            </p>
            <p className="absolute w-[711px] top-0 left-0 [font-family:'Roboto-Black',Helvetica] font-black text-transparent text-[50px] tracking-[0.25px] leading-[82.7px]">
              <span className="text-[#f8df00]">UNLOCK</span>
              <span className="text-stone-900">
                {" "}
                A LUCRATIVE BUSINESS OPPORTUNITY
              </span>
            </p>
          </div>
        </div>
        <div className="absolute w-[1680px] h-[308px] top-[1068px] left-0">
          <div className="relative h-[308px]">
            <div className="absolute w-[1680px] h-[308px] top-0 left-0 bg-stone-900 blur-sm">
              <div className="relative w-[631px] h-[308px] left-[525px] bg-[#383432] blur-sm" />
            </div>
            <div className="w-[398px] left-[631px] absolute h-[93px] top-[94px]">
              <p className="absolute w-[290px] top-0 left-[106px] [font-family:'Inter-Regular',Helvetica] font-normal text-transparent text-[24px] tracking-[0] leading-[normal]">
                <span className="text-white">
                  Empower Your Community with Internet Access
                </span>
              </p>
              <Image
                className="absolute w-[93px] h-[93px] top-0 left-0"
                alt="Ok"
                src={okImage}
              />
            </div>
            <div className="absolute w-[369px] h-[96px] top-[91px] left-[1231px]">
              <p className="absolute w-[261px] top-[9px] left-[106px] [font-family:'Inter-Bold',Helvetica] font-bold text-transparent text-[24px] tracking-[0] leading-[normal]">
                <span className="text-white">
                  Easy Sign-Up Flexible Business Model - Part-time or Full-time
                </span>
              </p>
              <Image
                className="absolute w-[93px] h-[93px] top-0 left-0"
                alt="Ok"
                src={okImage}
              />
            </div>
            <div className="w-[371px] left-[58px] absolute h-[93px] top-[94px]">
              <Image
                className="absolute w-[93px] h-[93px] top-0 left-0"
                alt="Ok"
                src={okImage}
              />
              <p className="absolute w-[261px] top-[16px] left-[108px] [font-family:'Inter-Bold',Helvetica] font-bold text-transparent text-[24px] tracking-[0] leading-[normal]">
                <span className="text-white">
                  Earn Commissions on Data Package Sales
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResellerSection;
