import Image from "next/image";
import { FC } from "react";
import aboutImage from "@/images/about-image.png";
import line from "@/images/line-1.svg";

interface aboutSectionProps {}

const AboutSection: FC<aboutSectionProps> = ({}) => {
  return (
    <div
      id="about"
      className="relative w-full max-w-[1400px] mx-auto flex flex-col items-center md:flex-row py-10 px-3"
    >
      <div className="w-full relative  max-w-lg md:max-w-fit">
        <Image
          className=""
          alt="About image"
          src={aboutImage}
          width={1000}
          height={1000}
        />
      </div>
      <div className="relative -mt-[2rem] md:mt-0 flex flex-col items-center">
        <div className="relative min-w-[20.5rem] max-w-[22rem] sm:max-w-sm md:max-w-md md:-ml-[3rem] bg-[#1c1917f0] rounded-[50px] flex flex-col items-center p-5">
          <h1 className="relative self-stretch [text-shadow:0px_4px_4px_#00000040] font-bold text-transparent text-center text-3xl sm:text-4xl md:xl  leading-tight">
            <span className="text-secondary">
              CONNECTING <br />
              COMMUNITIES
            </span>
          </h1>

          <Image className="my-5" alt="Line" src={line} />
          <p className="text-secondary text-center">
            At Only-Wifi, we are on a mission to bridge the digital divide. Our
            goal is to provide affordable internet access to communities
            everywhere, transforming lives and livelihoods.
            <br />
            <br />
            <span className="hidden lg:block">
              Our journey is about bridging gaps, not just in connectivity, but
              in opportunities. From introducing mobile Wi-Fi solutions to
              fostering collaboration through our reseller model, we&#39;re
              committed to economic growth and empowerment. With us, businesses
              become hotspots of income and foot traffic, and clients gain
              affordable browsing, anywhere.{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
