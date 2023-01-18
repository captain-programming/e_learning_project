import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { CgMenuGridR, } from "react-icons/cg";
import { FaGraduationCap } from "react-icons/fa";
import { BiBarChartSquare } from "react-icons/bi";
import { SiBloglovin } from "react-icons/si";
import { BsChatDots } from "react-icons/bs";
import { AiFillGithub, AiOutlineLineChart } from "react-icons/ai";
import { MdOutlineSlowMotionVideo, MdOutlineAssignment } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
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
            <NavLink to={"/"}>
              <Flex
                gap={4}
                _hover={{ border: "1px solid rgb(107,230,225)" }}
                borderRadius={10}
                p={2}
                alignItems="center"
              >
                <CgMenuGridR fontSize={"20px"} />
                <Heading
                  fontSize="18px"
                  cursor={"pointer"}
                  fontFamily={"DM Serif"}
                >
                  Dashboard
                </Heading>
              </Flex>
            </NavLink>
            <NavLink to={"/courses"}>
              <Flex
                gap={4}
                _hover={{ border: "1px solid rgb(107,230,225)" }}
                borderRadius={10}
                p={2}
                alignItems="center"
              >
                <FaGraduationCap fontSize={"20px"} />
                <Heading
                  fontSize="18px"
                  cursor={"pointer"}
                  fontFamily={"DM Serif"}
                >
                  Courses
                </Heading>
              </Flex>
            </NavLink>
            <NavLink to={"/lectures"}>
              <Flex
                gap={4}
                _hover={{ border: "1px solid rgb(107,230,225)" }}
                borderRadius={10}
                p={2}
                alignItems="center"
              >
                <MdOutlineSlowMotionVideo fontSize={"20px"} />
                <Heading fontSize="18px" fontFamily={"DM Serif"} cursor={"pointer"} >
                  Lectures
                </Heading>
              </Flex>
            </NavLink>
            <NavLink to={"/assignments"}>
              <Flex
                gap={4}
                _hover={{ border: "1px solid rgb(107,230,225)" }}
                borderRadius={10}
                p={2}
                alignItems="center"
              >
                <MdOutlineAssignment fontSize={"20px"} />
                <Heading fontSize="18px" fontFamily={"DM Serif"} cursor={"pointer"}>
                  Assignments
                </Heading>
              </Flex>
            </NavLink>
            <NavLink to={"/submissions"}>
              <Flex
                gap={4}
                _hover={{ border: "1px solid rgb(107,230,225)" }}
                borderRadius={10}
                p={2}
                alignItems="center"
              >
                <BiBarChartSquare fontSize={"20px"} />
                <Heading fontSize="18px" fontFamily={"DM Serif"} cursor={"pointer"}>
                  Submissions
                </Heading>
              </Flex>
            </NavLink>
            <NavLink to={"/repos"}>
              <Flex
                gap={4}
                _hover={{ border: "1px solid rgb(107,230,225)" }}
                borderRadius={10}
                p={2}
                alignItems="center"
              >
                <AiFillGithub fontSize={"20px"} />
                <Heading fontSize="18px" fontFamily={"DM Serif"} cursor={"pointer"}>
                  Repos
                </Heading>
              </Flex>
            </NavLink>
          </Flex>

          {/* //part2 */}
          <Text mt={6} mb={4} fontSize="15px" fontWeight={500} color="gray.400">
            EXPLORE
          </Text>
          <Flex gap={2} direction="column">
            <NavLink to={"/visuals"}>
              <Flex
                gap={4}
                _hover={{ border: "1px solid rgb(107,230,225)" }}
                borderRadius={10}
                p={2}
                alignItems="center"
              >
                <AiOutlineLineChart />
                <Heading size={"sm"} fontFamily={"DM Serif"} cursor={"pointer"}>
                  Visuals
                </Heading>
              </Flex>
            </NavLink>
            <NavLink to={"/blog"}>
              <Flex
                gap={4}
                _hover={{ border: "1px solid rgb(107,230,225)" }}
                borderRadius={10}
                p={2}
                alignItems="center"
              >
                <SiBloglovin />
                <Heading size={"sm"} fontFamily={"DM Serif"} cursor={"pointer"}>
                  Blog
                </Heading>
              </Flex>
            </NavLink>
            <NavLink to={"/ask_question"}>
              <Flex
                gap={4}
                _hover={{ border: "1px solid rgb(107,230,225)" }}
                borderRadius={10}
                p={2}
                alignItems="center"
              >
                <BsChatDots />
                <Heading size={"sm"} fontFamily={"DM Serif"} cursor={"pointer"}>
                  Ask Questions
                </Heading>
              </Flex>
            </NavLink>
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
          <Box
            borderRadius={10}
            p={3}
            width="90%"
            margin={"auto"}
            bg={"facebook.400"}
            color="white"
            mb={3}
            pt={10}
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
            <Button
              _hover={{ border: "1px solid rgb(107,230,225)" }}
              bg={"twitter.500"}
            >
              WHERE ON GITHUB
            </Button>
          </Box>
          <Flex
            gap={4}
            borderTop="1px solid rgb(225,224,225)"
            p={3}
            pl={6}
            alignItems="center"
            position={"reletive"}
          >
            <Image
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              alt=""
              width={"30px"}
              borderRadius={"20%"}
              height="30px"
            />
            <Heading fontSize="18px" fontFamily={"DM Serif"}>
              Profile
            </Heading>
          </Flex>
        </Box>
      </Stack>
    </>
  );
};

export default Sidebar;
