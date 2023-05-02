import React, { useState } from 'react'
import { Image, Text, View } from 'react-native';
import { Style } from '../style/login';
import loginImg from "../../../assets/login/login.png";
import ButtonComponent from '../../../component/helping/ButtonComponent';
import InputHelper from '../../../component/helping/InputHelper';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../../store/Auth/action';

const Login = ({navigation}) => {
  const [formData, setFormData] = useState({email: "", password: ""});
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const handleChangeText = (name, value) => setFormData({...formData, [name]: value});

  const validate = (fieldValues) => {
    let temp = { ...errors };
    if ("email" in fieldValues) {
        temp.email =
            fieldValues.email === ""
                ? "Email ID is required"
                : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(fieldValues.email)
                    ? ""
                    : "Invalid Email.";
    }
    if ("password" in fieldValues) {
        temp.password = !(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(fieldValues.password)) ? 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number': '';
    }
    setErrors({
        ...temp,
    });
    return Object.values(temp).every((x) => x === "");
};

  const loginFun = () => {
    if(validate(formData)){
      dispatch(userLogin(formData));
      setFormData({email: "", password: ""});
    }
  };
  const registerAccount = () => navigation.navigate("Register");

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
        <Text style={Style.loginName}>Login</Text>
        <InputHelper
          placeholder='Email'
          textContentType="emailAddress"
          onChangeText={(text) => handleChangeText('email', text)}
          value={formData.email}
          {...(errors.email && {
            error: true,
            helperText: errors.email,
          })}
        />
        <InputHelper
          placeholder='Password'
          textContentType="password"
          secureTextEntry={true}
          onChangeText={(text) => handleChangeText('password', text)}
          value={formData.password}
          {...(errors.password && {
            error: true,
            helperText: errors.password,
          })}
        />
        <Text style={Style.forgotPassword}>Forgot Password?</Text>
        <View style={Style.button}>
          <ButtonComponent bg="#276ef2" color={"white"} title={"Login"} onPress={loginFun}/>
          <Text style={Style.optionLabel}>OR</Text>
          <ButtonComponent bg="#e1e5ed" color={"black"} title={"Login with Google"}/>
        </View>
      </View>
      <Text style={Style.optionLabel}>Create own organization? <Text style={{color: "#3577f2",}}onPress={registerAccount}>Register</Text></Text>
    </View>
    </>
  )
}

export default Login