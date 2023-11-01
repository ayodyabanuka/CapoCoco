import Head from 'next/head';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout';
import NextNProgress from 'nextjs-progressbar';


function App({ Component, pageProps }: AppProps) {
       return (
              <>
                     <Head>
                            {/* <link rel="shortcut icon" href={'/topadsfavicon.png'} /> */}
                            <title>CapoCoco</title>
                     </Head>
                     <NextNProgress color="#8C6120" />
                     <Layout>
                            <Component {...pageProps} />
                     </Layout>

              </>
       );
}
export default App;
