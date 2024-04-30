import SideBar from "./Inventory/_components/sidebar";


export default function InventoryLayout ({children}: Readonly<{children: React.ReactNode;}>) {
return(
    <div>
          <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
            <SideBar/>
        </div>
        <main className="md:pl-56 pt-[80px] h-full">
        {children}
        </main>
    </div>
)
}