import React,{useState} from 'react';
import {View,TouchableOpacity,StyleSheet,Text, ScrollView,Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BoxContainer from '../components/Box_Container';
import Colors from '../config/colors';
import Modal from 'react-native-modal';
import IconTile from '../components/Icon_Tile';


const Favourites =({navigation})=>{
    const [modalVisible, setModalVisible] = useState(false);
    return(
        <Modal
        isVisible={true}
        style={{margin:0}}
        backdropOpacity={0.0}>
        <View style={styles.mainContainer}>
            <ScrollView>
                <View style={styles.headerContainer}>
                        <TouchableOpacity  style={styles.circle} >
                        <Image style={styles.imLogo} source={require('../assets/images/dpdp.png')} ></Image>
                        </TouchableOpacity>
                            <View style={styles.innerContainer}>
                                <View style={styles.nameContainer}>
                                    <Text style={styles.headerHeading}>Favourites</Text>
                                  
                                </View>
                        
                            </View>
                            <TouchableOpacity  onPress={() => {setModalVisible(true);}}>
                                <AntDesign style={styles.optionButton} name="menuunfold" 
                                size={25} style={{marginRight:16}} color={Colors.secondary} />
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

            <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'space-between',bottom:40}}>
                    <TouchableOpacity  style={{right:100}} onPress={()=> navigation.goBack(null)}>
                    <AntDesign style={styles.optionButton} name="menuunfold" size={25} color={Colors.secondary}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=> navigation.goBack(null)} style={{left:90}}>
                  <AntDesign name="right" size={20} color={Colors.secondary}/></TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',bottom:30}}>
                    <IconTile data={require('../assets/icons/icon5.jpg')} title="Guidelines"  onPress={() => navigation.navigate('Guidelines')}/>
                    <IconTile data={require('../assets/icons/icon2.jpg')} title="Disclaimer" onPress={() => navigation.navigate('Disclaimer')} />
                    <IconTile data={require('../assets/icons/icon9.jpg')} title="Residential property"  onPress={() => navigation.navigate('Residential')}/>
                    
                </View>
                <View style={{flexDirection:'row',bottom:30}}>
                    <IconTile data={require('../assets/icons/icon16.jpg')} title="Commercial property"  onPress={() => navigation.navigate('Commercial')}  />
                    <IconTile data={require('../assets/icons/icon6.jpg')} title="Industrial property" onPress={() => navigation.navigate('Industrial')}/>
                    <IconTile data={require('../assets/icons/icon14.jpg')} title="Agricultural property"  onPress={() => navigation.navigate('Agricultural')}/>
                    
                </View>
                <View style={{flexDirection:'row',bottom:30}}>
                    <IconTile data={require('../assets/icons/icon8.jpg')} title="property over state" onPress={() => navigation.navigate('ViewState')} />
                    <IconTile data={require('../assets/icons/icon15.jpg')} title="Participating Banks" onPress={() => navigation.navigate('Bank')}/>
                    <IconTile data={require('../assets/icons/icon3.jpg')} title="FAQ" onPress={() => navigation.navigate('FAQ')}/>
                    
                </View>
                <View style={{flexDirection:'row',bottom:30}}>
                    <IconTile data={require('../assets/icons/icon11.jpg')} title="Suggestions" onPress={() => navigation.navigate('Suggestions')} />
                    <IconTile data={require('../assets/icons/icon1.jpg')} title="Contact Us"  onPress={() => navigation.navigate('Contactus')}/>
                    <IconTile data={require('../assets/icons/icon13.jpg')} title="About"  onPress={() => navigation.navigate('About')}/>
                    
                </View>
              
                </View>
                </View> 
            </Modal>

                        <View style={{flexDirection:'column',}}>

                            <View style={{flexDirection:'row',justifyContent:'center'}}>
                            <BoxContainer data={require('../assets/images/banner1.jpg')} 
                            title=" 3 star hotel" subtitle="Banglore,India"></BoxContainer>
                            <BoxContainer data={require('../assets/images/banner2.jpg')} 
                            title=" 3 star hotel" subtitle="Banglore,India"></BoxContainer>
                            </View>

                            <View style={{flexDirection:'row',justifyContent:'center'}}>
                            <BoxContainer data={require('../assets/images/banner2.jpg')} 
                            title=" 3 star hotel" subtitle="Banglore,India"></BoxContainer>
                            <BoxContainer data={require('../assets/images/banner1.jpg')} 
                            title=" 3 star hotel" subtitle="Banglore,India"></BoxContainer>
                            </View>

                            <View style={{flexDirection:'row',justifyContent:'center'}}>
                            <BoxContainer data={require('../assets/images/banner2.jpg')} 
                            title=" 3 star hotel" subtitle="Banglore,India"></BoxContainer>
                            <BoxContainer data={require('../assets/images/banner1.jpg')} 
                            title=" 3 star hotel" subtitle="Banglore,India"></BoxContainer>
                            </View>

                            <View style={{flexDirection:'row',justifyContent:'center'}}>
                            <BoxContainer data={require('../assets/images/banner2.jpg')} 
                            title=" 3 star hotel" subtitle="Banglore,India"></BoxContainer>
                            <BoxContainer data={require('../assets/images/banner1.jpg')} 
                            title=" 3 star hotel" subtitle="Banglore,India"></BoxContainer>
                            </View>

                        </View>
                        </ScrollView>
            </View>
    </Modal>
    );
};

export default Favourites;

const styles=StyleSheet.create({
    mainContainer:{
        backgroundColor:'#e1eae7',
        height:'100%',
        
    },
    headerContainer: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor:Colors.background,
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
        width: '70%',
        alignItems: 'center'
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
      optionButton: {
        paddingRight: 20,
        paddingLeft: 20,
         paddingVertical: 20,
      
     },
});