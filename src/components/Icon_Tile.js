
import React, {useState} from 'react';
import { StyleSheet,View,Image,Text,TouchableOpacity} from 'react-native';
import Colors from '../config/colors';
const IconTile =({data,title,onPress}) => 
{
  
 
return (
   <View style={styles.mainContainer}>
       <TouchableOpacity onPress={onPress}>
        <View style={styles.IcoBboxContainer}>
      <Image style={styles.IconImgContainer} source={data}/>
      <Text style={styles.text}>{title}</Text>
      </View>
      </TouchableOpacity>
  </View>
    );

};

const styles = StyleSheet.create({
    mainContainer:{
        padding:10
    },
    IcoBboxContainer:{
      width:70,
      height:70,
      margin: 0,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#f0f5f5',
      borderRadius:20,
    },
    IconImgContainer:{
     marginTop:10,
      width:30,
      height:30,
      borderRadius:10,
     },
     
    text:{
     color:'black',
      fontWeight:'bold',
      color: '#003366',
      justifyContent:'center',
      textAlign:'center',
      fontSize:10
     },
    

});


export default IconTile;

















