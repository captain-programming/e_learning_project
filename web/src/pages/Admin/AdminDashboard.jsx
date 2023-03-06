import {
  Flex, Grid, Heading,
} from "@chakra-ui/react";
import React from "react";
import { FaRegUser, FaCodeBranch } from "react-icons/fa";
import { MdOutlineGroups, MdEmojiEvents } from "react-icons/md";
import { GiProgression} from "react-icons/gi";
import { IoMdSettings} from "react-icons/io";
import { BsBookHalf } from "react-icons/bs";
import Sidebar from "../../components/sidebar/Sidebar";

const AdminDashboard = () => {

  return (
    <>
    <Flex bg={"rgb(225,224,225)"} width="100%" justifyContent={'space-between'} p={2} height={"100vh"}>
      <AdminDashboard />
      <Flex
        width={"81.3%"}
        bg={"white"}
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        borderRadius={20}
        direction="column"
        p={3}
        gap={3}
      >
        <Flex justifyContent={'space-between'}  borderBlockEnd={"1px solid rgb(225,224,225)"} p={3}>
          <Heading size={'md'} fontFamily={'DM Serif'}>Admin Dashboard</Heading>
        </Flex>
        <Grid gridTemplateColumns={"repeat(3, 1fr)"} gap={10} width="80%" margin={"50px auto"}>
          <Flex alignItems={"center"} gap={2} borderRadius={10} border="1px solid gray" p={2} >
            <FaRegUser fontSize={"50px"}/>
            <Heading size={"md"}>Users</Heading>
          </Flex>
          <Flex alignItems={"center"} gap={2} borderRadius={10} border="1px solid gray" p={2}>
            <BsBookHalf fontSize={"50px"}/>
            <Heading size={"md"}>Courses</Heading>
          </Flex>
          <Flex alignItems={"center"} gap={2} borderRadius={10} border="1px solid gray" p={2}>
            <FaCodeBranch fontSize={"50px"}/>
            <Heading size={"md"}>Branches</Heading>
          </Flex>
          <Flex alignItems={"center"} gap={2} borderRadius={10} border="1px solid gray" p={2}>
            <MdOutlineGroups fontSize={"50px"}/>
            <Heading size={"md"}>Groups</Heading>
          </Flex>
          <Flex alignItems={"center"} gap={2} borderRadius={10} border="1px solid gray" p={2}>
            <GiProgression fontSize={"50px"}/>
            <Heading size={"md"}>Reports</Heading>
          </Flex>
          <Flex alignItems={"center"} gap={2} borderRadius={10} border="1px solid gray" p={2}>
            <MdEmojiEvents fontSize={"50px"}/>
            <Heading size={"md"}>Events</Heading>
          </Flex>
          <Flex alignItems={"center"} gap={2} borderRadius={10} border="1px solid gray" p={2}>
            <IoMdSettings fontSize={"50px"}/>
            <Heading size={"md"}>Account Setting</Heading>
          </Flex>
        </Grid>
        <Heading size={"md"}>Reports</Heading>
      </Flex>
    </Flex>
    </>
  );
};

export default AdminDashboard;