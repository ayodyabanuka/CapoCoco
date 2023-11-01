import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';

type Props = {
       isOpen: boolean;
       toggleOpen: () => void;
};
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
useEffect(() => {
       const body = document.querySelector('body');
       body!.style.overflow = 'hidden';

       return () => {
              body!.style.overflow = 'auto';
       };
}, []);

const MobileNav = ({ isOpen, toggleOpen }: Props) => {
       return (
              <motion.nav
                     className={`${!isOpen && 'pointer-events-none'
                            } block md:hidden absolute inset-y-0 left-0 w-full`}
              >
                     <AnimatePresence>
                            {isOpen && <motion.ul
                                   className={`flex flex-wrap flex-col justify-center items-center`}
                                   initial="closed"
                                   animate="open"
                                   exit="closed"
                                   variants={navigationVariant}
                            >
                                   <motion.li
                                          className="gap-3"
                                          variants={menuItemVariant}
                                          whileHover={{ scale: 1.1 }}
                                          whileTap={{ scale: 0.95 }}
                                          onClick={() => {
                                                 toggleOpen();
                                          }}
                                   >
                                          {NavList.map(menu => (
                                                 <Link
                                                        key={menu.title}
                                                        href={menu.link}
                                                        onClick={() => toggleOpen}
                                                        className=""
                                                 >
                                                        <motion.div className="flex gap-2 mb-4 px-6 py-2 items-center bg-gray-100 rounded-md">
                                                               {menu.title}
                                                        </motion.div>
                                                 </Link>
                                          ))}
                                   </motion.li>
                            </motion.ul>}
                     </AnimatePresence>
              </motion.nav>
       );
};

const navigationVariant = {
       open: {
              transition: { staggerChildren: 0.02, delayChildren: 0.2 },
       },
       closed: {
              transition: { staggerChildren: 0.02, staggerDirection: -1 },
       },
};

const menuItemVariant = {
       open: {
              y: 0,
              opacity: 1,
              transition: {
                     y: { stiffness: 1000, velocity: -100 },
              },
       },
       closed: {
              y: 50,
              opacity: 0,
              transition: {
                     y: { stiffness: 1000 },
              },
       },
};

export default MobileNav;
