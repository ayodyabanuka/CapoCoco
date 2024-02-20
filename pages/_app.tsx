import Head from 'next/head';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout';
import NextNProgress from 'nextjs-progressbar';
import { useState, useEffect } from 'react';
import Loading from '@/components/loading';


function App({ Component, pageProps }: AppProps) {

       const [loading, setLoading] = useState(true);

       useEffect(() => {
              const timer = setTimeout(() => {
                     setLoading(false);
              }, 5000);
              return () => clearTimeout(timer);
       }, []);
       return (
              <>
                     <Head>
                            <link rel="shortcut icon" href={'/favicon.png'} />
                            <title>CapoCoco</title>
                     </Head>
                     <NextNProgress color="#8C6120" />
                     <div className='relative'>
                            <div className={` fixed w-screen h-screen ${loading ? "block z-50" : "hidden z-0"}`}><Loading /></div>
                            <div>
                                   <Layout>

                                          <Component {...pageProps} />
                                   </Layout>
                            </div>
                     </div>



              </>
       );
}
export default App;
