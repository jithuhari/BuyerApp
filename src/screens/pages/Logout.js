import React, { Component, } from 'react';
import { Text,View,SafeAreaView,StyleSheet,Image, TouchableOpacity,ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../config/colors';
import ButtonTile from '../../components/Button_tile'

const  Logoutscreen = () => {
    const navigation = useNavigation();
        return (
    <View style={styles.container}>
      
                <Text style={styles.logout}>You have successfully
                      {'\n'}
                      Logged Out
                  </Text>
                   

                   <View style={{ alignSelf:'center',marginTop:'-10%'}}> 
                             <ButtonTile title="LOGIN" onpress={() => navigation.navigate('Loginscreen')} />

                        <Text style={{color:colors.buttonColor,alignSelf:'center',top:'-2%'}}>OR</Text>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
                               <Text style={styles.headText}>CREATE ACCOUNT</Text>
                           </TouchableOpacity>


                        </View>
                        <View style={{alignSelf:'center',}}>
                        <Image style={{marginHorizontal:50}}
                        source={require('../../assets/images/logoutA.png')} />

                        <Image style={{top:'2%'}}
                        source={require('../../assets/images/logout.png')} />

                        </View>
      
                        
   
                        
    </View>

)
};

export default Logoutscreen;

const styles = StyleSheet.create({
     container:{
            flex:1,
            flexDirection:'column',
            backgroundColor:colors.background
           },
 logout:{
        fontSize:20,
        fontWeight:'bold',
        color:colors.buttonColor,
        textAlign:'center',
        marginVertical:50

    },     
     bottomview:{
            flexDirection:'row',
            marginVertical:50,
            alignSelf:'center',
           },
        button:{
            width:200,
            height:50,
            paddingLeft: 5,
           
            marginBottom:15,
            borderRadius:10,
            borderWidth:2,
            borderColor:colors.buttonColor
        },
        headText: {
            color:colors.buttonColor,
            textAlign:'center',
            fontSize:18,
            fontWeight:'700',
            top:10
          },
       


});