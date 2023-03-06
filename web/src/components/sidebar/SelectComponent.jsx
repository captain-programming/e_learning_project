import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";

const SelectComponent = ({ defaultValue }) => {
  const [value, setValue] = useState(defaultValue);
  const [active, setActive] = useState(false);

  // console.log(active)

  return (
    <>
      <Flex
        p={"0px 25px"}
        gap={2}
        cursor={"pointer"}
        onMouseEnter={() => setActive(true)}
        alignItems="center"
      >
        <Text fontSize="20px" fontWeight={"bold"}>
          {value}
        </Text>
        <AiOutlineCaretDown fontSize={"16px"} color="rgb(207,216,220)" />
        <Box>
          {active && (
            <Flex
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              direction={"column"}
              borderRadius={10}
              onMouseLeave={() => setActive(false)}
              position="fixed"
              bg={"white"}
            >
              {defaultValue === "Super Admin" && (
                <Text
                  p={"10px 20px"}
                  _hover={{ bg: "green.100", cursor: "pointer" }}
                  onClick={() => setValue("Super Admin")}
                >
                  Super Admin
                </Text>
              )}
              {(defaultValue === "Super Admin" || defaultValue === "Admin") && (
                <Text
                  p={"10px 20px"}
                  _hover={{ bg: "green.100", cursor: "pointer" }}
                  onClick={() => setValue("Admin")}
                >
                  Admin
                </Text>
              )}
              {defaultValue !== "Student" && (
                <Text
                  p={"10px 20px"}
                  _hover={{ bg: "green.100", cursor: "pointer" }}
                  onClick={() => setValue("Instructor")}
                >
                  Instructor
                </Text>
              )}
              <Text
                p={"10px 20px"}
                _hover={{ bg: "green.100", cursor: "pointer" }}
                onClick={() => setValue("Student")}
              >
                Student
              </Text>
            </Flex>
          )}
        </Box>
      </Flex>
    </>
  );
};

export default SelectComponent;
