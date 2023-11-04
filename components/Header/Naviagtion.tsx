import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = { isOpen?: boolean; toggleOpen: any };
const menu = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'About Us',
    url: '/about-us',
  },
  {
    id: 3,
    title: 'Product Portfolio',
    url: '/product-portfolio',
  },
  {
    id: 4,
    title: 'Our Process',
    url: '/our-process',
  },
  {
    id: 5,
    title: 'Sustainability',
    url: '/contact-us',
  },
  {
    id: 6,
    title: 'Contact Us',
    url: '/contact-us',
  }
];

const Naviagtion = ({ toggleOpen }: Props) => {
  return (
    <div
      className={`absolute top-[12vh] z-40 overflow-y-scroll max-h-[88vh]`}
    >

      <motion.ul
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
          {menu.map(menu => (
            <div className=' w-screen px-10' key={menu.id}>
              <Link
                href={menu.url}
                onClick={() => toggleOpen}
                className=""
              >
                <motion.div className="flex gap-2 mb-4 px-6 py-2 w-full items-center bg-gray-50 rounded-md">
                  {menu.title}
                </motion.div>
              </Link>
            </div>
          ))}
        </motion.li>
      </motion.ul>
    </div>
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

export default Naviagtion;
