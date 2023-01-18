import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Sidebar from '../components/Sidebar'

const Blog = () => {
  return (
    <>
    <Flex bg={"rgb(225,224,225)"} p={2} height={"100vh"}>
      <Sidebar />
      <Box width={"80%"}></Box>
    </Flex>
    </>
  )
}

export default Blog