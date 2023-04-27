// components/layout.js
import { createTheme } from "@nextui-org/react"
import Navbar, { ChildProps } from "./NavBartest";
import { ThemeProvider as NextThemesProvider  } from "next-themes";
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'

import { useState, createContext } from "react";
import { SunIcon } from './sunicon';
import { MoonIcon } from './moonicon';
interface Props {
  children: JSX.Element[] | JSX.Element;
}
const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: { }, // optional
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: { }, // optional
  }
})


export default function Layout({ children }: Props) {

  return (
    <>

    
      <Navbar   />
   
      <main>{children}</main>
  
    </>

  );
}
