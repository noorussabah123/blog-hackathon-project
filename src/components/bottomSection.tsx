import Image from "next/image";

export default function BottomSection() {
    return (
        <div className="w-full flex flex-col items-center text-white px-4 sm:px-8 md:px-12 lg:px-16 mb-16">
            {/* Background Image */}
            <div className="relative w-full max-w-[1312px]">
                <Image 
                    src={"/form.png"} 
                    alt="form" 
                    width={1312} 
                    height={486} 
                    className="w-full h-auto rounded-lg"
                />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-12 text-center">
                <p className="text-xs sm:text-sm md:text-base text-black sm:text-white mt-2">SUBSCRIBE</p>
                 <h1 className="text-lg sm:text-3xl md:text-5xl lg:text-6xl font-bold text-black sm:text-white">JOIN THE FUN</h1>
                  <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold sm:text-white">SUBSCRIBE NOW!</h1>
                <p className="text-xs sm:text-sm md:text-lg mt-2 px-2">
                  Subscribe to our newsletter for a weekly serving of recipes, cooking <br className="hidden sm:block"/> 
                 tips, and exclusive insights straight to your inbox.
              </p>

                    {/* Email Input Section */}
                    <div className="relative w-full max-w-[426px] mt-12">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full h-[50px] bg-white text-black rounded-[36px] pl-6 pr-24 focus:outline-none border"/>

                        <button
                            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black text-white px-6 py-2 rounded-[20px] hover:bg-orange-500 transition"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}



































// import Image from "next/image"

// export default function BottomSection() {
//     return (
//         <>
//             <div className="relative w-full mb-[16px] px-[80px]">
//                 <Image src={"/form.png"} alt="form" width={1312} height={486}></Image>
//                 <div className="absolute inset-0 px-[117px] mb-[48px] flex flex-col items-center justify-center text-white">
//                     <p>SUBSCRIBE</p>
//                     <h1 className="text-6xl font-bold">JOIN THE FUN</h1>
//                     <h1 className="text-6xl font-bold">SUBSCRIBE NOW!</h1>
//                     <p className="text-center mt-[12px]">Subscribe to our newsletter for a weekly serving of recipes, cooking <br /> tips, and exclusive insights straight to your inbox.</p>

//                     <div className="relative w-[426px] mt-[48px]">

//                         <input
//                             type="email"
//                             placeholder="Email Address"
//                             className="w-full h-[50px] bg-white rounded-[36px] pl-[24px] pr-[100px] focus:outline-none"
//                         />

//                         <button
//                             className="w-[122px] h-[38px] flex justify-center items-center absolute top-1/2 right-[10px] transform -translate-y-1/2 bg-black text-white px-[16px] py-[8px] rounded-[20px]"
//                         >
//                             Subscribe
//                         </button>
//                     </div>

                    
//                 </div>

//             </div>
//         </>
//     )
// }