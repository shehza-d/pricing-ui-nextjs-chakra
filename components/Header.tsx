import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <Box pb={28} as="section">
      <Box
        sx={{
          bg: "purple.600",
          color: "gray.50",
          pt: ["60px", "60px", "90px"],
          pb: "198px",
          px: 8,
          textAlign: ["left", "left", "center"],
        }}
      >
        {/* Because heading and text same color so we can pas the color to parent i.e Box */}
        <Heading
          as={"h1"}
          sx={{ fontSize: ["3xl", "3xl", "5xl"], fontWeight: 900 }}
        >
          Simple pricing for your business
        </Heading>
        <Text sx={{ fontSize: ["lg", "lg", "2xl"], fontWeight: 500, pt: 4 }}>
          Plans that are carefully crafted to suit your business.
        </Text>
      </Box>
    </Box>
  );
}
