import React, { Component, Profiler,useState,useEffect } from 'react';
import { Text,View,SafeAreaView,StyleSheet,Image, TouchableOpacity,TextInput, ToastAndroid, ScrollView,} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../config/colors'
import ButtonTile from '../../components/Button_tile';

const  RegisterPage = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState ('');
  const [password, setPass] = useState('')
  const [confirmpwd, setconfirmpwd] = useState('');
 
  const [hidePass, setHidePass] = useState(true);
  const [hideconfim, setHideconfirm] = useState(true);


         
    fillTextInput = () => {
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
    else if(confirmpwd == ''){
        ToastAndroid.show('confirm password is required', ToastAndroid.SHORT);
        return false
      }
      else{
        password_mach();
      }
    return true
   
  };

//email validation
  email_validates = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     if (reg.test(email) === false) {

       ToastAndroid.show('invalid email address', ToastAndroid.SHORT);
         return false;
       }
     else {
        navigation.navigate('PersonalDetails')
        console.log("valid email");
     }
   }

//password maching
   password_mach = () => {
    if(password != confirmpwd ){
      ToastAndroid.show("Passwords don't match", ToastAndroid.SHORT);
        return false;
  } else {
    
    console.log('password is matching' );
    
    // return true;
    
  }
}

 

return (
    <View style={{flex:1,backgroundColor:colors.background,}}>

<ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'stretch',
        margin: 10,
      }}
    >
      
          <Text style={{marginLeft:16,fontSize:25,fontWeight:'700',color:'#013220'}}>Welcome</Text>
          <Text style={{marginLeft:16,fontSize:20,fontWeight:'500',color:'#013220'}} >Create an account</Text>
                <View style={styles.circle}>
                <Image style={styles.imLogo}
                        source={require('../../assets/images/dpdp.png')} ></Image>
             
                </View>
            
       {/* Edited field      */}
       <View style={{alignSelf:'center',width:'100%',alignItems:'flex-start',}}>
          <Text style={styles.text}>Email address</Text>
             <View style={styles.sectionStyle}>
             <TextInput
                      onChangeText={(val) => setEmail(val)}
                      placeholder=' enter email address'
                      keyboardType='email-address'
                      underlineColorAndroid="transparent"
                    style={styles.textinput} />
               
                </View> 
      {/* password field */}
         
      <Text  style={styles.text}> password</Text>
              <View  style={styles.sectionStyle}>
              <TextInput
                    onChangeText={(val) => setPass(val)}
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
            />
              </TouchableOpacity>
              
                </View> 
              
                <Text style={styles.text}>confirm password</Text>
               <View  style={styles.sectionStyle}>
               <TextInput
                    onChangeText={(val) =>setconfirmpwd(val)}
                    placeholder='enter password'
                    returnKeyType='go'
                    secureTextEntry={hideconfim ? true : false}
                    autoCorrect={false}
                    style={styles.textinput}
                  />
              <TouchableOpacity  style={styles.touachablepassword} >
              <Icon
              name={hideconfim ? 'eye-slash' : 'eye'}
              size={15}
              style={styles.icon}
              onPress={() => setHideconfirm(!hideconfim)}
            />
              </TouchableOpacity>
              </View> 


          </View>

          <View style={{alignItems:'center',marginVertical:10}}>
                  <ButtonTile title="CREATE ACCOUNT"   onpress={fillTextInput} />
                   </View>

             

            {/* footer */}
            <View style={styles.bottomview}> 
                        <Text>Already have an account?</Text>
                       <TouchableOpacity onpress={() => navigation.navigate('Loginscreen')}
                       style={{alignItems:'center'}}>
                         <Text style={{fontSize:14,color:colors.secondary}}>Login</Text></TouchableOpacity>
                        </View>



</ScrollView>
    </View>

)
};

export default RegisterPage;

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
    marginHorizontal:30,
   color:colors.secondary,
     
  },
    sectionStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
      margin: 10,
    },

textinput:{
    flex:1,
    padding:10,
    marginLeft:16,
    marginRight:16,
    borderBottomWidth:1,
    borderBottomColor:'#013220',
  },
  bottomview:{
      marginVertical:40,
      alignSelf:'center',
   },
  //password show and hide     
touachablepassword: {
    position: 'absolute',
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