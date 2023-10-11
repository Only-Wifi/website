import Image from "next/image";
import { FC } from "react";

import logo from "@/images/only-wifi-3-d-logo-1.png";
import line from "@/images/line-1.svg";
import { Facebook, Instagram, TwitterIcon } from "lucide-react";
import { ContactForm } from "../ContactForm";
import Link from "next/link";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div id="contact" className="w-full">
      <div className="relative w-full">
        <div className="relative w-full flex items-end z-10 ">
          <div className="absolute -right-[0.5rem] -bottom-[10rem] lg:-bottom-[16rem] xl:-bottom-[21rem] 2xl:-bottom-[27rem] bg-[#0C0C0E] rounded-full flex items-center justify-center  w-[13rem] sm:w-[15rem] lg:w-[22rem] lg:right-[1rem] xl:w-[27rem] xl:right-[7rem] 2xl:w-[33rem] 2xl:right-[13rem]  aspect-square">
            <Image className="w-[60%]" alt="Asset wifi" src={logo} />
          </div>
        </div>
        {/* <div className="relative w-full bg-[url('/images/ow-footer-bg.svg')] bg-cover  -top-36 py-[10rem]"> */}
        <div className="relative flex  flex-col items-center bottom-0  ml-[-50%] h-fit w-[200%] rounded-t-[100%] bg-[#0C0C0E]">
          <div className="w-screen max-w-[1300px] flex flex-col items-center justify-center h-full md:items-start">
            <div className="flex flex-col mx-10 text-white mt-[10rem] w-[80%] max-w-sm md:mx-auto lg:ml-[8rem]">
              <h1 className="text-center text-lg font-bold mb-3">
                Ready to get Started?
              </h1>
              <ContactForm />
            </div>
            <div className="flex flex-row-reverse self-end m-2">
              <Link className="hover:scale-110 " href="/#facebook">
                <Facebook
                  width={30}
                  height={30}
                  className="bg-white/30 invert m-1 rounded-full p-1"
                />
              </Link>
              <Link className="hover:scale-110 " href="/#instagram">
                <Instagram
                  width={30}
                  height={30}
                  className="bg-white/30 invert m-1 rounded-full p-1"
                />
              </Link>
              <Link className="hover:scale-110 " href="/#twitter">
                <TwitterIcon
                  width={30}
                  height={30}
                  className="bg-white/30 invert m-1 rounded-full p-1"
                />
              </Link>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-1 items-center justify-center invert border-t border-black/60 m-1 p-1 text-xs">
              <div className="flex  basis-1/2 gap-1 ">
                <Link href="/">
                  <p className="border-r px-1 border-black/60">Home</p>
                </Link>
                <Link href="/#packages">
                  <p className="border-r px-1 border-black/60">Packages</p>
                </Link>
                <Link href="/#coverage">
                  <p className="border-r px-1 border-black/60">Coverage Map</p>
                </Link>
                <Link href="/#resellers">
                  <p className="">Reseller Model</p>
                </Link>
              </div>
              <div className="flex flex-row-reverse basis-1/2">
                <p className=" ">
                  © 2023 <Link href={"/"}>Only-Wifi</Link>. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
