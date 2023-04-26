// components/layout.js
import { createTheme, NextUIProvider } from "@nextui-org/react"
import Navbar from "./NavBartest";
import { ThemeProvider as NextThemesProvider  } from "next-themes";
interface Props {
  children: JSX.Element[] | JSX.Element;
}
const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {}, // optional
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {}, // optional
  }
})

export default function Layout({ children }: Props) {
  
  return (
    <>
            <NextThemesProvider
    defaultTheme="system"
    attribute="class"
    value={{
      light: lightTheme.className,
      dark: darkTheme.className
    }}
  >
      <Navbar />
      <main>{children}</main>
      </NextThemesProvider>
    </>

  );
}
