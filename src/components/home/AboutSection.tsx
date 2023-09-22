import Image from "next/image";
import { FC } from "react";
import aboutImage from "@/images/about-image.png";
import line from "@/images/line-1.svg";

interface aboutSectionProps {}

const AboutSection: FC<aboutSectionProps> = ({}) => {
  return (
    // <div className="bg-white flex flex-row justify-center w-full">
    //   <div className="bg-white w-[1680px] h-[1024px]">
    //     <div className="relative w-[1588px] h-[793px] top-[92px] left-[48px]">
    //       <Image
    //         className="absolute w-[1027px] h-[793px] top-0 left-0 object-cover"
    //         alt="About image"
    //         src={aboutImage}
    //       />
    //       <div className="absolute w-[823px] h-[639px] top-[100px] left-[765px]">
    //         <div className="relative w-[819px] h-[639px] bg-[#1c1917f0] rounded-[86px]">
    //           <p className="absolute w-[641px] top-[187px] left-[89px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[24px] tracking-[0] leading-[normal]">
    //             At Only-Wifi, we are on a mission to bridge the digital divide.
    //             Our goal is to provide affordable internet access to communities
    //             everywhere, transforming lives and livelihoods.
    //             <br />
    //             <br />
    //             Our journey is about bridging gaps, not just in connectivity,
    //             but in opportunities. From introducing mobile Wi-Fi solutions to
    //             fostering collaboration through our reseller model, we&#39;re
    //             committed to economic growth and empowerment. With us,
    //             businesses become hotspots of income and foot traffic, and
    //             clients gain affordable browsing, anywhere.
    //           </p>
    //           <div className="absolute w-[717px] h-[93px] top-[48px] left-[54px]">
    //             <div className="absolute top-0 left-[19px] [font-family:'Roboto-Black',Helvetica] font-black text-white text-[50px] tracking-[0.25px] leading-[82.7px] whitespace-nowrap">
    //               CONNECTING COMMUNITIES
    //             </div>
    //             <Image
    //               className="absolute w-[717px] h-[12px] top-[81px] left-0"
    //               alt="Line"
    //               src={line}
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="inline-flex flex-col items-center relative">
      <Image
        className="relative w-[293px] h-[227px] object-cover"
        alt="About image"
        src={aboutImage}
      />
      <div className="relative w-[275px] h-[211.44px] mt-[-32px]">
        <div className="relative w-[271px] h-[211px] bg-[#1c1917f0] rounded-[50px]">
          <p className="absolute w-[212px] top-[106px] left-[30px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[12px] text-center tracking-[0] leading-[normal]">
            At Only-Wifi, we are on a mission to bridge the digital divide. Our
            goal is to provide affordable internet access to communities
            everywhere, transforming lives and livelihoods.
          </p>
          <div className="absolute w-[223px] top-[16px] left-[24px] [font-family:'Roboto-Bold',Helvetica] font-bold text-white text-[24px] text-center tracking-[0.48px] leading-[24px]">
            CONNECTING COMMUNITIES
          </div>
          <Image
            className="absolute w-[245px] h-[12px] top-[79px] left-[13px]"
            alt="Line"
            src={line}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
