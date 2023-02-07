import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <Box pb="112px" as="section">
      <Box
        sx={{ bgColor: "#6B46C1", color: "#F7FAFC", pt: 90, pb: 198, px: 32 }}
      >
        {/* Because heading and text same color so we can pas the color to parent i.e Box */}
        <Heading as={"h1"} sx={{ fontSize: 48, fontWeight: 800 }}>
          Simple pricing for your business
        </Heading>
        <Text sx={{ fontSize: 24, fontWeight: 500, pt: 16 }}>
          Plans that are carefully crafted to suit your business.
        </Text>
      </Box>
    </Box>
  );
}
