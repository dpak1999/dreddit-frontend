/** @format */

import React from "react";
import NextLink from "next/link";
import { Box, Flex, Link } from "@chakra-ui/layout";
import { useMeQuery } from "../generated/graphql";
import { Button } from "@chakra-ui/button";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const [{ data, fetching }] = useMeQuery();
  let body = null;

  if (fetching) {
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href="/login">
          <Link color="white" mr={3}>
            Login
          </Link>
        </NextLink>
        <NextLink href="/register">
          <Link color="white">Register</Link>
        </NextLink>
      </>
    );
  } else {
    body = (
      <Flex>
        <Box color="white" mr={3}>
          {data.me.username}
        </Box>
        <Button variant="link" color="white">
          Logout
        </Button>
      </Flex>
    );
  }
  return (
    <Flex bg="tomato">
      <Box p={4} ml={"auto"}>
        {body}
      </Box>
    </Flex>
  );
};
