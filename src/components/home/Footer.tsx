import Image from "next/image";
import { FC } from "react";

import logo from "@/images/only-wifi-3-d-logo-1.png";
import line from "@/images/line-1.svg";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[1680px] h-[1024px]">
        <div className="relative h-[941px] top-[83px] bg-[url('/images/ow-footer-bg.svg')] bg-[100%_100%]">
          <Image
            className="absolute w-[360px] h-[391px] top-[62px] left-[1110px] object-cover"
            alt="Asset wifi"
            src={logo}
          />
          <div className="absolute w-[104px] h-[43px] top-[757px] left-[1360px]">
            <div className="absolute w-[44px] h-[43px] top-0 left-[60px] rounded-[19.5px] border-[1.5px] border-solid border-[color:var(--white)]">
              {/* <Image
                className="absolute w-[16px] h-[15px] top-[12px] left-[13px]"
                alt="Group"
                src="group-14.png"
              /> */}
            </div>
            <div className="absolute w-[44px] h-[43px] top-0 left-0 rounded-[19.5px] border-[1.5px] border-solid border-[color:var(--white)]">
              {/* <Image
                className="absolute w-[8px] h-[16px] top-[12px] left-[17px]"
                alt="Shape"
                src="shape.svg"
              /> */}
            </div>
          </div>
          <p className="absolute w-[301px] top-[867px] left-[1192px] [font-family:'Open_Sans-Regular',Helvetica] font-normal text-[color:var(--white)] text-[14px] text-center tracking-[0] leading-[14px]">
            © 2023 Only-Wifi. All Rights Reserved.
          </p>
          <div className="absolute w-[72px] top-[867px] left-[236px] [font-family:'Open_Sans-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[normal]">
            Packages
          </div>
          <div className="absolute w-[70px] top-[867px] left-[132px] [font-family:'Open_Sans-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[normal]">
            About us
          </div>
          <div className="absolute w-[113px] top-[867px] left-[331px] [font-family:'Open_Sans-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[normal]">
            Coverage Map
          </div>
          <div className="absolute w-[118px] top-[868px] left-[457px] [font-family:'Open_Sans-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[normal]">
            Reseller Model
          </div>
          <div className="absolute w-[656px] top-[344px] left-[91px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[color:var(--white)] text-[60px] text-center tracking-[0] leading-[80px]">
            Ready to get started?
          </div>
          <Image
            className="absolute w-[1366px] h-px top-[838px] left-[127px] object-cover"
            alt="Line"
            src={line}
          />
          <div className="absolute w-[195px] h-[49px] top-[737px] left-[99px]">
            <div className="absolute w-[147px] h-[49px] top-0 left-[28px] bg-[#f8df00] rounded-[26px] shadow-[inset_0px_1px_2px_1px_#00000040]" />
            <div className="absolute w-[195px] top-[14px] left-0 [font-family:'Open_Sans-Bold',Helvetica] font-bold text-black text-[14px] text-center tracking-[0.10px] leading-[20px]">
              SEND
            </div>
          </div>
          <div className="flex w-[545px] h-[50px] items-center gap-[10px] px-[20px] py-[12px] absolute top-[445px] left-[123px] rounded-[31px] border border-solid border-[color:var(--gray-5)]">
            <p className="relative w-fit [font-family:'Montserrat-Regular',Helvetica] font-normal text-transparent text-[14px] tracking-[0.14px] leading-[24px] whitespace-nowrap">
              <span className="text-[#828282]">Name </span>
              <span className="text-[#eb5757]">*</span>
            </p>
          </div>
          <div className="h-[50px] top-[515px] rounded-[31px] flex w-[545px] items-center gap-[10px] px-[20px] py-[12px] absolute left-[123px] border border-solid border-[color:var(--gray-5)]">
            <div className="relative w-fit [font-family:'Montserrat-Regular',Helvetica] font-normal text-[color:var(--gray-3)] text-[14px] tracking-[0.14px] leading-[24px] whitespace-nowrap">
              Email
            </div>
          </div>
          <div className="h-[132px] top-[585px] rounded-[41px] flex w-[545px] items-center gap-[10px] px-[20px] py-[12px] absolute left-[123px] border border-solid border-[color:var(--gray-5)]">
            <div className="relative w-fit [font-family:'Montserrat-Regular',Helvetica] font-normal text-[color:var(--gray-3)] text-[14px] tracking-[0.14px] leading-[24px] whitespace-nowrap">
              Write Something
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
