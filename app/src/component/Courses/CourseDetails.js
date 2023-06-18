// In the target screen component
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, Modal, TextInput } from 'react-native';
import coverImage from "../../assets/no-cover-image.jpg";
import ButtonComponent from '../helping/ButtonComponent';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCourseAction } from '../../store/courses/action';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

const CourseDetails = ({route, navigation}) => {
  const { course } = route.params;
  const dispatch = useDispatch();
  const [openForm, setOpenForm] = useState(false);
  const {userDetails} = useSelector((store) => store.authuntication);
  const [payment, setPaymnet] = useState("");

  const editCourse = () => {
    
  }

  const deleteCourse = () => {
    dispatch(deleteCourseAction(userDetails?.college_code, course._id, navigateHome))
  }

  const navigateHome = () =>{
    navigation.navigate('Courses');
  }

  const addCourse = () =>{
    setOpenForm(true);
  }

  const closeForm = () => setOpenForm(false);

  console.log(openForm)

  const submitCode = () => {
    if(payment){
      Toast.show({
        type: "success",
        text1: "Successfully Registered course",
      })
      setTimeout(()=>{
        navigation.navigate('Courses');
      }, 1000)
    }else{
      Toast.show({
        type: "error",
        text1: "Please enter code",
      })
    }
  }

  return (
    <>
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
        {
          userDetails?.role !=="Student" &&
          <View style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 20}}>
          <View style={{width: '40%'}}>
            <ButtonComponent onPress={editCourse} bg="#2685FD" color={"white"} title={"Edit"} fontWeight={'bold'} />
          </View>
          <View style={{width: '40%'}}>
            <ButtonComponent onPress={deleteCourse} bg="#fb2b55" color={"white"} title={"Delete"} fontWeight={'bold'} />
          </View>
        </View>
        }
        {
          userDetails?.role ==="Student" &&
        <View>
          <ButtonComponent onPress={addCourse} bg="#2685FD" color={"white"} title={"Register Course"} fontWeight={'bold'} />
        </View>
        }
      </View>
    </View>
    <Modal
        transparent={true}
        visible={openForm}
        onRequestClose={closeForm}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{fontWeight: "bold"}}>Enter payment Verify Code</Text>
            <View style={{width: 200}}>
            <TextInput
              placeholder={"Enter code"}
              style={{
                borderBottomWidth: 1,
                borderColor: "#e3e1e1",
                padding: 5,
              }}
              value={payment}
              textContentType="name"
              onChangeText={(text) => setPaymnet(text)}
            />
            </View>
            <View style={{marginTop: 20}}>
            <ButtonComponent onPress={submitCode} bg="#2685FD" color={"white"} title={"Submit Code"} fontWeight={'bold'} />
            </View>
          </View>
        </View>
      </Modal>
      <Toast />
    </>
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
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: "80%",
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
})