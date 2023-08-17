import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import DashboardTabs from './screens/DashboardScreen';
import SelectMoodScreen from './screens/SelectMoodScreen';
import MakeJournalScreen from './screens/MakeJournalScreen';

import CalendarScreen from './screens/CalendarScreen';
import DataDetailScreen from './screens/DataDetailScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" options={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={DashboardTabs} options={{ headerShown: false }} />
        <Stack.Screen name="SelectMood" component={SelectMoodScreen} />
        <Stack.Screen name="MakeJournal" component={MakeJournalScreen}  />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen name="DataDetail" component={DataDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
