import React from 'react';
import {Component} from 'react';
import { View, Text, StyleSheet, ScrollView,TouchableOpacity,Image,StatusBar} from 'react-native';
import Modal from 'react-native-modal';
import Colors from '../../config/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const About = ({navigation}) => {

     
    
    return(
<View>

                     <Modal 
                      isVisible={true}
                      style={{ margin: 0}}
                      backdropOpacity={0.0}
                      >

                    <View style={styles.centeredView1}>
                    <View style={styles.modalView1}>
                   
  
  
         {/* header */}
         <View style={styles.headerContainer}>
                          <View style={styles.innerContainer}>
                               <Text style={styles.headerHeading}>About</Text>
                          </View>
                            <TouchableOpacity   onPress={()=> navigation.goBack(null)}>
                                <AntDesign style={styles.optionButton} name="menuunfold" 
                                size={25} color={Colors.secondary}/>
                            </TouchableOpacity>
                        </View>
          
          
              <View  style={styles.whiteContainer}>

                 
  
  
   
  
     

                  
                    <Text style={styles.aboutContent}>
            Physiological   respiration  involves  the  mechanisms  that  ensure  that  the  
            composition  of  the  functional  residual  capacity  is  kept  constant,  and 
             equilibrates  with  the  gases  dissolved in the pulmonary capillary blood, and 
             thus throughout the body. Thus, in precise usage, the words breathing and ventilation 
             are hyponyms, not synonyms, of respiration; but this prescription is not consistently 
             followed, even by most health care providers, because the term respiratory rate (RR) is 
             a well-established term in health care, even though it would need to be consistently
              replaced with ventilation rate if the precise usage were to be followed.</Text>



                   
                

                  
                    </View>
                    </View>
                    
                   
                
                    </View>

                  
                  
                  
                    </Modal>
                    
            
                   
          
          </View>

         
          
    
     );
};

export default About;
const styles = StyleSheet.create({
    page:{
        backgroundColor: Colors.background,
         alignItems: "center",
        // flex:1
        height:'100%',
       
        
    },
    headerContainer: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor:Colors.background,
        alignItems: 'center',
        // justifyContent: 'space-between',
        paddingLeft: 15
    },
    headerHeading: {
        fontSize: 20,
        color:Colors.secondary,
        fontWeight: 'bold',
       alignSelf:'center'
    },
    
     optionButton: {
        paddingRight: 20,
        paddingLeft:30,
         paddingVertical: 20,
      
     },
  
    innerContainer: {
        flexDirection: 'row',
        marginHorizontal: 2,
        justifyContent: 'center',
        alignSelf: 'center',
        marginHorizontal: 10,
        width: '70%',
        alignItems: 'center'
    },

      aboutContent:{
        fontSize:15,
        lineHeight: 30,
        color:Colors.secondary,
        textAlign:'justify'
      },
      
    
    centeredView1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position:'absolute',
        top:8,
        padding:0,
        height:'100%'
        
    },
      modalView1: {
        backgroundColor:Colors.background,
        borderRadius: 10,
        alignItems: "center",
        padding:20
        
      },
      aboutContent:{
        fontSize:15,
        lineHeight: 30,
        color:Colors.secondary,
        textAlign:'justify'
      },
      whiteContainer:{
        width: '100%',
        height:'100%',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 14,
        backgroundColor:'white',
        opacity: 0.6,
        padding:20
      }
});