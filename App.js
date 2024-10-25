import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import screens
import Login from './screens/Login';
import Home from './screens/Home';
import TripSheet from './screens/TripSheet';
// import Vehicle from './screens/Vehicle';
import Notifications from './screens/Notifications';
import Profile from './screens/Profile';
import Details from './screens/Details';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => (
  <Tab.Navigator 
    initialRouteName="Home"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'TripSheet') {
          iconName = focused ? 'document-text' : 'document-text-outline';
        } else if (route.name === 'Vehicle') {
          iconName = focused ? 'car' : 'car-outline';
        } else if (route.name === 'Notifications') {
          iconName = focused ? 'notifications' : 'notifications-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#4169E1',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
    })}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="TripSheet" component={TripSheet} />
    {/* <Tab.Screen name="Vehicle" component={Vehicle} /> */}
    <Tab.Screen name="Notifications" component={Notifications} />
    <Tab.Screen name="Profile" component={Profile} initialParams={{ email: '' }} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="MainApp" 
          component={MainTabs} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Details" 
          component={Details}
          options={{
            headerShown: true,
            title: "Stop Details",
            headerStyle: {
              backgroundColor: '#eb5a0b',
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;