import { View, Text, Modal, StyleSheet, Pressable, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { Style } from '../style/users'
import ButtonComponent from '../../../../component/helping/ButtonComponent'
import UserAddForm from '../../../../component/User/UserAddForm'

const Users = () => {
  const [openForm, setOpenForm] = useState(false);

  const handleAddUser = () =>{
    setOpenForm(true);
  }

  const closeForm = () => setOpenForm(false);

  return (
    <>
      <View style={Style.main}>
        <View style={Style.buttonBox}>
          <ButtonComponent onPress={handleAddUser} bg="#fb2b55" color={"white"} title={"Add Student"} fontWeight={'bold'} />
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
});