import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ButtonComponent from '../helping/ButtonComponent';
import { useNavigation } from '@react-navigation/native';

const LectureDisplay = ({lecture}) => {
  
  const navigation = useNavigation();

  const navigateCourse = () => {
    navigation.navigate('LectureDetails', {name: lecture?.name, lecture: lecture});
  };

  return (
    <View style={styles.lectureCard}>
      <Text style={styles.headline}>{lecture?.name}</Text>
      <Text style={styles.teacher}>{lecture?.teacher} 
        <Text style={{fontWeight: 'normal'}}>Starting at</Text> {lecture?.timeDates}
      </Text>
      <View style={{flexDirection: "row", gap: 10, marginBottom: 10}}>
        <Text style={styles.subject}>{lecture?.subject}</Text>
        <Text style={styles.lecture}>{lecture?.lectureMode}</Text>
      </View>
      <View style={{alignSelf: "center"}}>
        <ButtonComponent onPress={navigateCourse} bg="white" color={"black"} title={"Details"} fontWeight={'bold'} />
      </View>
    </View>
  )
}

export default LectureDisplay;

const styles = StyleSheet.create({
  lectureCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    padding: 10,
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