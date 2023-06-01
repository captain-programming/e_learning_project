import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from "./src/pages/Auth/view/Login";
import Signup from "./src/pages/Auth/view/Signup";
import Splash from "./src/navigation/normal/Splash";
import DrawerNavigator from "./src/navigation/DrawerNavigator";
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { ToastCleaner } from './src/store/Auth/action';
import EmailConformation from './src/pages/Auth/view/EmailConformation';
import Profile from './src/pages/SuperAdmin/Profile';
import ChangePassword from './src/pages/SuperAdmin/ChangePassword';
import ForgotPassword from './src/pages/Auth/view/ForgotPassword';
import ResetPassword from './src/pages/Auth/view/ResetPassword';
import CourseDetails from './src/component/Courses/CourseDetails';
import LectureDetails from './src/component/lectures/LectureDetails';
import AssignmentsDetails from './src/component/assignments/AssignmentDetails';

const Connector = () => {
  const {toastStatus, toastMessage, toastActivate, login} = useSelector((store) => store.authuntication);
  const dispatch = useDispatch();

  const showToast = () =>{
    Toast.show({
      type: toastStatus,
      text1: toastMessage,
    })
    dispatch(ToastCleaner());
  }
  const Stack = createNativeStackNavigator();

  useEffect(()=>{
    (toastActivate) && showToast();
  }, [toastActivate, toastMessage, toastStatus])

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          {login ? (
            <>
              <Stack.Screen name='Splash' component={Splash} options={{headerShown: false}}/>
              <Stack.Screen name='Tabs' component={DrawerNavigator} options={{headerShown: false}}/>
              <Stack.Screen name='Change Password' component={ChangePassword}/>
              <Stack.Screen name='Profile' component={Profile}/>
              <Stack.Screen name="CourseDetails" component={CourseDetails} options={({ route }) => ({ title: route.params.courseName })}/>
              <Stack.Screen name="LectureDetails" component={LectureDetails} options={({ route }) => ({ title: route.params.courseName })}/>
              <Stack.Screen name="AssignentsDetails" component={AssignmentsDetails} options={({ route }) => ({ title: route.params.courseName })}/>
            </>
          ):(
            <>
              <Stack.Screen name='Login' component={Login}/>
              <Stack.Screen name='Register' component={Signup}/>
              <Stack.Screen name='Email Verification' component={EmailConformation}/>
              <Stack.Screen name='Forgot Password' component={ForgotPassword}/>
              <Stack.Screen name='Reset Password' component={ResetPassword}/>
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  )
}

export default Connector
