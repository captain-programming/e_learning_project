import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../components/Sidebar'

const Visuals = () => {
  return (
    <>
    <Flex bg={"rgb(225,224,225)"} p={2} height={"100vh"}>
      <Sidebar />
      <Box width={"80%"}></Box>
    </Flex>
    </>
  )
}

export default Visuals