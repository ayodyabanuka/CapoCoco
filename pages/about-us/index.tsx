import Image from "next/image"
const AboutUs = () => {
       return (
              <div>
                     <div className="hidden md:flex w-full h-[80vh] text-[#572807] justify-between items-center px-0 lg:px-24 bg-[#FFF4E2]  rounded-3xl ">
                            <div className="xl:block md:block hidden" >
                                   <Image src={"/aboutus.png"} alt={"aboutus"} width={300} height={300} />
                            </div >
                            <div className="xl:hidden md:hidden block" >
                                   <Image src={"/aboutus.png"} alt={"aboutus"} width={280} height={280} />
                            </div >
                            <div className="w-2/3 p-20 bg-white/5  rounded-3xl h-fit">
                                   <div className="font-extrabold text-5xl xl:text-[70px] lg:leading-[55px]">
                                          About Us
                                   </div>
                                   <div className="font-medium text-[24px] mt-6 leading-[30px] ">
                                          At the heart of our brand lies an extraordinary story of passion and authenticity. Born on a tropical island, Capo Coco was founded with a single mission – to share the goodness of these natural treasures with the world.
                                          Our journey is a tribute to the art of preserving purity of nature in every drop, bringing you more than just a beverage.
                                   </div>
                            </div>
                     </div >

                     <div className="mt-0 bg-[url('/aboutusmobile.png')] flex items-center md:hidden h-[780px] justify-center rounded-[40px] bg-cover">
                            <div className="flex flex-col items-center h-fit mt-36 bg-white/60 px-6 text-[#572807] py-10 backdrop-blur-md rounded-[40px]">
                                   <div className="font-extrabold text-5xl xl:text-[70px] text-center lg:leading-[55px]">
                                          About Us
                                   </div>
                                   <div className="font-medium text-[20px] text-justify mt-6 leading-[30px] ">
                                          At the heart of our brand lies an extraordinary story of passion and authenticity. Born on a tropical island, Capo Coco was founded with a single mission – to share the goodness of these natural treasures with the world.
                                          Our journey is a tribute to the art of preserving purity of nature in every drop, bringing you more than just a beverage.
                                   </div>
                            </div>
                     </div>

              </div >
       )
}

export default AboutUs