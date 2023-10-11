import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/Toaster";
import { cn } from "@/lib/utils";
import { Inter, Roboto, Open_Sans } from "next/font/google";
import "../styles/globals.css";
import Footer from "@/components/home/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const roboto = Roboto({
  weight: ["900"],
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-heading",
});
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-btn" });

export const metadata = {
  title: "Only Wifi",
  description: "Big data at small prices",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <Providers> */}
      <body
        className={cn(
          "min-h-screen bg-background antialiased ",
          inter.className
        )}
      >
        <Navbar />
        <div className="h-full pt-12 overflow-hidden">
          {children}
          <Footer />
        </div>
        <Toaster />
      </body>
      {/* </Providers> */}
    </html>
  );
}
