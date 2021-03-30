import React,{ useState} from 'react';
import {StyleSheet, View, Text, Image, ScrollView,TouchableOpacity,TextInput,FlatList} from 'react-native';
import Modal from 'react-native-modal';
import colors from '../../config/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { useNavigation } from '@react-navigation/native';
import NotificationTile from '../../components/NotificationTile'
import IconTile from '../../components/Icon_Tile';
import UserData from '../Property/data';

const USERS = new UserData();
const  Notification_item = USERS.Notification;

export default function Notifications(){

  const navigation = useNavigation();
  const [drawerVisible, setDrawer] = useState(false)

  const renderItem = ({ item }) => (
  <NotificationTile
       heading={item.heading}
        name={item.name}
        subname={item.subname}
        third={item.third}
        onPress={() => navigation.navigate('NotifiTile')}
     />
  );
 
        return(
            <View style={styles.MainView}>
                {/* AppBar */}
            <View style={styles.header}>
          <TouchableOpacity  style={styles.circle} onPress={() => navigation.openDrawer()}>
              <Image style={styles.imLogo} source={require('../../assets/images/dpdp.png')} ></Image>
        </TouchableOpacity>
          <View style={styles.titleBox}>
              <Text style={styles.headerText}>Notifications</Text>
              <TouchableOpacity    onPress={() => {setDrawer(true);}} >
                 <AntDesign name="menuunfold"  size={25}/>
              </TouchableOpacity>
            </View>
           
      </View>



        {/* modal */}
        <Modal
                    isVisible={drawerVisible}
                    backdropOpacity={0.3}
                    style={{ margin:10,}}
                    animationIn={'fadeInRight'}
                    animationOut={'fadeInRight'}
                   onBackdropPress={() => setDrawer(false)}
                    >

                    <View style={styles.centeredView1}>
                    <View style={styles.modalView1}>

            <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'space-between',bottom:40}}>
                    <TouchableOpacity  style={{right:90}} >
                    <AntDesign style={styles.optionButton} name="menuunfold" size={25} color={colors.secondary}/>
                  </TouchableOpacity>
                  <TouchableOpacity  style={{left:80}} onPress={()=> navigation.goBack(null)} >
                  <AntDesign name="right" size={20} color={colors.secondary}/></TouchableOpacity>
            </View>

            <View style={{flexDirection:'row',bottom:30}}>
                    <IconTile data={require('../../assets/icons/icon5.jpg')} title="Guidelines"  onPress={() => navigation.navigate('Guidelines')}/>
                    <IconTile data={require('../../assets/icons/icon2.jpg')} title="Disclaimer" onPress={() => navigation.navigate('Disclaimer')} />
                    <IconTile data={require('../../assets/icons/icon9.jpg')} title="Residential property"  onPress={() => navigation.navigate('Residential')}/>
                    
                </View>
                <View style={{flexDirection:'row',bottom:30}}>
                    <IconTile data={require('../../assets/icons/icon16.jpg')} title="Commercial property"  onPress={() => navigation.navigate('Commercial')}  />
                    <IconTile data={require('../../assets/icons/icon6.jpg')} title="Industrial property" onPress={() => navigation.navigate('Industrial')}/>
                    <IconTile data={require('../../assets/icons/icon14.jpg')} title="Agricultural property"  onPress={() => navigation.navigate('Agricultural')}/>
                    
                </View>
                <View style={{flexDirection:'row',bottom:30}}>
                    <IconTile data={require('../../assets/icons/icon8.jpg')} title="property over state" onPress={() => navigation.navigate('ViewState')} />
                    <IconTile data={require('../../assets/icons/icon15.jpg')} title="Participating Banks" onPress={() => navigation.navigate('Bank')}/>
                    <IconTile data={require('../../assets/icons/icon3.jpg')} title="FAQ" onPress={() => navigation.navigate('FAQ')}/>
                    
                </View>
                <View style={{flexDirection:'row',bottom:30}}>
                    <IconTile data={require('../../assets/icons/icon11.jpg')} title="Suggestions" onPress={() => navigation.navigate('Suggestions')} />
                    <IconTile data={require('../../assets/icons/icon1.jpg')} title="Contact Us"  onPress={() => navigation.navigate('Contactus')}/>
                    <IconTile data={require('../../assets/icons/icon13.jpg')} title="About"  onPress={() => navigation.navigate('About')}/>
                    </View>
                
                </View>
                </View>
            </Modal>

            <View style={styles.containerView}>
                    <FlatList
                    data={Notification_item}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false} />
                
            
                
                  </View>
                
            </View>
        );
    }
  const styles = StyleSheet.create({
    //header
    header: {
      backgroundColor:colors.background,
      flexDirection: 'row',
      alignItems: 'center',
    },
    header2: {
      backgroundColor:colors.background,
      flexDirection: 'row',
      alignItems: 'center',
      top:20
    },
   imLogo:{
      height:40,
      width:40,
      borderRadius: 50,
      marginLeft:16
   },
  circle: {
        width: 40,
        height: 40,
        borderRadius: 100 / 1,
        alignSelf:'center',
        marginVertical:20
      },
  titleBox: {
      width: '80%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignSelf:'center',
      marginLeft:10
    },
    searchBox: {
      width: '100%',
      justifyContent: 'space-between',
      paddingLeft: 20,
      flexDirection: 'row',
      alignSelf:'center',
    },   

    headerText: {
      fontSize: 20,
      fontWeight:'bold',
      color:colors.buttonColor,
      alignSelf: 'center',
      marginHorizontal:50
    },
  icon:{
      color:colors.secondary,
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
  backgroundColor:colors.background,
  borderRadius: 10,
  alignItems: "center",
  paddingBottom:100,
  paddingTop:40,
  paddingLeft:30,
 
},
MainView:{
      height:'100%',
      backgroundColor:colors.background
    },
containerView:{
      margin:'3%',
      height:'98%',
      backgroundColor:colors.MapContainerColor,
      borderRadius:10
    },
    imgStyle:{
      marginTop:15,
      height:250,
      width:280
    },
    ViewList:{
      margin:15,
      backgroundColor:colors.listColor,
      borderRadius:10,
      color:colors.secondary,
      fontWeight:'bold',
      elevation:3
    },
    RowView:{
      flexDirection:'row'
    },
    BankList:{
      margin:10,
      backgroundColor:colors.listColor,
      borderRadius:10,
      color:colors.secondary,
      fontWeight:'bold'
    },
    mapview:{
      flexDirection:'row',
      height:290,
      width:350,
      justifyContent:'center'
    },
    //model
modalContainer:{
  flex:1,
  alignSelf:'center',
  backgroundColor:colors.background

},
display:{
  height: 50,
  borderColor: colors.secondary, 
  borderWidth: 1, 
  borderRadius: 20, 
  marginBottom: 10, 
  width:'90%',
  flexDirection:'row',
  top:10,
  alignSelf:'center'
},
inputtext:{
  textAlign:'center',
  top:10,left:10,
  color:colors.secondary,
  fontWeight:'500'
},
Binput:{
  textAlign:'center',
  top:10,left:10,
  color:colors.secondary,
  fontWeight:'500',
  marginTop:5
},
// 2nd container customElements
rowinput:{
  height: 40,
  borderColor: colors.secondary, 
  borderWidth: 1, 
  borderRadius: 20, 
  width:'90%',
  flexDirection:'row',
  top:10,
  bottom:20,
  alignSelf:'center',
  marginTop:10
},
text:{
  marginHorizontal:15,
  top:10,
  color:colors.secondary,
  fontWeight:'200'
},

});