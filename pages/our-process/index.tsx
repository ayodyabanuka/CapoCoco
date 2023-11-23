import ScrollAnimationWrapper from "@/components/layout/ScrollAnimationWrapper"
import getScrollAnimation from "@/utils/getScrollAnimation";
import { motion } from "framer-motion"
import Image from "next/image"
import { useMemo } from "react";

const OurProcess = () => {
       return (

              <div className="">

                     <div className="hidden lg:flex flex-col container my-10 rounded-3xl h-[1877px]  text-white gap-28 justify-center items-center bg-[url('/ourprocessback.png')] bg-cover">
                            <motion.div initial={{ opacity: 0, y: 180 }} whileInView={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1 }} className="flex justify-center gap-10 items-center">

                                   <div className="flex flex-col  w-1/2 text-left">
                                          <div className="text-[40px] font-extrabold text-[#CFB023]">Liquid Gold</div>
                                          <div className="font-normal text-[20px] text-[#A17D42] ">Our journey begins in the lush tropical groves of Sri Lanka, where our dedicated harvesters handpick each King Coconut at the peak of freshness. The King Coconuts need to be picked after 8 months at JUST the right time, to ensure the finest quality and purity in every can.
                                                 The Tender green coconuts are just as fresh, but picked while they are young and tender.</div>
                                   </div>
                                   <Image src={"/liquidgold.png"} width={350} height={350} alt={""} ></Image>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y: 180 }} whileInView={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1 }} className="flex justify-center gap-10 items-center">
                                   <Image src={"/tendercoconut.png"} width={350} height={350} alt={""} ></Image>
                                   <div className="flex flex-col  w-1/2  text-left">
                                          <div className="text-[40px] font-extrabold text-[#CFB023]">Tender Coconut</div>
                                          <div className="font-normal text-[20px] text-[#A17D42] ">These nuts are hand picked when they are still young and tender, where the water content of the nuts is at its peak and the taste is super fresh.</div>
                                   </div>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y: 180 }} whileInView={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1 }} className="flex justify-center gap-10 items-center">

                                   <div className="flex flex-col  w-1/2  text-left">
                                          <div className="text-[40px] font-extrabold text-[#CFB023]">Craftsmanship in Every Drop</div>
                                          <div className="font-normal text-[20px] text-[#A17D42] ">Our extraction process preserves the natural taste and goodness of King Coconuts. From the initial extraction to quality control, we employ utmost care and expertise to create a beverage fit for a royal experience.</div>
                                   </div>
                                   <Image src={"/craftmanshipinevery.png"} width={350} height={350} alt={""} ></Image>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y: 180 }} whileInView={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1 }} className="flex justify-center gap-10 items-center">
                                   <Image src={"/sealedwithcare.png"} width={350} height={350} alt={""} ></Image>
                                   <div className="flex flex-col  w-1/2  text-left">
                                          <div className="text-[40px] font-extrabold text-[#CFB023]">Sealed with Care</div>
                                          <div className="font-normal text-[20px] text-[#A17D42] ">Each can is a testament to our committment to quality. Capo Coco is sealed with care, ensuring that the purity and freshness are preserved from the moment of harvest until you take your first sip.</div>
                                   </div>
                            </motion.div>
                     </div >
                     <ScrollAnimationWrapper>
                            <div className="flex flex-col gap-24 px-10 lg:hidden h-[1763px] justify-center bg-[url('/sustainabilitybackmobile.png')] bg-cover">
                                   <motion.div initial={{ opacity: 0, y: 180 }} whileInView={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1 }} className="flex justify-center gap-5 items-center">

                                          <div className="flex flex-col text-center">
                                                 <div className="text-[33px] font-extrabold text-[#CFB023]">Liquid Gold</div>
                                                 <div className="font-normal text-justify text-[20px] text-[#A17D42] ">Our journey begins in the lush tropical groves of Sri Lanka, where our dedicated harvesters handpick each King Coconut at the peak of freshness. The King Coconuts need to be picked after 8 months at JUST the right time, to ensure the finest quality and purity in every can.
                                                        The Tender green coconuts are just as fresh, but picked while they are young and tender.</div>
                                          </div>

                                   </motion.div>
                                   <motion.div initial={{ opacity: 0, y: 180 }} whileInView={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1 }} className="flex justify-center gap-5 items-center">

                                          <div className="flex flex-col text-center">
                                                 <div className="text-[33px] font-extrabold text-[#CFB023]">Tender Coconut</div>
                                                 <div className="font-normal text-justify  text-[20px] text-[#A17D42] ">These nuts are hand picked when they are still young and tender, where the water content of the nuts is at its peak and the taste is super fresh.</div>
                                          </div>
                                   </motion.div>
                                   <motion.div initial={{ opacity: 0, y: 180 }} whileInView={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1 }} className="flex justify-center gap-5 items-center">

                                          <div className="flex flex-col text-center">
                                                 <div className="text-[33px] font-extrabold text-[#CFB023]">Craftsmanship in Every Drop</div>
                                                 <div className="font-normal text-justify text-[20px] text-[#A17D42] ">Our extraction process preserves the natural taste and goodness of King Coconuts. From the initial extraction to quality control, we employ utmost care and expertise to create a beverage fit for a royal experience.</div>
                                          </div>

                                   </motion.div>
                                   <motion.div initial={{ opacity: 0, y: 180 }} whileInView={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1 }} className="flex justify-center gap-5 items-center">

                                          <div className="flex flex-col text-center">
                                                 <div className="text-[33px] font-extrabold text-[#CFB023]">Sealed with Care</div>
                                                 <div className="font-normal text-justify text-[20px] text-[#A17D42] ">Each can is a testament to our committment to quality. Capo Coco is sealed with care, ensuring that the purity and freshness are preserved from the moment of harvest until you take your first sip.</div>
                                          </div>
                                   </motion.div>
                            </div>
                     </ScrollAnimationWrapper>
              </div >

       )
}

export default OurProcess