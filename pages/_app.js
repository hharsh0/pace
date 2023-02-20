import '@/styles/globals.css'
import LayoutWrapper from "@/components/LayoutWrapper";
import { ThemeProvider } from "next-themes";
import Head from "next/head";




export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  );
 
  
}
