import { FC } from "react";
import { Button } from "../ui/Button";

interface BetaInfoSectionProps {}

const BetaInfoSection: FC<BetaInfoSectionProps> = ({}) => {
  return (
    // <div className="bg-white flex flex-row justify-center w-full">
    //   <div className="bg-white w-[1680px] h-[1024px]">
    //     <div className="relative h-[1024px] bg-[url('/images/beta-bg.png')] bg-[100%_100%]">
    //       <div className="absolute w-[1409px] h-[639px] top-[192px] left-[136px] bg-[#1c1917f0] rounded-[86px] shadow-[inset_19px_30px_4px_#00000040] blur-sm" />
    //       <div className="absolute w-[1211px] h-[188px] top-[580px] left-[236px]">
    //         <div className="relative w-[1209px] h-[188px]">
    // <Button className="absolute w-[234px] h-[49px] top-[139px] left-0 all-[unset] box-border">
    //   <div className="relative w-[232px] h-[49px] rounded-[26px] border-[3px] border-solid border-[#f8df00] shadow-[0px_1px_2px_1px_#00000040]">
    //     <div className="absolute w-[86px] top-[12px] left-[70px] [font-family:'Open_Sans-Bold',Helvetica] font-bold text-white text-[14px] tracking-[0.10px] leading-[20px]">
    //       SUBSCRIBE
    //     </div>
    //   </div>
    // </Button>
    //           <p className="absolute w-[1202px] top-0 left-[7px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[30px] tracking-[0] leading-[normal]">
    //             The interest has been overwhelming, and we&#39;re gearing up for
    //             a smooth roll-out soon. Customers, stay tuned! Click
    //             &#34;Subscribe&#34; to receive updates on our roll-out progress
    //             in your area and business news.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="absolute w-[1194px] h-[257px] top-[256px] left-[244px]">
    //         <p className="absolute w-[1192px] top-0 left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[30px] tracking-[0] leading-[normal]">
    //           We&#39;re excited to announce that Only-Wifi is currently in its
    //           beta phase! To ensure our system delivers top-notch, fast, and
    //           secure internet, we&#39;re carefully selecting resellers,
    //           locations, and customers for this phase. If you&#39;re eager to be
    //           part of our journey, click the button below to join our wait-list
    //           for beta testing and early release.
    //         </p>
    //         <div className="absolute w-[234px] h-[49px] top-[208px] left-0">
    //           <div className="relative w-[232px] h-[49px] bg-[#f8df00] rounded-[26px] shadow-[0px_1px_2px_1px_#00000040]">
    //             <div className="absolute w-[218px] top-[15px] left-[7px] [font-family:'Open_Sans-Bold',Helvetica] font-bold text-black text-[14px] text-center tracking-[0.10px] leading-[20px]">
    //               BECOME A RESELLER
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[301px] h-[568px]">
        <div className="h-[568px] bg-white">
          <div className="relative w-[301px] h-[568px] bg-[url('/images/beta-bg.png')] bg-[100%_100%]">
            <div className="absolute w-[272px] h-[518px] top-[24px] left-[14px] bg-[#1c1917f0] rounded-[86px] shadow-[inset_19px_30px_4px_#00000040] blur-sm" />
            <div className="absolute w-[205px] h-[180px] top-[308px] left-[48px]">
              <Button className="absolute w-[154px] h-[49px] top-[131px] left-[26px] all-[unset] box-border">
                <div className="relativew-[152px] h-[49px] rounded-[26px] border-[3px] border-solid border-[#f8df00] shadow-[0px_1px_2px_1px_#00000040]">
                  <div className="absolute w-[67px] top-[12px] left-[39px] [font-family:'Open_Sans-Bold',Helvetica] font-bold text-white text-[12px] tracking-[0.10px] leading-[20px]">
                    SUBSCRIBE
                  </div>
                </div>
              </Button>
              <p className="absolute w-[203px] top-0 left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[12px] text-center tracking-[0] leading-[normal]">
                The interest has been overwhelming, and we&#39;re gearing up for
                a smooth roll-out soon. Customers, stay tuned! Click
                &#34;Subscribe&#34; to receive updates on our roll-out progress
                in your area and business news.
              </p>
            </div>
            <div className="absolute w-[205px] h-[216px] top-[77px] left-[48px]">
              <div className="relative w-[203px] h-[216px]">
                <p className="absolute w-[203px] top-0 left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[12px] text-center tracking-[0] leading-[normal]">
                  We&#39;re excited to announce that Only-Wifi is currently in
                  its beta phase! To ensure our system delivers top-notch, fast,
                  and secure internet, we&#39;re carefully selecting resellers,
                  locations, and customers for this phase. If you&#39;re eager
                  to be part of our journey, click the button below to join our
                  wait-list for beta testing and early release.
                </p>
                <div className="absolute w-[133px] h-[49px] top-[167px] left-[34px]">
                  <div className="relative w-[135px] h-[53px] -top-px left-[-2px] bg-[#f8df00] rounded-[26px] shadow-[0px_1px_2px_1px_#00000040]">
                    <div className="absolute w-[113px] top-[21px] left-[11px] [font-family:'Open_Sans-Bold',Helvetica] font-bold text-black text-[10px] text-center tracking-[0.10px] leading-[10px]">
                      BECOME A RESELLER
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetaInfoSection;
