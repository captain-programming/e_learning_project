import { View, Modal, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import ButtonComponent from '../../component/helping/ButtonComponent'
import UserAddForm from '../../component/User/UserAddForm'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUser } from '../../store/Auth/action'
import UserDisplayTable from '../../component/User/UserDisplayTable'

const Users = () => {
  const [openForm, setOpenForm] = useState(false);
  const dispatch = useDispatch();
  const {userDetails, user} = useSelector((store) => store.authuntication);

  const handleAddUser = () =>{
    setOpenForm(true);
  }
  const closeForm = () => setOpenForm(false);

  useEffect(()=>{
    dispatch(getAllUser({role: userDetails?.role, collegeCode: userDetails?.college_code, branch: userDetails?.branch}))
  }, [])
  
  return (
    <>
      <View style={styles.main}>
        <View style={styles.buttonBox}>
          <ButtonComponent onPress={handleAddUser} bg="#fb2b55" color={"white"} title={"Add Student"} fontWeight={'bold'} />
        </View>
        <View>
          <UserDisplayTable data={user}/>
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
            <UserAddForm closeForm={closeForm}/>
          </View>
        </View>
      </Modal>
    </>
  )
}

export default Users;

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