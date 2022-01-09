import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../loginscreen/Login";
import Forgot from "../forgotpassword/Forgot";

const Stack = createStackNavigator();
 
const navigation =()=>{
return(

    <Stack.Navigator>
        <Stack.Screen  name='Login' component={Login} />
        <Stack.Screen name='Forgot' component={Forgot}/>
    </Stack.Navigator>
);

};
export default navigation;