import React,{useState} from 'react';
import { View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import Colors from '../../config/colors';
import EvilIons from 'react-native-vector-icons/EvilIcons';
import { Divider } from 'react-native-elements';

const Guidlines = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(true);
  return(
<View>
<Modal
                      isVisible={modalVisible}
                      backdropOpacity={0.3}
                      style={{ margin:10,}}
                      animationIn={'fadeInRight'}
                      animationOut={'fadeInRight'}
                      onBackdropPress={() => setModalVisible(false)}>

                <View style={styles.centeredView1}>
                    <View style={styles.modalView1}>
                    <TouchableOpacity style={{justifyContent:'space-between',alignSelf:'flex-end',padding:10}}
                        onPress={() => {setModalVisible(true);}}
                        >
                        <TouchableOpacity style={{alignItems:'flex-end',top:0,padding:10}}
                        onPress={()=> navigation.goBack(null)}
                        >


                            <EvilIons
                               name="close"
                               size={25}
                               flexDirection='row'
                               color={Colors.secondary}
                             
                
                            />
                            </TouchableOpacity>

                        </TouchableOpacity> 

      
                        <Text style={{fontSize:18,fontWeight:'bold',color:Colors.secondary,
                       flexDirection:'row'}}>Guidlines for e-Aution Platform</Text>

<Text style={{padding:10,color:Colors.secondary,fontWeight:'bold'}}>Bidder has to complete following fomalities well in advane:</Text>
      <Text style={styles.styletext}><Text  style={{fontWeight:'bold'}}>Step 1  :</Text> Bidder/Purchaser Registration : Bidder to register on e-Auction Platform using his mobile number and email-id Tutorial Video</Text>

      <Text style={styles.styletext}><Text  style={{fontWeight:'bold'}}>Step 2  :</Text> KYC Verification: Bidder to upload requisite KYC documents. KYC documents shall be verified by e-auction service provider (may take 2 working days).</Text>

      <Text style={styles.guidText1}>Guidlines for e-Aution Platform</Text>
                    <Text style={styles.guidText2}>Bidder has to complete following fomalities well in advane:</Text>
                    <Text style={styles.styletext}><Text  style={{fontWeight:'bold'}}>Step 1  :</Text> Bidder/Purchaser Registration : Bidder to register on e-Auction Platform using his mobile number and email-id Tutorial Video</Text>
                    <Text style={styles.styletext}><Text style={{fontWeight:'bold'}}>Step 2 :</Text> KYC Verification: Bidder to upload requisite KYC documents. KYC documents shall be verified by e-auction service provider (may take 2 working days).</Text>
                    <Text style={styles.styletext}><Text style={{fontWeight:'bold'}}>Step 3 :</Text> Transfer of EMD amount to Bidder Global EMD Wallet : Online/off-line transfer of fund using NEFT/Transfer, using challan generated on e-Auction Platform. Tutorial Video</Text>
                    <Text style={styles.styletext}><Text style={{fontWeight:'bold'}}>Step 4 :</Text> Bidding Process and Auction Results: Interested Registered bidders can bid online on e-Auction Platform after completing Step 1,2 and 3. </Text>

                    <TouchableOpacity ><Text style={styles.stylelink}>Tutorial Video</Text></TouchableOpacity>
                    <Divider style={{borderColor:'#1e90ff',borderWidth:0.5,width:90}}/>
                      </View>
                      </View>

                        </Modal>
</View>

  );
};
export default Guidlines;

const styles=StyleSheet.create({
  centeredView1: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      position:'absolute',
        bottom:30,
     
      paddingHorizontal:10,
      width:'100%',
  },
    modalView1: {
      backgroundColor:Colors.background,
      borderRadius: 10,
      alignItems: "center",
      paddingBottom:30,
      paddingTop:0,
      paddingHorizontal:10
     
    },
    guidText1:{
      fontSize:19,
      fontWeight:'bold',
      color:Colors.secondary,
      alignItems:'center',
     
     },
     guidText2:{
       padding:10,
       color:Colors.secondary,
       fontWeight:'bold'
     },
    
  });