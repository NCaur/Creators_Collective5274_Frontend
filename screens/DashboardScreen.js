import React from 'react';
import { Image, TouchableOpacity, Text,View,SafeAreaView,Platform,StatusBar, StyleSheet  } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

import HistoryScreen from './HistoryScreen';
import ChatScreen from './ChatScreen';
import CalendarScreen from './CalendarScreen';
import SelectMoodScreen from './SelectMoodScreen';
import LogoutScreen from './LogoutScreen';


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawerContent = () => {
  const navigation = useNavigation();



  const handleLogoutPress = () => {
    navigation.navigate('Logout');
  };

  return (
    <SafeAreaView style={styles.droidSafeArea}>
    <View>
      {/* Your drawer header */}
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
       
      </TouchableOpacity>

     

      <TouchableOpacity onPress={handleLogoutPress}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

const DashboardTabs = () => (
  <Drawer.Navigator drawerContent={CustomDrawerContent}>
    <Drawer.Screen name="Mood Dairy" component={TabStack} />
  </Drawer.Navigator>
);

const TabStack = () => {
  return(
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'History') {
            iconName = focused ? require('../assets/history.png') : require('../assets/history.png');
          } else if (route.name === 'MoodJournal') {
            iconName = focused ? require('../assets/mood.png') : require('../assets/mood.png');
          } else if (route.name === 'Calendar') {
            iconName = focused ? require('../assets/calendar.png') : require('../assets/calendar.png');
          } else if (route.name === 'Chat') {
            iconName = focused ? require('../assets/chat.png') : require('../assets/chat.png');
          } else if (route.name === 'Logout') {
            iconName = focused ? require('../assets/logout.png') : require('../assets/logout.png');
          }

          return <Image source={iconName} style={{ width: 40, height: 40, marginTop: 5 }} />;
        },
      })}
    >
      <Tab.Screen name="History" component={HistoryScreen} options={{ headerShown: false }} />
      <Tab.Screen name="MoodJournal" component={SelectMoodScreen}  options={{ headerShown: false }} />
      <Tab.Screen name="Calendar" component={CalendarScreen}  options={{ headerShown: false }}  />
      <Tab.Screen name="Chat" component={ChatScreen}  options={{ headerShown: false }} />
    
      <Tab.Screen name="Logout" component={LogoutScreen}  options={{ headerShown: false }} />
    </Tab.Navigator>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  
    backgroundColor: "#15193c",
    padding: 8,
    
  },
    containerLight: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: 'center',
    padding: 8,
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 35
  },
})

export default DashboardTabs;
