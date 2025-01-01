import Image from "next/image"

export default function Hero() {
    return(
        <>
          <div className="relative w-full mb-[16px] px-[64px]">
            <Image src={"/Hero.png"} alt="hero" width={1312} height={577}></Image> 
            <div className="absolute inset-0 pb-[170px] px-[221px] flex flex-col items-center justify-center text-white">
           <h1 className="text-6xl font-bold">UNLEASH CULINARY</h1>
            <br />
           <h1 className="text-6xl font-bold">EXCELLENCE</h1>
           <p className="text-center pt-[12px] mb-[40px]">
            Explore a world of flavors, discover <br /> handcrafted recipes, and let the aroma of 
            <br /> our passion for cooking fill your kitchen
            </p>
        <button className="w-[166px] py-[12px] flex justify-center  items-center text-black bg-orange-400 rounded-[24px] hover:bg-transparent hover:text-white border ">
          EXPLORE RECIPES
        </button>
      </div> 

      <div className="w-[813px] h-[246px]  flex flex-col justify-center items-center text-center pl-[390px]">  
            <h1 className=" text-4xl font-bold">EMBARK ON A</h1>
            <h1 className=" text-4xl font-bold">JOURNEY</h1>    
            <p className="text-center pt-[12px]">With our diverse collection of recipes we have something to 
             satisfy every palate.
            </p>
          </div>       
          </div>
          
        </>
    )
}