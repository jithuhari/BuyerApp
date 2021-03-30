import React, {useState} from 'react';
import {View,Text,FlatList,StatusBar,ScrollView,TouchableOpacity,StyleSheet} from 'react-native';
import Colors from '../../config/colors';
import UserData from './data';
import BoxContainer from '../../components/Box_Container';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';
import IconTile from '../../components/Icon_Tile';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

 const Agricultural = ({navigation}) => {
    const USERS = new UserData();
    const Frequent_Users = USERS.FrequentUsers;
    const [modalVisible, setModalVisible] = useState(false);
    const renderItem = ({ item }) => (
        <BoxContainer
            data={item.image}
            id={item.id}
            title={item.title}
            subtitle={item.subtitle}
            onPress={() => navigation.navigate('PropDetails')}
            
        />
    );

    return(
        <Modal
        isVisible={true}
        style={{margin:0}}
        backdropOpacity={0.0}>
        
            <View style={{flex:1,backgroundColor:Colors.background}}>
                <StatusBar style={{backgroundColor:Colors.background}} translucent={true} />
                
                    {/* View for header starts here */}
                    <View style={styles.header}>
                        <View style={{flex:1,flexDirection:"row"}}>
                        <TouchableOpacity onPress={()=> navigation.goBack(null)}>
                        <MaterialIcons name="arrow-back-ios"size={25} style={{left:20}}/>
                            </TouchableOpacity>
                            <Text style={styles.textstyle}>Agricultural Properties</Text>
                            <TouchableOpacity  onPress={() => {setModalVisible(true);}}>
                                <AntDesign name="menu-fold" style={styles.iconstyle} size={25}  />
                            </TouchableOpacity>
                        </View>
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

            <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'space-between',bottom:50}}>
                    <TouchableOpacity  style={{right:100}} >
                    <AntDesign style={styles.optionButton} name="menuunfold" size={25} color={Colors.secondary}/>
                  </TouchableOpacity>
                  <TouchableOpacity  style={{left:90}} onPress={()=> navigation.goBack(null)} >
                  <AntDesign name="right" size={20} color={Colors.secondary}/></TouchableOpacity>
            </View>

                <View style={{flexDirection:'row',bottom:30,right:13}}>
                    <IconTile data={require('../../assets/icons/icon5.jpg')} title="Guidelines"  onPress={() => navigation.navigate('Guidelines')}/>
                    <IconTile data={require('../../assets/icons/icon2.jpg')} title="Disclaimer" onPress={() => navigation.navigate('Disclaimer')} />
                    <IconTile data={require('../../assets/icons/icon9.jpg')} title="Residential property"  onPress={() => navigation.navigate('Residential')}/>
                    
                </View>
                <View style={{flexDirection:'row',bottom:30,right:13}}>
                    <IconTile data={require('../../assets/icons/icon16.jpg')} title="Commercial property"  onPress={() => navigation.navigate('Commercial')}  />
                    <IconTile data={require('../../assets/icons/icon6.jpg')} title="Industrial property" onPress={() => navigation.navigate('Industrial')}/>
                    <IconTile data={require('../../assets/icons/icon14.jpg')} title="Agricultural property"  onPress={() => navigation.navigate('Agricultural')}/>
                    
                </View>
                <View style={{flexDirection:'row',bottom:30,right:13}}>
                    <IconTile data={require('../../assets/icons/icon8.jpg')} title="property over state" onPress={() => navigation.navigate('ViewState')} />
                    <IconTile data={require('../../assets/icons/icon15.jpg')} title="Participating Banks" onPress={() => navigation.navigate('Bank')}/>
                    <IconTile data={require('../../assets/icons/icon3.jpg')} title="FAQ" onPress={() => navigation.navigate('FAQ')}/>
                    
                </View>
                <View style={{flexDirection:'row',bottom:30,right:13}}>
                    <IconTile data={require('../../assets/icons/icon11.jpg')} title="Suggestions" onPress={() => navigation.navigate('Suggestions')} />
                    <IconTile data={require('../../assets/icons/icon1.jpg')} title="Contact Us"  onPress={() => navigation.navigate('Contactus')}/>
                    <IconTile data={require('../../assets/icons/icon13.jpg')} title="About"  onPress={() => navigation.navigate('About')}/>
                    
                </View>
                
                </View>
                </View>
            </Modal>

                        
                    {/* Content session starts here */}
                    <View style={styles.content}>
                        <View style={styles.innercontent}>
                           
                            
                                <FlatList
                                    data={Frequent_Users}
                                    keyExtractor={(item) => item.id.toString()}
                                    renderItem={renderItem}
                                    showsVerticalScrollIndicator={false}
                                    horizontal={false}
                                    numColumns={2}
                                />
                               
                            
                        </View>
                    </View>
                    {/* Content session ends here*/}
            </View>
            
       </Modal>
    );
 };
 const styles = StyleSheet.create({

    header: {
        justifyContent:"center",
        alignItems:"flex-start",
        paddingTop:30,
        height:'10%',
    },
// drawer model
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
    paddingTop:80,
    paddingLeft:30,
   
  },
     
   content: {
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"center",
    height:"84%",
    paddingTop:0
    
   },
 
   innercontent:{
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    backgroundColor:Colors.Innercolor,
    borderRadius:20
   },
   textstyle: {
    fontWeight:"bold",
    fontSize:20,
    paddingLeft:'8%',
    start:"15%",
    color:Colors.buttonColor
   },
   iconstyle: {
    color:Colors.buttonColor,
    paddingLeft:50
   }
      
   });
 export default Agricultural;