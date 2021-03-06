/** @format */

import React from "react";
import NextLink from "next/link";
import { Box, Flex, Link } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useMeQuery, useLogoutMutation } from "../generated/graphql";
import { isServer } from "../utils/isServer";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const [{ fetching: logoutFetching }, logout] = useLogoutMutation();
  const [{ data, fetching }] = useMeQuery({ pause: isServer() });
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
        <Button
          isLoading={logoutFetching}
          onClick={() => logout()}
          variant="link"
          color="white"
        >
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
