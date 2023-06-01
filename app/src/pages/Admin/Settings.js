import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Settings = ({navigation}) => {

  return (
    <View style={styles.main}>
      <TouchableOpacity  onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.text}>Edit profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Change Password")}>
        <Text style={styles.text}>Change password</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>Privacy policy</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>Terms and condition</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  main:{
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: "column",
    gap: 20
  },
  text: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  }
})