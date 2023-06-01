import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BranchView from './BranchView';

const BranchTable = ({item}) => {
  const [modal, setModal] = useState(false);

  const closeModal = () => setModal(false);
  const openModal = () => setModal(true);
  return (
    <>
    <View style={styles.item}>
      <Text style={styles.first}>{item.branch_name}</Text>
      <Text style={styles.second}>{item.subjects.join("\n")}</Text>
      <TouchableOpacity onPress={openModal}>
        <Text style={styles.third}>
          <Ionicons name="ellipsis-vertical-outline" size={22} />
        </Text>
      </TouchableOpacity>
    </View>
    <Modal
        transparent={true}
        visible={modal}
        onRequestClose={closeModal}
      >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <BranchView data={item} closeModal={closeModal}/>
        </View>
      </View>
    </Modal>
    </>
  )
}

export default BranchTable;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 20
  },
  first: {
    flex: 2,
  },
  second: {
    flex: 3,
  },
  third: {
    flex: 1,
    textAlign: 'right',
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});