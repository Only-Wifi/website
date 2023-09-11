import { FC } from "react";

interface aboutSectionProps { }

const AboutSection: FC<aboutSectionProps> = ({ }) => {
    return (
        <div className="h-40 bg-black flex justify-between p-5">
            <div className="bg-white rounded-[75px] w-[70%] h-[198px] m-5">
                <h1 className="text-black text-2xl font-extrabold">
                    Affordable Data Packages
                </h1>
            </div>
            <div className="bg-white rounded-[75px] w-[70%] h-[198px] m-5">
                <h1 className="text-black text-2xl font-extrabold">
                    Affordable Data Packages
                </h1>
            </div>
            <div className="bg-white rounded-[75px] w-[70%] h-[198px] m-5">
                <h1 className="text-black text-2xl font-extrabold">
                    Affordable Data Packages
                </h1>
            </div>
        </div>
    );
};

export default AboutSection;
