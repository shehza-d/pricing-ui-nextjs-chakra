import {
  Box,
  Button,
  Heading,
  HStack,
  Text,
  Icon,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";

export default function Pricing() {
  return (
    <>
      <Box
        sx={{
          maxW: "994px",
          m: "auto",
          mt: "-256px",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow:
            "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
      >
        <Box sx={{ display: "flex", textAlign: "center" }}>
          <Box sx={{ bg: "#F0EAFB", p: "60px" }}>
            <Text sx={{ fontSize: "24px ", fontWeight: 800 }}>Premium PRO</Text>
            <Heading as={"h3"} sx={{ fontSize: 60, mt: 16 }}>
              $329
            </Heading>
            <Text
              sx={{
                color: "gray.900",
                fontSize: "lg",
                fontWeight: "medium",
                mt: 8,
              }}
            >
              billed just once
            </Text>
            <Button colorScheme="purple" size="lg" sx={{ w: 282, mt: 6 }}>
              Get Started
            </Button>
          </Box>

          <Box p="60px" fontSize="18px" bg="white">
            <Text textAlign="left">
              Access these features when you get this pricing package for your
              business.
            </Text>
            <Stack as="ul" spacing="20px" pt="24px">
              <HStack as="li" spacing="20px">
                <Image src="/tick.png" alt="tick logo" width={22} height={22} />
                {/* <Icon as={'/tick.png'} w="22px" h="22px" /> */}
                <Text>International calling and messaging API</Text>
              </HStack>
              <HStack as="li" spacing="20px">
                <Image src="/tick.png" alt="tick logo" width={22} height={22} />
                <Text>Additional phone numbers</Text>
              </HStack>
              <HStack as="li" spacing="20px">
                <Image src="/tick.png" alt="tick logo" width={22} height={22} />
                <Text>Automated messages via Zapier</Text>
              </HStack>
              <HStack as="li" spacing="20px">
                <Image src="/tick.png" alt="tick logo" width={22} height={22} />
                <Text>24/7 support and consulting</Text>
              </HStack>
            </Stack>
          </Box>
        </Box>
      </Box>

      <Box></Box>
    </>
  );
}
