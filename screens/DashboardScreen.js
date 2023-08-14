import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HistoryScreen from './HistoryScreen';
import ChatScreen from './ChatScreen';
import CalendarScreen from './CalendarScreen';
import SelectMoodScreen from './SelectMoodScreen';
import LogoutScreen from './LogoutScreen';

const Tab = createBottomTabNavigator();

const DashboardTabs = () => (
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
    <Tab.Screen name="History" component={HistoryScreen} />
    <Tab.Screen name="MoodJournal" component={SelectMoodScreen} />
    <Tab.Screen name="Calendar" component={CalendarScreen} />
    <Tab.Screen name="Chat" component={ChatScreen} />
    <Tab.Screen name="Logout" component={LogoutScreen} />
  </Tab.Navigator>
);

export default DashboardTabs;
