import React, { useState, useEffect } from 'react'
import { BackHandler, Image, Text, View } from 'react-native';
import { Style } from '../style/signup';
import registerImg from "../../../assets/login/register.png";
import ButtonComponent from '../../../component/helping/ButtonComponent';
import InputHelper from '../../../component/helping/InputHelper';
import { useDispatch } from 'react-redux';
import { userSignup } from '../../../store/Auth/action';

const Signup = ({navigation}) => {
  const [step, setStep] =useState(1);
  const [formData, setFormData] = useState({name: "", email: "", mobile_no: "", username: "", password: ""});
  const [errors, setErrors] = useState({});
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();

  const handleChangeText = (name, value) => setFormData({...formData, [name]: value});

  const validate = (fieldValues) =>{
    let temp = { ...errors };
    if ("name" in fieldValues) {
        temp.name = fieldValues.name?.trim() === "" ? "Name is required" : "";
    }
    if ("email" in fieldValues) {
        temp.email =
            fieldValues.email === ""
                ? "Email ID is required"
                : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(fieldValues.email)
                    ? ""
                    : "Invalid Email.";
    }
    if ("mobile_no" in fieldValues) {
        temp.mobile_no = (fieldValues?.mobile_no.toString()) === "" ? "Contact Number is required" :
            !fieldValues?.mobile_no?.toString()?.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)
                ? "Invalid Contact Number." : "";
    }
    if ("password" in fieldValues) {
        temp.password = (step !== 1 && !(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(fieldValues.password))) ? 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number': '';
        temp.confirmPassword = (step !==1 && fieldValues.password!==confirmPassword) ? "Password does not match" : "";
    }

    setErrors({
        ...temp,
    });

    return Object.values(temp).every((x) => x === "");
};

  const nextPage = () =>{
    if(validate(formData)){
      if(step===1){
        setStep(2);
      }else{
        // console.log(formData)
        dispatch(userSignup(formData, {verifyEmail, setStep, setFormData, setConfirmPassword}));

      }
    }
  }

  const verifyEmail=()=> navigation.navigate("Email Verification", {email: formData?.email})
  const loginFun=()=> navigation.navigate("Login")

  useEffect(() => {

    const backAction = () => {
      if(step!==1){
        setStep(1);
        return true;
      }
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [step]);

  return (
    <>
    <View style={Style.main}>
      <View style={Style.imageBox}>
        <Image 
          source={registerImg}
          style={Style.loginImg}
        />
      </View>
      <View style={Style.loginBox}>
        <Text style={Style.loginName}>Register college & academy</Text>
        {
          step===1 ? (
            <>
              <InputHelper
                placeholder='College / institute name'
                textContentType="name"
                onChangeText={(text) => handleChangeText('name', text)}
                value={formData.name}
                {...(errors.name && {
                  error: true,
                  helperText: errors.name,
                })}
              />
              <InputHelper
                placeholder='College / institute email'
                textContentType="emailAddress"
                onChangeText={(text) => handleChangeText('email', text)}
                value={formData.email}
                {...(errors.email && {
                  error: true,
                  helperText: errors.email,
                })}
              />
              <InputHelper
                placeholder='College / institute mobile'
                textContentType="telephoneNumber"
                onChangeText={(text) => handleChangeText('mobile_no', text)}
                value={formData.mobile_no}
                {...(errors.mobile_no && {
                  error: true,
                  helperText: errors.mobile_no,
                })}
              />
            </>
          ): (
            <>
              <InputHelper
                placeholder='password'
                textContentType="password"
                secureTextEntry={true}
                onChangeText={(text) => handleChangeText('password', text)}
                value={formData.password}
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
              <Text style={Style.agreement}>By signing up, you're agree to our <Text style={{color: "#3577f2",}}>Terms & Conditions</Text> and <Text style={{color: "#3577f2",}}>Privacy Policy</Text></Text>
            </>
          )
        }

        <View style={Style.button}>
          <ButtonComponent bg="#276ef2" color={"white"} title={step===1 ? "Continue" : "Register"} onPress={nextPage} />
          {step===1 && <>
            <Text style={Style.optionLabel}>OR</Text>
            <ButtonComponent bg="#e1e5ed" color={"black"} title={"Login with Google"}/>
          </>}
        </View>
      </View>
      <Text style={Style.optionLabel}>Already have account? <Text style={{color: "#3577f2",}} onPress={loginFun}>Login</Text></Text>
    </View>
    </>
  )
}

export default Signup