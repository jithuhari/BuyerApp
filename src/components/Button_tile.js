import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../config/colors';

const ButtonTile = ({title, onpress}) => {
  return (
    <TouchableOpacity onPress={onpress}>
      <View style={styles.section}>
        <Text style={styles.headText}>{title}</Text>
        
      </View>
    </TouchableOpacity>
  );
};

export default ButtonTile ;

const styles = StyleSheet.create({
  headText: {
    color: '#fff',
    textAlign:'center',
    fontSize:18,
    fontWeight:'700',
    top:10
  },
  section: {
   width:200,
    height:50,
    paddingLeft: 5,
    marginTop:10,
    marginBottom:15,
    backgroundColor:colors.buttonColor,
   borderRadius:10
   
    
  },
});