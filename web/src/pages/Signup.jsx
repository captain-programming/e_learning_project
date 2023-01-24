import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import bgImage from "../assets/Login/background-image-signup.jpg";
import { HiArrowNarrowLeft } from "react-icons/hi";

const Signup = () => {
  const [box, setBox] = useState(1);
  const [accept, setAccept] = useState(false);
  const [formDetails, setFormsDetails] = useState({});

  const changePage = () => {
    setBox(box + 1);
  };

  const getUserValue = (e) => {
    const {name, value} = e.target;

    setFormsDetails({
      ...formDetails,
      [name]:value,
    })
  }

  const acceptPermission = (e) => {
    // console.log(e.target.checked);
    setAccept(e.target.checked);
  };

  const submitForm =(e) => {
    e.preventDefault();

    console.log(formDetails);
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
          width={"31%"}
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
          p={4}
          borderRadius={10}
          bg="white"
        >
          {box === 1 ? (
            ""
          ) : (
            <HiArrowNarrowLeft
              fontSize={"30px"}
              cursor="pointer"
              onClick={() => setBox(box - 1)}
            />
          )}
          <Box p={5} pt={2}>
            <Heading fontFamily="DM Serif" fontSize={"30px"} mt={5}>
              Register college & academy
            </Heading>
            {box === 1 ? (
              <Flex direction={"column"} gap={2} mt={10}>
                <Text fontWeight={600}>Enter your College / Academy Name</Text>
                <Input
                  type={"text"}
                  placeholder="Enter college / academy name"
                  name="college_name"
                  onChange={getUserValue}
                />
                <Text fontWeight={600}>College / Academy Email</Text>
                <Input
                  type={"email"}
                  placeholder="Enter college / academy email"
                  name="college_email"
                  onChange={getUserValue}
                />
                <Text fontWeight={600}>College / Academy Telephone</Text>
                <Input
                  type={"number"}
                  placeholder="Enter college / academy telephone"
                  name="college_phone"
                  onChange={getUserValue}
                />
                <Text fontWeight={600}>Password</Text>
                <Input type={"password"} placeholder="Enter your password" name="password" onChange={getUserValue}/>
                <Button
                  mt={10}
                  fontSize={20}
                  width="80px"
                  alignSelf={"center"}
                  onClick={changePage}
                >
                  Next
                </Button>
              </Flex>
            ) : box === 2 ? (
              <Flex direction={"column"} gap={2} mt={10}>
                <Text fontWeight={600}>Admin Name </Text>
                <Input type={"text"} placeholder="Enter your name" name="admin_name" onChange={getUserValue}/>
                <Text fontWeight={600}>Admin Mobile Number</Text>
                <Input type={"number"} placeholder="Enter your mobile number" name="admin_phone" onChange={getUserValue}/>
                <Text fontWeight={600}>Admin Email</Text>
                <Input type={"email"} placeholder="Enter your email" name="admin_email" onChange={getUserValue}/>
                <Button
                  mt={10}
                  fontSize={20}
                  width="80px"
                  alignSelf={"center"}
                  onClick={changePage}
                >
                  Next
                </Button>
              </Flex>
            ) : (
              <Flex direction={"column"} gap={2} mt={10}>
                <Checkbox onChange={acceptPermission}>
                  <Text ml={2} fontSize={"20px"} fontWeight={500}>
                    By signing up, you agree to E-Learning's{" "}
                    <span style={{ color: "blue" }}>Terms of Service</span> and{" "}
                    <span style={{ color: "blue" }}>Privacy policy.</span>
                  </Text>
                </Checkbox>
                <Button
                  disabled={accept === false}
                  mt={10}
                  type="submit"
                  fontSize={20}
                  width="100px"
                  alignSelf={"center"}
                  onClick={submitForm}
                >
                  Register
                </Button>
              </Flex>
            )}

            <Flex gap={2} justifyContent="center" mt={10}>
              <Box
                bg={box === 1 ? "pink.500" : "blue.500"}
                borderRadius="50%"
                width="10px"
                height={"10px"}
              ></Box>
              <Box
                bg={box === 2 ? "pink.500" : "blue.500"}
                borderRadius="50%"
                width="10px"
                height={"10px"}
              ></Box>
              <Box
                bg={box === 3 ? "pink.500" : "blue.500"}
                borderRadius="50%"
                width="10px"
                height={"10px"}
              ></Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Signup;
