import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../mainpage/HomeScreen";
import Login from "../loginscreen/Login";
import { Button } from "react-native-paper";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import EditUser from "../edituser/EditUser";

const Tab = createMaterialBottomTabNavigator();


function MyTabs({navigation}) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="EditUser" component={EditUser} />

    </Tab.Navigator>
  );
}


export default MyTabs;