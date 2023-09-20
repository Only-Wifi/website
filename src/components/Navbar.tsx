import Link from "next/link";
import { Icons } from "./Icons";
import { Button, buttonVariants } from "./ui/Button";
import NavMenu from "./NavMenu";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <div className="fixed top-0 inset-x-0  min-h-10 max-h-20 bg-black border-b border-zinc-300 z-[10] py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        {/* logo */}
        <div className="">
          <Link href="/" className="flex gap-2 items-center">
            <Icons.onlywifiLogo className="h-8 w-8 sm:h-6 sm:w-6 " />
            <p className="hidden">Only Wifi</p>
          </Link>
        </div>
        <NavMenu />

        <Link
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "bg-[#fed208] text-black hover:bg-[#fed208]/90"
          )}
          href="https://app.only-wifi.com/sign-in"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
