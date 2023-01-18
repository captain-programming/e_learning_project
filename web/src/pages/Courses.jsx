import React from 'react'
import { Button, Flex, Heading, Stack } from '@chakra-ui/react'
import Sidebar from '../components/Sidebar'

const Courses = () => {
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
          <Heading size={'md'} fontFamily={'DM Serif'}>Today's Schedule</Heading>
          <Flex gap={2}>
            <Button size={'sm'}>Bookmark</Button>
            <Button size={'sm'}>Weekly Plan</Button>
          </Flex>
        </Flex>
      </Stack>
    </Flex>
    </>
  )
}

export default Courses