import { motion } from "framer-motion"

const Sustainability = () => {
       return (
              <div >
                     <div className="hidden md:flex flex-col max-w-[1920px] gap-7 my-10 rounded-3xl h-[885px]  text-white justify-center items-center px-0 lg:px-16 bg-[url('/sustainabilityback.png')] bg-cover">
                            <motion.div initial={{ opacity: 0, y: 180 }} whileInView={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1 }} className="flex flex-col items-center text-center">
                                   <div className="text-[45px] font-extrabold text-[#CFB023]">Embracing Rural Roots</div>
                                   <div className="font-bold text-[25px] mt-10 w-1/2 text-[#A17D42]">Our journey to create Capo Coco king coconut villages across the island</div>
                                   <div className="font-normal text-[25px] mt-5 text-[#A17D42] text-justify w-1/2">Unveiling Sri Lanka&apos;s first-ever King Coconut Village, a remarkable project stemming from our collaboration with The Coconut Research Institute of Sri Lanka and the Mahaweli Authority of Sri Lanka – MASL. Our mission is to bring high-quality Sri Lankan King Coconut products to the global market while simultaneously uplifting the local farmers&apos; economic status.</div>
                            </motion.div>
                     </div >
                     <div className="flex flex-col gap-6 md:hidden h-[650px] justify-center bg-[url('/sustainabilitybackmobile.png')] bg-cover">
                            <motion.div initial={{ opacity: 0, y: 180 }} whileInView={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1 }} className="flex flex-col items-center text-center mx-5">
                                   <div className="text-[33px] font-extrabold text-[#CFB023] px-10 leading-9">Embracing Rural Roots</div>
                                   <div className="font-bold text-[20px] mt-8 text-[#A17D42]">Our journey to create Capo Coco king coconut villages across the island</div>
                                   <div className="font-normal text-[20px] mt-3 text-[#A17D42] text-justify">Unveiling Sri Lanka&apos;s first-ever King Coconut Village, a remarkable project stemming from our collaboration with The Coconut Research Institute of Sri Lanka and the Mahaweli Authority of Sri Lanka – MASL. Our mission is to bring high-quality Sri Lankan King Coconut products to the global market while simultaneously uplifting the local farmers&apos; economic status.</div>
                            </motion.div>
                     </div>

              </div >
       )
}

export default Sustainability