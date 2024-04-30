"use client";
import SignIn from "@/components/sign-in";
import Logo from "../(Inventory)/Inventory/_components/logo";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "For drug buyers",
    href: "/DrugSales"
  },
  {
    name: "For pharmacies",
    href: "/Pharmacies"
  },
  {
    name: "Help",
    href: "/Help"
  },
  {
    name: "FAQs",
    href: "/Faq"
  },
  {
    name: "About",
    href: "/About"
  }
]
export default function Home() {
  const pathName = usePathname();
  return (
    <div className="w-full border-b min-h-[60px] border-b-[#ffffff32] transition-opacity">
     <div className="hidden md:w-[90%] mx-auto md:flex  bg-slate-400  items-center justify-between">
      <div>
      <Logo/>
      </div>
      <div className="flex space-x-4 jusify-between items-center flex-row">
      <div>
        {
          navItems.map((item,i) => (
          <div className={cn("flex items-center flex-row space-x-4", pathName === item.href  && "border-b border-[#54A4CC] transition ease-in-out duration-75")}>
            <Link href={item.href} className="flex space-x-4 items-center">
            {item.name}
            </Link>
          </div>
          ))
    
        }
 
      </div> 
          </div>
      
   
     </div>
      <SignIn/>
    </div>
  );
}
