import {
  Button,
  Flex,
  Heading,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import Notifiaction from "../components/Notifiaction";
import Sidebar from "../components/Sidebar";
import TaskComponent from "../components/TaskComponent";

const noticeArr = [
  {
    id: 1,
    category: "warning",
    notice: "You are not attend today's class",
  },
  {
    id: 2,
    category: "achivement",
    notice: "You test score 8 out of 10",
  },
  {
    id: 3,
    category: "information",
    notice: "Tomorrow attend the industrial session",
  },
]

const taskArr = [
  {
    id: 1,
    time: "10:00 AM", 
    type: "Lecture", 
    title: "AWS Introduction",
    teacher: "Mangesh Pande", 
    subject: "AWS",
    subType: "Live"
  },
  {
    id: 2,
    time: "11:00 AM", 
    type: "Lecture", 
    title: "AWS Console",
    teacher: "Manish Pande", 
    subject: "AWS",
    subType: "video"
  },
  {
    id: 3,
    time: "01:00 PM", 
    type: "Assignment", 
    title: "AWS Introduction",
    teacher: "Mangesh Pande", 
    subject: "AWS",
    subType: "Assignment"
  },
  {
    id: 4,
    time: "03:00 PM", 
    type: "Assignment", 
    title: "AWS Introduction",
    teacher: "Avinash Shastri", 
    subject: "AWS",
    subType: "Quize"
  },
  {
    id: 5,
    time: "10:00 AM", 
    type: "Lecture", 
    title: "AWS Introduction",
    teacher: "Mangesh Pande", 
    subject: "AWS",
    subType: "Live"
  },
]

const Dashboard = () => {
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
        <Flex direction={'column'} gap={3} overflowY="auto" scrollBehavior="smooth">
          <Flex direction={'column'} gap={1}>
            {noticeArr?.map((n)=>(
              <Notifiaction category={n.category} notice={n.notice} key={n.id}/>
            ))}
          </Flex>

          <Flex direction={'column'} gap={1} boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
          {taskArr?.map((t)=>(
            <TaskComponent time={t.time} type={t.type} title={t.title} teacher={t.teacher} subject={t.subject} subType={t.subType} key={t.id}/>
          ))}
          </Flex>
        </Flex>
      </Stack>
    </Flex>
    </>
  );
};

export default Dashboard;
