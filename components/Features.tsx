import { Box, HStack, Icon, StackProps, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Features() {
  return (
    <Box maxW="1024px" m="auto" pt="60px" pb="32px" as="section">
      <HStack px="48px" spacing="20px">
        <HStack spacing="24px">
          {/* <Icon as={} boxSize='48px' /> */}
          <Image src="/icon1.svg" alt="tick logo" width={48} height={48} />
          <Text textAlign="left" fontSize="18px" fontWeight="700">
            30 days money back Guarantee
          </Text>
        </HStack>
        <HStack spacing="24px">
          <Image src="/icon2.svg" alt="tick logo" width={48} height={48} />
          <Text textAlign="left" fontSize="18px" fontWeight="700">
            No setup fees 100% hassle-free
          </Text>
        </HStack> 
        <HStack spacing="24px">
          <Image src="/icon3.svg" alt="tick logo" width={48} height={48} />
          <Text textAlign="left" fontSize="18px" fontWeight="700">
            No monthly subscription Pay once and for all
          </Text>
        </HStack>
      </HStack>
    </Box>
  );
}
