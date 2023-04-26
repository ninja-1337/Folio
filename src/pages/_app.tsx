import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider  } from "next-themes";
import { trpc } from "../utils/trpc";
import Layout from "../components/layout";
import { createTheme, NextUIProvider } from "@nextui-org/react"
import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {

  return (
    <SessionProvider session={session}>
       {/* <ThemeProvider enableSystem={true} attribute="class"> */}
      
      <Layout>
       
        <Component {...pageProps} />
       
      </Layout>
     
      {/* </ThemeProvider> */}
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
