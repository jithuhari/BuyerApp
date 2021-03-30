import React,{ useState} from 'react';
import {StyleSheet, View, Text, Image, ScrollView,TouchableOpacity, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../config/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';
import IconTile from '../../components/Icon_Tile';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default function Viewstate(){
  const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);
      const [State, setState] = useState([
        {no: '',  name: '' ,key:'1'},
        {no: '1',  name: 'Andaman and Nicobar Island'  ,key:'2'},
        {no: '2',  name: 'Andhra Pradesh'  ,key:'3'},
        {no: '3',  name: 'Arunachal pradesh'  ,key:'4'},
        {no: '4',  name: 'Assam' ,key:'5'},
        {no: '5',  name: 'Bihar'  ,key:'6'},
        {no: '6',  name: 'Chandigarh'  ,key:'7'},
        {no: '7',  name: 'Chhattisgarh'  ,key:'8'},
        {no: '8',  name: 'Dadra and Nagar Haveli'  ,key:'9'},
        {no: '9',  name: 'Daman and Diu'  ,key:'10'},
        {no: '10',  name: 'Delhi'  ,key:'11'},
        {no: '11',  name: 'Goa'  ,key:'12'},
        {no: '12',  name: 'Gujart'  ,key:'13'},
        {no: '13',  name: 'Haryana'  ,key:'14'},
        {no: '14',  name: 'Himachal Pradesh'  ,key:'15'},
        {no: '15',  name: 'Jammu and Kashmir'  ,key:'16'},
        {no: '16',  name: 'Jharkhand'  ,key:'17'},
        {no: '17',  name: 'Karnataka'  ,key:'18'},

        {no: '18',  name: 'Kerala'  ,key:'19'},
        {no: '19',  name: 'Lakshadweep'  ,key:'20'},
        {no: '20',  name: 'Ladakh'  ,key:'21'},
        {no: '21',  name: 'Madhya Pradesh'  ,key:'22'},
        {no: '22',  name: 'Maharashtra'  ,key:'23'},
        {no: '23',  name: 'Manipur'  ,key:'24'},
      ]);
        return(
          <Modal
          isVisible={true}
          style={{margin:0}}
          backdropOpacity={0.0}>
            <View style={styles.MainView}>
                {/* AppBar */}
                <View style={styles.header}>
                  <View style={styles.titleBox}>
                  <TouchableOpacity onPress={()=> navigation.goBack(null)}>
                        <MaterialIcons name="arrow-back-ios"size={25}/>
                            </TouchableOpacity>
                  <Text style={styles.headerText}>Properties over State</Text>

                  <TouchableOpacity  onPress={() => {setModalVisible(true);}} >
                      <AntDesign name="menuunfold" size={25} style={styles.icon} />
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
                    <TouchableOpacity  style={{right:110}} >
                    <AntDesign style={styles.optionButton} name="menuunfold" size={25} color={colors.secondary}/>
                  </TouchableOpacity>
                  <TouchableOpacity  style={{left:90}} onPress={()=> navigation.goBack(null)} >
                  <AntDesign name="right" size={20} color={colors.secondary}/></TouchableOpacity>
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


{/* body */}
  <ScrollView>
       <View style={styles.containerView}>
                  <View style={{backgroundColor:colors.buttonColor,width:'90%',flexDirection:'row',position:'absolute',top:10,marginLeft:6,marginRight:16,padding:5}}>
                    <Text style={{fontSize:14,color:'#fff',fontWeight:'bold',left:5}}>#</Text>
                    <Text style={{marginHorizontal:25,color:'#fff',fontWeight:'bold'}}>State</Text>
                  </View>
                  
                  {State.map((item)=>{
                   return (
                      <View key={item.key}>
                          <View style={styles.RowView}>
                            <Text style={styles.StateList}>  
                              {item.no}
                            </Text>
                            <Text style={styles.StateList}>  
                              {item.name}
                            </Text>
                       </View>
                     </View>
                      
                   )
                  })}
                    
                <Image  style={styles.imgStyle} source={require('../../assets/images/Building.png')}/> 

                  </View>
              
                </ScrollView>
            </View>
        </Modal>
        );
    }
  const styles = StyleSheet.create({
    MainView:{
      flex:1,
      backgroundColor:colors.background
    },
    //header
    header: {
      backgroundColor:colors.background,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      height:40,
      marginTop:20
    },
    titleBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 10,
    },
    headerText: {
      fontSize: 20,
      fontWeight:'bold',
      color:colors.buttonColor,
      // alignSelf: 'center',
      marginHorizontal:20
    }, 
  icon:{
      color:colors.buttonColor,
    left:30
  },
  
containerView:{
     margin:15,
      backgroundColor:colors.background,
      fontWeight:'bold',
      elevation:2,
      borderRadius:10,
      
    },
 RowView:{
      flexDirection:'row'
    },

StateList:{
      margin:10,
      borderRadius:10,
      color:colors.buttonColor,
      marginLeft:16
      
    },
mapview:{
  flexDirection:'row',
  height:290,
  width:350,
  justifyContent:'center'
},

imgStyle:{
  marginTop:15,
  height:250,
  width:280
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
  paddingTop:80,
  paddingLeft:30,
 
},
  
});