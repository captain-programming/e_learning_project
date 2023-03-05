import { Box, Button, Flex, Heading, Input, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import bgImage from "../assets/login/background-image-signup.jpg";
import { loginFun } from "../store/action/auth.action";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const getLogin = (e) =>{
    const {name, value} = e.target;

    setLoginDetails({...loginDetails, [name]: value});
  }

  

  const loginUsers = (e) =>{
    e.preventDefault();
    dispatch(loginFun(loginDetails, navigate, toast));
    // console.log(loginDetails);
  }

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
          <form onSubmit={loginUsers}>
            <Flex direction={"column"} gap={2} mt={10}>
              <Text fontWeight={600}>Email / User ID</Text>
              <Input name="college_email" type={"email"} placeholder="Enter your email/userid" onChange={getLogin}/>
              <Text fontWeight={600}>Password</Text>
              <Input name="password" type={"password"} placeholder="Enter your password" onChange={getLogin}/>
              <Button
                mt={10}
                fontSize={20}
                width="80px"
                type="submit"
                alignSelf={"center"}
              >
                Login
              </Button>
              <Link to="/signup"><Text cursor={"pointer"} color="blue" _hover={{textDecoration: "underline"}} textAlign={"end"} mt={3}>Create own organization</Text></Link>
            </Flex>
          </form>
        </Box>
      </Flex>
    </>
  );
};

export default Login;
