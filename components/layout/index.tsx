import { AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';
import Container from './container';
import Header from '../Header';
import Footer from '../Footer';

type Props = {
       children: ReactNode;
};


const Layout = ({ children }: Props) => {

       return (
              <div className={`relative bg-white`}>

                     <Header />
                     <AnimatePresence mode="wait">
                            <Container
                                   className={`antialiased mt-5 md:mt-0 min-h-[100vh] lg:min-h-[90vh]`}
                            >
                                   {children}
                            </Container>
                     </AnimatePresence>
                     <Footer />

              </div>
       );
};

export default Layout;
