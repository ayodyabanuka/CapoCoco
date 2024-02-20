import ScrollAnimationWrapper from "@/components/layout/ScrollAnimationWrapper"
import getScrollAnimation from "@/utils/getScrollAnimation";
import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useMemo, useState } from "react";

const Home = () => {

       const scrollAnimation = useMemo(() => getScrollAnimation(), []);
       return (
              <ScrollAnimationWrapper>
                     <div className="text-black px-0 md:px-5 lg:px-10 xl:px-0">
                            <div className="hidden md:grid grid-cols-2 items-center p-10 my-10 h-[90vh] rounded-3xl mt-fit bg-cover bg-[url('/home-bg.png')]">
                                   <motion.div className=" p-20 place-self-center place-items-center place-content-center" variants={scrollAnimation}>
                                          <div className="font-extrabold text-6xl lg:text-7xl capitalize text-[#CFB023] lg:leading-[80px]">
                                                 Pure organic goodness in every sip
                                          </div>
                                          <div className="font-medium md:text-base lg:text-[30px] mt-10 text-[#A17D42] leading-6 lg:leading-[35px] ">
                                                 Hydrate and refresh with Capo Coco – produced by nature
                                          </div>
                                   </motion.div>
                                   <motion.div variants={scrollAnimation} className="w-64 hidden lg:grid relative place-content-center place-items-center place-self-center">

                                          <motion.div className="absolute"
                                                 initial={{ scale: 2 }}
                                                 animate={{ y: [-5, -25, -5], rotate: [1, 10, 1], scale: 2 }}
                                                 transition={{ repeat: Infinity, duration: 3 }}


                                          >
                                                 <Image src={"/1.png"} alt={"cans"} width={2000} quality={100} height={2300} priority ></Image>

                                          </motion.div>
                                          <motion.div
                                                 className="absolute "
                                                 initial={{ scale: 2 }}
                                                 animate={{ y: [-2, -12, -2], scale: 2 }}
                                                 transition={{ repeat: Infinity, duration: 3 }}

                                          >
                                                 <Image src={"/2.png"} alt={"cans"} width={2000} quality={100} height={2300} priority ></Image>

                                          </motion.div>
                                          <motion.div
                                                 className="absolute "
                                                 initial={{ scale: 2 }}
                                                 animate={{ y: [-2, -16, -2], rotate: [-1, -5, -1], scale: 2 }}
                                                 transition={{ repeat: Infinity, duration: 3 }}

                                          >
                                                 <Image src={"/3.png"} alt={"cans"} width={2000} quality={100} height={2300} priority ></Image>

                                          </motion.div>
                                          <motion.div
                                                 className="absolute "
                                                 initial={{ scale: 2 }}
                                                 animate={{ y: [-2, -15, -2], scale: 2 }}
                                                 transition={{ repeat: Infinity, duration: 3 }}

                                          >
                                                 <Image src={"/4.png"} alt={"cans"} width={2000} quality={100} height={2300} priority ></Image>

                                          </motion.div>
                                          <motion.div
                                                 className=""
                                                 initial={{ scale: 2 }}
                                                 animate={{ y: [-2, -11, -2], scale: 2 }}
                                                 transition={{ repeat: Infinity, duration: 3 }}

                                          >
                                                 <Image src={"/5.png"} alt={"cans"} width={2000} quality={100} height={2300} priority loading="eager"></Image>

                                          </motion.div>


                                   </motion.div>
                                   <motion.div variants={scrollAnimation} className="w-64 md:grid lg:hidden relative place-content-center place-items-center place-self-center">

                                          <motion.div className="absolute"
                                                 initial={{ scale: 2 }}
                                                 animate={{ y: [-5, -25, -5], rotate: [1, 10, 1], scale: 2 }}
                                                 transition={{ repeat: Infinity, duration: 3 }}

                                          >
                                                 <Image src={"/1.png"} alt={"cans"} width={2000} quality={100} height={2300} priority ></Image>

                                          </motion.div>
                                          <motion.div
                                                 className="absolute "
                                                 initial={{ scale: 2 }}
                                                 animate={{ y: [-2, -12, -2], scale: 2 }}
                                                 transition={{ repeat: Infinity, duration: 3 }}

                                          >
                                                 <Image src={"/2.png"} alt={"cans"} width={2000} quality={100} height={2300} priority ></Image>

                                          </motion.div>
                                          <motion.div
                                                 className="absolute "
                                                 initial={{ scale: 2 }}
                                                 animate={{ y: [-2, -16, -2], rotate: [-1, -5, -1], scale: 2 }}
                                                 transition={{ repeat: Infinity, duration: 3 }}

                                          >
                                                 <Image src={"/3.png"} alt={"cans"} width={2000} quality={100} height={2300} priority ></Image>

                                          </motion.div>
                                          <motion.div
                                                 className="absolute "
                                                 initial={{ scale: 2 }}
                                                 animate={{ y: [-2, -15, -2], scale: 2 }}
                                                 transition={{ repeat: Infinity, duration: 3 }}

                                          >
                                                 <Image src={"/4.png"} alt={"cans"} width={2000} quality={100} height={2300} priority ></Image>

                                          </motion.div>
                                          <motion.div
                                                 className=""
                                                 initial={{ scale: 2 }}
                                                 animate={{ y: [-2, -11, -2], scale: 2 }}
                                                 transition={{ repeat: Infinity, duration: 3 }}

                                          >
                                                 <Image src={"/5.png"} alt={"cans"} width={2000} quality={100} height={2300} priority ></Image>

                                          </motion.div>


                                   </motion.div>
                            </div>
                            <div className="mx-3">
                                   <div className="flex flex-col md:hidden rounded-[40px] text-[#572807] w-full bg-cover h-[450px] bg-[url('/homemobileback.png')]">
                                          <motion.div className="md:hidden mt-32 -ml-7 flex justify-center relative">

                                                 <motion.div className="absolute"
                                                        initial={{ scale: 2 }}
                                                        animate={{ y: [-5, -25, -5], rotate: [1, 10, 1], scale: 2 }}
                                                        transition={{ repeat: Infinity, duration: 3 }}

                                                 >
                                                        <Image src={"/1.png"} alt={"cans"} width={155} quality={100} height={100}></Image>

                                                 </motion.div>
                                                 <motion.div
                                                        className="absolute "
                                                        initial={{ scale: 2 }}
                                                        animate={{ y: [-2, -12, -2], scale: 2 }}
                                                        transition={{ repeat: Infinity, duration: 3 }}

                                                 >
                                                        <Image src={"/2.png"} alt={"cans"} width={155} quality={100} height={100}></Image>

                                                 </motion.div>
                                                 <motion.div
                                                        className="absolute "
                                                        initial={{ scale: 2 }}
                                                        animate={{ y: [-2, -11, -2], scale: 2 }}
                                                        transition={{ repeat: Infinity, duration: 3 }}

                                                 >
                                                        <Image src={"/3.png"} alt={"cans"} width={155} quality={100} height={100}></Image>

                                                 </motion.div>
                                                 <motion.div
                                                        className="absolute "
                                                        initial={{ scale: 2 }}
                                                        animate={{ y: [-2, -15, -2], scale: 2 }}
                                                        transition={{ repeat: Infinity, duration: 3 }}

                                                 >
                                                        <Image src={"/4.png"} alt={"cans"} width={155} quality={100} height={100}></Image>

                                                 </motion.div>
                                                 <motion.div
                                                        className=""
                                                        initial={{ scale: 2 }}
                                                        animate={{ y: [-2, -16, -2], rotate: [-1, -5, -1], scale: 2 }}
                                                        transition={{ repeat: Infinity, duration: 3 }}

                                                 >
                                                        <Image src={"/5.png"} alt={"cans"} width={155} quality={100} height={100}></Image>

                                                 </motion.div>




                                          </motion.div>

                                   </div>
                                   <motion.div variants={scrollAnimation} className="mt-0  md:hidden bg-white/60 px-4  py-10 backdrop-blur-md rounded-3xl">
                                          <div className="font-extrabold text-4xl xl:text-[70px] capitalize text-[#CFB023] text-center lg:leading-[55px]">
                                                 Pure organic goodness in every sip
                                          </div>
                                          <div className="font-medium text-[20px] text-justify mt-6 text-[#A17D42] leading-[30px] ">
                                                 Hydrate and refresh with Capo Coco – produced by nature
                                          </div>
                                   </motion.div>
                            </div>
                     </div>
              </ScrollAnimationWrapper>
       )
}

export default Home