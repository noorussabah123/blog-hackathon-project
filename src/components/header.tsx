
import Image from "next/image"
import Link from "next/link"
import { CiSearch } from "react-icons/ci";

export default function Header() {
    return(
        <>
          <div className="py-[16px] px-[64px]">
            <div className="w-full h-[70px] flex justify-between items-center  rounded-[32px] border border-black">
                 <Link href={"/"} className="ml-[24px]">  
                <Image src={"/navicon.png"} alt="navicon" width={180} height={35} />
                </Link> 
                <ul className="text-black flex justify-between items-center gap-[24px] px-[258px]">
                    <li className="hover:border-b-2 hover:border-red-700"><Link href={"/"}>Home</Link></li>
                    <li className="hover:border-b-2 hover:border-red-700"><Link href={"#!"}>Recipes</Link></li>
                    <li className="hover:border-b-2 hover:border-red-700"><Link href={"#!"}>Cooking Tips</Link></li>
                    <li className="hover:border-b-2 hover:border-red-700"><Link href={"#!"}>About</Link></li>
                </ul> 
                 
                <div className="w-[37px] h-[37px] flex justify-center items-center rounded-[16px] bg-gray-200">
                <CiSearch className="w-[21px] h-[21px]"/>
                </div>
                <div className="w-[122px] h-[38px] flex justify-center items-center rounded-[24px] mr-[24px] px-[24px] py-[12px] text-white bg-black">
               <button>Subscribe</button>
               </div>
            </div>
          </div>
        </>
    )
}