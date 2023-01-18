import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const TaskComponent = ({time, type, title, teacher, subject, subType}) => {
  return (
    <>
    <Flex borderBlockEnd={"1px solid rgb(225,224,225)"} p={4} justifyContent='space-between' alignItems={'center'} >
      <Flex gap={6} alignItems={'center'}>
      <Box bg={type==="Lecture" ? 'facebook.700' : "pink.400"} color="white" p={4} width={"140px"} textAlign='center' fontWeight={550} fontSize="18px">
        <Text>{time}</Text>
        <Text>{type}</Text>
      </Box>
      <Box>
        <Text fontSize={'20px'} fontWeight='bold'>{title}</Text>
        <Text fontSize="18px"><span style={{fontWeight: "bold"}}>{teacher}</span> Starting at <span style={{fontWeight: "bold"}}>{time}</span></Text>
        <Flex gap={2} fontSize="14px" mt={2} letterSpacing="3px">
          <Text p={"3px 15px"} textAlign="center"
            border={"1px solid rgb(225,224,225)"}
            borderRadius={"20px"}>{subject}</Text>
          <Text p={"3px 15px"} textAlign="center"
            border={"1px solid rgb(225,224,225)"}
            borderRadius={"20px"}>{subType}</Text>
        </Flex>
      </Box>
      </Flex>
      <Button>Details</Button>
    </Flex>
    </>
  )
}

export default TaskComponent