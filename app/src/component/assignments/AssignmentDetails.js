// In the target screen component
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import ButtonComponent from '../helping/ButtonComponent';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAssignmentAction } from '../../store/assignment/action';

const AssignmentsDetails = ({route, navigation}) => {
  const { assignment } = route.params;
  const dispatch = useDispatch();
  const {userDetails} = useSelector((store) => store.authuntication);
  const [assignmentLink, setAssignmentLink] = useState('');

  const editAssignment = () => {
    
  }

  const deleteAssignment = () => {
    console.log("delete")
    dispatch(deleteAssignmentAction(userDetails?.college_code, assignment._id, navigateHome))
  }

  const navigateHome = () =>{
    navigation.navigate('Assignments');
  }

  return (
    <View style={styles.lectureCard}>
      <View style={styles.details}>
        <Text style={styles.headline}>{assignment?.name}</Text>
        <View style={{borderWidth: 1, borderRadius: 10, borderColor: 'gray', padding: 10, marginVertical: 10}}>
          <Text><Text style={{fontWeight: 500}}>Assignment start date & time:- </Text> {assignment?.startTimeDates}</Text>
          <Text><Text style={{fontWeight: 500}}>Assignment end date & time:- </Text> {assignment?.endTimeDates}</Text>
          <Text><Text style={{fontWeight: 500}}>Teacher name:- </Text> {assignment?.teacher}</Text>
        </View>
        <View style={{flexDirection: "column", gap: 10, margin: 10}}>
          <Text style={styles.subject}>Subject Name:- {assignment?.subject}</Text>
          <Text style={styles.lecture}>Assignment Types:- {assignment?.assignmentType}</Text>
        </View>
        <View style={{borderWidth: 1, borderRadius: 10, borderColor: 'gray', padding: 10, marginVertical: 10}}>
          <Text style={{textAlign: "center", fontWeight: 'bold'}}>Assignment Details</Text>
          <Text>{assignment?.details}</Text>
        </View>
        {
          userDetails?.role==="Instructor" &&
            <View style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 20}}>
              <View style={{width: '40%'}}>
                <ButtonComponent onPress={editAssignment} bg="#2685FD" color={"white"} title={"Edit"} fontWeight={'bold'} />
              </View>
              <View style={{width: '40%'}}>
                <ButtonComponent onPress={deleteAssignment} bg="#fb2b55" color={"white"} title={"Delete"} fontWeight={'bold'} />
              </View>
            </View>
        }
        {
          userDetails?.role==="Student" &&
          <>
            <View style={{borderWidth: 1, borderRadius: 10, borderColor: 'gray', padding: 10, marginVertical: 10}}>
              <Text style={{fontWeight: "bold", color: "blue", marginBottom: 10}}>Submit Assignment Github Link</Text>
              <TextInput
                value={assignmentLink}
                onChangeText={text => setAssignmentLink(text)}
                placeholder="Enter github link"
                placeholderTextColor="#777"
                style={styles.input}
              />
            </View>
            <View>
              <ButtonComponent onPress={editAssignment} bg="#2685FD" color={"white"} title={"Submit Assignmnet"} fontWeight={'bold'} />
            </View>
          </>
        }
      </View>
    </View>
  )
}

export default AssignmentsDetails;

const styles = StyleSheet.create({
  lectureCard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  },
  headline: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    color: "#4e46e8"
  },
  teacher: {
    fontSize: 15,
    paddingVertical: 10,
    fontWeight: 500
  },
  subject: {
    borderWidth: 0,
    borderRadius: 3,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#dbeafe"
  },
  lecture: {
    borderWidth: 0,
    borderRadius: 3,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#fee3e3"
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 16,
    borderRadius: 10
  },
})