import './globals.css'
import ChakraWrapper from "../components/chakra";
// import { Html, Head, Main, NextScript } from 'next/document'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ChakraWrapper>{children}</ChakraWrapper>
      </body>
    </html>
  );
}
