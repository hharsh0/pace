import '@/styles/globals.css'
import LayoutWrapper from "@/components/LayoutWrapper";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { useRouter } from "next/router";


function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


export default function App({ Component, pageProps }) {
  const router = useRouter();
  let routeName = capitalizeFirstLetter(router.pathname.substr(1));
  if (routeName.length === 0) {
    routeName = "Home";
  }
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <Head>
        <title>{`${routeName} | PACE 2023`}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  );
 
  
}
