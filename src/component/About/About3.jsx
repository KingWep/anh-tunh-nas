export default function About3(){
    return(
        <> 
            <div className="w-full relative justify-end overflow-hidden hidden md:flex">
                <div className="lg:h-[650px] md:h-[500px] ">
                    <img src="/image/about2.jpg" alt="" className="h-full "/>
                </div>
                <div className="h-full w-[50%] flex justify-center flex-col px-20 text-white top-0 left-0 bg-black absolute ">
                    <h1 className="font-bold md:text-[30px] lg:text-[45px] mb-3">Thoughtfully Designed for All</h1>
                    <p>Our range covers Men, Women, and Kids, with each piece carefully crafted to combine form,
                         function, and feeling. From the perfect polo to the softest loungewear and statement outerwear,
                          everything at Velora is designed with real life in mind — easy to wear, easy to love. We also believe in the power of details. 
                          That’s why we obsess over fit, fabric, and finish — so you don’t have to.</p>
                </div>
            </div>

            <div className=" flex justify-center flex-col px-10 py-10 text-white bg-black md:hidden">
                    <h1 className="font-bold text-[27px] md:text-[30px] lg:text-[45px] mb-3">Thoughtfully Designed for All</h1>
                    <p>Our range covers Men, Women, and Kids, with each piece carefully crafted to combine form,
                         function, and feeling. From the perfect polo to the softest loungewear and statement outerwear,
                          everything at Velora is designed with real life in mind — easy to wear, easy to love. We also believe in the power of details. 
                          That’s why we obsess over fit, fabric, and finish — so you don’t have to.</p>
                </div>
        </>
    )
}