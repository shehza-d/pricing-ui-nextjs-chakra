"use client";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Pricing from "@/components/Pricing";

// import { Inter } from "@next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Pricing />
      <Features />
       {/* <Container
        as="section"
        sx={{ border: "2px solid red", ":hover": { color: "red" } }}
      ></Container>
      <Box as="main">fd</Box>
      <Container as="section">
        <Text>@shehzad footer</Text>
      </Container> */}
    </>
  );
}
