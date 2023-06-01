import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import InputHelper from '../helping/InputHelper';
import ButtonComponent from '../helping/ButtonComponent';
import { useDispatch, useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBranchAction } from '../../store/branch/action';

const BranchAddForm = ({closeForm}) => {
  const [formData, setFormData] = useState({branch_name: "", description: "", subjects: [], cover_image: ''});
  const [errors, setErrors] = useState({});
  const {userDetails} = useSelector((store) => store.authuntication);
  const dispatch = useDispatch();
  const [subject, setSubject] = useState("");

  const handleChangeText = (name, value) => {
    if(name==="subjects"){
      setSubject(value)
    }else{
      setFormData({...formData, [name]: value})
    }
  };

  const handleAddSubject = () =>{
    setFormData({...formData, subjects: [...formData.subjects, subject]})
    setSubject("");
  }

  const validate = (fieldValues) =>{
    let temp = { ...errors };
    if ("branch_name" in fieldValues){
        temp.branch_name = fieldValues.branch_name?.trim() === "" ? "Branch name is required" : "";
    }
    if ("description" in fieldValues){
        temp.description =
            fieldValues.description === "" ? "Description is required" : "";
    }
    if ("subjects" in fieldValues){
        temp.subjects =
            fieldValues.subjects.length < 3 ? "Atlist 3 subject required" : "";
    }

    setErrors({
        ...temp,
    });

    return Object.values(temp).every((x) => x === "");
  };

  const handleAddBranch = () => {
    if(validate(formData)){
      dispatch(createBranchAction(formData, {setFormData}, userDetails?.college_code));
    }
  }

  const handleRemoveSubject = (i) => {
    let updateSubjects = formData?.subjects?.filter((item, index) => index !== i)
    setFormData({...formData, subjects: updateSubjects});
  }

  return (
    <ScrollView style={{width: "100%"}}>
    <View style={styles.container}>
      <InputHelper
        placeholder='Branch Name'
        textContentType="name"
        onChangeText={(text) => handleChangeText('branch_name', text)}
        value={formData.branch_name}
        {...(errors.branch_name && {
          error: true,
          helperText: errors.branch_name,
        })}
      />
      <InputHelper
        placeholder='Description'
        textContentType="name"
        onChangeText={(text) => handleChangeText('description', text)}
        value={formData.description}
        {...(errors.description && {
          error: true,
          helperText: errors.description,
        })}
      />
      <View style={{flexDirection: "row", gap: 5}}>
        {formData.subjects.map((item, i) => (
          <View style={{flexDirection: "row", gap: 2, padding: 4, borderRadius: 5, borderWidth: 1, alignItems: "center", justifyContent: "center"}} key={i}>
            <Text>{item}</Text>
            <TouchableOpacity onPress={()=>handleRemoveSubject(i)}>
              <Ionicons name="close-outline" size={16} />
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%"}}>
        <View style={{width: "85%"}}>
          <InputHelper
            placeholder='Subjects'
            textContentType="name"
            onChangeText={(text) => handleChangeText('subjects', text)}
            value={subject}
            {...(errors.subjects && {
              error: true,
              helperText: errors.subjects,
            })}
          />
        </View>  
        <TouchableOpacity onPress={handleAddSubject}>
          <Ionicons name="add-outline" size={22} />
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <ButtonComponent bg="#276ef2" color={"white"} title={"Add Branch"} onPress={handleAddBranch} />
        <ButtonComponent bg="#fb2b55" color={"white"} title={"Cancel"} onPress={closeForm} />
      </View>
    </View>
    </ScrollView>
  )
}

export default BranchAddForm

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: "100%",
    gap: 10,
    marginTop: 10
  },
  button: {
    padding: 10,
    gap: 20,
    marginTop: 10
  },
});