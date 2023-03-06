import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../components/sidebar/Sidebar";
import { logoutFun } from "../store/action/auth.action";


const Profile = () => {
  const {login} = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const userLogout = () => {
    dispatch(logoutFun());
  }

  // console.log(login?.userdetails)

  return (
    <>
    <Flex bg={"rgb(225,224,225)"} width="100%" justifyContent={'space-between'} p={2} height={"100vh"}>
      <Sidebar/>
      <Stack
      width={"81.3%"}
        bg={"white"}
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        borderRadius={20}
        p={3}
        gap={3}
      >
        <Flex justifyContent={'space-between'}  borderBlockEnd={"1px solid rgb(225,224,225)"} p={3}>
          <Heading size={'md'} fontFamily={'DM Serif'}>User Profile</Heading>
          <Button onClick={userLogout}>Log Out</Button>
        </Flex>
        <Flex alignItems={"center"} direction="column">
          <Img src="https://s3-eu-west-1.amazonaws.com/artsthread-content/images/users/f33e8b5e45302001518bcbf63b50c932.jpg" alt="User Image" width={"200px"} borderRadius="50%"/>
          <Button>Change Profile</Button>
          <Box mt={10} width={"96%"} border="1px solid gray" borderRadius={"10px"} padding={5}>
            <Heading size={"md"}>User Name: {login?.userdetails?.admin_name}</Heading>
            <Text fontSize={"20px"} fontWeight={550}>Email: <span style={{fontWeight: "normal"}}>{login?.userdetails?.admin_email}</span></Text>
            <Text fontSize={"20px"} fontWeight={550}>Mobile No.: <span style={{fontWeight: "normal"}}>{login?.userdetails?.admin_phone}</span></Text>
            <Text fontSize={"20px"} fontWeight={550}>Role: <span style={{fontWeight: "normal"}}>{login?.userdetails?.role}</span></Text>
          </Box>
        </Flex>
      </Stack>
    </Flex>
    </>
  );
};

export default Profile;
