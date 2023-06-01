// In the target screen component
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import coverImage from "../../assets/no-cover-image.jpg";
import ButtonComponent from '../helping/ButtonComponent';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCourseAction } from '../../store/courses/action';

const CourseDetails = ({route, navigation}) => {
  const { course } = route.params;
  const dispatch = useDispatch();
  const {userDetails} = useSelector((store) => store.authuntication);

  const editCourse = () => {
    
  }

  const deleteCourse = () => {
    dispatch(deleteCourseAction(userDetails?.college_code, course._id, navigateHome))
  }

  const navigateHome = () =>{
    navigation.navigate('Courses');
  }

  return (
    <View style={styles.courseCard}>
      <View style={{ alignItems: "center", paddingVertical: 20}}><Image source={coverImage} style={styles.courseImg}/></View>
      <View style={styles.details}>
        <Text style={styles.title}>{course?.course_name}</Text>
        <Text style={{marginVertical: 10,}}>{course?.description}</Text>
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
          <Text style={{fontSize: 17, fontWeight: 500}}>{course?.duration}-week program</Text>
          <Text style={{fontSize: 17, fontWeight: 500, color: 'red'}}>Available seat: {course?.batch_size}</Text>
        </View>
        <View style={{marginVertical: 10, flexDirection: "row",}}>
          <Text style={{fontWeight: 500, fontSize: 17}}>Course Fee ₹</Text>
          <Text style={{color: 'blue', fontWeight: 500, fontSize: 17}}>{course?.price}</Text>
        </View>
        <View style={{marginVertical: 10, flexDirection: "column", alignItems: "center"}}>
          <Text style={{fontWeight: 500, fontSize: 17}}>Which branch apply</Text>
          <Text style={{color: 'blue', fontWeight: 500, fontSize: 17}}>{course?.branch}</Text>
        </View>
        <View style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 20}}>
          <View style={{width: '40%'}}>
            <ButtonComponent onPress={editCourse} bg="#2685FD" color={"white"} title={"Edit"} fontWeight={'bold'} />
          </View>
          <View style={{width: '40%'}}>
            <ButtonComponent onPress={deleteCourse} bg="#fb2b55" color={"white"} title={"Delete"} fontWeight={'bold'} />
          </View>
        </View>
      </View>
    </View>
  )
}

export default CourseDetails;

const styles = StyleSheet.create({
  courseCard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 1
  },
  courseImg: {
    height: 200,
    width: "90%",
    borderRadius: 10
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: 'bold'
  },
  details:{
    padding: 20
  }
})