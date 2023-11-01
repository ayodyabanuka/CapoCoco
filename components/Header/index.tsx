import { AnimatePresence, motion, useCycle } from "framer-motion";
import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/router"
import { FaSpinner } from 'react-icons/fa';

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
              <>
                     <motion.div
                            initial={false}
                            animate={isOpen}
                            variants={headerVariant}
                            className={`w-full`}
                     >
                            <div className="hidden lg:flex items-center justify-between p-5 xl:mx-[240px] mx-0">
                                   <Image src={"/logo.png"} width={70} height={70} alt={"logo"} />
                                   <div className="flex gap-5 text-[#42454A] text-[14px]">
                                          {NavList.map((item) =>
                                                 <Link key={item.title} href={item.link}><div className={`${router.pathname === item.link ? "bg-[#8C6120] text-white px-2 py-1 rounded-lg" : "px-2 py-1"}`}>{item.title}</div></Link>
                                          )}
                                   </div>
                            </div>

                            <div className="lg:hidden flex justify-between bg-white text-black p-5">
                                   <motion.button
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: 1 }}
                                          exit={{ opacity: 0 }}
                                          className="cursor-pointer justify-center items-center"
                                          onClick={() => toggleOpen()}
                                   >
                                          <FaSpinner />
                                   </motion.button>
                                   <Image src={"/logo.png"} width={70} height={70} alt={"logo"} />
                                   <div className="text-black"></div>

                            </div>
                     </motion.div>
              </>
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