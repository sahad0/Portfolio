import '../styles/globals.css';
import '../styles/valbtn.css';
import Head from "next/head";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {

  return(
    <>
   <Head>
     
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

   </Head>
  
  <Component {...pageProps} />
  </>
)
}

export default MyApp;
