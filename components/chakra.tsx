"use client";

import { ChakraProvider } from "@chakra-ui/react";
// import { ReactNode } from "react";
// Passing the `theme` prop to the `ChakraProvider`
import { theme } from "../styles/chakraTheme";
//This script is used to store data of theme mode in local storage
import { ColorModeScript } from "@chakra-ui/react";
// import { NextScript } from "next/document";

export default function ChakraWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ChakraProvider theme={theme}>
      {children}
      {/* <Component {...pageProps} /> */}
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {/* <NextScript/> */}
    </ChakraProvider>
  );
}
