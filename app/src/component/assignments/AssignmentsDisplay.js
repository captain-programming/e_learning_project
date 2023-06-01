import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ButtonComponent from '../helping/ButtonComponent';
import { useNavigation } from '@react-navigation/native';

const AssignmentsDisplay = ({assignment}) => {
  
  const navigation = useNavigation();

  const navigateCourse = () => {
    navigation.navigate('AssignentsDetails', {name: assignment?.name, assignment: assignment});
  };

  return (
    <View style={styles.lectureCard}>
      <Text style={styles.headline}>{assignment?.name}</Text>
      <Text style={styles.teacher}>{assignment?.teacher} 
        <Text style={{fontWeight: 'normal'}}>Starting at</Text> {assignment?.startTimeDates}
      </Text>
      <View style={{flexDirection: "row", gap: 10, marginBottom: 10}}>
        <Text style={styles.subject}>{assignment?.subject}</Text>
        <Text style={styles.lecture}>{assignment?.assignmentType}</Text>
      </View>
      <View style={{alignSelf: "center"}}>
        <ButtonComponent onPress={navigateCourse} bg="white" color={"black"} title={"Details"} fontWeight={'bold'} />
      </View>
    </View>
  )
}

export default AssignmentsDisplay;

const styles = StyleSheet.create({
  lectureCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    padding: 20,
    margin: 10,
    marginTop: 20,
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
  }
})