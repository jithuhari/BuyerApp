import React, { Component, Profiler,useState,useEffect } from 'react';
import { Text,View,SafeAreaView,StyleSheet,Image, TouchableOpacity,TextInput,ScrollView} from 'react-native';
import colors from '../../config/colors'
import { useNavigation } from '@react-navigation/native';
import { Container, Header, Content, Form, Item, Picker } from 'native-base';
const  PersonalDetails = () => {
  const navigation = useNavigation();
    const [fname, setfname] = useState ('');
    const [lname, setlname] = useState ('');
    const [display, setdisplay] = useState ('');
    const [birth, setBirth] = useState ('');
    const [number, setnumber] = useState ('');
    const [address, setaddress] = useState ('');
    const [pincode, setpin] = useState ('');
    const [city1, setcity1] = useState ('');

    const [selectedValue, setSelectedValue] = useState("in");
   

return (
    <View style={{flex:1,backgroundColor:colors.background,}}>
         <ScrollView>
        <Text style={{alignSelf:'center',padding:10,margin:10,color:'#000',fontSize:20,fontWeight:'700'}}>Personal Details</Text>
   
             <View style={styles.innercontainer}>
                    <View style={styles.circle}>
                        <Image style={styles.imLogo}
                            source={require('../../assets/images/dpdp.png')} ></Image>
                        <TouchableOpacity style={styles.addphoto}><Text style={{textAlign:'center',padding:10,color:'#fff'}}>Add photo</Text></TouchableOpacity>
                        </View>

            {/* input enter */}
            <View>
                    <View style={styles.sectionStyle}>
                        <View style={styles.viewinput}>
                            <Text style={styles.text}>First name</Text>
                            <TextInput
                            onChangeText={(val) => setfname(val)}
                            underlineColorAndroid="transparent"
                            style={styles.textinput}
                                /></View>
                          <View style={styles.viewinput}>
                          <Text style={styles.text}>Last name</Text>
                        <TextInput
                            onChangeText={(val) => setlname(val)}
                            underlineColorAndroid="transparent"
                            style={styles.textinput}
                             /></View>
                    </View>

                            <View style={styles.display}>
                            <Text style={styles.text}>Display name</Text>
                                <TextInput
                                    onChangeText={(val) => setdisplay(val)}
                                    underlineColorAndroid="transparent"
                                    style={styles.textinput}
                                     /></View>

    {/* 3rd row */}
                        <View style={styles.sectionStyle}>
                            <View style={styles.viewinput}>
                            <Text style={styles.text}>Date of Birth</Text>
                                <TextInput
                                onChangeText={(val) => setBirth(val)}
                                keyboardType='phone-pad'
                                    underlineColorAndroid="transparent"
                                    style={styles.textinput}
                                     /></View>
                            <View style={styles.viewinput}>

                                <Text style={styles.text}>Contry</Text>
                             <Picker
                                  selectedValue={selectedValue}
                                  style={{ position:'absolute',left:10,height: 50, width: '100%', color:colors.secondary,}}
                                  mode='dropdown'
                                  placeholder="Select your SIM"
                                  placeholderStyle={{ color: "#bfc6ea" }}
                                  placeholderIconColor="#007aff"
                                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                                
                                  <Picker.Item label="India" value="in" />
                                  <Picker.Item label="Affghanistan" value="af" />
                                  <Picker.Item label="Albania" value="al" />
                                  <Picker.Item label="Argentina" value="ar" />

                                  <Picker.Item label="Bahamas" value="ba" />
                                  <Picker.Item label="China" value="ch" />
                                  <Picker.Item label="colombia" value="co" />
                                  <Picker.Item label="cuba" value="cu" />
                                  <Picker.Item label="France" value="fr" />
                                  <Picker.Item label="French" value="fren" />

                                  <Picker.Item label="Canada" value="can" />
                                  <Picker.Item label="Libya" value="lib" />
                                  <Picker.Item label="Mexico" value="mexico" />
                                  <Picker.Item label="Singapore" value="singa" />
                                </Picker>

                      </View>
                    </View>
    {/* 4th  row */}
                         <View style={styles.display}>
                            <Text style={styles.text}>Mobile number</Text>
                                <TextInput
                                    onChangeText={(val) => setnumber(val)}
                                    keyboardType="phone-pad"
                                    underlineColorAndroid="transparent"
                                    maxLength={10}
                                    style={styles.textinput}
                                     /></View>
    {/* 5th row */}
                
                        <View style={styles.display}>
                            <Text style={styles.text}>Permanent address</Text>
                                <TextInput
                                    onChangeText={(val) => setaddress(val)}
                                    multiline
                                    underlineColorAndroid="transparent"
                                    style={styles.textinput}
                                     /></View>
                 

    {/* 6th row */}
    <View style={styles.sectionStyle}>
                        <View style={styles.viewinput}>
                            <Text style={styles.text}>Pincode</Text>
                            <TextInput
                            onChangeText={(val) => setpin(val)}
                            underlineColorAndroid="transparent"
                            style={styles.textinput}
                                /></View>
                          <View style={styles.viewinput}>
                          <Text style={styles.text}>City</Text>
                        <TextInput
                            onChangeText={(val) => setcity1(val)}
                            underlineColorAndroid="transparent"
                            style={styles.textinput}
                          />
                          </View>
                    </View>





         </View>
    {/* buttons */}
    <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                
            <TouchableOpacity style={styles.button}>
                <Text style={styles.headText}>Reset</Text>
            </TouchableOpacity>
              {/* 2nd button */}
              <TouchableOpacity onPress={() => navigation.navigate('Mainnavigation')}
                   style={styles.save}>
              <Text style={styles.saveText}>SAVE</Text>
              </TouchableOpacity>

        </View>


      <View style={{height:50}}></View>


 </View>




                <View style={{height:100}}></View>
    </ScrollView>
    </View>

)
};

