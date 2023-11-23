import ScrollAnimationWrapper from "@/components/layout/ScrollAnimationWrapper"
import getScrollAnimation from "@/utils/getScrollAnimation";
import { delay, motion } from "framer-motion"
import Image from "next/image"
import { useMemo } from "react";
const ProductPortfolio = () => {
       const scrollAnimation = useMemo(() => getScrollAnimation(), []);

       return (
              <div>
                     <ScrollAnimationWrapper>
                            <div className="hidden xl:grid grid-cols-2 container gap-7 my-10 h-full text-white justify-between items-center px-0 lg:px-10">
                                   <motion.div animate={{}} className="grid col-span-1 grid-cols-3 bg-yellow-700 bg-cover items-center place-items-end p-16 bg-center h-[800px] rounded-3xl bg-[url('/kingback.png')]">
                                          <motion.div variants={scrollAnimation} className="grid col-span-2">
                                                 <div className="font-bebas  text-[80px]">King</div>
                                                 <div className="font-bebas -mt-10 text-[55px]">Coconut Water</div>
                                                 <div className="mt-9 text-[20px]">Immerse yourself in the royal realm of this beverage, a single origin product harvested in a tropical paradise. Our King Coconut water is more than just a beverage – it is an experience packed with elctrolytes and nutrition that reflect the essence of the tropics.
                                                        The ultimate organic energy booster with a unique taste and multiple benefits</div>
                                          </motion.div>
                                          <motion.div variants={scrollAnimation}>
                                                 <Image src={"/kingbackcan.png"} width={280} quality={100} className="" height={200} alt={""}></Image>
                                          </motion.div>

                                   </motion.div>
                                   <div className="grid col-span-1 grid-cols-3 h-[800px] rounded-3xl items-center place-items-center p-16 bg-center bg-green-700 bg-cover bg-[url('/tenderback.png')]">

                                          <motion.div variants={scrollAnimation}>
                                                 <Image src={"/tenderbackcan.png"} width={280} quality={100} className="" height={200} alt={""}></Image>
                                          </motion.div>
                                          <motion.div variants={scrollAnimation} className="grid col-span-2 text-right">
                                                 <div className="font-bebas text-[80px]">Tender</div>
                                                 <div className="font-bebas -mt-10 text-[55px]">Coconut Water</div>
                                                 <div className="mt-9 text-[20px]">Enjoy the natural refreshing and hydrating experience of tender coconut water, sourced directly from the green plantations that dot the landscapes of Sri Lanka. With each sip you will feel the embrace of the warm breeze among the palm trees and appreciate the nature-given goodness this beverage embodies.</div>
                                          </motion.div>

                                   </div>

                            </div >
                            <div className="xl:hidden hidden md:grid grid-cols-1 mx-4 max-w-[1920px] text-center gap-7 my-10 h-full bg-bottom bg-no-repeat bg-cover overflow-hidden text-white justify-between items-center px-0 lg:px-10">
                                   <motion.div variants={scrollAnimation} className="grid col-span-1 bg-yellow-700 bg-cover content-center place-items-center overflow-hidden items-center h-[800px] rounded-3xl bg-[url('/kingbackmobile.png')]">
                                          <div className="grid  px-20 py-1">
                                                 <div className="font-bebas  text-[60px]">King</div>
                                                 <div className="font-bebas -mt-4 text-[33px]">Coconut Water</div>
                                                 <div className="mt-9 text-[18px]">Immerse yourself in the royal realm of this beverage, a single origin product harvested in a tropical paradise. Our King Coconut water is more than just a beverage – it is an experience packed with elctrolytes and nutrition that reflect the essence of the tropics.
                                                        The ultimate organic energy booster with a unique taste and multiple benefits</div></div>
                                          <div>
                                                 <Image src={"/kingbackcan.png"} width={350} quality={100} className="mt-72 overflow-hidden" height={200} alt={""}></Image>
                                          </div>

                                   </motion.div>
                                   <motion.div variants={scrollAnimation} className="grid col-span-1  h-[790px] rounded-3xl content-center place-items-center items-center bg-bottom bg-no-repeat overflow-hidden bg-green-700 bg-cover bg-[url('/tenderbackmobile.png')]">

                                          <div className="grid   px-20 py-1">
                                                 <div className="font-bebas text-[60px]">Tender</div>
                                                 <div className="font-bebas -mt-4 text-[33px]">Coconut Water</div>
                                                 <div className="mt-9 text-[18px]">Enjoy the natural refreshing and hydrating experience of tender coconut water, sourced directly from the green plantations that dot the landscapes of Sri Lanka. With each sip you will feel the embrace of the warm breeze among the palm trees and appreciate the nature-given goodness this beverage embodies.</div>
                                          </div>
                                          <div >
                                                 <Image src={"/tenderbackcan.png"} width={350} quality={100} className="mt-72 overflow-hidden" height={200} alt={""}></Image>
                                          </div>

                                   </motion.div>

                            </div >
                            <div className="md:hidden grid grid-cols-1 mx-4 max-w-[1920px] text-center gap-7 my-10 h-full bg-bottom bg-no-repeat bg-cover overflow-hidden text-white justify-between items-center px-0 lg:px-10">
                                   <motion.div variants={scrollAnimation} className="grid col-span-1 bg-yellow-700 bg-cover content-center place-items-center overflow-hidden items-center h-[800px] rounded-3xl bg-[url('/kingbackmobile.png')]">
                                          <div className="grid  px-1 py-1">
                                                 <div className="font-bebas  text-[60px]">King</div>
                                                 <div className="font-bebas -mt-4 text-[33px]">Coconut Water</div>
                                                 <div className="mt-9 text-[18px]">Immerse yourself in the royal realm of this beverage, a single origin product harvested in a tropical paradise. Our King Coconut water is more than just a beverage – it is an experience packed with elctrolytes and nutrition that reflect the essence of the tropics.
                                                        The ultimate organic energy booster with a unique taste and multiple benefits</div></div>
                                          <div>
                                                 <Image src={"/kingbackcan.png"} width={150} quality={100} className="mt-5 overflow-hidden" height={200} alt={""}></Image>
                                          </div>

                                   </motion.div>
                                   <motion.div variants={scrollAnimation} className="grid col-span-1  h-[790px] rounded-3xl content-center place-items-center items-center bg-bottom bg-no-repeat overflow-hidden bg-green-700 bg-cover bg-[url('/tenderbackmobile.png')]">

                                          <div className="grid   px-1 py-1">
                                                 <div className="font-bebas text-[60px]">Tender</div>
                                                 <div className="font-bebas -mt-4 text-[33px]">Coconut Water</div>
                                                 <div className="mt-9 text-[18px]">Enjoy the natural refreshing and hydrating experience of tender coconut water, sourced directly from the green plantations that dot the landscapes of Sri Lanka. With each sip you will feel the embrace of the warm breeze among the palm trees and appreciate the nature-given goodness this beverage embodies.</div>
                                          </div>
                                          <div >
                                                 <Image src={"/tenderbackcan.png"} width={150} quality={100} className="mt-5 overflow-hidden" height={200} alt={""}></Image>
                                          </div>

                                   </motion.div>

                            </div >
                     </ScrollAnimationWrapper>
              </div >
       )
}

export default ProductPortfolio