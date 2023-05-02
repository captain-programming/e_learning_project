import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ButtonComponent = ({color, bg, title, onPress, fontWeight}) => {
  
  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: bg,
      padding: 10,
      borderRadius: 10,
    },
    buttonText: {
      color: color,
      fontWeight: fontWeight || 500
    }
  });

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ButtonComponent;

