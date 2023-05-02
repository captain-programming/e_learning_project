import { View, Image, StyleSheet } from 'react-native'
import React, {useEffect} from 'react'
import SplashImage from "../../assets/splashLogo.png";

const Splash = ({navigation}) => {

  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('Tabs');
    }, 2000)
  },[])

  return (
    <View style={{flex: 1, backgroundColor: "rgb(0,31,57)"}}>
      <Image source={SplashImage} style= {Style.image}/>
    </View>
  )
}

const Style = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  }
})

export default Splash