import { View, Modal, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import ButtonComponent from '../../component/helping/ButtonComponent'
import { useDispatch, useSelector } from 'react-redux'
import CourseAddForm from '../../component/Courses/CourseAddForm'
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { CourseToastCleaner, getAllCourseAction } from '../../store/courses/action'
import CourseDiplay from '../../component/Courses/CourseDiplay'

const Courses = () => {
  const [openForm, setOpenForm] = useState(false);
  const dispatch = useDispatch();
  const {userDetails} = useSelector((store) => store.authuntication);
  const {toastStatus, toastMessage, toastActive, course} = useSelector((store) => store.course);

  const showToast = () =>{
    Toast.show({
      type: toastStatus,
      text1: toastMessage,
    })
    dispatch(CourseToastCleaner());
  }

  const handleAddCourse = () =>{
    setOpenForm(true);
  }
  const closeForm = () => setOpenForm(false);

  useEffect(()=>{
    (toastActive) && showToast();
    dispatch(getAllCourseAction({college_code: userDetails?.college_code}))
  }, [toastActive, toastMessage, toastStatus])
  
  return (
    <>
      <View style={styles.main}>
        <View style={styles.buttonBox}>
          <ButtonComponent onPress={handleAddCourse} bg="#fb2b55" color={"white"} title={"Add Course"} fontWeight={'bold'} />
        </View>
        <ScrollView>
          <View style={styles.courseView}>
            {course.map((item) => (
              <CourseDiplay course={item} key={item._id}/>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* USER FORM */}
      <Modal
        transparent={true}
        visible={openForm}
        onRequestClose={closeForm}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <CourseAddForm closeForm={closeForm} allAccess={true}/>
          </View>
        </View>
      </Modal>
      <Toast />
    </>
  )
}

export default Courses;

const styles = StyleSheet.create({
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  main: {
    flex: 1,
    padding: 30,
    backgroundColor: "white"
  },
  buttonBox: {
    alignItems: "flex-end"
  },
  courseView:{
    flexDirection: "column",
    gap: 40,
    width: "100%",
    marginVertical: 20,
    padding:1
  }
});