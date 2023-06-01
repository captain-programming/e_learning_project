import { View, StyleSheet, Text, ScrollView, TextInput } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import InputHelper from '../helping/InputHelper';
import ButtonComponent from '../helping/ButtonComponent';
import { useDispatch, useSelector } from 'react-redux';
import { SingleBranchDetailsAction } from '../../store/branch/action';
import DateTimeForm from '../helping/DateTimeForm';
import { createLectureAction } from '../../store/lecture/action';

const AddLectures = ({closeForm}) => {
  const {userDetails} = useSelector((store) => store.authuntication);
  const {singleBranch} = useSelector((store) => store.branch);
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});
  const [lectureType, setLectureType] = useState("");
  const [subject, setSubject] = useState("");
  const [timeDates, setTimesDates] = useState("");
  const [lectureLink, setLectureLink] = useState("");
  const [details, setDetails] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const subjectTypeData = singleBranch?.subjects?.map((item ,i) => ({key: i+1, value: item}));

  const lectureTypeData = [
    {key:'1', value:'Online'},
    {key:'2', value:'Offline'},
    {key:'3', value:'Video'},
    {key:'3', value:'Reading'},
  ];

  const handleContentSizeChange = () => {
    inputRef.current.setNativeProps({
      height: inputRef.current.scrollHeight,
    });
  };
  
  const validate = () => {
    let temp = { ...errors };
    temp.name = ( name === "") ? "Name is required" : "";
    temp.lectureType = lectureType === "" ? "Lecture type is required" : "";
    temp.subject = subject === "" ? "Subject is required" : "";
    temp.timeDates = timeDates === "" ? "Time & Dates is required" : "";
    temp.lectureLink = "";
    
    setErrors({
      ...temp,
    });

    return Object.values(temp).every((x) => x === "");
  }
  
  const handleCreateLecture = () => {
    if(validate()){
      dispatch(createLectureAction({name: name, lectureMode: lectureType, subject: subject, teacher: userDetails?.name, timeDates: timeDates, lectureLink: lectureLink, branch: userDetails?.branch, details: details}, {closeForm, clearData}, userDetails?.college_code))
    }
  }

  const clearData = () => {
    setName("");
    setLectureType("");
    setSubject("");
    setTimesDates("");
    setLectureLink("");
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
      <InputHelper
        placeholder='Lecture Link'
        textContentType="name"
        onChangeText={(text) => setLectureLink(text)}
        value={lectureLink}
        {...(errors.lectureLink && {
          error: true,
          helperText: errors.lectureLink,
        })}
      />
      <TextInput
        style={styles.textInput}
        multiline
        ref={inputRef}
        value={details}
        onChangeText={(text) => setDetails(text)}
        placeholder="Enter notes"
        onContentSizeChange={handleContentSizeChange}
      />
      <View>
        <Text>Date & Time: {timeDates}</Text>
        <DateTimeForm callbackFun={setTimesDates}/>
        {errors.timeDates && 
          <Text style={{color: 'red', fontSize: 10, marginTop: -7}}>{errors.timeDates}</Text>
        }
      </View>
      <SelectList 
        setSelected={(val) => setLectureType(val)} 
        data={lectureTypeData} 
        save="value"
        placeholder='Select mode'
        boxStyles={{borderBottomWidth: 1, borderWidth: 0, borderRadius: 0, borderColor:"#e3e1e1"}}
        search={false}
      />
      {errors.lectureType && 
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
        <ButtonComponent bg="#276ef2" color={"white"} title={"Create Lecture"} onPress={handleCreateLecture} />
        <ButtonComponent bg="#fb2b55" color={"white"} title={"Cancel"} onPress={closeForm} />
      </View>
    </View>
    </ScrollView>
  )
}

export default AddLectures

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