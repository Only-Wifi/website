import AboutSection from "@/components/home/AboutSection";
import BetaInfoSection from "@/components/home/BetaInfoSection";
import CoverageSection from "@/components/home/CoverageSection";
import Footer from "@/components/home/Footer";
import HeroSection from "@/components/home/HeroSection";
import PackagesSection from "@/components/home/PackagesSection";
import ResellerSection from "@/components/home/ResellerSection";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <PackagesSection />
      <CoverageSection />
      <ResellerSection />
      <BetaInfoSection />
      <Footer />
    </div>
  );
}
