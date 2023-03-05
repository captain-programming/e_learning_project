import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link as ChakraLink} from "@chakra-ui/react";
import React from "react";
import { CgMenuGridR, } from "react-icons/cg";
import { FaGraduationCap } from "react-icons/fa";
import { BiBarChartSquare } from "react-icons/bi";
import { SiBloglovin } from "react-icons/si";
import { AiFillGithub, AiOutlineLineChart } from "react-icons/ai";
import { MdOutlineSlowMotionVideo, MdOutlineAssignment } from "react-icons/md";
import { NavLink } from "react-router-dom";
import MenuItemComponents from "./MenuItemComponents";

let exploreMenuItem = [
  {
    icon: AiOutlineLineChart,
    name: "Visuals",
    path: "visuals"
  }, 
  {
    icon: SiBloglovin,
    name: "Blog",
    path: "blogs"
  }, 
  {
    icon: MdOutlineSlowMotionVideo,
    name: "Ask Questions",
    path: "ask_questions"
  }
];
let learningMenuItem = [
  {
    icon: CgMenuGridR,
    name: "Dashboard",
    path: "",
  }, 
  {
    icon: FaGraduationCap,
    name: "Courses",
    path: "courses",
  }, 
  {
    icon: MdOutlineSlowMotionVideo,
    name: "Lectures",
    path: "lectures",
  }, 
  {
    icon: MdOutlineAssignment,
    name: "Assignments",
    path: "assignments",
  }, 
  {
    icon: BiBarChartSquare,
    name: "Submissions",
    path: "submissions"
  }, 
  {
    icon: AiFillGithub,
    name: "Repos",
    path: "repos"
  },
];

const Sidebar = () => {
  let path = window.location.pathname.split("/").slice(1);

  return (
    <>
      <Stack
        width={"18%"}
        bg={"white"}
        borderRadius={20}
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        p={1}
        justifyContent="space-between"
      >
        <Box p={2}>
          <Heading
            textAlign="center"
            p={3}
            fontFamily={"DM Serif"}
            size={"md"}
            border={"1px solid rgb(225,224,225)"}
            borderRadius={16}
          >
            E-Learning
          </Heading>
        </Box>

        <Box p={6} pt={2} overflowY="auto" scrollBehavior="smooth">
          <Text mb={4} fontSize="15px" fontWeight={500} color="gray.400">
            LEARNING
          </Text>
          <Flex gap={4} direction="column">
             {
              learningMenuItem?.map((menu) => (
                <MenuItemComponents menu={menu} key={menu.name} path={path[0]}/>
              ))
             }
          </Flex>

          {/* //part2 */}
          <Text mt={6} mb={4} fontSize="15px" fontWeight={500} color="gray.400">
            EXPLORE
          </Text>
          <Flex gap={2} direction="column">
            {exploreMenuItem?.map((menu)=>(
              <MenuItemComponents menu={menu} key={menu.name} path={path[0]}/>
            ))}
          </Flex>
        </Box>

        {/* //part3 */}
        <Box>
          <Flex justifyContent={"center"} position="relative" top={10}>
            <Box
              border={"6px solid rgb(66,103,178)"}
              p={2}
              borderRadius="50%"
              bg={"twitter.500"}
            >
              <AiFillGithub fontSize={"50px"} />
            </Box>
          </Flex>
          <Flex
            borderRadius={10}
            p={3}
            width="90%"
            margin={"auto"}
            bg={"facebook.400"}
            color="white"
            mb={3}
            pt={10}
            direction="column"
          >
            <Heading
              mb={3}
              textAlign={"center"}
              fontSize="22px"
              size={"sm"}
              fontFamily="DM Serif"
            >
              Interested in Contributing?
            </Heading>
            <ChakraLink
              href="https://github.com/captain-programming"
              _hover={{ border: "1px solid rgb(107,230,225)" }}
              bg={"twitter.500"}
              alignSelf="center"
              border={"1px solid rgb(29,161,242)"}
              borderRadius={5}
              p={"10px 20px 8px 20px"}
              isExternal
            >
              WHERE ON GITHUB
            </ChakraLink>
          </Flex>
          <Flex
            gap={4}
            borderTop="1px solid rgb(225,224,225)"
            p={3}
            pl={6}
            alignItems="center"
            position={"reletive"}
            cursor="pointer"
          >
            <Image
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              alt=""
              width={"30px"}
              borderRadius={"20%"}
              height="30px"
            />
            <NavLink to="/profile">
              <Heading fontSize="18px" fontFamily={"DM Serif"} cursor="pointer">
                Profile
              </Heading>
            </NavLink>
          </Flex>
        </Box>
      </Stack>
    </>
  );
};

export default Sidebar;
