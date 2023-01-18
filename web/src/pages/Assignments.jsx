import React from 'react'
import { Button, Flex, Heading, Stack } from '@chakra-ui/react'
import Sidebar from '../components/Sidebar'
import AssignmentComponent from '../components/AssignmentsComponent'

const taskArr = [
  {
    id: 1,
    time: "01:00 PM", 
    type: "Assignment", 
    title: "AWS Introduction",
    teacher: "Mangesh Pande", 
    subject: "AWS",
    subType: "Code",
    date: "12-12-2022",
    status: "New",
    completeTask: 0,
    totalTask: 3
  },
  {
    id: 2,
    time: "03:00 PM", 
    type: "Assignment", 
    title: "AWS Introduction",
    teacher: "Avinash Shastri", 
    subject: "AWS",
    subType: "Quize",
    date: "12-12-2022",
    status: "Progress",
    completeTask: 1,
    totalTask: 3
  },
  {
    id: 3,
    time: "03:00 PM", 
    type: "Assignment", 
    title: "AWS Introduction",
    teacher: "Avinash Shastri", 
    subject: "AWS",
    subType: "Quize",
    date: "11-12-2022",
    status: "Completed",
    completeTask: 3,
    totalTask: 3
  },
]

const Assignments = () => {
  const monthArr= ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] 
  const dateConvert = (d)=>{
    d=d.trim().split("-")
    let day = d[0];
    let month = monthArr[d[1]-1];
    let year = d[2];

    // console.log(day, month, year)
    return (`${day} ${month} ${year}`);
  }

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
          <Heading size={'md'} fontFamily={'DM Serif'}>All Assignments</Heading>
          <Flex gap={2}>
            <Button size={'sm'}>Bookmark</Button>
            <Button size={'sm'}>Weekly Plan</Button>
          </Flex>
        </Flex>
        <Flex direction={'column'} gap={3} overflowY="auto" scrollBehavior="smooth">
          <Flex direction={'column'} gap={1} boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
          {taskArr?.map((t)=>(
            <AssignmentComponent time={t.time} status={t.status} title={t.title} teacher={t.teacher} subject={t.subject} subType={t.subType} monthDate={dateConvert(t.date)} date={t.date} completeTask={t.completeTask} totalTask={t.totalTask} key={t.id}/>
          ))}
          </Flex>
        </Flex>
        <Flex>
          
        </Flex>
      </Stack>
    </Flex>
    </>
  )
}

export default Assignments