import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import colors from '../config/colors'

import Mainnavigation from '../navigation/main_navigation'
import Home from '../screens/Home'

import Firstpage from '../screens/pages/Firstscreen'
import Register from '../screens/pages/register'
import Loginscreen from '../screens/pages/login'
import PersonalDetails from '../screens/pages/PersonalDetails'
import Bank from '../screens/pages/Banks'
import ViewState from '../screens/pages/Viewstate'
import FAQ from '../screens/pages/FAQ'

import Guidelines from '../screens/pages/guidlines'
import  Disclaimer from '../screens/pages/disclaimer'
import Residential from '../screens/Property/Residential'
import Commercial from '../screens/Property/Commercial'
import  Industrial from '../screens/Property/Industrial'
import Agricultural from '../screens/Property/Agricultural'

import Suggestions from '../screens/pages/suggestion'
import Contactus  from '../screens/pages/contactus'
import About from '../screens/pages/about'
import PropDetails from '../screens/Property/PropDetails'
import NotifiTile from '../screens/pages/NotificationTitle'
import YourBids from '../screens/YourBids';


const Stack = createStackNavigator();

const HomeScreenStack = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor:colors.background },
        headerTintColor: "#fff"
    }} initialRouteName ={Firstpage}>
       <Stack.Screen name="Firstpage" component={Firstpage} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} /> 
         <Stack.Screen name="Loginscreen" component={Loginscreen} options={{ headerShown: false }} /> 
         <Stack.Screen name="PersonalDetails" component={PersonalDetails} options={{ headerShown: false }} /> 
         <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />  
         <Stack.Screen name="YourBids" component={YourBids} options={{ headerShown: false }}/> 
        
        <Stack.Screen name="Bank" component={Bank} options={{ headerShown: false }} /> 
        <Stack.Screen name="ViewState" component={ViewState} options={{ headerShown: false }} /> 
        <Stack.Screen name="Guidelines" component={Guidelines} options={{ headerShown: false }} />   
        <Stack.Screen name="Disclaimer" component={Disclaimer} options={{ headerShown: false }} /> 
        <Stack.Screen name="Residential" component={Residential} options={{ headerShown: false }} /> 
        <Stack.Screen name="Commercial" component={Commercial} options={{ headerShown: false }} />   
        <Stack.Screen name="Industrial" component={Industrial} options={{ headerShown: false }} /> 
        <Stack.Screen name="Agricultural" component={Agricultural} options={{ headerShown: false }} /> 
         <Stack.Screen name="FAQ" component={FAQ} options={{ headerShown: false }} /> 
        
        <Stack.Screen name="PropDetails" component={PropDetails} options={{ headerShown: false }} /> 

        <Stack.Screen name="Suggestions" component={Suggestions} options={{ headerShown: false }} />   
        <Stack.Screen name="Contactus" component={Contactus} options={{ headerShown: false }} /> 
        <Stack.Screen name="About" component={About} options={{ headerShown: false }} /> 

        <Stack.Screen name="NotifiTile" component={NotifiTile} options={{ headerShown: false }} /> 
        <Stack.Screen name="Mainnavigation" component={Mainnavigation}  options={{ headerShown: false }}s />    
       
    </Stack.Navigator>
    </NavigationContainer>



    );
}

export default HomeScreenStack;