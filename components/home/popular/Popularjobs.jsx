import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import { SIZES,COLORS } from '../../../constants'
// import PopularJobCard from "./components/common/cards/popular/popularjobcard"
// import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import styles from './popularjobs.style'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'

const isLoading = true;
const error = true
const popularJobsData = [1,2,3,4,5,6]


const Popularjobs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Common issues</Text>
        <TouchableOpacity style={styles.headerBtn}><Text>Show all</Text></TouchableOpacity>
      </View>
      <ScrollView horizontal contentContainerStyle={{columnGap:SIZES.small}}>
        {popularJobsData.map(item=>{
          return <TouchableOpacity><Text>{item}</Text></TouchableOpacity>
        })}
      </ScrollView>
        {isLoading===true?<ActivityIndicator size="large" color={COLORS.tertiary}/>
        ?error:
        <Text>Something went wrong</Text>
        :
        popularJobsData.map(item=>{
          return  <PopularJobCard/>
        })
       
        
        }

    </View>
  )
}

export default Popularjobs