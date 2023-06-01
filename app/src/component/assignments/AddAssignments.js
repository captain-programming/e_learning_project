import { View, StyleSheet, Text, ScrollView, TextInput } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import InputHelper from '../helping/InputHelper';
import ButtonComponent from '../helping/ButtonComponent';
import { useDispatch, useSelector } from 'react-redux';
import { SingleBranchDetailsAction } from '../../store/branch/action';
import DateTimeForm from '../helping/DateTimeForm';
import { createAssignmentAction } from '../../store/assignment/action';

const AddAssignments = ({closeForm}) => {
  const {userDetails} = useSelector((store) => store.authuntication);
  const {singleBranch} = useSelector((store) => store.branch);
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});
  const [assignmentType, setAssignmentType] = useState("");
  const [subject, setSubject] = useState("");
  const [startTimeDates, setStartTimesDates] = useState("");
  const [endTimeDates, setEndTimesDates] = useState("");
  const [details, setDetails] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const subjectTypeData = singleBranch?.subjects?.map((item ,i) => ({key: i+1, value: item}));

  const assignmentTypeData = [
    {key:'1', value:'Quize'},
    {key:'2', value:'Coding'},
    {key:'3', value:'Writing'},
    {key:'3', value:'Practice'},
    {key:'3', value:'Projects'},
  ];

  const handleContentSizeChange = () => {
    inputRef.current.setNativeProps({
      height: inputRef.current.scrollHeight,
    });
  };
  
  const validate = () => {
    let temp = { ...errors };
    temp.name = ( name === "") ? "Name is required" : "";
    temp.assignmentType = assignmentType === "" ? "Assignment type is required" : "";
    temp.subject = subject === "" ? "Subject is required" : "";
    temp.startTimeDates = startTimeDates === "" ? "Time & Dates is required" : "";
    temp.endTimeDates = endTimeDates === "" ? "Time & Dates is required" : "";
    
    setErrors({
      ...temp,
    });

    return Object.values(temp).every((x) => x === "");
  }
  
  const handleCreateAssignment = () => {
    if(validate()){
      dispatch(createAssignmentAction({name: name, assignmentType: assignmentType, subject: subject, teacher: userDetails?.name, startTimeDates: startTimeDates, endTimeDates: endTimeDates, branch: userDetails?.branch, details: details}, {closeForm, clearData}, userDetails?.college_code))
    }
  }

  const clearData = () => {
    setName("");
    setLectureType("");
    setSubject("");
    setStartTimesDates("");
    setEndTimesDates("");
    setDetails("");
  }

  useEffect(()=>{
    dispatch(SingleBranchDetailsAction(userDetails?.college_code, userDetails?.branch));
  }, [])

  return (
    <ScrollView style={{width: "100%"}}>
    <View style={styles.container}>
      <InputHelper
        placeholder='Title'
        textContentType="name"
        onChangeText={(text) => setName(text)}
        value={name}
        {...(errors.name && {
          error: true,
          helperText: errors.name,
        })}
      />
      <TextInput
        style={styles.textInput}
        multiline
        ref={inputRef}
        value={details}
        onChangeText={(text) => setDetails(text)}
        placeholder="Enter assignmnets details"
        onContentSizeChange={handleContentSizeChange}
      />
      <View>
        <Text>Start Date & Time: {startTimeDates}</Text>
        <DateTimeForm callbackFun={setStartTimesDates}/>
        {errors.startTimeDates && 
          <Text style={{color: 'red', fontSize: 10, marginTop: -7}}>{errors.startTimeDates}</Text>
        }
      </View>
      <View>
        <Text>Ending Date & Time: {endTimeDates}</Text>
        <DateTimeForm callbackFun={setEndTimesDates}/>
        {errors.endTimeDates && 
          <Text style={{color: 'red', fontSize: 10, marginTop: -7}}>{errors.endTimeDates}</Text>
        }
      </View>
      <SelectList 
        setSelected={(val) => setAssignmentType(val)} 
        data={assignmentTypeData} 
        save="value"
        placeholder='Select assignment type'
        boxStyles={{borderBottomWidth: 1, borderWidth: 0, borderRadius: 0, borderColor:"#e3e1e1"}}
        search={false}
      />
      {errors.assignmentType && 
        <Text style={{color: 'red', fontSize: 10, marginTop: -7}}>{errors.lectureType}</Text>
      }
      <SelectList 
        setSelected={(val) => setSubject(val)} 
        data={subjectTypeData} 
        save="value"
        placeholder='Select Subject'
        boxStyles={{borderBottomWidth: 1, borderWidth: 0, borderRadius: 0, borderColor:"#e3e1e1"}}
        search={false}
      />
      {errors.subject && 
        <Text style={{color: 'red', fontSize: 10, marginTop: -7}}>{errors.subject}</Text>
      }
      <View style={styles.button}>
        <ButtonComponent bg="#276ef2" color={"white"} title={"Create Assignments"} onPress={handleCreateAssignment} />
        <ButtonComponent bg="#fb2b55" color={"white"} title={"Cancel"} onPress={closeForm} />
      </View>
    </View>
    </ScrollView>
  )
}

export default AddAssignments

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
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
  },
});