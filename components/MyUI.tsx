"use client";
import { Box, Container, Heading, Text, Button } from "@chakra-ui/react";

export default function MyUI() {
  return (
    <>
      <Container
        as="section"
        sx={{ border: "2px solid red", ":hover": { color: "red" } }}
      >
        fd
      </Container>
      <Box as="main">fd</Box>
      <Container as="section">
        <Text>@shehzad footer</Text>
      </Container>
    </>
  );
}
