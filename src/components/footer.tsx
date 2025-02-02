import Link from "next/link";
import Image from "next/image";
import { FaFacebookSquare, FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-6 px-4 sm:px-8 md:px-16 lg:px-32 rounded-2xl">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="mb-4 md:mb-0">
          <Image src={"/footerlogo.png"} alt="footerlogo" width={180} height={35} />
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center items-center gap-4 text-sm sm:text-base">
          <li><Link href={"#!"}>HOME</Link></li>
          <li><Link href={"#!"}>RECIPES</Link></li>
          <li><Link href={"#!"}>COOKING TIPS</Link></li>
          <li><Link href={"#!"}>ABOUT</Link></li>
        </ul>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-4 text-xl mt-4 md:mt-0">
          <FaFacebookSquare />
          <FaTiktok />
          <FaInstagram />
          <FaYoutube />
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm mt-4">
        <p>Copyright © 2024 Cooks Delight.</p>
      </div>
    </footer>
  );
}



































// import Link from "next/link"
// import Image from "next/image"
// import { FaFacebookSquare, FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";


// export default function Footer() {
//   return (
//     <>
//       <div className="relative [w-full] h-[200px] bg-black mb-[16px] rounded-[32px]">
//         {/* Logo Section */}
//         <div className="absolute top-[30px] left-[40px]">
//           <Image src={"/footerlogo.png"} alt="footerlogo" width={180} height={35} />
//         </div>

//         {/* Navigation Links */}
//         <ul className="absolute top-[35px] right-[520px] flex justify-center items-center gap-[24px] text-white">
//           <li><Link href={"#!"}>HOME</Link></li>
//           <li><Link href={"#!"}>RECIPES</Link></li>
//           <li><Link href={"#!"}>COOKING TIPS</Link></li>
//           <li><Link href={"#!"}>ABOUT</Link></li>
//         </ul>

//         {/* Social Icons */}
//         <div className="absolute top-[30px] right-[40px] flex justify-end items-center gap-[16px] text-white">
//           <FaFacebookSquare />
//           <FaTiktok />
//           <FaInstagram />
//           <FaYoutube />
//         </div>

//         {/* Copyright Section */}
//         <div className="absolute bottom-[16px] left-1/2 transform -translate-x-1/2 text-white text-center">
//           <p>Copyright: © 2024 Cooks Delight.</p>
//         </div>
//       </div>    
// </>
//   )
// }