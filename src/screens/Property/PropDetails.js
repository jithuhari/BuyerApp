import React,{useState} from "react";
import {View,StyleSheet,TouchableOpacity,Text,Dimensions,TextInput} from 'react-native';
import Colors from '../../config/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIons from 'react-native-vector-icons/EvilIcons'
import { SliderBox } from "react-native-image-slider-box";
import { Divider } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import Modal from 'react-native-modal';

const PropDetails = () =>
{
    const Width = Dimensions.get("window").width;
    const Height = Dimensions.get("window").height * 0.25;
    const [modalVisible, setModalVisible] = useState(false);
    const Images = [
       require('../../assets/images/banner2.jpg'),
       require('../../assets/images/banner1.jpg'),
       require('../../assets/images/banner2.jpg'),
       require('../../assets/images/banner1.jpg'),
      ];
    return(
        <View style={styles.mainContainer}>
            <ScrollView>
             {/* header */}
             <View style={styles.headerContainer}>
             <TouchableOpacity   onPress={()=> navigation.goBack(null)} >
                  <FontAwesome name="angle-left" size={30} color={Colors.secondary}/></TouchableOpacity>

                            {/* <View style={styles.innerContainer}>
                                <View style={styles.nameContainer}>
                                    <Text style={styles.headerHeading}>Home</Text>
                                  
                                </View>
                        
                            </View> */}
                            <TouchableOpacity onPress={() => {setModalVisible(true);}}>
                                <AntDesign style={styles.optionButton} name="menuunfold" 
                                size={25} color={Colors.secondary}/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.container}>
                            <Text style={styles.propertyText}>PropertyID : BR099857</Text>
                            
                                 {/* Imageslider starts   */}

                <View style={{alignSelf:'center', height: Height,position:'relative',}}>
                <SliderBox 
                    images={Images}
                    sliderBoxHeight={200}
                    onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                    dotColor="#FFF"
                    inactiveDotColor="#90A4AE"
                    autoplay
                    circleLoop
                   
                      ImageComponentStyle={{borderRadius: 15, width: '95%', marginTop: 5}}/>
     </View>

                     <View style={styles.containerInner}>
                     <Text style={styles.innerText}>State : ANDRA PRADESH</Text>
                        <Text  style={styles.innerText}>District : GUNTUR</Text>
                        <Text  style={styles.innerText}>City : guntur</Text>

                        <Divider style={{ width: '70%',margin:10,color:Colors.background}} />
                    
                        <Text style={styles.propdetails}>Address : UnsurveyedGunturDNo1137,1138 Resurvey DNo1137 BY 1B
                             vacant site Plot No.14,24 extent of 400 sq.yds Nearest Airport/ 
                             Railway/ Bus Stand: guntur</Text>
                             <Text style={styles.propdetails}>Property Type: RESIDENTIAL</Text>
                             <Text style={styles.propdetails}>Property Sub Type: PLOT RESIDENTIAL</Text>
                             <Text style={styles.propdetails}>Type of Title Deed: REGISTERED SALE DEED </Text>
                             <Text style={styles.propdetails}>Status of Possession: SARFAESI PHYSICAL </Text>
                             <Text style={styles.propdetails}>Borrower's Name: M BY S Pavan Cotton Traders</Text>
                             <Text style={styles.propdetails}>Owner's Name: Sri Gude Kotaiah</Text>
                             <Text style={styles.propdetails}>Ownership Type: FREEHOLD</Text>
                             <Text style={styles.propdetails}>Summary Description: vaccant land</Text>

                             <Divider style={{ width: '70%',margin:10,color:Colors.background}} />

                            
                        <Text style={styles.propdetails}>Bank Name: BANK OF BARODA</Text>
                        <Text style={styles.propdetails}>Branch Name: GUNTUR BRANCH </Text>
                        <Text style={styles.propdetails}>Reserve Price Rs: 2880000</Text>
                    </View>
                    
                    <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{fontSize:16}}>Auction Open Date :</Text>
                        <Text style={{fontSize:16}}>10/Feb/2021 02:00:00 PM</Text>
                        </View>
                        <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{fontSize:16}}>Auction Close Date :</Text>
                        <Text style={{fontSize:16}}>10/Feb/2021 06:00:00 PM</Text>
                    </View>

                    <View style={{padding:40,flexDirection:'row',justifyContent:'space-between',}}>
                    <TouchableOpacity style={styles.bannerButton} onPress={() => {setModalVisible(true);}}>
                    <Text style={styles.bannerButtonText} >CONTACT ME</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity style={styles.bannerButton1}>
                    <Text style={styles.bannerButtonText1} >BID</Text>
                    </TouchableOpacity> 
                    </View>
                    <Text style={{color:'#AA0000',textAlign:'center',bottom:30}}> Bidding URL becomes active on the day of auction</Text>
               
