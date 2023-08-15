import React from 'react';
import { Image, TouchableOpacity, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

import HistoryScreen from './HistoryScreen';
import ChatScreen from './ChatScreen';
import CalendarScreen from './CalendarScreen';
import SelectMoodScreen from './SelectMoodScreen';
import LogoutScreen from './LogoutScreen';
import ProfileScreen from './ProfileScreen'; // You need to create this screen

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const CustomHeader = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <Image source={require('../assets/drawer.png')} style={{ width: 40, height: 40, marginTop: 5 }} />
    </TouchableOpacity>
  );
};

const DashboardTabs = () => (
  <Drawer.Navigator drawerContent={() => <ProfileScreen />}>
    <Drawer.Screen name="Mood Diary" component={TabStack} />
  </Drawer.Navigator>
);

const TabStack = ({ navigation, route }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      //headerTitle: route.state ? route.state.routes[route.state.index].name : 'History',
      headerLeft: () => <CustomHeader navigation={navigation} />,
    });
  }, [navigation, route]);

  return (
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
  );
};

export default DashboardTabs;
