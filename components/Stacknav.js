import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import Homepage from '../login/components/homepage/HomePage';
import Login from '../login/components/loginscreen/Login';
import Signup from './components/signup/Signup';
import ProfileScreen from './components/profile/ProfileScreen';
import HomeScreen from './components/mainpage/HomeScreen';
// import TestScreen from './components/test';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Explore from './components/explorescreen/Explore';
// import Navigation from './components/Routing/Navigation';
import Comments from './components/commentpage/comments';
import UserProfile from './components/userprofile/UserProfile';
import Forgot from './components/forgotpassword/Forgot';
import EditUser from './components/edituser/EditUser';
import ChangeUserName from './components/changeusername/ChangeUserName';
import ChangePassword from './components/changepassword/ChangePassword';
import ChangeProfile from './components/changeprofile/ChangeProfile';
import BarcodeScanner from './components/barcodescanner/BarcodeScanner';
import EditRestaurant from './components/editrestaurant/EditRestaurant';
import ChangeInfo from './components/changeinfo/ChangeInfo';
import navigation from './components/navigation/navigation';
import CreateRestaurant from './components/createrestaurant/CreateRestaurant';
import MyTabs from './components/bottomtab/bottomtab';
import Addmenu from './components/addmenu/Addmenu';
import Restaurant from './components/restaurant/Restaurant';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import EditRestaurantForm from './components/editrestaurantform/EditRestaurantForm';
import EditMenu from './components/editmenu/EditMenu';
import AddPost from './components/addpost/AddPost';
import EditPost from './components/EditPost/EditPost';
import AddMenuForm from './components/addmenuform/AddMenuForm';

const Stack = createStackNavigator();

function Stacknav({navigation}){

    return(
<NavigationContainer>
    <Stack.Navigator
    //  screenOptions={{
    //     headerStyle: {
    //       backgroundColor: "#9AC4F8",
    //     }} 
        >
    {/* <Stack.Screen  name='HomePage' component={Homepage} /> */}
        
        <Stack.Screen  name='Login' component={Login} options={{ headerShown: false }}/>
        <Stack.Screen  name='CreateRestaurant' component={CreateRestaurant}  />
        {/* <Stack.Screen  name='MyTabs' component={MyTabs} /> */}
        <Stack.Screen  name='Addmenu' component={Addmenu} />
        <Stack.Screen name='Restaurant' component={Restaurant}/>
        <Stack.Screen name='Forgot' component={Forgot} options={{ headerShown: false }}/>
        <Stack.Screen name='Signup' component={Signup} options={{ headerShown: false }}/>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='UserProfile' component={UserProfile}/>
        <Stack.Screen name='EditUser' component={EditUser}/>
        <Stack.Screen name='ChangeUserName' component={ChangeUserName}/>
        <Stack.Screen name='ChangeProfile' component={ChangeProfile}/>
        <Stack.Screen name='ChangePassword' component={ChangePassword}/>
        <Stack.Screen name='ChangeInfo' component={ChangeInfo}/>
        <Stack.Screen name='ProfileScreen' component={ProfileScreen}/>
        <Stack.Screen name='EditRestaurantForm' component={EditRestaurantForm} options={{ headerShown: false }}/>
        <Stack.Screen name='EditMenu' component={EditMenu} options={{ headerShown: false }}/>
        <Stack.Screen name='AddMenuForm' component={AddMenuForm} options={{ headerShown: false }}/>
    </Stack.Navigator>
    </NavigationContainer>
    );
}
export default Stacknav