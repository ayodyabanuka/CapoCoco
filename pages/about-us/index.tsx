import ScrollAnimationWrapper from "@/components/layout/ScrollAnimationWrapper";
import getScrollAnimation from "@/utils/getScrollAnimation";
import { motion } from "framer-motion";
import Image from "next/image"
import { useMemo } from "react";
const AboutUs = () => {
       const scrollAnimation = useMemo(() => getScrollAnimation(), []);
       return (
              <ScrollAnimationWrapper>
                     <div className="flex items-center">
                            <div className="hidden md:flex max-w-[1920px] my-10  h-[80vh] justify-center items-center px-0 lg:px-24 bg-[#FFF4E2]  rounded-3xl ">
                                   <motion.div variants={scrollAnimation}>
                                          <div className="xl:block md:block hidden" >
                                                 <Image src={"/aboutus.png"} alt={"aboutus"} loading="eager" quality={100} width={400} height={350} />
                                          </div >
                                          <div className="xl:hidden md:hidden block" >
                                                 <Image src={"/aboutus.png"} alt={"aboutus"} width={300} quality={100} height={600} />
                                          </div >
                                   </motion.div>
                                   <motion.div variants={scrollAnimation} className="w-2/3 p-20 bg-white/5  rounded-3xl h-fit">
                                          <div className="font-extrabold text-5xl xl:text-[40px] text-[#CFB023] lg:leading-[55px]">
                                                 About Us
                                          </div>
                                          <div className="font-medium text-[20px] mt-3 leading-[25px] text-[#A17D42]">
                                                 At the heart of our brand lies an extraordinary story of passion and authenticity. Born on a tropical island, Capo Coco was founded with a single mission – to share the goodness of these natural treasures with the world.
                                                 Our journey is a tribute to the art of preserving purity of nature in every drop, bringing you more than just a beverage.
                                          </div>
                                   </motion.div>
                            </div>

                            <div className="mt-0 bg-[url('/aboutusmobile.png')] flex items-center md:hidden h-[780px] justify-center rounded-[40px] bg-cover bg-center">
                                   <motion.div initial={{ opacity: 0, y: -180 }} whileInView={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1 }} className="flex flex-col items-center h-fit mt-36 bg-white/60 px-6 py-10 backdrop-blur-md rounded-[40px] mx-4">
                                          <div className="font-extrabold text-5xl xl:text-[70px] text-center text-[#CFB023] lg:leading-[55px]">
                                                 About Us
                                          </div>
                                          <div className="font-medium text-[20px] text-justify mt-6 leading-[30px] text-[#A17D42]">
                                                 At the heart of our brand lies an extraordinary story of passion and authenticity. Born on a tropical island, Capo Coco was founded with a single mission – to share the goodness of these natural treasures with the world.
                                                 Our journey is a tribute to the art of preserving purity of nature in every drop, bringing you more than just a beverage.
                                          </div>
                                   </motion.div>
                            </div>

                     </div >
              </ScrollAnimationWrapper>
       )
}

export default AboutUs