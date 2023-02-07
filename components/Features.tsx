import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Features() {
  return (
    <Box maxW="1024px" m="auto" pt="60px" pb="8" as="section">
      <Stack
        sx={{
          px: "12",
        }}
        direction={["column", "column", "row"]}
        spacing={["6", "6", "5"]}
      >
        <HStack spacing={6} align="start">
          {/* <Icon as={} boxSize='48px' /> */}
          <Image src="/icon1.svg" alt="tick logo" width={48} height={48} />
          <Text textAlign="left" fontSize="lg" fontWeight="bold">
            30 days money back Guarantee
          </Text>
        </HStack>
        <HStack spacing={6} align="start">
          <Image src="/icon2.svg" alt="tick logo" width={48} height={48} />
          <Text textAlign="left" fontSize="lg" fontWeight="bold">
            No setup fees 100% hassle-free
          </Text>
        </HStack>
        <HStack spacing={6} align="start">
          <Image src="/icon3.svg" alt="tick logo" width={48} height={48} />
          <Text textAlign="left" fontSize="lg" fontWeight="bold">
            No monthly subscription Pay once and for all
          </Text>
        </HStack>
      </Stack>
    </Box>
  );
}
