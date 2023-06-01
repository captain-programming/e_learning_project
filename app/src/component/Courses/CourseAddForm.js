import { View, StyleSheet, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import InputHelper from '../helping/InputHelper';
import ButtonComponent from '../helping/ButtonComponent';
import { useDispatch, useSelector } from 'react-redux';
import { createCourseAction, updateCourseAction } from '../../store/courses/action';
import { SelectList } from 'react-native-dropdown-select-list';
import { getAllBranchAction } from '../../store/branch/action';

const CourseAddForm = ({closeForm, allAccess, prevData}) => {
  const {userDetails} = useSelector((store) => store.authuntication);
  const {branches} = useSelector((store) => store.branch);

  const [formData, setFormData] = useState(prevData ? prevData : {course_name: "", description: "", course_image: "", price: "", duration: "", batch_size: ""});
  const [selectedBranch, setSelectedBranch] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const data = branches.map((b, i) => {
    return {key: i+1, value: b.branch_name}
  })

  const handleChangeText = (name, value) => setFormData({...formData, [name]: value});

  const validate = (fieldValues) => {
    let temp = { ...errors };
    if ("course_name" in fieldValues) {
        temp.course_name = fieldValues.course_name?.trim() === "" ? "Course name is required" : "";
    }
    if ("description" in fieldValues) {
        temp.description = fieldValues.description?.trim() === "" ? "Description is required" : "";
    }
    if ("price" in fieldValues) {
        temp.price = fieldValues.price?.trim() === "" ? "Price is required" : "";
    }
    if ("duration" in fieldValues) {
        temp.duration = fieldValues.duration?.trim() === "" ? "Course time is required" : "";
    }
    if ("batch_size" in fieldValues) {
        temp.batch_size = fieldValues.batch_size?.trim() === "" ? "Batch size is required" : "";
    }

    setErrors({
        ...temp,
    });

    return Object.values(temp).every((x) => x === "");
  };

  const handleAddCourse = () => {
    if(validate(formData)){
      if(prevData){
        dispatch(updateCourseAction({...formData, branch: selectedBranch}, userDetails?.college_code))
      }else{
        dispatch(createCourseAction({...formData, branch: allAccess ? selectedBranch : userDetails?.branch}, { setFormData, closeForm }, userDetails?.college_code))
      }
    }
  }

  useEffect(()=>{
    dispatch(getAllBranchAction({college_code: userDetails?.college_code}))
  }, [])

  return (
    <ScrollView style={{width: "100%"}}>
    <View style={styles.container}>
      <InputHelper
        placeholder='Course Name'
        textContentType="name"
        onChangeText={(text) => handleChangeText('course_name', text)}
        value={formData.course_name}
        {...(errors.course_name && {
          error: true,
          helperText: errors.course_name,
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
      {allAccess &&
      <SelectList 
        setSelected={(val) => setSelectedBranch(val)} 
        data={data} 
        save="value"
        placeholder='Select Branch'
        boxStyles={{borderBottomWidth: 1, borderWidth: 0, borderRadius: 0, borderColor:"#e3e1e1"}}
        search={false}
      />}
      <InputHelper
        placeholder='Course price'
        textContentType="name"
        onChangeText={(text) => handleChangeText('price', text)}
        value={formData.price}
        {...(errors.price && {
          error: true,
          helperText: errors.price,
        })}
      />
      <InputHelper
        placeholder='Batch size'
        textContentType="name"
        onChangeText={(text) => handleChangeText('batch_size', text)}
        value={formData.batch_size}
        {...(errors.batch_size && {
          error: true,
          helperText: errors.batch_size,
        })}
      />
      <InputHelper
        placeholder='How many weeks?'
        textContentType="name"
        onChangeText={(text) => handleChangeText('duration', text)}
        value={formData.duration}
        {...(errors.duration && {
          error: true,
          helperText: errors.duration,
        })}
      />
      <View style={styles.button}>
        <ButtonComponent bg="#276ef2" color={"white"} title={prevData ? "Update Course" : "Add Course"} onPress={handleAddCourse} />
        <ButtonComponent bg="#fb2b55" color={"white"} title={"Cancel"} onPress={closeForm} />
      </View>
    </View>
    </ScrollView>
  )
}

export default CourseAddForm

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