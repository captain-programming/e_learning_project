import React, { useState } from 'react'
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Style } from '../style/login';
import loginImg from "../../../assets/login/login.png";
import ButtonComponent from '../../../component/helping/ButtonComponent';
import InputHelper from '../../../component/helping/InputHelper';
import { useDispatch } from 'react-redux';
import { sendOtpAction } from '../../../store/Auth/action';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");
  const dispatch = useDispatch();

  const validate = (text) => {
    let temp = text === "" ? "Email ID is required"
        : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(text)
            ? ""
            : "Invalid Email.";
    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
};

  const verifyEmail=()=> {
    if(validate(email)){
      dispatch(sendOtpAction(email));
      navigation.navigate("Email Verification", {email, page: "forgot-password"})
    }
  }

  return (
    <>
    <View style={Style.main}>
      <View style={Style.imageBox}>
        <Image 
          source={loginImg}
          style={Style.loginImg}
        />
      </View>
      <View style={Style.loginBox}>
        <Text style={{fontSize: 20, fontWeight: '500', color: 'red'}}>Forgot Password</Text>
        <InputHelper
          placeholder='Email'
          textContentType="emailAddress"
          onChangeText={(text) => setEmail(text)}
          value={email}
          {...(errors && {
            error: true,
            helperText: errors,
          })}
        />
        <TouchableWithoutFeedback onPress={()=> navigation.navigate("Login")}>
          <Text style={Style.forgotPassword}>Back to login</Text>
        </TouchableWithoutFeedback>
        <View style={Style.button}>
          <ButtonComponent bg="#276ef2" color={"white"} title={"Verify Email"} onPress={verifyEmail}/>
        </View>
      </View>
    </View>
    </>
  )
}

export default ForgotPassword