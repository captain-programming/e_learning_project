import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Notifiaction = ({ notice, category }) => {
  return (
    <Box
      fontFamily={"DM Serif"}
      boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;"
      p={2}
      borderRadius={6}
      color={
        category === "warning"
          ? "pink.400"
          : category === "achivement"
          ? "green.400"
          : "blue.400"
      }
      bg={
        category === "warning"
          ? "pink.100"
          : category === "achivement"
          ? "green.100"
          : "blue.100"
      }
      fontSize="17px"
    >
      <Text cursor={"pointer"}>{notice}</Text>
    </Box>
  );
};

export default Notifiaction;
