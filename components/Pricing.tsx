import {
  Box,
  Button,
  Heading,
  HStack,
  Text,
  Stack,
  Flex,
} from "@chakra-ui/react";
import Image from "next/image";

export default function Pricing() {
  return (
    <Box mx="6" as="section">
      <Box
        sx={{
          maxW: "994px",
          m: "auto",
          mt: "-256px",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow:
            "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)",
          textAlign: "center",
        }}
      >
        <Flex direction={["column", "column", "row"]}>
          <Box sx={{ bg: "#F0EAFB", p: ["28px", "6opx", "60px"] }}>
            <Text sx={{ fontSize: "xl ", fontWeight: 800 }}>Premium PRO</Text>
            <Heading as={"h3"} sx={{ fontSize: ["5xl", "5xl", "6xl"], mt: 4 }}>
              $329
            </Heading>
            <Text
              sx={{
                color: "gray.900",
                fontSize: "lg",
                fontWeight: "medium",
                mt: 2,
              }}
            >
              billed just once
            </Text>
            <Button
              colorScheme="purple"
              size="lg"
              sx={{ w: ["auto", "282px", "282px"], mt: 6 }}
            >
              Get Started
            </Button>
          </Box>

          <Box
            sx={{ p: ["32px", "32px", "60px"], fontSize: "lg", bg: "white" }}
          >
            <Text textAlign="left">
              Access these features when you get this pricing package for your
              business.
            </Text>
            <Stack as="ul" spacing="5" pt="6">
              <HStack as="li" spacing="5" align="center">
                <Image src="/tick.png" alt="tick logo" width={22} height={22} />
                {/* <Icon as={'/tick.png'} w="22px" h="22px" /> */}
                <Text textAlign="left">
                  International calling and messaging API
                </Text>
              </HStack>
              <HStack as="li" spacing="5" align="center">
                <Image src="/tick.png" alt="tick logo" width={22} height={22} />
                <Text textAlign="left">Additional phone numbers</Text>
              </HStack>
              <HStack as="li" spacing="5" align="center">
                <Image src="/tick.png" alt="tick logo" width={22} height={22} />
                <Text textAlign="left">Automated messages via Zapier</Text>
              </HStack>
              <HStack as="li" spacing="5" align="center">
                <Image src="/tick.png" alt="tick logo" width={22} height={22} />
                <Text textAlign="left">24/7 support and consulting</Text>
              </HStack>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
