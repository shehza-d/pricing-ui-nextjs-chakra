"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
// import theme from '../styles/chakraTheme'

export default function ChakraWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ChakraProvider //theme={theme}
    >
      {children}
      {/* <Component {...pageProps} /> */}
    </ChakraProvider>
  );
}
