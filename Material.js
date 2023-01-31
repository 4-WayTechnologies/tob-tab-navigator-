import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './Component/Home';
import About from './Component/About';
import Setting from './Component/Setting';

const Material = () => {
    
const Tab = createMaterialTopTabNavigator();
  return (
  
    <Tab.Navigator
 

     screenOptions={{
        tabBarActiveTintColor:'#e91e63',
        tabBarStyle: { backgroundColor: 'powderblue',},

      }}
      >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="About" component={About} />
    <Tab.Screen name="Setting" component={Setting} />


    
  </Tab.Navigator>

  )
}

export default Material

const styles = StyleSheet.create({})