import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const LectureComponent = ({time, title, teacher, subject, subType, attendence, date, monthDate}) => {
  return (
    <>
    <Flex borderBlockEnd={"1px solid rgb(225,224,225)"} p={4} justifyContent='space-between' alignItems={'center'} >
      <Flex direction={'column'} gap={2}>
        <Flex gap={2} alignItems='center'>
          <Text fontSize={'23px'} fontWeight='550'>{`${title} (${date})`}</Text>
          <Text fontSize={'15px'} p="1px 6px" color="white" borderRadius="6px" bg={subType === "Live" ? "green" : "blue"}>{subType}</Text>
        </Flex>
        <Text><span style={{fontWeight: "bold"}}>{teacher}</span> Scheduled <span style={{fontWeight: "bold"}}>{subject}</span> {`at ${monthDate} - ${time}`}</Text>
      </Flex>
      <Text bg={attendence ? "green" : "red"} borderRadius="6px" p="2px 10px" color={'white'}>{attendence ? "Present" : "Absent"}</Text>
    </Flex>
    </>
  )
}

export default LectureComponent