import { motion } from "framer-motion"
import Image from "next/image"

const Home = () => {
       return (
              <div className="text-black flex mx-0">
                     <div className="flex m-10 w-full h-[80vh] text-[#572807] rounded-3xl justify-between items-center px-24 bg-center bg-[url('/home-bg.png')]">
                            <div className="w-2/3 p-20 bg-white/5  rounded-3xl h-fit">
                                   <div className="font-extrabold text-[70px] leading-[55px] w-1/2">
                                          THE ULTIMATE
                                          REFRESHING
                                          EXPERIENCE
                                   </div>
                                   <div className="font-medium text-[24px] mt-6 leading-[30px] ">
                                          Treat yourself to a wonderful taste of pure organic goodness with Capo Coco.
                                          Embark on a journey to feel refreshed and revived.
                                   </div>
                            </div>
                            <div className="mr-36 relative">

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
                     </div>
              </div>
       )
}

export default Home