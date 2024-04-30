import { DataTable } from "../Inventory/_components/data-table";
 const Page = () => {
    return(
        <div className=" px-12">
        <div className="flex flex-col space-y-8 ">
            <h1 className="text-[38px] leading-[16px] font-700 text-[#4B4B4B]">Prescriptions Drugs</h1>
            <h2 className="text-[22px] leading-[16px] font-700 text-[#B1B1B4]"> All prescriptions</h2>
            <div className="my-8 border border-black rounded-[20px]">
            <div className="p-6">
            <DataTable/>
            </div>
            </div>
        </div>
    
        </div>
    )
 }
 export default Page;