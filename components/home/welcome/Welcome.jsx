import React from 'react'
import { View, Text, TextInput,TouchableOpacity,Image } from 'react-native'
import { icons } from '../../../constants'
import styles from './welcome.style'

const Welcome = () => {
  return (
    <View>
  <View style={styles.container}>
    <View>
      <Text style={styles.userName}>Hello Herbert</Text>
      <Text style={styles.welcomeMessage}>Find your service</Text>
    </View>   
<View style={styles.searchContainer}>
  <View style={styles.searchWrapper}>
    <TextInput 
    style={styles.searchInput}
    value=""
    onChange={()=>{}}
    placeholder="what is your emergency ?"
    />
    </View>
    <TouchableOpacity style={styles.searchBtn}>
    <Image source={icons.search} style={styles.searchBtnImage}/> 
    </TouchableOpacity>
  </View>
   </View>
 </View>
  )
}

export default Welcome