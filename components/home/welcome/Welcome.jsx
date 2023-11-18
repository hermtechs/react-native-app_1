import { router } from 'expo-router'
import {React, useState } from 'react'
import { View, Text, TextInput,TouchableOpacity,Image,ScrollView } from 'react-native'
import { icons, SIZES } from '../../../constants'
import styles from './welcome.style'
const jobTypes = ["Battery Change", "Car washing", "Flat Tire"]

const Welcome = () => {

const [activeJobType, setActiveJobType] = useState("Full-Time")

  return (
    <View>
  <View style={styles.container}>
    <View>
      <Text style={styles.userName}>Hello Herbert,</Text>
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
   < ScrollView contentContainerStyle={{columnGap:SIZES.small}} horizontal={true} style={{margin:10}}>
      {jobTypes.map(item=>{
        return <TouchableOpacity  style={styles.tab(activeJobType, item)}
              onPress={()=>{
                setActiveJobType(item)
                router.push(`/search/${item}`)
              }}
        >
          <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
        </TouchableOpacity>
      })

      }
    </ScrollView>
   </View>
 </View>
  )
}

export default Welcome