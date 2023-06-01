import { View, Modal, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ButtonComponent from '../../component/helping/ButtonComponent';
import BranchAddForm from '../../component/Branches/BranchAddForm';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { branchToastCleaner, getAllBranchAction } from '../../store/branch/action';
import BranchDisplayTable from '../../component/Branches/BranchDisplayTable';

const Branches = () => {
  const [openForm, setOpenForm] = useState(false);
  const dispatch = useDispatch();
  const {userDetails} = useSelector((store) => store.authuntication);
  const {toastStatus, toastMessage, toastActive, branches} = useSelector((store) => store.branch);

  const showToast = () =>{
    Toast.show({
      type: toastStatus,
      text1: toastMessage,
    })
    dispatch(branchToastCleaner());
  }

  const handleAddBranch = () =>{
    setOpenForm(true);
  }
  const closeForm = () => setOpenForm(false);

  useEffect(()=>{
    (toastActive) && showToast();
    dispatch(getAllBranchAction({college_code: userDetails?.college_code}))
  }, [toastActive, toastMessage, toastStatus])

  return (
    <>
      <View style={styles.main}>
        <View style={styles.buttonBox}>
          <ButtonComponent onPress={handleAddBranch} bg="#fb2b55" color={"white"} title={"Add Branch"} fontWeight={'bold'} />
        </View>
        <View>
          <BranchDisplayTable data={branches}/>
        </View>
      </View>

      {/* USER FORM */}
      <Modal
        transparent={true}
        visible={openForm}
        onRequestClose={closeForm}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <BranchAddForm closeForm={closeForm}/>
          </View>
        </View>
      </Modal>
      <Toast />
    </>
  )
}

export default Branches;

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