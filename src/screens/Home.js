import React, {useState} from 'react';
import {View,StyleSheet,TouchableOpacity,Dimensions,Text,Image,} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Colors from '../config/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SliderBox } from "react-native-image-slider-box";
import Modal from 'react-native-modal';
import IconTile from '../components/Icon_Tile';
import colors from '../config/colors';

const Home =({ navigation})=>{
    const Width = Dimensions.get("window").width;
    const Height = Dimensions.get("window").height * 0.25;
    const Images = [
       require('../assets/images/banner2.jpg'),
       require('../assets/images/banner1.jpg'),
       require('../assets/images/banner2.jpg'),
       require('../assets/images/banner1.jpg'),
      ];
      const [modalVisible, setModalVisible] = useState(false);
       const [modalVisible1, setModalVisible1] = useState(false);
      const [text, setText] = useState('');
    return(

        <View style={styles.mainContainer}>
            <ScrollView>
                
                {/* header */}
                <View style={styles.headerContainer}>
                <TouchableOpacity  style={styles.circle} onPress={() => navigation.openDrawer()}>
                     <Image style={styles.imLogo} source={require('../assets/images/dpdp.png')} ></Image>
                    </TouchableOpacity>

                            <View style={styles.innerContainer}>
                                <View style={styles.nameContainer}>
                                    <Text style={styles.headerHeading}>Home</Text>
                                  
                                </View>
                        
                            </View>

                            <TouchableOpacity onPress={() => {setModalVisible1(true);}}>
                 <MaterialIcons name="circle-notifications" size={40} color={Colors.secondary}
                 style={{right:40}}
                 />
                 </TouchableOpacity>

                            <TouchableOpacity onPress={() => {setModalVisible(true);}}>
                                <AntDesign style={styles.optionButton} name="menuunfold" 
                                size={25}  color={Colors.secondary} style={{right:10}}/>
                            </TouchableOpacity>
                        </View>

        {/* modal */}
                <Modal
                    isVisible={modalVisible}
                    backdropOpacity={0.3}
                    style={{ margin:10,}}
                    animationIn={'fadeInRight'}
                    animationOut={'fadeInRight'}
                    onBackdropPress={() => setModalVisible(false)}>

                    <View style={styles.centeredView1}>
                    <View style={styles.modalView1}>

            <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'space-between',bottom:30}}>
                    <TouchableOpacity  style={{right:100}} onPress={()=> navigation.goBack(null)} >
                    <AntDesign style={styles.optionButton} name="menuunfold" size={25} color={Colors.secondary}/>
                  </TouchableOpacity>
                  <TouchableOpacity  style={{left:70}} onPress={()=> navigation.goBack(null)} >
                  <AntDesign name="right" size={20} color={Colors.secondary}/></TouchableOpacity>
            </View>

                <View style={{flexDirection:'row',bottom:20,right:10}}>
                    <IconTile data={require('../assets/icons/icon5.jpg')} title="Guidelines"  onPress={() => navigation.navigate('Guidelines')}/>
                    <IconTile data={require('../assets/icons/icon2.jpg')} title="Disclaimer" onPress={() => navigation.navigate('Disclaimer')} />
                    <IconTile data={require('../assets/icons/icon9.jpg')} title="Residential property"  onPress={() => navigation.navigate('Residential')}/>
                    
                </View>
                <View style={{flexDirection:'row',bottom:20,right:10}}>
                    <IconTile data={require('../assets/icons/icon16.jpg')} title="Commercial property"  onPress={() => navigation.navigate('Commercial')}  />
                    <IconTile data={require('../assets/icons/icon6.jpg')} title="Industrial property" onPress={() => navigation.navigate('Industrial')}/>
                    <IconTile data={require('../assets/icons/icon14.jpg')} title="Agricultural property"  onPress={() => navigation.navigate('Agricultural')}/>
                    
                </View>
                <View style={{flexDirection:'row',bottom:20,right:10}}>
                    <IconTile data={require('../assets/icons/icon8.jpg')} title="property over state" onPress={() => navigation.navigate('ViewState')} />
                    <IconTile data={require('../assets/icons/icon15.jpg')} title="Participating Banks" onPress={() => navigation.navigate('Bank')}/>
                    <IconTile data={require('../assets/icons/icon3.jpg')} title="FAQ"  onPress={() => navigation.navigate('FAQ')}/>
                    
                </View>
                <View style={{flexDirection:'row',bottom:20,right:10}}>
                    <IconTile data={require('../assets/icons/icon11.jpg')} title="Suggestions" onPress={() => navigation.navigate('Suggestions')} />
                    <IconTile data={require('../assets/icons/icon1.jpg')} title="Contact Us"  onPress={() => navigation.navigate('Contactus')}/>
                    <IconTile data={require('../assets/icons/icon13.jpg')} title="About"  onPress={() => navigation.navigate('About')}/>
                    
                </View>
                
                </View>
                </View>
            </Modal>

           {/* Imageslider starts   */}

                <View style={{alignSelf:'center', height: Height,position:'relative'}}>
                <SliderBox 
                    images={Images}
                    sliderBoxHeight={200}
                    onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                    dotColor="#FFF"
                    inactiveDotColor="#90A4AE"
                    autoplay
                    circleLoop
                    
                />
                </View>
                    
                    {/* properties */}

                <View style={styles.bannerContentContainer}>
                     <View style={styles.bannerTextContainer}> 
                    <Text style={styles.bannerText}>Amet minim mollit</Text>
                    <Text style={styles.bannerText}> non deserunt</Text>
                    </View>
                    <TouchableOpacity style={styles.bannerButton}>
                    <Text style={styles.bannerButtonText} >Explore</Text>
                    </TouchableOpacity> 
                </View>

                <View style={{flexDirection:'row',}}>
                <View style={{flexDirection:'column',}}>
                        
                    <View style={{flexDirection:'row',paddingHorizontal:10}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Residential')} >
                    <View style={styles.boxContainer}>
                    <Text style={styles.textProperty} >Residential Properties</Text>
                    <Image source={require('../assets/images/residentprop.png')} style={styles.imageProperty}/>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Commercial')}>
                    <View style={styles.boxContainer}>
                    <Text style={styles.textProperty}>Commercial Properties</Text>
                    <Image source={require('../assets/images/commericalprop.png')} style={styles.imageProperty}/>
                    </View>
                    </TouchableOpacity>

                    </View>

                    <View style={{flexDirection:'row',paddingHorizontal:10}}>

                    <TouchableOpacity  onPress={() => navigation.navigate('Industrial')}>
                    <View style={styles.boxContainer}>
                    <Text style={styles.textProperty1}>Industrial Properties</Text>
                    <Image source={require('../assets/images/indusprop.png')} style={styles.imageProperty}/>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Agricultural')}>
                    <View style={styles.boxContainer}>
                    <Text style={styles.textProperty1}>Agricultural Properties</Text>
                    <Image source={require('../assets/images/agriprop.png')} style={styles.imageProperty}/>
                    </View>
                    </TouchableOpacity>

                    </View>

                    <View>
                        <Image source={require('../assets/images/homegirl.png')}
                        style={{resizeMode:'contain',height:250,width:300}}
                        />
                    </View>
                    
                    </View>

                 {/* notifications    */}

              
                 <Modal
                    isVisible={modalVisible1}
                    backdropOpacity={0.3}
                    style={{ margin:10,}}
                    animationIn={'fadeInRight'}
                    animationOut={'fadeInRight'}
                    onBackdropPress={() => setModalVisible1(false)}>

<View style={styles.centeredView}>
            <View style={styles.modalView}>

              <Text style={styles.modalText}>Notifications</Text>
            
                <View style={styles.boxContainerModal}>
                    <Text style={styles.modalText1}>DD/MM/YYYY</Text>
                    <Text style={styles.modalText2}>Amet minim mollit</Text>
                    <Text style={styles.modalText3}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse sit amet volutpat leo, non vulputate arcu.
                     Proin vitae purus nisl. 
                    </Text>
                   <TouchableOpacity><Text style={styles.modalText4}>view more</Text></TouchableOpacity> 
                </View>
                
                <View style={styles.boxContainerModal}>
                    <Text style={styles.modalText1}>DD/MM/YYYY</Text>
                    <Text style={styles.modalText2}>Amet minim mollit</Text>
                    <Text style={styles.modalText3}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse sit amet volutpat leo, non vulputate arcu.
                     Proin vitae purus nisl. 
                    </Text>
                   <TouchableOpacity><Text style={styles.modalText4}>view more</Text></TouchableOpacity> 
                </View>

               
                <TextInput
        style={styles.textInputContainer}
        placeholder={"DD/MM/YYYY"}
        placeholderTextColor={'#FFF'}
        onChangeText={text => setText(text)}
        defaultValue={text}/>
       
       <TouchableOpacity>
           <Text   style={styles.viewText}>View All</Text>
       </TouchableOpacity>

                
                
            </View>
          </View>

                        </Modal>
     

                </View>
               

              </ScrollView>
              </View>
        );
     };

