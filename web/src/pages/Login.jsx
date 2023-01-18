import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";
import bgImage from "../assets/Login/background-image-signup.jpg";

const Login = () => {
  return (
    <>
      <Flex
        justifyContent={"center"}
        alignItems="center"
        height={"100vh"}
        bgImage={`url(${bgImage})`}
      >
        <Box
          width={"30%"}
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
          p={10}
          borderRadius={10}
          bg="white"
        >
          <Heading fontFamily="DM Serif" fontSize={"40px"}>
            Login
          </Heading>
          <form>
            <Flex direction={"column"} gap={2} mt={10}>
              <Text fontWeight={600}>Email / User ID</Text>
              <Input type={"email"} placeholder="Enter your email/userid" />
              <Text fontWeight={600}>Password</Text>
              <Input type={"password"} placeholder="Enter your password" />
              <Button
                mt={10}
                fontSize={20}
                width="80px"
                type="submit"
                alignSelf={"center"}
              >
                Login
              </Button>
            </Flex>
          </form>
        </Box>
      </Flex>
    </>
  );
};

export default Login;
