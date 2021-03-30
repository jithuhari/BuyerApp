import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Image,
    TouchableWithoutFeedback,
    ScrollView,TouchableOpacity,Switch
} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import Colors from '../config/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CustomDrawerContent = ({ navigation, ...props }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={{ flex: 1, backgroundColor:Colors.background}}>
            <View style={{padding:20}}>
            <TouchableOpacity onPress={()=> navigation.goBack(null)}>
                <AntDesign name="left" size={20} color={Colors.secondary}/></TouchableOpacity>
                <View  style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:20,color:Colors.secondary,fontWeight:'bold'}} >Hi,John</Text>
                <Text style={{fontSize:20,color:Colors.secondary,}}>Welcome!</Text>
                </View>
                </View>

                <View style={styles.drawerContainer}>
               <View style={{justifyContent:'center',alignItems:'center',bottom:25}}>
                   <FontAwesome name="user-circle" size={60} color={Colors.secondary}/>
                   
                   </View> 
                   <View style={{justifyContent:'center',alignItems:'center',bottom:18,}}>
                       <Text style={{fontWeight:'bold',color:Colors.secondary,fontSize:18}}>John Smith</Text>
                       <Text style={{color:Colors.secondary,fontSize:14}}>jsmith@example.com</Text>
                       <Text style={{color:Colors.secondary,fontSize:14}}>Delhi,india</Text>
                   </View>
                </View>

            <DrawerContentScrollView {...props}>
                <View style={styles.drawer}>

                    <DrawerItem
                        // style={styles.drawerItemStyle}
                        {...props}
                        icon={({ color, size }) => (<Image source ={require('../assets/icons/bids.png')} style={styles.icons}/>)
                        }
                       inactiveTintColor={Colors.secondary}
                        label="YourBids"
                         onPress={() => navigation.navigate('YourBids')}
                    />
                   
                    <DrawerItem
                        // style={styles.drawerItemStyle}
                        {...props}
                        icon={({ color, size }) => (<Image source ={require('../assets/icons/fav.png')} style={styles.icons}/>)}
                        inactiveTintColor={Colors.secondary}
                        label="Favourites"
                        onPress={() => navigation.navigate('Favourites')}
                    />
                    
                    <DrawerItem
                        // style={styles.drawerItemStyle}
                        {...props}
                        icon={({ color, size }) => (<Image source ={require('../assets/icons/edit-acc.png')} style={styles.icons}/>)}
                        inactiveTintColor={Colors.secondary}
                        label="Edit account"
                        onPress={() =>navigation.navigate('PersonalDetails')}
                    />
                   <View>
                    <DrawerItem
                        // style={styles.drawerItemStyle}
                        {...props}
                        icon={({ color, size }) => (
                        <Image source ={require('../assets/icons/note.png')} style={styles.icons}/>
                        )}
                        inactiveTintColor={Colors.secondary}
                        label="Notifications"
                        onPress={() =>navigation.navigate('Notifications')}
                    />
                    </View>
                    <View>
                     <Switch
                     style={{bottom:35}}
                        trackColor={{ false: " #1f3b3f", true: "#c8d9d4" }}
                        thumbColor={isEnabled ? "#317773" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                       onValueChange={toggleSwitch}
                        value={isEnabled}
                      />
                    </View>
                    <DrawerItem
                        style={styles.drawerItemStyle}
                        {...props}
                        icon={({ color, size }) => (
                            <Image source ={require('../assets/icons/logout.png')} style={styles.icons}/>
                        )}
                        inactiveTintColor="#970e0e"
                        label="Logout"
                        onPress={() =>navigation.navigate('Logout')}
                        
                    />
                    
                    <View style={{ height: 40 }}></View>
                </View>
            </DrawerContentScrollView>
        </View>
    );
};
export default CustomDrawerContent;
const styles = StyleSheet.create({
    drawer: {
        backgroundColor: '#fff',
        borderRadius: 20,
        height: '90%',
        margin: 20,
        elevation: 10,
        bottom:20
    },
    icons:{
        height:20,
        width:20
    },
    drawerContainer: {
        backgroundColor: '#fff',
        borderRadius: 20,
        height: 130,
        margin: 20,
        elevation: 10,
    },
    drawerItemStyle:{
        bottom:30
    }
});