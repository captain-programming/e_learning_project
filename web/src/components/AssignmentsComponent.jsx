import { CircularProgress, CircularProgressLabel, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const AssignmentComponent = ({time, title, teacher, subject, subType, status, date, monthDate, totalTask, completeTask}) => {

  return (
    <>
    <Flex borderBlockEnd={"1px solid rgb(225,224,225)"} p={4} justifyContent='space-between' alignItems={'center'} >
      <Flex direction={'column'} gap={2}>
        <Flex gap={2} alignItems='center'>
          <Text fontSize={'23px'} fontWeight='550'>{`${title} (${date})`}</Text>
          <Text fontSize={'15px'} p="1px 6px" color="white" borderRadius="6px" bg={subType === "Code" ? "red.500" : "blue"}>{subType}</Text>
        </Flex>
        <Text><span style={{fontWeight: "bold"}}>{teacher}</span> Created <span style={{fontWeight: "bold"}}>{subject}</span> {`at ${monthDate} - ${time}`}</Text>
      </Flex>
      <Text bg={status === "New" ? "red" : status==="Completed" ? "green" : "rgb(203,139,4)"} borderRadius="6px" p="2px 10px" color={'white'}>{status}</Text>
      <Flex justifyContent={'center'} alignItems='center'>
        <CircularProgress value={(completeTask/totalTask)*100} color='green.400'>
          <CircularProgressLabel>{completeTask}/{totalTask}</CircularProgressLabel>
        </CircularProgress>
      </Flex>
    </Flex>
    </>
  )
}

export default AssignmentComponent