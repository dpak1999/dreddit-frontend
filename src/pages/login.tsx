/** @format */

import React from "react";
import { Form, Formik } from "formik";
import { Button, Box, Link, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { withUrqlClient } from "next-urql";
import NextLink from "next/link";
import { Wrapper } from "../components/Wrapper";
import { InputField } from "../components/InputField";
import { useLoginMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import { createUrqlClient } from "../utils/createUrqlClient";

const Login: React.FC<{}> = ({}) => {
  const router = useRouter();
  const [, login] = useLoginMutation();
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ usernameOrEmail: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await login(values);
          if (response.data?.login.errors) {
            setErrors(toErrorMap(response.data.login.errors));
          } else if (response.data?.login.user) {
            router.push("/");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="usernameOrEmail"
              label="Username or Email"
              placeholder="Username or Email"
              type="text"
            />
            <Box mt={4}>
              <InputField
                name="password"
                label="Password"
                placeholder="Enter password"
                type="password"
              />
            </Box>
            <Flex direction="column">
              <NextLink href="/forgot-password">
                <Link ml="auto" mt="4">
                  Forgot Password?
                </Link>
              </NextLink>
              <Button
                mt={4}
                type="submit"
                isLoading={isSubmitting}
                variant="solid"
                colorScheme="teal"
                // marginTop="-15px"
              >
                Login
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};
export default withUrqlClient(createUrqlClient)(Login);
