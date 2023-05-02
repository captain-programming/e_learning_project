import { Text, TextInput } from 'react-native'
import React from 'react'

const InputHelper = ({placeholder, textContentType, onChangeText, error, helperText, secureTextEntry, value}) => {
  return (
    <>
    <TextInput
      placeholder={placeholder}
      style={{
        borderBottomWidth: 1,
        borderColor: "#e3e1e1",
        padding: 5,
        borderRadius: error && 5
      }}
      value={value}
      textContentType={textContentType}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
    {error && <Text style={{color: 'red', fontSize: 10, marginTop: -7}}>{helperText}</Text>}
    </>
  )
}

export default InputHelper