import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DrawerNavigator from './DrawerNavigator';

const Tab = createMaterialTopTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{swipeEnabled: true}}
    >
      <Tab.Screen name="Super Admin" initialParams={{ drawerLabel: 'Super Admin' }} component={DrawerNavigator} />
      <Tab.Screen name="Admin" initialParams={{ drawerLabel: 'Admin' }} component={DrawerNavigator} />
      <Tab.Screen name="Instructor" initialParams={{ drawerLabel: 'Instructor' }} component={DrawerNavigator} />
      <Tab.Screen name="Student" initialParams={{ drawerLabel: 'Student' }} component={DrawerNavigator} />
    </Tab.Navigator>
  );
}
