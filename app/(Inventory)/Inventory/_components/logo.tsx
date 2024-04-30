import { pharm } from "@/public/assets/images";
import Image from "next/image";
const Logo = () => {
    return (
        <Image
        height={130}
        width={130}
        alt="logo"
        src={pharm}
        />
    )
 }
 export default Logo;