export default PersonalDetails;

const styles = StyleSheet.create({
 innercontainer:{
    backgroundColor:'#DAE1DF',
    justifyContent:'center',
    borderRadius:20,
    padding:10,
    marginLeft:16,
    marginRight:16,
    elevation:2
 },
  imLogo:{
    height:100,
    width:100,
    borderRadius: 50,
    marginLeft:5
    
    },
    circle: {
      width: 110,
      height: 110,
      borderRadius: 100 / 1,
        alignSelf:'center',
      marginVertical:20
    },
//add photo
addphoto:{
        position:'absolute',
        top:80,
        left:5,
        width:100,
        height:40,
        backgroundColor:colors.secondary,
        opacity:0.7
},
sectionStyle: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical:10,
        height:50,
 },
text:{
        marginHorizontal:20,
        top:2,
        fontSize:12,
        color:'gray'
    },
viewinput:{
    height: 40,
     width:150,
    borderColor: colors.secondary, 
    borderWidth: 1,
     borderRadius: 20,
   },
  display:{
   height: 40,
    borderColor: colors.secondary, 
    borderWidth: 1, 
    borderRadius: 20, 
    marginBottom: 10, 
    width:'100%',
},
textinput:{
            position:'absolute',
            marginLeft:16,
            top:10,
            height:40,
            color:colors.secondary
          },
//reset
button:{
  width:140,
  height:50,
  marginTop:10,
  marginBottom:15,
  borderRadius:10,
  borderWidth:2,
  borderColor:colors.buttonColor,
 
},
headText: {
  color:colors.buttonColor,
  textAlign:'center',
  fontSize:18,
  top:10
},
 
// save button
saveText: {
  color: '#fff',
  textAlign:'center',
  fontSize:18,
  fontWeight:'600',
  top:10
},
save: {
 width:150,
  height:50,
  paddingLeft: 5,
  marginTop:10,
  marginBottom:15,
  backgroundColor:colors.buttonColor,
 borderRadius:10
 
  
},
  
        
 

});