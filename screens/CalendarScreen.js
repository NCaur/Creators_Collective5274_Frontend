import React from 'react';
import { StyleSheet, Text, View, Image,SafeAreaView } from 'react-native';
import styles from '../style';
export default class CalendarScreen extends React.Component{
  render()
  {
 return(
  <View style={styles.container}>
  <SafeAreaView style={styles.droidSafeArea}>
  
    <Text>Calendar</Text>
    </SafeAreaView>
    </View>
   
  )
  }
 
}