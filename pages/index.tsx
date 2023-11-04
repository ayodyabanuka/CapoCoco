import { motion } from "framer-motion"
import Image from "next/image"

const Home = () => {
       return (
              <div className="text-black flex mx-0">
                     <div className="hidden md:flex lg:m-10 w-full h-[80vh] text-[#572807] rounded-3xl justify-between items-center px-0 lg:px-24 bg-cover bg-[url('/home-bg.png')]">
                            <div className="w-2/3 p-20 bg-white/5  rounded-3xl h-fit">
                                   <div className="font-extrabold text-5xl xl:text-[70px]  lg:leading-[55px] w-1/2">
                                          THE ULTIMATE
                                          REFRESHING
                                          EXPERIENCE
                                   </div>
                                   <div className="font-medium text-[24px] mt-6 leading-[30px] ">
                                          Treat yourself to a wonderful taste of pure organic goodness with Capo Coco.
                                          Embark on a journey to feel refreshed and revived.
                                   </div>
                            </div>
                            <div className="mr-36 xl:block md:hidden hidden relative">

                                   <motion.div className="absolute -top-10 -left-10"
                                          initial={{ y: -5, scale: 1 }}
                                          animate={{ y: [-5, -25, -5], scale: 1 }}
                                          transition={{ repeat: Infinity, duration: 3 }}

                                   >
                                          <Image src={"/can2.png"} alt={"cans"} width={300} height={100}></Image>

                                   </motion.div>
                                   <motion.div
                                          className="top-0 left-0"
                                          initial={{ y: -2, scale: 1 }}
                                          animate={{ y: [-2, -14, -2], scale: 1 }}
                                          transition={{ repeat: Infinity, duration: 3 }}

                                   >
                                          <Image src={"/can1.png"} alt={"cans"} width={300} height={100}></Image>

                                   </motion.div>
                                   <motion.div
                                          className="bottom-10 left-0"
                                          initial={{ scale: 1 }}
                                          animate={{ scale: [1, 1.1, 1] }}
                                          transition={{ repeat: Infinity, duration: 3 }}

                                   >
                                          <Image src={"/shadow.png"} alt={"cans"} width={300} height={100}></Image>

                                   </motion.div>

                            </div>
                            <div className="mr-36 xl:hidden block relative">

                                   <motion.div className="absolute -top-12 -left-10"
                                          initial={{ y: -5, scale: 1 }}
                                          animate={{ y: [-5, -25, -5], scale: 1 }}
                                          transition={{ repeat: Infinity, duration: 3 }}

                                   >
                                          <Image src={"/can2.png"} alt={"cans"} width={200} height={100}></Image>

                                   </motion.div>
                                   <motion.div
                                          className="top-0 left-0"
                                          initial={{ y: -2, scale: 1.2 }}
                                          animate={{ y: [-2, -14, -2], scale: 1.2 }}
                                          transition={{ repeat: Infinity, duration: 3 }}

                                   >
                                          <Image src={"/can1.png"} alt={"cans"} width={200} height={100}></Image>

                                   </motion.div>


                            </div>
                     </div>
                     <div className="flex flex-col md:hidden text-[#572807] w-full bg-cover h-[510px] bg-[url('/homemobileback.png')]">
                            <div className="md:hidden mt-20 flex justify-center relative">

                                   <motion.div className="absolute -top-10 "
                                          initial={{ y: -0, scale: 1 }}
                                          animate={{ y: [-20, -35, -20], scale: 1 }}
                                          transition={{ repeat: Infinity, duration: 3 }}

                                   >
                                          <Image src={"/can2.png"} alt={"cans"} width={180} height={100}></Image>

                                   </motion.div>
                                   <motion.div
                                          className="top-0 left-0"
                                          initial={{ y: -2, scale: 1.2 }}
                                          animate={{ y: [-2, -14, -2], scale: 1.2 }}
                                          transition={{ repeat: Infinity, duration: 3 }}

                                   >
                                          <Image src={"/can1.png"} alt={"cans"} width={150} height={100}></Image>

                                   </motion.div>




                            </div>
                            <div className="mt-10 bg-white/60 px-4 py-10 backdrop-blur-md rounded-3xl">
                                   <div className="font-extrabold text-5xl xl:text-[70px] text-center lg:leading-[55px]">
                                          THE ULTIMATE
                                          REFRESHING
                                          EXPERIENCE
                                   </div>
                                   <div className="font-medium text-[20px] text-justify mt-6 leading-[30px] ">
                                          Treat yourself to a wonderful taste of pure organic goodness with Capo Coco.
                                          Embark on a journey to feel refreshed and revived.
                                   </div>
                            </div>
                     </div>
              </div>
       )
}

export default Home