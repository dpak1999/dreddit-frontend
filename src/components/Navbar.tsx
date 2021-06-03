/** @format */

import React from "react";
import NextLink from "next/link";
import { Box, Flex, Link } from "@chakra-ui/layout";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <Flex bg="tomato">
      <Box p={4} ml={"auto"}>
        <NextLink href="/login">
          <Link color="white" mr={3}>
            Login
          </Link>
        </NextLink>
        <NextLink href="/register">
          <Link color="white">Register</Link>
        </NextLink>
      </Box>
    </Flex>
  );
};
