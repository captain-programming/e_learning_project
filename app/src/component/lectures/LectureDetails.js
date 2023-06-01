// In the target screen component
import React from 'react';
import { StyleSheet, Text, Linking, View, ScrollView } from 'react-native';
import ButtonComponent from '../helping/ButtonComponent';
import { useDispatch, useSelector } from 'react-redux';
import { deleteLectureAction } from '../../store/lecture/action';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import moment from 'moment';

const LectureDetails = ({route, navigation}) => {
  const { lecture } = route.params;
  const dispatch = useDispatch();
  const {userDetails} = useSelector((store) => store.authuntication);

  const editCourse = () => {
    
  }

  const deleteCourse = () => {
    dispatch(deleteLectureAction(userDetails?.college_code, lecture._id, navigateHome))
  }

  const navigateHome = () =>{
    navigation.navigate('Lectures');
  }

  const handleZoomLink = () => {
    console.log(isTimeRemainingLessThan10Minutes())
    // if(!isTimeRemainingLessThan10Minutes()){
    //   return Toast.show({
    //     type: "error",
    //     text1: `Link is open remaining before 10m.`,
    //   })
    // }
    const zoomLink = lecture.lectureLink;

    Linking.openURL(zoomLink).catch(() => {
      Linking.openURL('https://zoom.us');
    });
  };

  function isTimeRemainingLessThan10Minutes(targetDateTime) {
    const targetTime = moment(targetDateTime, 'M/D/YYYY, h:mm:ss a').toDate().getTime();
    const currentTime = new Date().getTime();
    const timeDifference = targetTime - currentTime;
    const minutesRemaining = Math.floor(timeDifference / (1000 * 60));
  
    return minutesRemaining < 10;
  }

  return (
    <>
      <View style={styles.lectureCard}>
       <ScrollView>
        <View style={styles.details}>
          <Text style={styles.headline}>{lecture?.name}</Text>
          <View style={{borderWidth: 1, borderRadius: 10, borderColor: 'gray', padding: 10, marginVertical: 10}}>
            <Text><Text style={{fontWeight: 500}}>Lecture date & time:- </Text> {lecture?.timeDates}</Text>
            <Text><Text style={{fontWeight: 500}}>Teacher name:- </Text> {lecture?.teacher}</Text>
          </View>
          <View style={{flexDirection: "column", gap: 10, margin: 10}}>
            <Text style={styles.subject}>Subject Name:- {lecture?.subject}</Text>
            <Text style={styles.lecture}>Lecture mode:- {lecture?.lectureMode}</Text>
          </View>
          <View style={{borderWidth: 1, borderRadius: 10, borderColor: 'gray', padding: 10, marginVertical: 10}}>
            <Text style={{textAlign: "center", fontWeight: 'bold'}}>Lecture Notes</Text>
            <Text>{lecture?.details}</Text>
          </View>
          {
            userDetails?.role==="Instructor" &&
              <View style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 20}}>
                <View style={{width: '40%'}}>
                  <ButtonComponent onPress={editCourse} bg="#2685FD" color={"white"} title={"Edit"} fontWeight={'bold'} />
                </View>
                <View style={{width: '40%'}}>
                  <ButtonComponent onPress={deleteCourse} bg="#fb2b55" color={"white"} title={"Delete"} fontWeight={'bold'} />
                </View>
              </View>
          }
          <View style={{margin: 10}}>
            <ButtonComponent onPress={handleZoomLink} bg="blue" color={"white"} title={"Join zoom meeting"} fontWeight={'bold'} />
          </View>
        </View>
      </ScrollView>
    </View>
    <Toast />
    </>
  )
}

export default LectureDetails;

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
  }
})