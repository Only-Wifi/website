import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/Toaster";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

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
        <html
            lang="en"
            className={cn(
                "bg-white text-slate-900 antialiased light",
                inter.className
            )}
        >
            {/* <Providers> */}
            <body className="min-h-screen pt-12 bg-slate-50 antialiased ">
                <Navbar />
                <div className="container max-w-7xl mx-auto h-full pt-12 overflow-hidden">
                    {children}
                </div>
                <Toaster />
            </body>
            {/* </Providers> */}
        </html>
    );
}
