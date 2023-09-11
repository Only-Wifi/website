import AboutSection from "@/components/home/AboutSection";
import HeroSection from "@/components/home/HeroSection";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
    return (
        <div className="">
            <HeroSection />
            <AboutSection />
        </div>
    );
}
