import { motion } from "framer-motion"
import Image from "next/image"

const Home = () => {
       return (
              <div className="text-black flex">
                     <div className="hidden md:flex my-10 max-w-[1920px] mx-10 h-[80vh] rounded-3xl justify-between items-center px-0 lg:px-24  bg-cover bg-[url('/home-bg.png')]">
                            <div className="w-2/3 p-20 bg-white/5  rounded-3xl h-fit">
                                   <div className="font-extrabold text-4xl lg:text-5xl capitalize xl:text-[70px] text-[#CFB023] lg:leading-[60px] w-2/3">
                                          Pure organic goodness in every sip
                                   </div>
                                   <div className="font-medium md:text-base lg:text-[24px] text-[#A17D42] mt-6 leading-6 lg:leading-[30px] ">
                                          Hydrate and refresh with Capo Coco – produced by nature
                                   </div>
                            </div>
                            <div className="mr-36 xl:block md:hidden hidden relative">

                                   <motion.div className="absolute"
                                          initial={{ scale: 2 }}
                                          animate={{ y: [-5, -25, -5], rotate: [1, 10, 1], scale: 2 }}
                                          transition={{ repeat: Infinity, duration: 3 }}

                                   >
                                          <Image src={"/1.png"} alt={"cans"} width={500} quality={100} height={400}></Image>

                                   </motion.div>
                                   <motion.div
                                          className="absolute "
                                          initial={{ scale: 2 }}
                                          animate={{ y: [-2, -12, -2], scale: 2 }}
                                          transition={{ repeat: Infinity, duration: 3 }}

                                   >
                                          <Image src={"/2.png"} alt={"cans"} width={500} quality={100} height={400}></Image>

                                   </motion.div>
                                   <motion.div
                                          className="absolute "
                                          initial={{ scale: 2 }}
                                          animate={{ y: [-2, -11, -2], scale: 2 }}
                                          transition={{ repeat: Infinity, duration: 3 }}

                                   >
                                          <Image src={"/3.png"} alt={"cans"} width={500} quality={100} height={400}></Image>

                                   </motion.div>
                                   <motion.div
                                          className="absolute "
                                          initial={{ scale: 2 }}
                                          animate={{ y: [-2, -15, -2], scale: 2 }}
                                          transition={{ repeat: Infinity, duration: 3 }}

                                   >
                                          <Image src={"/4.png"} alt={"cans"} width={500} quality={100} height={400}></Image>

                                   </motion.div>
                                   <motion.div
                                          className=""
                                          initial={{ scale: 2 }}
                                          animate={{ y: [-2, -16, -2], rotate: [-1, -5, -1], scale: 2 }}
                                          transition={{ repeat: Infinity, duration: 3 }}

                                   >
                                          <Image src={"/5.png"} alt={"cans"} width={500} quality={100} height={400}></Image>

                                   </motion.div>


                            </div>
                            <div className="md:mr-16 xl:hidden block relative">

                                   <motion.div className="absolute"
                                          initial={{ scale: 2 }}
                                          animate={{ y: [-5, -25, -5], rotate: [1, 10, 1], scale: 2 }}
                                          transition={{ repeat: Infinity, duration: 3 }}

                                   >
                                          <Image src={"/1.png"} alt={"cans"} width={500} quality={100} height={400}></Image>

                                   </motion.div>
                                   <motion.div
                                          className="absolute "
                                          initial={{ scale: 2 }}
                                          animate={{ y: [-2, -12, -2], scale: 2 }}
                                          transition={{ repeat: Infinity, duration: 3 }}

                                   >
                                          <Image src={"/2.png"} alt={"cans"} width={500} quality={100} height={400}></Image>

                                   </motion.div>
                                   <motion.div
                                          className="absolute "
                                          initial={{ scale: 2 }}
                                          animate={{ y: [-2, -11, -2], scale: 2 }}
                                          transition={{ repeat: Infinity, duration: 3 }}

                                   >
                                          <Image src={"/3.png"} alt={"cans"} width={500} quality={100} height={400}></Image>

                                   </motion.div>
                                   <motion.div
                                          className="absolute "
                                          initial={{ scale: 2 }}
                                          animate={{ y: [-2, -15, -2], scale: 2 }}
                                          transition={{ repeat: Infinity, duration: 3 }}

                                   >
                                          <Image src={"/4.png"} alt={"cans"} width={500} quality={100} height={400}></Image>

                                   </motion.div>
                                   <motion.div
                                          className=""
                                          initial={{ scale: 2 }}
                                          animate={{ y: [-2, -16, -2], rotate: [-1, -5, -1], scale: 2 }}
                                          transition={{ repeat: Infinity, duration: 3 }}

                                   >
                                          <Image src={"/5.png"} alt={"cans"} width={500} quality={100} height={400}></Image>

                                   </motion.div>


                            </div>
                     </div>
                     <div className="mx-3">
                            <div className="flex flex-col md:hidden rounded-[40px] text-[#572807] w-full bg-cover h-[450px] bg-[url('/homemobileback.png')]">
                                   <div className="md:hidden mt-28 flex justify-center relative">

                                          <motion.div className="absolute"
                                                 initial={{ scale: 2 }}
                                                 animate={{ y: [-5, -25, -5], rotate: [1, 10, 1], scale: 2 }}
                                                 transition={{ repeat: Infinity, duration: 3 }}

                                          >
                                                 <Image src={"/1mobile.png"} alt={"cans"} width={160} quality={100} height={400}></Image>

                                          </motion.div>
                                          <motion.div
                                                 className="absolute "
                                                 initial={{ scale: 2 }}
                                                 animate={{ y: [-2, -12, -2], scale: 2 }}
                                                 transition={{ repeat: Infinity, duration: 3 }}

                                          >
                                                 <Image src={"/2mobile.png"} alt={"cans"} width={160} quality={100} height={400}></Image>

                                          </motion.div>
                                          <motion.div
                                                 className="absolute "
                                                 initial={{ scale: 2 }}
                                                 animate={{ y: [-2, -11, -2], scale: 2 }}
                                                 transition={{ repeat: Infinity, duration: 3 }}

                                          >
                                                 <Image src={"/3mobile.png"} alt={"cans"} width={160} quality={100} height={400}></Image>

                                          </motion.div>
                                          <motion.div
                                                 className="absolute "
                                                 initial={{ scale: 2 }}
                                                 animate={{ y: [-2, -15, -2], scale: 2 }}
                                                 transition={{ repeat: Infinity, duration: 3 }}

                                          >
                                                 <Image src={"/4mobile.png"} alt={"cans"} width={160} quality={100} height={400}></Image>

                                          </motion.div>
                                          <motion.div
                                                 className=""
                                                 initial={{ scale: 2 }}
                                                 animate={{ y: [-2, -16, -2], rotate: [-1, -5, -1], scale: 2 }}
                                                 transition={{ repeat: Infinity, duration: 3 }}

                                          >
                                                 <Image src={"/5mobile.png"} alt={"cans"} width={160} quality={100} height={400}></Image>

                                          </motion.div>




                                   </div>

                            </div>
                            <div className="mt-0  md:hidden bg-white/60 px-4  py-10 backdrop-blur-md rounded-3xl">
                                   <div className="font-extrabold text-4xl xl:text-[70px] capitalize text-[#CFB023] text-center lg:leading-[55px]">
                                          Pure organic goodness in every sip
                                   </div>
                                   <div className="font-medium text-[20px] text-justify mt-6 text-[#A17D42] leading-[30px] ">
                                          Hydrate and refresh with Capo Coco – produced by nature
                                   </div>
                            </div>
                     </div>
              </div>
       )
}

export default Home