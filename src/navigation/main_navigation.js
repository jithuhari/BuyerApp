import React from 'react';
import { Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
import Favourites from '../screens/Favourites';
import Notifications from '../screens/pages/Notification'
import Logout from '../screens/pages/Logout'

import Search from '../screens/Search';
import Bank from '../screens/pages/Banks'

import PropDetails from '../screens/Property/PropDetails'

import CustomDrawerContent from '../navigation/Drawer_content';
import Colors from '../config/colors';
import YourBids from '../screens/YourBids';
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function TabNavigation({ navigation }) {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor:Colors.background,
                inactiveTintColor: '#fff',
                style: { height: 57, paddingTop: 8,backgroundColor:Colors.secondary },
                labelPosition: "below-icon"
                
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused, size, color }) => <Ionicons name="home" size={focused ? size + 3 : size} color={color} />,
                    tabBarLabel: ({ focused, color }) => <Text style={{ fontSize: focused ? 1 : 1, color: color, marginBottom: focused ? 5 : 6 }}></Text>
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ focused, size, color }) => <MaterialIcons name="search" size={focused ? size + 3 : size} color={color} />,
                    tabBarLabel: ({ focused, color }) => <Text style={{ fontSize: focused ? 1 : 1, color: color, marginBottom: focused ? 5 : 6 }}></Text>
                }}
            />
            <Tab.Screen
                name="Bank"
                component={Bank}
                options={{
                    tabBarIcon: ({ focused, size, color }) => <Entypo name="location" size={focused ? size + 3 : size} color={color} />,
                    tabBarLabel: ({ focused, color }) => <Text style={{ fontSize: focused ? 1 : 1, color: color, marginBottom: focused ? 5 : 6 }}></Text>
                }}
            />
            <Tab.Screen
                name="Favourites"
                component={Favourites}
                options={{
                    tabBarIcon: ({ focused, size, color }) => <MaterialIcons name="star" size={focused ? size + 3 : size} color={color} />,
                    tabBarLabel: ({ focused, color }) => <Text style={{ fontSize: focused ? 1 : 1, color: color, marginBottom: focused ? 5 : 6 }}></Text>
                }}
            />
        </Tab.Navigator>
    );
}
export default function MainNavigation() {
    return (
             <Drawer.Navigator
                drawerStyle={{ width: '88%' }}
                drawerContentOptions={{
                    inactiveTintColor: 'rgba(0,0,0,0.75)',
                    labelStyle: { fontSize: 16, fontWeight: '700' }
                }}
                drawerContent={props => <CustomDrawerContent {...props} />} >
                <Drawer.Screen name="Home" component={TabNavigation} />
                <Drawer.Screen name="Favourites" component={Favourites} />
                <Drawer.Screen name="Notifications" component={Notifications} />
                <Drawer.Screen name="Logout" component={Logout} />
                <Drawer.Screen name="YourBids" component={YourBids}/>
                <Drawer.Screen name="PropDetails" component={PropDetails} />

                <Drawer.Screen name="Search" component={Search} />
               
     </Drawer.Navigator>
        
    );
}