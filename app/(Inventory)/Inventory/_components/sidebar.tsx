import Logo from "./logo";
import SidebarRoutes from "./sidebar-routes";
const SideBar = () => {
    return(
        <div className=" h-full border-r border-[#009FE3] flex flex-col overflow-y-auto bg-white shadow-sm">
           <div className="p-6">
            <Logo/>
           </div>
           <div className="flex flex-col w-full">
        <SidebarRoutes/>
            </div>
        </div>
    )
}
export default SideBar;