import { View, Modal, StyleSheet, ScrollView, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import ButtonComponent from '../../component/helping/ButtonComponent'
import { useDispatch, useSelector } from 'react-redux'
import AddLectures from '../../component/lectures/AddLectures'
import { LectureToastCleaner, getAllLectureAction } from '../../store/lecture/action'
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import LectureDisplay from '../../component/lectures/LectureDisplay'

const Lectures = ({navigation}) => {
  const [openForm, setOpenForm] = useState(false);
  const dispatch = useDispatch();
  const {userDetails} = useSelector((store) => store.authuntication);
  const {toastStatus, toastMessage, toastActive, lectures} = useSelector((store) => store.lecture);
  const [page, setPage] = useState(1);

  const handleScheduleLecture = () =>{
    setOpenForm(true);
  }

  const showToast = () =>{
    Toast.show({
      type: toastStatus,
      text1: toastMessage,
    })
    dispatch(LectureToastCleaner());
  }
  
  
  const closeForm = () => setOpenForm(false);
  const nextPage = () => {
    if(page<lectures?.totalPages){
      setPage(page+1);
    }
  }

  const prevPage = () => {
    if(page>1){
      setPage(page-1);
    }
  }

  useEffect(()=>{
    (toastActive) && showToast();
    dispatch(getAllLectureAction({college_code: userDetails?.college_code, branch: userDetails?.branch, page}, { page: page, limit: 10 }))
  }, [toastActive, page])
  
  return (
    <>
      <View style={styles.main}>
        <ScrollView>
          <View>
            {
              lectures?.lectures?.map((lecture) => (
                <LectureDisplay lecture={lecture} key={lecture._id}/>
              ))
            }
          </View>
        </ScrollView>
        <View style={{flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10, alignItems: "center"}}>
          <ButtonComponent title={"Prev"} bg={"#EFF3FF"} onPress={prevPage}></ButtonComponent>
          <Text style={{color: 'blue', fontWeight: 'bold'}}>{page}/{lectures?.totalPages}</Text>
          <ButtonComponent title={"Next"} bg={"#EFF3FF"} onPress={nextPage}></ButtonComponent>
        </View>
      </View>

      <Modal
        transparent={true}
        visible={openForm}
        onRequestClose={closeForm}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <AddLectures closeForm={closeForm}/>
          </View>
        </View>
      </Modal>
      <Toast />
    </>
  )
}

export default Lectures;

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
  }
});