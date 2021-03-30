import React, { Component, Profiler,useState,useEffect } from 'react';
import { Text,View,SafeAreaView,StyleSheet,Image, TouchableOpacity,TextInput, ToastAndroid, ScrollView, KeyboardAvoidingView,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ButtonTile from '../../components/Button_tile';
import colors from '../../config/colors';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const  LoginPage = () => {
  
  const navigation = useNavigation();
        const [email, setEmail] = useState ('');
        const [password, setPass] = useState('');
        const [hidePass, setHidePass] = useState(true);
        
 //email validation
  email_validates = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     if (reg.test(email) === false) {

       ToastAndroid.show('invalid email address', ToastAndroid.SHORT);
         return false;
       }
     else {
       setEmail(true);
       console.log("valid email");
     }
   }


   //fill the textinput field

  const checkTextInput = () => {
    
       if(email == ''){
         ToastAndroid.show('email address is required', ToastAndroid.SHORT);
         return false
       }
       else{
        email_validates();
       }

      if(password == ''){
           ToastAndroid.show('password is required', ToastAndroid.SHORT);
       }
       else {
        navigation.navigate('PersonalDetails')
      }
       return true
 
 };


return (
    <View style={{backgroundColor:colors.background,height:'100%'}}>

          <Text style={{marginLeft:16,fontSize:25,fontWeight:'700',color:'#013220',marginTop:10}}>Welcome Back</Text>
          <Text style={{marginLeft:16,fontSize:20,fontWeight:'500',color:'#013220'}} >Login to continue</Text>
                <View style={styles.circle}>
                <Image style={styles.imLogo}
                        source={require('../../assets/images/dpdp.png')} ></Image>
                </View>
                
        {/* Edited field       */}
  <View style={{alignSelf:'center',width:'100%',}}>
          <KeyboardAvoidingView enabled>
                 <Text style={styles.text}>Email address</Text>
                
                 <View style={styles.sectionStyle}>
                    <TextInput
                          onChangeText={(val) => setEmail({email:val})}
                          placeholder=' enter email address'
                          keyboardType='email-address'
                          underlineColorAndroid="transparent"
                        style={styles.textinput} />
                </View>

                <Text style={styles.text}>Passwords</Text>
                <View style={styles.sectionStyle}>
                
                  <TextInput
                    onChangeText={(val) => setPass({password:val})}
                    placeholder='enter password'
                    returnKeyType='go'
                   secureTextEntry={hidePass ? true : false}
                    autoCorrect={false}
                    style={styles.textinput}
                  />
                  <TouchableOpacity  style={styles.touachablepassword} >
                      <Icon
                          name={hidePass ? 'eye-slash' : 'eye'}
                          size={15}
                          style={styles.icon}
                          onPress={() => setHidePass(!hidePass)}
                        /></TouchableOpacity> 
                </View>
</KeyboardAvoidingView>
   </View>
   
        <TouchableOpacity >
            <Text style={styles.text}>Forgot password?</Text>
        </TouchableOpacity>
   
      


       <View style={{alignItems:'center',marginVertical:10}}>
       
          <ButtonTile title="LOGIN"  
           onpress={checkTextInput}/>
         
           </View>



            {/* footer */}
            <View style={styles.bottomview}> 
                        <Text>Don't have an account</Text>
                       <TouchableOpacity onPress={() => navigation.navigate('Register')}
                       style={{alignItems:'center'}}>
                         <Text style={{fontSize:14,color:colors.secondary}}>Create an account</Text></TouchableOpacity>
                        </View>

    </View>
  // main view close

)
};

export default LoginPage;

const styles = StyleSheet.create({
imLogo:{
    height:100,
    width:100,
    borderRadius: 50,
    marginLeft:5
    
    },
 circle: {
      width: 110,
      height: 110,
      borderRadius: 100 / 1,
       alignSelf:'center',
      marginVertical:20
    },
text:{
        marginHorizontal:35,
        marginVertical:5,
       color:colors.secondary,
        marginTop:5
    },
sectionStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
      margin: 10,
      marginLeft:10,
    },
  textinput:{
    width:300,
    borderBottomWidth:1,
    color:'#000',
    height:50,
   },
 bottomview:{
      marginVertical:40,
      alignSelf:'center',
   },
 
   // hide and show password     
touachablepassword: {
        position: 'absolute',
        top:15,
        right: 20,
        height: 40,
        width: 35,
        padding: 1,
},
  icon: {
    color:colors.secondary,
    height: '100%',
    width: '100%',
    
    },

});