import React, { useState } from 'react'
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Style } from '../style/login';
import loginImg from "../../../assets/login/login.png";
import ButtonComponent from '../../../component/helping/ButtonComponent';
import InputHelper from '../../../component/helping/InputHelper';
import { useDispatch } from 'react-redux';
import { updatePasswordAction } from '../../../store/Auth/action';

const ResetPassword = ({navigation, route}) => {
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const {email} = route.params;

  const validate = () =>{
    let temp = { ...errors };
      temp.password = (!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password))) ? 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number': '';
      temp.confirmPassword = (password!==confirmPassword) ? "Password does not match" : "";

    setErrors({
        ...temp,
    });

    return Object.values(temp).every((x) => x === "");
};

  const updatePassword=()=> {
    if(validate()){
      dispatch(updatePasswordAction(email, password, loginFun));
    }
  }

  const loginFun =()=> {
    navigation.navigate("Login");
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
        <Text style={{fontSize: 20, fontWeight: '500', color: 'red'}}>Reset Password</Text>
        <InputHelper
          placeholder='password'
          textContentType="password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
          {...(errors.password && {
            error: true,
            helperText: errors.password,
          })}
        />
        <InputHelper
          placeholder='Conform Password'
          textContentType="password"
          secureTextEntry={true}
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          {...(errors.confirmPassword && {
            error: true,
            helperText: errors.confirmPassword,
          })}
        />
        <TouchableWithoutFeedback onPress={loginFun}>
          <Text style={Style.forgotPassword}>Back to login</Text>
        </TouchableWithoutFeedback>
        <View style={Style.button}>
          <ButtonComponent bg="#276ef2" color={"white"} title={"Save password"} onPress={updatePassword}/>
        </View>
      </View>
    </View>
    </>
  )
}

export default ResetPassword