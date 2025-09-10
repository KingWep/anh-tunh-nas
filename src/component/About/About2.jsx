import { TfiRulerAlt2 } from "react-icons/tfi";

export default function About2() {
    return (
        <>
            <div className="w-full pt-16 pb-16 md:pt-24 lg:pb-28 md:pb-[38vh] flex flex-col items-center bg-pink-50 md:relative">
                <div className="md:w-[70%] w-[90%]">
                    <img src="/image/about1.png" alt="" />
                </div> 
                <div className="w-[350px] px-5 lg:w-[600px] md:w-[400px] mt-10 md:mt-0 rounded-[16px] flex flex-col text-center items-center md:px-10 justify-center pt-14 bg-white md:absolute md:top-[25%] md:right-[5%] lg:top-[38%] lg:right-[5%]">
                    <TfiRulerAlt2 className="text-[60px] text-center text-red-500" />
                    <div className=" mt-5 pb-16">
                        <h1 className="font-bold text-[25px] md:text-[20px]">More Than Just Clothing</h1>
                        <p className="mt-2 mb-4">At Velora, we believe fashion should feel as good as it looks. Born from a passion for timeless design
                            and everyday comfort, our mission is simple: to create versatile, high-quality clothing that empowers
                            confidence — for everyone, every day.</p>
                        <p>Whether you're dressing up for a moment or down for the everyday, our collections are made to move with you,
                            evolve with your lifestyle, and elevate your wardrobe — effortlessly.</p>
                    </div>
                </div>
            </div>
        </>
    )

}