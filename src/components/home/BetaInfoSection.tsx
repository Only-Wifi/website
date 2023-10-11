import { FC } from "react";
import { Button } from "../ui/Button";
import Link from "next/link";

interface BetaInfoSectionProps {}

const BetaInfoSection: FC<BetaInfoSectionProps> = ({}) => {
  return (
    <div className=" w-full max-w-[1300px] mx-auto bg-[url('/images/beta-bg.png')] bg-cover bg-[50%_50%]">
      <div className=" items-center flex flex-col content-center ">
        <div className=" w-[80%] max-w-3xl h-full bg-[#1c1917f0] rounded-[86px] shadow-[inset_19px_30px_4px_#00000040] my-24">
          <div className="m-5 p-5 flex flex-col justify-center gap-3 ">
            <div className="flex flex-col justify-center gap-3">
              <p className="  text-white text-xs md:text-base text-center leading-normal">
                We&#39;re excited to announce that Only-Wifi is currently in its
                beta phase! To ensure our system delivers top-notch, fast, and
                secure internet, we&#39;re carefully selecting resellers,
                locations, and customers for this phase. If you&#39;re eager to
                be part of our journey, click the button below to join our
                wait-list for beta testing and early release.
              </p>
              <Button
                // className=" bg-white rounded-[26px] border-[3px] border-solid border-[#1c1917c2] shadow-[0px_1px_2px_1px_#00000040]  "
                className="hover:scale-105 rounded-2xl shadow-[0px_1px_2px_1px_#00000040]"
                variant="default"
                size="lg"
              >
                <Link href="/#contact">BECOME A RESELLER</Link>
              </Button>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <p className=" text-white text-xs md:text-base text-center leading-normal">
                The interest has been overwhelming, and we&#39;re gearing up for
                a smooth roll-out soon. Customers, stay tuned! Click
                &#34;Subscribe&#34; to receive updates on our roll-out progress
                in your area and business news.
              </p>
              <Button
                // className=" bg-[#f8df00] rounded-full shadow-[0px_1px_2px_1px_#00000040]  "
                className="hover:scale-105 rounded-2xl shadow-[0px_1px_2px_1px_#00000040]"
                variant="secondary"
                size="lg"
              >
                <Link href="/#contact">SUBSCRIBE</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetaInfoSection;
