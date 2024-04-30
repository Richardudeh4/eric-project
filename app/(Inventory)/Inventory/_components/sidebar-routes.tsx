"use client";
import { BarChart, Building, Building2, Compass, Hospital, Layout, LineChart, List, MessageCircleDashed, User2, Users2Icon } from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { usePathname } from "next/navigation";
const SidebarRoute = [
    {
        icon: Building,
        label: "Dashboard",
        href: "/",
    },
    {
        icon: Hospital,
        label: "Inbounds",
        href: "/Inbounds",
    },
    {
        icon: LineChart,
        label: "Manager",
        href: "/Manager"
    },
    {
        icon: Users2Icon,
        label:  "CRM",
        href: "/Crm"
    },
    {
        icon : Building2,
        label: "Back office",
        href: "/BackOffice"
    },
    {
        icon: MessageCircleDashed,
        label: "Help desk",
        href: "/HelpDesk"
    }
]



const SidebarRoutes = () => {
  return (
    <div className='flex flex-col w-full'>
        {
            SidebarRoute.map((route,i)=> (
                <SidebarItem
                key={route.href}
                icon={route.icon}
                label={route.label}
                href={route.href}
                />
            ))
        }
     </div>
  )
}

export default SidebarRoutes