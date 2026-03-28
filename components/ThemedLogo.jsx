import { Image, View, Text, useColorScheme } from 'react-native'
import React from 'react'

import DarkLogo from '../assets/img/logo1.png'
import LightLogo from '../assets/img/logo2.png'

const ThemedLogo = ({...props}) => {
    const colorScheme = useColorScheme()

    const logo = colorScheme === 'dark' ? LightLogo : DarkLogo
  return (
    <Image source={logo} {...props}/>
  )
}

export default ThemedLogo