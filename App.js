import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from '../login/components/homepage/HomePage';
import Login from '../login/components/loginscreen/Login';
import Signup from './components/signup/Signup';
import ProfileScreen from './components/profile/ProfileScreen';
import HomeScreen from './components/mainpage/HomeScreen';
// import TestScreen from './components/test';
import { NavigationContainer } from '@react-navigation/native';
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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../login/components/homepage/HomePage';

const ScanStack = createStackNavigator();

function ScanStackScreen() {
  return (
    <ScanStack.Navigator>
      {/* <ScanStack.Screen  name='HomeScreen' component={HomeScreen} options={{ headerShown: false }}/> */}
      <ScanStack.Screen  name='BarcodeScanner' component={BarcodeScanner} options={{ headerShown: false }}/>
     
    </ScanStack.Navigator>
  );
}

// sdasd
const HomeStack = createStackNavigator();

function Home() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen  name='HomeScreen' component={HomeScreen} options={{headerShown:false}}/>
      <HomeStack.Screen name='Restaurant' component={Restaurant} />
     
    </HomeStack.Navigator>
  );
}


const ExploreStack = createStackNavigator();

function ExploreStackScreen() {
  return (
    <ExploreStack.Navigator >
      {/* place the page you want to show here */}
      <ExploreStack.Screen  name='Explore' component={Explore} options={{ headerShown: false }} />
      <ExploreStack.Screen  name='Comments' component={Comments}  />
      
    </ExploreStack.Navigator>
  );
}


const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
     {/* <ProfileStack.Screen  name='Addmenu' component={Addmenu} /> */}
     <ProfileStack.Screen  name='ProfileScreen' component={ProfileScreen} options={{ headerShown: false }} />
     <ProfileStack.Screen  name='EditRestaurantForm' component={EditRestaurantForm} />
     <ProfileStack.Screen  name='EditMenu' component={EditMenu} />
     <ProfileStack.Screen  name='AddMenuForm' component={AddMenuForm} />
     <ProfileStack.Screen  name='AddPost' component={AddPost} />
     <ProfileStack.Screen  name='EditUser' component={EditUser} />
     <ProfileStack.Screen  name='ChangePassword' component={ChangePassword} />
     <ExploreStack.Screen  name='Comments' component={Comments}  />
     <ProfileStack.Screen  name='EditPost' component={EditPost} />
     

     {/* <ProfileStack.Screen  name='Login' component={Login} /> */}
     
    </ProfileStack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

function BottomNavigator() {
  return (
      <Tab.Navigator  screenOptions={{ headerShown: false,tabBarActiveTintColor: 'indianred' }} >
        {/* <Tab.Screen name="Home" component={Home} /> */}
        <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
        {/* <Tab.Screen name="Explore" component={ExploreStackScreen} /> */}
        <Tab.Screen
        name="Explore"
        component={ExploreStackScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, size }) => (
            <Icon name="magnify" color={color} size={size} />
          ),
        }}
      />
        {/* <Tab.Screen name="Scan" component={ScanStackScreen} /> */}
        <Tab.Screen
        name="Scan"
        component={ScanStackScreen}
        options={{
          tabBarLabel: 'Scan',
          tabBarIcon: ({ color, size }) => (
            <Icon name="image-filter-center-focus-strong" color={color} size={size} />
          ),
        }}
      />
        {/* <Tab.Screen name="Profile" component={ProfileStackScreen} /> */}
        <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon name="account" color={color} size={size} />
          ),
        }}
      />
      </Tab.Navigator>
  );
}


const MainStack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <MainStack.Navigator>
    <MainStack.Screen  name='HomePage' component={HomePage} options={{ headerShown: false }}/>
    <MainStack.Screen  name='Login' component={Login} options={{ headerShown: false }}/>
    <MainStack.Screen  name='Signup' component={Signup} options={{ headerShown: false }}/>
    <MainStack.Screen  name='Forgot' component={Forgot} options={{ headerShown: false }}/>
    <MainStack.Screen  name='CreateRestaurant' component={CreateRestaurant} options={{ headerShown: false }}/>
    <MainStack.Screen  name='Addmenu' component={Addmenu} options={{ headerShown: false }}/>
    <MainStack.Screen name='BottomNavigator' component={BottomNavigator} options={{ headerShown: false }}/>
    
    
   </MainStack.Navigator>
   </NavigationContainer>
  
  );
}

export default App;


























// // const Tab = createMaterialBottomTabNavigator();
// const Stack = createStackNavigator();
// export default function App() {
  

//   return (




//     <NavigationContainer>
//     <Stack.Navigator
//     //  screenOptions={{
//     //     headerStyle: {
//     //       backgroundColor: "#9AC4F8",
//     //     }} 
//         >
//     {/* <Stack.Screen  name='HomePage' component={Homepage} /> */}
        
//         <Stack.Screen  name='Login' component={Login} options={{ headerShown: false }}/>
//         <Stack.Screen  name='CreateRestaurant' component={CreateRestaurant}  />
//         {/* <Stack.Screen  name='MyTabs' component={MyTabs} /> */}
//         <Stack.Screen  name='Addmenu' component={Addmenu} />
//         <Stack.Screen name='Restaurant' component={Restaurant}/>
//         <Stack.Screen name='Forgot' component={Forgot} options={{ headerShown: false }}/>
//         <Stack.Screen name='Signup' component={Signup} options={{ headerShown: false }}/>
//         <Stack.Screen name='HomeScreen' component={HomeScreen}/>
//         <Stack.Screen name='UserProfile' component={UserProfile}/>
//         <Stack.Screen name='EditUser' component={EditUser}/>
//         <Stack.Screen name='ChangeUserName' component={ChangeUserName}/>
//         <Stack.Screen name='ChangeProfile' component={ChangeProfile}/>
//         <Stack.Screen name='ChangePassword' component={ChangePassword}/>
//         <Stack.Screen name='ChangeInfo' component={ChangeInfo}/>
//         <Stack.Screen name='ProfileScreen' component={ProfileScreen}/>
//         <Stack.Screen name='EditRestaurantForm' component={EditRestaurantForm} options={{ headerShown: false }}/>
//         <Stack.Screen name='EditMenu' component={EditMenu} options={{ headerShown: false }}/>
//         <Stack.Screen name='AddMenuForm' component={AddMenuForm} options={{ headerShown: false }}/>
//     </Stack.Navigator>
//     </NavigationContainer>
   
//   //  <NavigationContainer>
//   //   <MyTabs/>
//   //   </NavigationContainer>



//     //    <NavigationContainer>
// //    <Tab.Navigator>
// //       <Tab.Screen name="Home" component={HomeScreen} />
// //       <Tab.Screen name="Login" component={Login} />
// //       <Tab.Screen name="EditUser" component={EditUser} />

// //     </Tab.Navigator>
// // </NavigationContainer>    

    
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
  

// });
