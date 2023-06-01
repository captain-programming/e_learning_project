import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import coverImage from "../../assets/no-cover-image.jpg";
import ButtonComponent from '../helping/ButtonComponent';
import { useNavigation } from '@react-navigation/native';

const CourseDiplay = ({course}) => {
  
  const navigation = useNavigation();

  const navigateCourse = () => {
    navigation.navigate('CourseDetails', {courseName: course?.course_name, course: course});
  };

  return (
    <View style={styles.courseCard}>
      <Image source={coverImage} style={styles.courseImg}/>
      <View style={styles.details}>
        <Text style={styles.title}>{course?.course_name}</Text>
        <Text style={{marginVertical: 10, textAlign: 'center'}}>{course?.description}</Text>
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
          <Text style={{fontSize: 17, fontWeight: 500}}>{course?.duration}-week program</Text>
          <Text style={{fontSize: 17, fontWeight: 500, color: 'red'}}>Available seat: {course?.batch_size}</Text>
        </View>
        <View style={{marginVertical: 10, flexDirection: "row",}}>
          <Text style={{fontWeight: 500, fontSize: 17}}>Course Fee ₹</Text>
          <Text style={{color: 'blue', fontWeight: 500, fontSize: 17}}>{course?.price}</Text>
        </View>
        <View style={{marginVertical: 10, flexDirection: "row"}}>
          <Text style={{color: 'blue', fontWeight: 500, fontSize: 17, borderWidth: 1, borderRadius: 10, padding: 10}}>{course?.branch}</Text>
        </View>
      </View>
      <View>
        <ButtonComponent onPress={navigateCourse} bg="#2685FD" color={"white"} title={"View More"} fontWeight={'bold'} />
      </View>
    </View>
  )
}

export default CourseDiplay;

const styles = StyleSheet.create({
  courseCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    padding: 1
  },
  courseImg: {
    height: 200,
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
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