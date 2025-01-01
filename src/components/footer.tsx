import Link from "next/link"
import Image from "next/image"
import { FaFacebookSquare, FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";


export default function Footer() {
  return (
    <>
      <div className="relative [w-full] h-[200px] bg-black mb-[16px] rounded-[32px]">
        {/* Logo Section */}
        <div className="absolute top-[30px] left-[40px]">
          <Image src={"/footerlogo.png"} alt="footerlogo" width={180} height={35} />
        </div>

        {/* Navigation Links */}
        <ul className="absolute top-[35px] right-[520px] flex justify-center items-center gap-[24px] text-white">
          <li><Link href={"#!"}>HOME</Link></li>
          <li><Link href={"#!"}>RECIPES</Link></li>
          <li><Link href={"#!"}>COOKING TIPS</Link></li>
          <li><Link href={"#!"}>ABOUT</Link></li>
        </ul>

        {/* Social Icons */}
        <div className="absolute top-[30px] right-[40px] flex justify-end items-center gap-[16px] text-white">
          <FaFacebookSquare />
          <FaTiktok />
          <FaInstagram />
          <FaYoutube />
        </div>

        {/* Copyright Section */}
        <div className="absolute bottom-[16px] left-1/2 transform -translate-x-1/2 text-white text-center">
          <p>Copyright: © 2024 Cooks Delight.</p>
        </div>
      </div>





































      {/* <div className="w-full h-[136px] flex justify-between items-center bg-black mb-[16px] rounded-[32px]">
            <div className="mb-[53px] px-[40px]">
            <Image src={"/footerlogo.png"} alt="footerlogo" width={180} height={35}></Image>

            </div>
            
            <ul className="mb-[53px] flex justify-center items-center gap-[24px] pr-[150px] text-white">
                <li><Link href={"#!"}>HOME</Link></li>
                <li><Link href={"#!"}>RECIPES</Link></li>
                <li><Link href={"#!"}>COOKING TIPS</Link></li>
                <li><Link href={"#!"}>ABOUT</Link></li>
            </ul>
           
             <div className="w-[144px] h-[24px] flex justify-end items-center gap-[16px] text-white pr-[40px] mb-[82px] mt-[29px]">
            <FaFacebookSquare />
            <FaTiktok />
            <FaInstagram />
            <FaYoutube />
            </div>
             
            <div className="text-white text-center">
              <p>Copyright: © 2024 Cooks Delight.</p>
            </div>
          </div> */}

    </>
  )
}