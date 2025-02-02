import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="relative w-full mb-4 px-4 sm:px-8 md:px-16 lg:px-32">
        {/* Hero Image */}
        <Image src="/Hero.png" alt="hero" width={1312} height={577} className="w-full h-auto" />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 sm:px-12 md:px-24 lg:px-40">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">UNLEASH CULINARY</h1>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">EXCELLENCE</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-3 sm:mt-4">
            Explore a world of flavors, discover handcrafted recipes, <br />
            and let the aroma of our passion for cooking fill your kitchen.
          </p>
          <button className="mt-6 w-40 sm:w-48 py-2 sm:py-3 text-black bg-orange-400 rounded-full hover:bg-transparent hover:text-white border border-orange-400 transition-all">
            EXPLORE RECIPES
          </button>
        </div>
      </div>

      {/* Journey Section */}
      <div className="w-full flex flex-col items-center text-center px-4 sm:px-8 md:px-16 lg:px-32 py-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">EMBARK ON A</h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">JOURNEY</h1>
        <p className="text-sm sm:text-base md:text-lg mt-3 sm:mt-4">
          With our diverse collection of recipes, we have something to satisfy every palate.
        </p>
      </div>
    </>
  );
}

































// import Image from "next/image"

// export default function Hero() {
//     return(
//         <>
//           <div className="relative w-full mb-[16px] px-[64px]">
//             <Image src={"/Hero.png"} alt="hero" width={1312} height={577}></Image> 
//             <div className="absolute inset-0 pb-[170px] px-[221px] flex flex-col items-center justify-center text-white">
//            <h1 className="text-6xl font-bold">UNLEASH CULINARY</h1>
//             <br />
//            <h1 className="text-6xl font-bold">EXCELLENCE</h1>
//            <p className="text-center pt-[12px] mb-[40px]">
//             Explore a world of flavors, discover <br /> handcrafted recipes, and let the aroma of 
//             <br /> our passion for cooking fill your kitchen
//             </p>
//         <button className="w-[166px] py-[12px] flex justify-center  items-center text-black bg-orange-400 rounded-[24px] hover:bg-transparent hover:text-white border ">
//           EXPLORE RECIPES
//         </button>
//       </div> 

//       <div className="w-[813px] h-[246px]  flex flex-col justify-center items-center text-center pl-[390px]">  
//             <h1 className=" text-4xl font-bold">EMBARK ON A</h1>
//             <h1 className=" text-4xl font-bold">JOURNEY</h1>    
//             <p className="text-center pt-[12px]">With our diverse collection of recipes we have something to 
//              satisfy every palate.
//             </p>
//           </div>       
//           </div>
          
//         </>
//     )
// }