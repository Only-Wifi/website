import { FC } from "react";

import pkgImage from "@/images/Package-Card.png";
import Image from "next/image";

interface PackagesSectionProps {}

const PackagesSection: FC<PackagesSectionProps> = ({}) => {
  return (
    // <div className="bg-white flex flex-row justify-center w-full">
    //   <div className="bg-white w-[1680px] h-[1024px]">
    //     <div className="relative h-[610px] top-[97px] bg-[url('/images/packges-background.png')] bg-[100%_100%]">
    //       <div className="relative w-[1484px] h-[549px] top-[22px] left-[100px]">
    //         <p className="absolute top-0 left-[221px] [font-family:'Roboto-Black',Helvetica] font-black text-stone-900 text-[55px] tracking-[0.28px] leading-[91.0px] whitespace-nowrap">
    //           CHOOSE YOUR PERFECT DATA PACKAGE
    //         </p>
    //         <p className="absolute w-[1124px] top-[159px] left-[154px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[24px] text-center tracking-[0] leading-[normal]">
    //           Stay connected with our affordable data plans
    //         </p>
    //         <div className="absolute w-[1480px] h-[325px] top-[224px] left-0">
    //           <div className="left-[-4px] absolute w-[382px] h-[325px] top-0 bg-[url('/images/Package-Card.png')]">
    //             <div className="h-1/2 [font-family:'Roboto-Black',Helvetica] font-black text-stone-900 text-[64px] tracking-[0.32px] leading-[105.9px] whitespace-nowrap text-center">
    //               300MB
    //             </div>
    //             <div className="h-1/2">
    //               <div className=" w-[207px] h-[49px]  bg-stone-900 rounded-[26px] shadow-[0px_3px_2px_1px_#00000040] text-white text-center mx-auto p-3 mt-7">
    //                 CONTACT US
    //               </div>
    //             </div>
    //           </div>
    //           <div className="left-[549px] absolute w-[382px] h-[325px] top-0 bg-[url('/images/Package-Card.png')]">
    //             <div className="h-1/2 [font-family:'Roboto-Black',Helvetica] font-black text-stone-900 text-[64px] tracking-[0.32px] leading-[105.9px] whitespace-nowrap text-center">
    //               500 MB
    //             </div>
    //             <div className="h-1/2">
    //               <div className=" w-[207px] h-[49px]  bg-stone-900 rounded-[26px] shadow-[0px_3px_2px_1px_#00000040] text-white text-center mx-auto p-3 mt-7">
    //                 CONTACT US
    //               </div>
    //             </div>
    //           </div>
    //           <div className="left-[1102px] absolute w-[382px] h-[325px] top-0 bg-[url('/images/Package-Card.png')]">
    //             <div className="h-1/2 [font-family:'Roboto-Black',Helvetica] font-black text-stone-900 text-[64px] tracking-[0.32px] leading-[105.9px] whitespace-nowrap text-center">
    //               1GB
    //             </div>
    //             <div className="h-1/2">
    //               <div className=" w-[207px] h-[49px]  bg-stone-900 rounded-[26px] shadow-[0px_3px_2px_1px_#00000040] text-white text-center mx-auto p-3 mt-7">
    //                 CONTACT US
    //               </div>
    //             </div>
    //           </div>
    //           {/* <Image
    //             className="left-[-4px] absolute w-[382px] h-[325px] top-0"
    //             alt="Group"
    //             src={pkgImage}
    //           /> */}
    //           {/* <Image
    //             className="left-[549px] absolute w-[382px] h-[325px] top-0"
    //             alt="Group"
    //             src={pkgImage}
    //           />
    //           <Image
    //             className="left-[1102px] absolute w-[382px] h-[325px] top-0"
    //             alt="Group"
    //             src={pkgImage}
    //           /> */}
    //         </div>
    //         a
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="inline-flex flex-col items-center gap-[34px] relative w-full border h-full p-10">
      <div className="bg-[url('/images/mobile-pkgs-bg.png')] bg-cover inset-3 absolute " />
      <div className="w-full mx-10 [font-family:'Roboto-Black',Helvetica] font-black text-stone-900 text-[30px] text-center tracking-[0.30px] leading-[30px] z-10">
        DATA PACKAGES
      </div>
      <div className="w-3/4 h-[14rem] bg-[url('/images/Package-Card.png')] bg-cover z-10">
        <div className="h-1/2 [font-family:'Roboto-Black',Helvetica] font-black text-stone-900 text-[24px] tracking-[0.12px] leading-[39.7px] whitespace-nowrap text-center">
          300MB
        </div>
        <div className="h-1/2">
          <div className=" w-4/5 bg-stone-900 rounded-[26px] shadow-[0px_3px_2px_1px_#00000040] text-white text-center mx-auto p-3 mt-7">
            CONTACT US
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesSection;
