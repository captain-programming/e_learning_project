import { View, StyleSheet, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import InputHelper from '../helping/InputHelper';
import ButtonComponent from '../helping/ButtonComponent';
import { useDispatch, useSelector } from 'react-redux';
import { adminCreateUser } from '../../store/Auth/action';
import { getAllBranchAction } from '../../store/branch/action';

const UserAddForm = ({closeForm}) => {
  const {userDetails} = useSelector((store) => store.authuntication);
  const [formData, setFormData] = useState({name: "", email: "", mobile_no: ""});
  const [errors, setErrors] = useState({});
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedBranch, setSelecteBranch] = useState("");
  const dispatch = useDispatch();
  const {branches} = useSelector((store) => store.branch);

  let allBranches = branches.map((item, i) => {
    return {key: i+1, value: item.branch_name};
  })

  const data = userDetails?.role==="Admin" ? [
    {key:'1', value:'Admin'},
    {key:'2', value:'Instructor'},
    {key:'3', value:'Student'},
  ] :
  [
    {key:'1', value:'Super Admin'},
    {key:'2', value:'Admin'},
    {key:'3', value:'Instructor'},
    {key:'4', value:'Student'},
  ]

  const handleChangeText = (name, value) => setFormData({...formData, [name]: value});

  const validate = (fieldValues) => {
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
    temp.role = ( selectedRole?.trim() === "") ? "User access is required" : "";
    temp.branch = userDetails?.role !== "Admin" && (selectedBranch?.trim() === "" && selectedRole!=="Super Admin") ? "Branch is required" : "";

    setErrors({
        ...temp,
    });

    return Object.values(temp).every((x) => x === "");
  };

  const handleAddMember = () => {
    if(validate(formData)){
      dispatch(adminCreateUser({...formData, role: selectedRole, collegeCode: userDetails?.college_code, branch: userDetails?.role==="Admin" ? userDetails?.branch : selectedBranch}, {setFormData}, userDetails));
      // closeForm();
    }
  }

  useEffect(()=>{
    dispatch(getAllBranchAction({college_code: userDetails?.college_code}))
  }, [])

  return (
    <ScrollView style={{width: "100%"}}>
    <View style={styles.container}>
      <InputHelper
        placeholder='Name'
        textContentType="name"
        onChangeText={(text) => handleChangeText('name', text)}
        value={formData.name}
        {...(errors.name && {
          error: true,
          helperText: errors.name,
        })}
      />
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
        placeholder='Phone number'
        textContentType="telephoneNumber"
        onChangeText={(text) => handleChangeText('mobile_no', text)}
        value={formData.mobile_no}
        {...(errors.mobile_no && {
          error: true,
          helperText: errors.mobile_no,
        })}
      />
      <SelectList 
        setSelected={(val) => setSelectedRole(val)} 
        data={data} 
        save="value"
        placeholder='Select role'
        boxStyles={{borderBottomWidth: 1, borderWidth: 0, borderRadius: 0, borderColor:"#e3e1e1"}}
        search={false}
      />
      {errors.role && 
        <Text style={{color: 'red', fontSize: 10, marginTop: -7}}>{errors.role}</Text>
      }
      {
        userDetails?.role==="Super Admin" &&
        (
          <View>
            <SelectList 
              setSelected={(val) => setSelecteBranch(val)} 
              data={allBranches} 
              save="value"
              placeholder='Select Branch'
              boxStyles={{borderBottomWidth: 1, borderWidth: 0, borderRadius: 0, borderColor:"#e3e1e1"}}
              search={false}
            />
            {errors.branch && 
              <Text style={{color: 'red', fontSize: 10, marginTop: -7}}>{errors.branch}</Text>
            }
          </View>
        )
      }
      <View style={styles.button}>
        <ButtonComponent bg="#276ef2" color={"white"} title={"Add Member"} onPress={handleAddMember} />
        <ButtonComponent bg="#fb2b55" color={"white"} title={"Cancel"} onPress={closeForm} />
      </View>
    </View>
    </ScrollView>
  )
}

export default UserAddForm

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: "100%",
    gap: 10,
    marginTop: 10
  },
  button: {
    padding: 10,
    gap: 20,
    marginTop: 10
  },
});