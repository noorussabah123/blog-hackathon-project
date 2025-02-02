"use client";

import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger and Close icons

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  return (
    <div className="py-4 px-6 md:px-12">
      <div className="w-full h-[70px] flex justify-between items-center rounded-[32px] border border-black px-4 relative">
        
        {/* Left Side: Logo */}
        <Link href="/" className="ml-2">
          <Image src="/navicon.png" alt="navicon" width={120} height={30} />
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Links (Mobile: Fullscreen Dropdown) */}
        <ul
          className={`fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center gap-6 text-xl font-semibold transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:flex-row md:gap-8 md:h-auto md:w-auto md:bg-transparent md:text-base md:translate-x-0`}
        >
          <li>
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
         
          <li>
            <Link href="/Recipes" onClick={() => setMenuOpen(false)}>Recipes</Link>
          </li>
          <li>
            <Link href="Cooking-Tips" onClick={() => setMenuOpen(false)}>Cooking Tips</Link>
          </li>
          <li>
            <Link href="/About-us" onClick={() => setMenuOpen(false)}>About</Link>
          </li>
        </ul>

        {/* Right Side: Search and Subscribe (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-4">
          <div className="w-[37px] h-[37px] flex justify-center items-center rounded-[16px] bg-gray-200">
            <CiSearch className="w-[21px] h-[21px]" />
          </div>
          <div className="w-[122px] h-[38px] flex justify-center items-center rounded-[24px] px-4 py-2 text-white bg-black">
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
















































// "use client"

// import Image from "next/image";
// import Link from "next/link";
// import { CiSearch } from "react-icons/ci";
// import { useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi"; // Hamburger and Close icons

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="py-4 px-6 md:px-12">
//       <div className="w-full h-[70px] flex justify-between items-center rounded-[32px] border border-black px-4 relative">
        
//         {/* Left Side: Logo */}
//         <Link href="/" className="ml-2">
//           <Image src="/navicon.png" alt="navicon" width={120} height={30} />
//         </Link>

//         {/* Hamburger Menu for Mobile */}
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="md:hidden text-2xl"
//         >
//           {menuOpen ? <FiX /> : <FiMenu />}
//         </button>

//         {/* Navigation Links (Mobile: Fullscreen Dropdown) */}
//         <ul
//           className={`absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-6 text-xl font-semibold transition-transform duration-300 ${
//             menuOpen ? "translate-x-0" : "-translate-x-full"
//           } md:relative md:flex-row md:gap-8 md:h-auto md:w-auto md:bg-transparent md:text-base md:translate-x-0`}
//         >
//           <li>
//             <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
//           </li>
//           <li>
//             <Link href="#!" onClick={() => setMenuOpen(false)}>Recipes</Link>
//           </li>
//           <li>
//             <Link href="#!" onClick={() => setMenuOpen(false)}>Cooking Tips</Link>
//           </li>
//           <li>
//             <Link href="#!" onClick={() => setMenuOpen(false)}>About</Link>
//           </li>
//         </ul>

//         {/* Right Side: Search and Subscribe (Hidden on Mobile) */}
//         <div className="hidden md:flex items-center gap-4">
//           <div className="w-[37px] h-[37px] flex justify-center items-center rounded-[16px] bg-gray-200">
//             <CiSearch className="w-[21px] h-[21px]" />
//           </div>
//           <div className="w-[122px] h-[38px] flex justify-center items-center rounded-[24px] px-4 py-2 text-white bg-black">
//             <button>Subscribe</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






































// import Image from "next/image"
// import Link from "next/link"
// import { CiSearch } from "react-icons/ci";

// export default function Header() {
//     return(
//         <>
//           <div className="py-[16px] px-[64px]">
//             <div className="w-full h-[70px] flex justify-between items-center  rounded-[32px] border border-black">
//                  <Link href={"/"} className="ml-[24px]">  
//                 <Image src={"/navicon.png"} alt="navicon" width={180} height={35} />
//                 </Link> 
//                 <ul className="text-black flex justify-between items-center gap-[24px] px-[258px]">
//                     <li className="hover:border-b-2 hover:border-red-700"><Link href={"/"}>Home</Link></li>
//                     <li className="hover:border-b-2 hover:border-red-700"><Link href={"#!"}>Recipes</Link></li>
//                     <li className="hover:border-b-2 hover:border-red-700"><Link href={"#!"}>Cooking Tips</Link></li>
//                     <li className="hover:border-b-2 hover:border-red-700"><Link href={"#!"}>About</Link></li>
//                 </ul> 
                 
//                 <div className="w-[37px] h-[37px] flex justify-center items-center rounded-[16px] bg-gray-200">
//                 <CiSearch className="w-[21px] h-[21px]"/>
//                 </div>
//                 <div className="w-[122px] h-[38px] flex justify-center items-center rounded-[24px] mr-[24px] px-[24px] py-[12px] text-white bg-black">
//                <button>Subscribe</button>
//                </div>
//             </div>
//           </div>
//         </>
//     )
// }