export default Home;

const styles=StyleSheet.create({
    mainContainer:{

        backgroundColor:Colors.background,
        height:'100%'
    },
    headerContainer: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor:colors.background,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15
    },
    headerHeading: {
        fontSize: 20,
        color:Colors.secondary,
        fontWeight: 'bold',
        paddingLeft:30
    },
//header logo
imLogo:{
    height:40,
    width:40,
    borderRadius: 50,
   
 },
circle: {
      width: 40,
      height: 40,
      borderRadius: 100 / 1,
      alignSelf:'center',
      marginVertical:20
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
        width: '60%',
        alignItems: 'center'
    },
    bannerContentContainer:{
        position:'absolute',
        top:100
},
    bannerTextContainer:{
        padding:20
    },
    bannerText:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold'
    },
    bannerButton:{
        backgroundColor:Colors.secondary,
        width:80,
        height: 30,
        borderRadius: 5,
         elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
        bottom:20,
        left:30
        
    },
    bannerButtonText:{
        color:'#fff',
        
    },
    boxContainer:{
        width:100,
        height:100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#daebe6',
        borderRadius:20,
        marginTop:60,
        marginLeft:30,
        
      },
      imageProperty:{
        width:70,
        height:70,
        bottom:20,
       
      },
      textProperty:{
          color:'#fff',
          bottom:40,
          fontSize:15,
          fontWeight:'bold',
          paddingLeft:10
        },
      textProperty1:{
        color:'#fff',
        bottom:40,
        fontSize:15,
        fontWeight:'bold',
        paddingLeft:10
        
    },
      notificationIcon:{
          left:40,
          padding:10
      },
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
        position:'absolute',
        bottom:100,
        right:20,
        top:30
    },
      modalView: {
        backgroundColor:Colors.secondary,
        borderRadius: 10,
        alignItems: "center",
       width:200,
       height:500

    
      },

      modalText:{
          fontSize:22,
          fontWeight:'bold',
          borderBottomWidth:0.5,
          borderColor:'#fff'
      },
      boxContainerModal:{
        width:180,
        height:180,
        margin: 8,
        padding:0,
        backgroundColor:'#daebe6',
        borderRadius:5,
        opacity:0.3
      },
      modalText1:{
          color:'#fff',
          paddingLeft:10,
          top:5
      },
      modalText2:{
        fontSize:18,
        color:'#fff',
        paddingLeft:10,
        paddingBottom:10
      },
      modalText3:{
        textAlign:'justify',
        color:'#fff',
        paddingHorizontal:5
      },
      modalText4:{
        position:'absolute',
        right:20,
        color:'#fff'
      },
      centeredView1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position:'absolute',
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
      textInputContainer:{
        width:'90%',
        height:22,
        padding:0,
        backgroundColor:'#daebe6',
        borderRadius:5,
        opacity:0.3,
        
      },
      viewText:{
      width:180,
      margin:6,
      backgroundColor:'#daebe6',
      borderRadius:5,
      opacity:0.3,
      fontWeight:'bold',
      color:'#fff',
     textAlign:'center',
     height:22,
      },
      
});