</View>
                    <Modal
                      isVisible={modalVisible}
                      backdropOpacity={0.3}
                      style={{ margin:10,}}
                      animationIn={'fadeInRight'}
                      animationOut={'fadeInRight'}
                      onBackdropPress={() => setModalVisible(false)}>
                          
                     <View style={styles.centeredView}>
                   <View style={styles.modalView}>
                   
      <View>
         <View style={styles.innerContainer}>
         <TouchableOpacity style={{position:'absolute',right:10,top:10}} onPress={() => {setModalVisible(false);}}>
                        <AntDesign
                         name = "close"
                           size={20}
                           color={'#317773'}
                           
                        /> 
                    </TouchableOpacity>
         <Text style={styles.text1}>Contact Me</Text>
          <TextInput style= {styles.input}
          underlineColorAndroid="transparent"
           placeholder = {"Name\nJohn Smith"}
   placeholderTextColor = {'#317773'}
          /> 
          <TextInput style= {styles.input}
           underlineColorAndroid="transparent"
           placeholder = {"Email Address\njsmith@example.com"}
           placeholderTextColor = {'#317773'}
          /> 
          <TextInput style= {styles.input}
           underlineColorAndroid="transparent"
           placeholder = {"Mobile Number\n1234567898"}
           placeholderTextColor = {'#317773'}
          /> 
 <View style={{padding:45,flexDirection:'row',justifyContent:'space-between',marginHorizontal:6}}>
 <TouchableOpacity style= {styles.button}>
                          <Text style = {styles.buttonText}>Reset</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style= {styles.button1} onPress={() => {setModalVisible(false);}}>
                          <Text style = {styles.buttonText1}>Submit</Text>
                       </TouchableOpacity>
                    </View>
          </View> 
          </View>



                   </View>
                   </View>
         </Modal>


         </ScrollView>
        </View>
    );
};

export default PropDetails;

const styles=StyleSheet.create({
    mainContainer:{

        backgroundColor:Colors.background,
        height:'100%',
       
    },
    headerContainer: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor:Colors.background,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        
    },
    headerHeading: {
        fontSize: 20,
        color:Colors.secondary,
        fontWeight: 'bold',
        paddingLeft:30
    },
    
     optionButton: {
        paddingRight: 20,
        paddingLeft: 20,
         paddingVertical: 20,
      
     },
    nameContainer: {
        marginLeft: 20
    },
    innerContainer: {
        flexDirection: 'row',
        marginHorizontal: 2,
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginHorizontal: 10,
        width: '70%',
        alignItems: 'center'
    },
    propertyText:{
        color:Colors.secondary,
        fontSize:18,
        fontWeight:'bold',
        paddingVertical:20,
      
    },
    container:{
        backgroundColor:'#A6C1BD',
        height:'100%',
        borderRadius:30,
        },
        containerInner:{
            backgroundColor:'#D3E1DD' ,
           padding:20,
           width:'95%',
           alignSelf:'center'
           
        },
        innerText:{
            color:Colors.secondary,
            fontSize:18,
            
        },
        propdetails:{
            fontSize:16,
            color:Colors.secondary,
        },
        bannerButton:{
            backgroundColor:'#D3E1DD',
            
            width:'40%',
            height: 30,
            borderRadius: 5,
             elevation: 2,
            justifyContent: 'center',
            alignItems: 'center',
            bottom:20,
            
            
        },
        bannerButtonText:{
            color:Colors.secondary,
            fontWeight:'bold',
    
            
        },

        bannerButton1:{
            backgroundColor:Colors.buttonColor,
            width:'40%',
            height: 30,
            borderRadius: 5,
             elevation: 2,
            justifyContent: 'center',
            alignItems: 'center',
            bottom:20,
            
            
        },
        bannerButtonText1:{
            color:'#fff',
            fontWeight:'bold'
            
        },
        text:{
            fontSize:12,
            paddingTop: 30,
            paddingBottom: 2,
            marginBottom:2,
            fontWeight:'normal',
            color:'#317773',
            justifyContent:'flex-start',
            alignItems:'center'
           },
          innerContainer:{
              backgroundColor:'#C8D9D4',
              width: 340,
              height:300,
              top:0,
              bottom:0,
              borderWidth: 2,
              justifyContent:'center',
              alignItems:'center',
              borderRadius: 14,
              borderColor:'#C8D9D4',
          },
          text1:{
            fontSize:23,
            paddingTop: 70,
            paddingBottom: 10,
            marginBottom:0,
            fontWeight:'bold',
            color:'#317773',
            justifyContent:'center',
            alignItems:'center'
           },
       input:{
        padding:6,  
        paddingTop:5,
        maxHeight:95,
        marginVertical:4,
        borderColor:'#317773',
        borderRadius:10,
        borderWidth:0,
        elevation:1,
       backgroundColor:'white',
       opacity:.5,
        width:330,
        left:1,
        right:9,
        top:15,
        bottom:20,
            },
         container: {
                paddingTop: 10,
                 alignItems: 'center',
                 justifyContent: 'center',
                },
                button:{
                  backgroundColor:'#D3E1DD',
                  width:'40%',
                  height: 30,
                  borderRadius: 5,
                   elevation: 2,
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  bottom:20,
                  right:6
                },
                buttonText:{
                  color:'#317773',
                  fontWeight:'bold'
              },
              button1:{
                backgroundColor:'#1F3B3F',
                width:'40%',
                height: 30,
                borderRadius: 5,
                 elevation: 2,
                justifyContent: 'space-around',
                alignItems: 'center',
                bottom:20,
                left:6
            },
            buttonText1:{
                color:'#fff',
                fontWeight:'bold'
            },
            centeredView1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // position:'absolute',
        bottom:120,
        left:30,
        width:'100%',
    },
      modalView1: {
        backgroundColor:Colors.background,
        borderRadius: 10,
        alignItems: "center",
        paddingBottom:100,
        paddingTop:40,
        paddingLeft:30,
       
      },

});