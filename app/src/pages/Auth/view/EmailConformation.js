import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import ButtonComponent from '../../../component/helping/ButtonComponent';
import { useDispatch } from 'react-redux';
import { sendOtpAction, verifyUserAccount } from '../../../store/Auth/action';

const EmailConformation = ({navigation, route}) => {
  const {email, page} = route.params;
  const [otp, setOtp] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [time, setTime] = useState(59)
  const dispatch = useDispatch();

  const handleOtpChange = (value) => {
    setOtp(value.replace(/[^0-9]/g, ''));
  };

  const loginFun=()=> {
    if(page==="forgot-password"){
      navigation.navigate("Reset Password", {email})
    }else if(page==="verify-email"){
      navigation.navigate("Login");
    }else{
      navigation.navigate("Login");
    }
  }

  const verifyOtpFun = () => {
    dispatch(verifyUserAccount({otp, email}, loginFun))
  }

  const resendOtp = () => {
    dispatch(sendOtpAction(email));
    setTime(59);
    setIsDisabled(true);
  }

  useEffect(() => {
    const timer = setTimeout(()=>{
      setTime((prev)=> prev-1);
    }, 1000)

    if(time===0){
      clearTimeout(timer);
      setIsDisabled(false);
    }

    return () => {
      clearTimeout(timer);
    }
  }, [time])

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.heading}>Check your email!</Text>
        <Text style={styles.text}>Enter the code sent to dkgroupofcompany363@gmail.com</Text>
        <View style={styles.otpContainer}>
          <TextInput
            style={styles.otpInput}
            value={otp}
            onChangeText={handleOtpChange}
            keyboardType="numeric"
            maxLength={6}
          />
        </View>
        <TouchableOpacity onPress={resendOtp} disabled={isDisabled}>
          <Text style={{color: isDisabled ? "gray" : "#3577f2", textAlign: "center", marginBottom: 10, fontSize: 16}}>Resend OTP {isDisabled && `: ${String(time).length===1 ? `00:0${time}` : `00:${time}`}`}</Text>
        </TouchableOpacity>
        <ButtonComponent title={"Verify OTP"} bg={"red"} color={"white"} fontWeight={"bold"} onPress={verifyOtpFun}/>
      </View>
    </View>
  )
}

export default EmailConformation;

const styles = StyleSheet.create({
  container: {
    width: "80%",
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 40,
    elevation: 4, 
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2, 
  },
  main: {
    flex: 1,
    backgroundColor: "white", 
    justifyContent: "center", 
    alignItems: "center"
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  text:{
    fontSize: 15,
    marginBottom: 10,
    textAlign: "center"
  },
  otpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  otpInput: {
    backgroundColor: '#f2f2f2',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    marginHorizontal: 10,
    fontSize: 24,
    fontWeight: 'bold',
    width: 150,
    height: 50,
  },
});