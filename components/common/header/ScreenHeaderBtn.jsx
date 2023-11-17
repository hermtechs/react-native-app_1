import React from 'react'
import { View, Text,Image, TouchableOpacity } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl,dimension}) => {
  return (
   <TouchableOpacity style={styles.btnContainer}>
    <Image source={iconUrl} resizeMode="cover" style={styles.btnImg(dimension)}/>
   </TouchableOpacity>
  )
}

export default ScreenHeaderBtn