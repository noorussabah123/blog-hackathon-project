import Image from "next/image"

export default function BottomSection() {
    return (
        <>
            <div className="relative w-full mb-[16px] px-[80px]">
                <Image src={"/form.png"} alt="form" width={1312} height={486}></Image>
                <div className="absolute inset-0 px-[117px] mb-[48px] flex flex-col items-center justify-center text-white">
                    <p>SUBSCRIBE</p>
                    <h1 className="text-6xl font-bold">JOIN THE FUN</h1>
                    <h1 className="text-6xl font-bold">SUBSCRIBE NOW!</h1>
                    <p className="text-center mt-[12px]">Subscribe to our newsletter for a weekly serving of recipes, cooking <br /> tips, and exclusive insights straight to your inbox.</p>

                    <div className="relative w-[426px] mt-[48px]">

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full h-[50px] bg-white rounded-[36px] pl-[24px] pr-[100px] focus:outline-none"
                        />

                        <button
                            className="w-[122px] h-[38px] flex justify-center items-center absolute top-1/2 right-[10px] transform -translate-y-1/2 bg-black text-white px-[16px] py-[8px] rounded-[20px]"
                        >
                            Subscribe
                        </button>
                    </div>

                    
                </div>

            </div>
        </>
    )
}