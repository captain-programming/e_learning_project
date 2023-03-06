import React from 'react'
import { Button, Flex, Heading, Stack } from '@chakra-ui/react'
import Sidebar from '../components/sidebar/Sidebar';
import LectureComponent from '../components/lectures/LectureComponent';

const taskArr = [
  {
    id: 1,
    time: "10:00 AM", 
    type: "Lecture", 
    title: "AWS Introduction",
    teacher: "Mangesh Pande", 
    subject: "AWS",
    subType: "Live",
    date: "11-12-2022",
    attendence: true,
  },
  {
    id: 2,
    time: "11:00 AM", 
    type: "Lecture", 
    title: "AWS Console",
    teacher: "Manish Pande", 
    subject: "AWS",
    subType: "video",
    date: "02-12-2022",
    attendence: false,
  },
  {
    id: 3,
    time: "10:00 AM", 
    type: "Lecture", 
    title: "AWS Introduction",
    teacher: "Mangesh Pande", 
    subject: "AWS",
    subType: "Live",
    date: "12-12-2022",
    attendence: true,
  },
  {
    id: 4,
    time: "10:00 AM", 
    type: "Lecture", 
    title: "AWS Introduction",
    teacher: "Mangesh Pande", 
    subject: "AWS",
    subType: "Live",
    date: "11-12-2022",
    attendence: true,
  },
  {
    id: 5,
    time: "11:00 AM", 
    type: "Lecture", 
    title: "AWS Console",
    teacher: "Manish Pande", 
    subject: "AWS",
    subType: "video",
    date: "02-12-2022",
    attendence: false,
  },
  {
    id: 6,
    time: "10:00 AM", 
    type: "Lecture", 
    title: "AWS Introduction",
    teacher: "Mangesh Pande", 
    subject: "AWS",
    subType: "Live",
    date: "12-12-2022",
    attendence: true,
  },
  {
    id: 7,
    time: "10:00 AM", 
    type: "Lecture", 
    title: "AWS Introduction",
    teacher: "Mangesh Pande", 
    subject: "AWS",
    subType: "Live",
    date: "11-12-2022",
    attendence: true,
  },
  {
    id: 8,
    time: "11:00 AM", 
    type: "Lecture", 
    title: "AWS Console",
    teacher: "Manish Pande", 
    subject: "AWS",
    subType: "video",
    date: "02-12-2022",
    attendence: false,
  },
  {
    id: 9,
    time: "10:00 AM", 
    type: "Lecture", 
    title: "AWS Introduction",
    teacher: "Mangesh Pande", 
    subject: "AWS",
    subType: "Live",
    date: "12-12-2022",
    attendence: true,
  },
]


const Lectures = () => {

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
          <Heading size={'md'} fontFamily={'DM Serif'}>All Lecture</Heading>
          <Flex gap={2}>
            <Button size={'sm'}>Bookmark</Button>
            <Button size={'sm'}>Weekly Plan</Button>
          </Flex>
        </Flex>
        <Flex direction={'column'} gap={3} overflowY="auto" scrollBehavior="smooth">
          <Flex direction={'column'} gap={1} boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
          {taskArr?.map((t)=>(
            <LectureComponent time={t.time} attendence={t.attendence} title={t.title} teacher={t.teacher} subject={t.subject} subType={t.subType} monthDate={dateConvert(t.date)} date={t.date} key={t.id}/>
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

export default Lectures