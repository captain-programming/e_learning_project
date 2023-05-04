import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import ButtonComponent from '../helping/ButtonComponent';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, editUser } from '../../store/Auth/action';
import { SelectList } from 'react-native-dropdown-select-list';

const UserView = ({data, closeModal}) => {
  const dispatch = useDispatch();
  const [update, setUpdate] = useState(false);
  const {userDetails} = useSelector((store) => store.authuntication);
  const [formData, setFormData] = useState({name: data?.name, mobile_no: data?.mobile_no, role: data?.role});

  const deleteUserFun = () => {
    dispatch(deleteUser(data?._id, userDetails))
    closeModal()
  }

  const updateDetails = ()=>{
    setUpdate(true);
  }

  const handleCloseModel = () =>{
    setUpdate(false);
    closeModal();
  }

  const handleOnChange = (name, value)=>{
    setFormData({...formData, [name]: value});
  }

  const handleSubmitForm = ()=>{
    dispatch(editUser(data?._id, formData, userDetails))
  }

  const selectListData = [
    {key:'1', value:'Super Admin'},
    {key:'2', value:'Admin'},
    {key:'3', value:'Instructor'},
    {key:'4', value:'Student'},
  ]

  return (
    <View style={{gap: 4}}>
      <View style={styles.display}>
        <Text style={styles.firstText}>Name:</Text>
        {update ? 
          (<TextInput 
            value={formData?.name}
            style={styles.input}
            onChangeText={(text)=>handleOnChange("name", text)}
          />) 
          : 
          (<Text >{data?.name}</Text>)}
      </View>
      <View style={styles.display}>
        <Text style={styles.firstText}>Email:</Text>
        <Text >{data?.email}</Text>
      </View>
      <View style={styles.display}>
        <Text style={styles.firstText}>Username:</Text>
        <Text >{data?.username}</Text>
      </View>
      <View style={styles.display}>
        <Text style={styles.firstText}>Contact Details:</Text>
        {update ? 
          (<TextInput 
            value={formData?.mobile_no}
            style={styles.input}
            onChangeText={(text)=>handleOnChange("mobile_no", text)}
          />) 
          : 
          (<Text >{data?.mobile_no}</Text>)}
      </View>
      <View style={styles.display}>
        <Text style={update ? styles.changeAccess : styles.firstText}>{update ? "Change Access": "Who are you:"}</Text>
        {update ? 
          (<SelectList 
            setSelected={(val) => handleOnChange("role", val)} 
            data={selectListData} 
            save="value"
            placeholder={formData?.role}
            defaultOption={formData?.role}
            boxStyles={{borderWidth: 0}}
            search={false}
          />) 
          : 
          (<Text >{data?.role}</Text>)}
      </View>
      <View style={styles.display}>
        <Text style={styles.firstText}>college Code:</Text>
        <Text >{data?.college_code}</Text>
      </View>
      <View style={styles.button}>
        {!update && <ButtonComponent bg="#276ef2" color={"white"} title={"Delete Member"} onPress={deleteUserFun}/>}
        <ButtonComponent bg="#276ef2" color={"white"} title={update ? "Submit" : "Update Member"} onPress={update ? handleSubmitForm : updateDetails}/>
        <ButtonComponent bg="#fb2b55" color={"white"} title={"Cancel"} onPress={handleCloseModel} />
      </View>
    </View>
  )
}

export default UserView;

const styles = StyleSheet.create({
  display: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center"
  },
  firstText:{
    fontWeight: 'bold',
  },
  changeAccess:{
    fontWeight: 'bold',
    color: "red"
  },
  button: {
    padding: 10,
    gap: 20,
    marginTop: 10
  },
  input: {
    borderWidth: 1,
    borderColor: "#e3e1e1",
    paddingHorizontal: 10,
    paddingVertical: 0,
    borderRadius: 5
  }
})