import Image from "next/image";
import { FC } from "react";
import image from "@/images/person_on_phone.png";
import { Button } from "../ui/Button";

interface HeroSection { }

const HeroSection: FC<HeroSection> = ({ }) => {
    return (
        <section className="mt-10">
            <div className="flex gap-10">
                <div className="basis-1/2 max-w-[400px]">
                    <h1 className="text-xl md:text-5xl font-bold uppercase leading-loose">
                        staying <span className="text-[#fed208] ">connected</span> has never
                        been this <span className="text-[#fed208] ">easy</span>
                    </h1>
                    <Button className="my-10">Get Started</Button>
                </div>
                <div className="relative basis-1/2">
                    <div className="-mt-[5rem] w-[200%] aspect-auto rounded-full bg-[#fed208] flex align-center justify-center">
                        <Image src={image} alt="Image" width={500} height={500} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
