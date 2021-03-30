import React, { Component, } from 'react';
import { Text,View,SafeAreaView,StyleSheet,Image, TouchableOpacity,ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../config/colors';
import ButtonTile from '../../components/Button_tile'

const  Firstscreen = () => {
    const navigation = useNavigation();
        return (
    <View style={styles.container}>
       
        <ImageBackground style={styles.background}
                   source={require('../../assets/images/background.png')} >
                
                <View style={{marginVertical:140}}>
                  <View style={styles.circle}>
                   <Image style={styles.imLogo}
                        source={require('../../assets/images/logofinal.png')} ></Image>
                   </View>
                   

                   <View style={{ alignSelf:'center',marginVertical:20}}> 
                             <ButtonTile title="LOGIN" onpress={() => navigation.navigate('Loginscreen')} />
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
                               <Text style={styles.headText}> REGISTER</Text>
                           </TouchableOpacity>

                        </View>

                        </View>
                        
    </ImageBackground>
                        
    </View>

)
};

export default Firstscreen;

const styles = StyleSheet.create({
     container:{
            flex:1,
            flexDirection:'column',
            justifyContent:'center',
            backgroundColor:colors.background
           },
    background:{
                flex:1,
                resizeMode:'cover',
                position:'relative',
                width: '100%',
                height: '109%',
                alignSelf:'center',
               },
     imLogo:{
            height:190,
            width:190,
            borderRadius: 150,
        },
     circle: {
          width: 190,
          height: 190,
          borderRadius: 100 / 1,
          alignSelf:'center'
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
            marginTop:10,
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