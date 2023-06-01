import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ButtonComponent from '../helping/ButtonComponent';
import { useDispatch, useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { deleteBranchAction, updateBranchAction } from '../../store/branch/action';
import InputHelper from '../helping/InputHelper';

const BranchView = ({data, closeModal}) => {
  const dispatch = useDispatch();
  const [update, setUpdate] = useState(false);
  const {userDetails} = useSelector((store) => store.authuntication);
  const [formData, setFormData] = useState({branch_name: data?.branch_name, subjects: data?.subjects, description: data?.description});
  const [subject, setSubject] = useState("");

  const deleteUserFun = () => {
    dispatch(deleteBranchAction({college_code: userDetails?.college_code}, data?._id))
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
    if(name==="subjects"){
      setSubject(value);
    }else{
      setFormData({...formData, [name]: value});
    }
  }

  const handleSubmitForm =()=>{
    dispatch(updateBranchAction({college_code: userDetails?.college_code}, data?._id, formData, closeModal))
  }

  const handleRemoveSubject = (i) => {
    let updateSubjects = formData?.subjects?.filter((item, index) => index !== i)
    setFormData({...formData, subjects: updateSubjects});
  }

  const handleAddSubject = () =>{
    setFormData({...formData, subjects: [...formData.subjects, subject]})
    setSubject("");
  }

  return (
    <View style={{gap: 4}}>
      <View style={styles.display}>
        <Text style={styles.firstText}>Branch Name:</Text>
        {update ? 
          (<TextInput 
            value={formData?.branch_name}
            style={styles.input}
            onChangeText={(text)=>handleOnChange("branch_name", text)}
          />) 
          : 
          (<Text >{data?.branch_name}</Text>)}
      </View>
      <View style={{flexDirection: "row", gap: 5}}>
        <Text style={styles.firstText}>All Subjects: </Text>
        <View>
        {update ? 
          (<View style={{marginVertical: 10}}>
            <View style={{flexDirection: "row", gap: 5, flexWrap: "wrap"}}>
              {formData.subjects.map((item, i) => (
                <View style={{flexDirection: "row", gap: 2, padding: 4, borderRadius: 5, borderWidth: 1, alignItems: "center", justifyContent: "center"}} key={i}>
                  <Text>{item}</Text>
                  <TouchableOpacity onPress={()=>handleRemoveSubject(i)}>
                    <Ionicons name="close-outline" size={16} />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
            <View style={{flexDirection: "row", alignItems: "center", width: "90%"}}>
              <View style={{width: "80%"}}>
                <InputHelper
                  placeholder='Subjects'
                  textContentType="name"
                  onChangeText={(text) => handleOnChange('subjects', text)}
                  value={subject}
                />
              </View>  
              <TouchableOpacity onPress={handleAddSubject}>
                <Ionicons name="add-outline" size={22} color={"gray"}/>
              </TouchableOpacity>
            </View>
          </View>) 
          : 
          (<Text >{data?.subjects.join("\n")}</Text>)}
        </View>
      </View>
      <View style={styles.display}>
        <Text style={styles.firstText}>Descriptions:</Text>
        {update ? 
          (<TextInput 
            value={formData?.description}
            style={styles.input}
            onChangeText={(text)=>handleOnChange("description", text)}
          />) 
          : 
          (<Text >{data?.description}</Text>)}
      </View>
      <View style={styles.button}>
        {!update && <ButtonComponent bg="#276ef2" color={"white"} title={"Delete Branch"} onPress={deleteUserFun}/>}
        <ButtonComponent bg="#276ef2" color={"white"} title={update ? "Submit" : "Update Branch"} onPress={update ? handleSubmitForm : updateDetails}/>
        <ButtonComponent bg="#fb2b55" color={"white"} title={"Cancel"} onPress={handleCloseModel} />
      </View>
    </View>
  )
}

export default BranchView;

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