import { AnimatePresence, motion, useCycle } from "framer-motion";
import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/router"
import { FaSpinner } from 'react-icons/fa';
import Menutoggle from "./Menutoggle";
import MobileNav from "./sideNav";

const Header = () => {
       const router = useRouter();
       const NavList = [{
              title: "HOME",
              link: "/"
       }, {
              title: "ABOUT US",
              link: "/about-us"
       }, {
              title: "PRODUCT PORTFOLIO",
              link: "/product-portfolio"
       }, {
              title: "OUR PROCESS",
              link: "/our-process"
       }, {
              title: "SUSTAINABILITY",
              link: "/sustainability"
       }, {
              title: "CONTACT US",
              link: "/contact-us"
       }]

       const [isOpen, toggleOpen] = useCycle(false, true);
       return (
              <div>
                     <motion.div
                            initial={false}
                            animate={isOpen}
                            variants={headerVariant}
                            className={`w-full flex justify-center`}
                     >
                            <div className="hidden lg:flex items-center lg:mx-10 max-w-[1540px] w-full justify-between p-5 ">
                                   <Image src={"/logo.png"} width={70} height={70} alt={"logo"} />
                                   <div className="flex gap-5 text-[#42454A] text-[14px]">
                                          {NavList.map((item) =>
                                                 <Link key={item.title} href={item.link}><div className={`${router.pathname === item.link ? "bg-[#CFB023]  text-white px-2 py-1 rounded-lg" : "px-2 py-1 hover:bg-[#bd9434] rounded-lg hover:text-white transition-all ease-in-out"}`}>{item.title}</div></Link>
                                          )}
                                   </div>
                            </div>

                            <div className="lg:hidden flex justify-between bg-white text-black p-5">
                                   <div className="bg-white">
                                          <AnimatePresence>

                                                 <Menutoggle toggle={() => toggleOpen()} isOpen={isOpen} />

                                          </AnimatePresence>

                                          <div className="flex flex-row">
                                                 <AnimatePresence>
                                                        {!isOpen && (
                                                               <div className="flex justify-center items-center space-x-1 absolute top-[21px] right-3">
                                                               </div>
                                                        )}
                                                 </AnimatePresence>
                                          </div>
                                   </div>

                                   <MobileNav isOpen={isOpen} toggleOpen={toggleOpen} />
                                   <Image src={"/logo.png"} width={70} height={70} alt={"logo"} />
                                   <div className="text-black"></div>

                            </div>
                     </motion.div>
              </div>
       )
}

const headerVariant = {
       open: {
              opacity: 0,
              transition: {
                     type: 'spring',
                     stiffness: 20,
                     restDelta: 2,
              },
       },
       closed: {
              opacity: 1,
              transition: {
                     delay: 0.8,
                     type: 'spring',
                     stiffness: 400,
                     damping: 40,
              },
       },
};

export default Header