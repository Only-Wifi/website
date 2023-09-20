import Image from "next/image";
import { FC } from "react";
import lineImage from "@/images/line-1.svg";
import peopleImage from "@/images/people-image.png";

interface aboutSectionProps {}

const AboutSection: FC<aboutSectionProps> = ({}) => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[1680px] h-[1024px]">
        <div className="relative w-[1659px] h-[876px] top-[78px] left-[11px]">
          <Image
            width={100}
            height={100}
            className="absolute w-[1079px] h-[876px] top-0 left-0 object-cover"
            alt="Rectangle"
            src={peopleImage}
          />
          <div className="absolute w-[866px] h-[615px] top-[119px] left-[793px] bg-[#0c0c0ef5] rounded-[99px] shadow-[10px_4px_4px_#00000040]" />
          <Image
            width={100}
            height={100}
            className="absolute w-[295px] h-[12px] top-[300px] left-[926px]"
            alt="Line"
            src={lineImage}
          />
          <div className="absolute top-[210px] left-[928px] [font-family:'Roboto-Black',_Helvetica] font-black text-white text-[55px] tracking-[0.28px] leading-[91.0px] whitespace-nowrap">
            ABOUT US
          </div>
          <p className="absolute w-[580px] top-[352px] left-[928px] [font-family:'Inter-Regular',_Helvetica] font-normal text-white text-[24px] tracking-[0] leading-[normal]">
            At Only-WiFi, we&#39;re more than just a connection – we&#39;re a
            community. Our journey is about bridging gaps, not just in
            connectivity, but in opportunities. From introducing mobile Wi-Fi
            solutions to fostering collaboration through our reseller model,
            we&#39;re committed to economic growth and empowerment. With us,
            businesses become hotspots of income and foot traffic, and clients
            gain affordable browsing, anywhere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
