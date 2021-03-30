import React,{useState} from 'react';
import {Component} from 'react';
import { View, Text, StyleSheet, ScrollView,TouchableOpacity,Image,StatusBar} from 'react-native';
import Modal from 'react-native-modal';
import Colors from '../../config/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Contactus = ({navigation}) => {
    return(
  
       
        /*main view */
        <View style={styles.page}>


            {/*view for header */}
            <View  style={{alignItems: 'center',flexDirection:'row',top:10,justifyContent:"space-between",paddingRight:17}}>
        
                <Text style={{fontWeight:'bold',fontSize:19,padding: 10,marginBottom:4,color:Colors.secondary,justifyContent:'space-between',paddingRight:190,left:110}}>Contact us</Text>

               
                <TouchableOpacity style={{alignItems:'flex-end',fontWeight:'bold'}}
                onPress={()=> navigation.goBack(null)}
                > 
                                            <AntDesign
                                                   name = "menuunfold"
                                                   size={20}
                                                   color={Colors.secondary}
                                                   flexDirection='flex-end'
                                                   paddingRight={100}
                                                   
            
                                             />
                    
               </TouchableOpacity>

               
     
      
            </View>
           {/*view for header end here */}
           <View style={{padding:20}}>
               <Text style={{marginBottom:4,color:'black',fontSize:14,lineHeight:23,}}>
                   In case of any further information about a specific property, you may contact 
                   respective Bank through e-mail.</Text>
           </View>
           
           {/*inner view */}
           <View>
               <View style={{width: 340,height:600,borderWidth: 1,borderColor: 'white',borderRadius: 14,backgroundColor:'white',opacity: 0.2,padding:10}}>


                   <Modal
                       isVisible={true}
                       style={{ margin: 0}}
                       backdropOpacity={0.0}
                    >
                         <View style={styles.page}>
            
            {/*view for header */}
             <View  style={styles.mainPage}>
         
                 <Text style={styles.contactText}>Contact us</Text>
 
                
                 <TouchableOpacity style={{alignItems:'flex-end',fontWeight:'bold'}} 
                 onPress={()=> navigation.goBack(null)}> 
                 <AntDesign
                    name = "menuunfold"
                    size={20}
                    color={Colors.secondary}
                    flexDirection='flex-end'
                    paddingRight={100}
                 />
                 </TouchableOpacity>
 
 </View>
          
            <View style={{padding:10}}>
                <Text style={styles.textPara}>In case of any further information about a specific property,
                 you may contact respective Bank through e-mail.</Text>
            </View>
            
            {/*inner view */}
            <View>
                <View style={styles.innerContainer}>
                         
                         <View style={styles.bankName}>
                             <ScrollView
                                   horizontal={true}
                                   contentContainerStyle={{width:400}}
                                   showsHorizontalScrollIndicator={false}>

                                       <View style={{flexDirection:'row',justifyContent:'space-between',padding:5}}>
                                           

                                           <View style={{flexDirection:'column',paddingRight:19}}>
                                               <Text>Name of Bank</Text>

                                               <Text style={styles.bankstyle}>Axis Bank</Text>
                                               <Text style={styles.bankstyle}>Bank of Baroda</Text>
                                               <Text style={styles.bankstyle}>Bank of India</Text>
                                               <Text style={styles.bankstyle}>Canara Bank</Text>
                                               <Text style={styles.bankstyle}>Federal Bank</Text>
                                               <Text style={styles.bankstyle}>HDFC Bank</Text>
                                               <Text style={styles.bankstyle}>ICIC Bank</Text>
                                               <Text style={styles.bankstyle}>IDBI Bank</Text>
                                               <Text style={styles.bankstyle}>Indian Overseas Bank</Text>
                                               <Text style={styles.bankstyle}>Jammu and Kashmir Bank</Text>
                                               <Text style={styles.bankstyle}>Punjab National Bank</Text>
                                               <Text style={styles.bankstyle}>State Bank of India</Text>
                                               <Text style={styles.bankstyle}>South Indian Bank</Text>





                                           </View>

                                           <View style={{flexDirection:'column'}}>
                                               <Text>Email Address</Text>

                                               <Text style={styles.bankstyle}>michelle.rivera@example.com</Text>
                                               <Text style={styles.bankstyle}>dolores.chambers@example.com</Text>
                                               <Text style={styles.bankstyle}>tanya.hill@example.com</Text>
                                               <Text style={styles.bankstyle}>kenzi.lawson@example.com</Text>
                                               <Text style={styles.bankstyle}>deanna.curtis@example.com</Text>
                                               <Text style={styles.bankstyle}>curtis.weaver@example.com</Text>
                                               <Text style={styles.bankstyle}>felicia.reid@example.com</Text>
                                               <Text style={styles.bankstyle}>bill.sanders@example.com</Text>
                                               <Text style={styles.bankstyle}>willie.jennings@example.com</Text>
                                               <Text style={styles.bankstyle}>aima.lawson@example.com</Text>
                                               <Text style={styles.bankstyle}>jessica.hanson@example.com</Text>
                                               <Text style={styles.bankstyle}>jackson.graham@example.com</Text>
                                               <Text style={styles.bankstyle}>nathan.roberts@example.com</Text>

                                           </View>
                                       </View>


                             </ScrollView>
                       </View>
                         </View>
                    </View>
                   </View>
                   </Modal>
               
           
    </View>
    </View>
    </View>

    );
};

export default Contactus;

const styles = StyleSheet.create({
    page:{
        backgroundColor: Colors.background,
        alignItems: "center",
        flex:1
    },
    bankstyle:{
        color:Colors.secondary,
        lineHeight:32
    },

    mainPage:{
    alignItems: 'center',
    flexDirection:'row',
    top:10,
    justifyContent:"space-between",
    paddingRight:17
    },

    contactText:{
    fontWeight:'bold',
    fontSize:19,
    padding: 10,
    marginBottom:4,
    color:Colors.secondary,
    justifyContent:'space-between',
    paddingRight:190,
    left:110
    },

    textPara:{
    padding:10,
    color:'black',
    fontSize:14,
    lineHeight:23,
    alignItems:'center'
    },

    innerContainer:{
    width: 340,
    height:600,
    borderWidth: 1,
    borderColor:'white',
    borderRadius: 14,
    backgroundColor:'white',
     opacity: 0.6,
    padding:10
    },

    bankName:{
    top:30,
    width:320,
    height:470,
    backgroundColor:'#f8f8ff',
    alignItems:'center',
    padding:8,
    borderRadius:14,
   
    }
});