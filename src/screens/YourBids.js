import React from 'react';
import {View,StyleSheet,TouchableOpacity,Text,Image,ScrollView} from 'react-native';
import Colors from '../config/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

const YourBids = ({navigation}) =>
{
    return(

        <View style={styles.mainContainer}>
            <ScrollView>
             {/* header */}
             <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.circle} onPress={()=> navigation.goBack(null)}>
                <AntDesign name="left" size={25} color={Colors.secondary} style={styles.leftarrow}/>
                    </TouchableOpacity>

                            <View style={styles.innerContainer}>
                                <View style={styles.nameContainer}>
                                    <Text style={styles.headerHeading}>Your Bids</Text>
                                  
                                </View>
                        
                            </View>
                            <TouchableOpacity onPress={() => {setModalVisible(true);}}>
                                <AntDesign style={styles.optionButton} name="menuunfold" 
                                size={25}  color={Colors.secondary} style={{marginRight:16}}/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.container}>
                        <View style={{flexDirection:'row',padding:5}}>
                            <Image style={styles.propimage} source={require('../assets/images/prop1.jpg')} />
                            <View style={{flexDirection:'column',padding:10}}>
                                <Text  style={{fontSize:12,}}>Amet minim mollit</Text>
                                <Text  style={{fontSize:12,}}>State: Kerala</Text>
                                 <Text  style={{fontSize:12,}}>District: Idukki</Text>
                                     <Text  style={{fontSize:12,}}>Bank: SBI </Text>
                                     <Text  style={{fontSize:12,}}>Branch: jgfnbng</Text>
                                     <Text style={{fontWeight:'bold',fontSize:12}}>Bidding amount: RS.xxxxxxx/-</Text>
                            </View>
                            <AntDesign name="right" size={25} color={Colors.secondary} style={{alignSelf:'center',right:10}}/>
                            
                        </View>
                        
                        <View style={{flexDirection:'row',padding:5}}>
                            <Image style={styles.propimage} source={require('../assets/images/prop1.jpg')} />
                            <View style={{flexDirection:'column',padding:10}}>
                                <Text  style={{fontSize:12,}}>Amet minim mollit</Text>
                                <Text  style={{fontSize:12,}}>State: Kerala</Text>
                                 <Text  style={{fontSize:12,}}>District: Idukki</Text>
                                     <Text  style={{fontSize:12,}}>Bank: SBI </Text>
                                     <Text  style={{fontSize:12,}}>Branch: jgfnbng</Text>
                                     <Text style={{fontWeight:'bold',fontSize:12}}>Bidding amount: RS.xxxxxxx/-</Text>
                            </View>
                            <AntDesign name="right" size={25} color={Colors.secondary} style={{alignSelf:'center',right:10}}/>
                            
                        </View>
                        <View style={{flexDirection:'row',padding:5}}>
                            <Image style={styles.propimage} source={require('../assets/images/prop1.jpg')} />
                            <View style={{flexDirection:'column',padding:10}}>
                                <Text  style={{fontSize:12,}}>Amet minim mollit</Text>
                                <Text  style={{fontSize:12,}}>State: Kerala</Text>
                                 <Text  style={{fontSize:12,}}>District: Idukki</Text>
                                     <Text  style={{fontSize:12,}}>Bank: SBI </Text>
                                     <Text  style={{fontSize:12,}}>Branch: jgfnbng</Text>
                                     <Text style={{fontWeight:'bold',fontSize:12}}>Bidding amount: RS.xxxxxxx/-</Text>
                            </View>
                            <AntDesign name="right" size={25} color={Colors.secondary} style={{alignSelf:'center',right:10}}/>
                            
                        </View>
                        <View style={{flexDirection:'row',padding:5}}>
                            <Image style={styles.propimage} source={require('../assets/images/prop1.jpg')} />
                            <View style={{flexDirection:'column',padding:10}}>
                                <Text  style={{fontSize:12,}}>Amet minim mollit</Text>
                                <Text  style={{fontSize:12,}}>State: Kerala</Text>
                                 <Text  style={{fontSize:12,}}>District: Idukki</Text>
                                     <Text  style={{fontSize:12,}}>Bank: SBI </Text>
                                     <Text  style={{fontSize:12,}}>Branch: jgfnbng</Text>
                                     <Text style={{fontWeight:'bold',fontSize:12}}>Bidding amount: RS.xxxxxxx/-</Text>
                            </View>
                            <AntDesign name="right" size={25} color={Colors.secondary} style={{alignSelf:'center',right:10}}/>
                            
                        </View>
                        <View style={{flexDirection:'row',padding:5}}>
                            <Image style={styles.propimage} source={require('../assets/images/prop1.jpg')} />
                            <View style={{flexDirection:'column',padding:10}}>
                                <Text  style={{fontSize:12,}}>Amet minim mollit</Text>
                                <Text  style={{fontSize:12,}}>State: Kerala</Text>
                                 <Text  style={{fontSize:12,}}>District: Idukki</Text>
                                     <Text  style={{fontSize:12,}}>Bank: SBI </Text>
                                     <Text  style={{fontSize:12,}}>Branch: jgfnbng</Text>
                                     <Text style={{fontWeight:'bold',fontSize:12}}>Bidding amount: RS.xxxxxxx/-</Text>
                            </View>
                            <AntDesign name="right" size={25} color={Colors.secondary} style={{alignSelf:'center',right:10}}/>
                            
                        </View>
                        <View style={{flexDirection:'row',padding:5}}>
                            <Image style={styles.propimage} source={require('../assets/images/prop1.jpg')} />
                            <View style={{flexDirection:'column',padding:10}}>
                                <Text  style={{fontSize:12,}}>Amet minim mollit</Text>
                                <Text  style={{fontSize:12,}}>State: Kerala</Text>
                                 <Text  style={{fontSize:12,}}>District: Idukki</Text>
                                     <Text  style={{fontSize:12,}}>Bank: SBI </Text>
                                     <Text  style={{fontSize:12,}}>Branch: jgfnbng</Text>
                                     <Text style={{fontWeight:'bold',fontSize:12}}>Bidding amount: RS.xxxxxxx/-</Text>
                            </View>
                            <AntDesign name="right" size={25} color={Colors.secondary} style={{alignSelf:'center',right:10}}/>
                            
                        </View>
                        <View style={{flexDirection:'row',padding:5}}>
                            <Image style={styles.propimage} source={require('../assets/images/prop1.jpg')} />
                            <View style={{flexDirection:'column',padding:10}}>
                                <Text  style={{fontSize:12,}}>Amet minim mollit</Text>
                                <Text  style={{fontSize:12,}}>State: Kerala</Text>
                                 <Text  style={{fontSize:12,}}>District: Idukki</Text>
                                     <Text  style={{fontSize:12,}}>Bank: SBI </Text>
                                     <Text  style={{fontSize:12,}}>Branch: jgfnbng</Text>
                                     <Text style={{fontWeight:'bold',fontSize:12}}>Bidding amount: RS.xxxxxxx/-</Text>
                            </View>
                            <AntDesign name="right" size={25} color={Colors.secondary} style={{alignSelf:'center',right:10}}/>
                            
                        </View>
                        <View style={{flexDirection:'row',padding:5}}>
                            <Image style={styles.propimage} source={require('../assets/images/prop1.jpg')} />
                            <View style={{flexDirection:'column',padding:10}}>
                                <Text  style={{fontSize:12,}}>Amet minim mollit</Text>
                                <Text  style={{fontSize:12,}}>State: Kerala</Text>
                                 <Text  style={{fontSize:12,}}>District: Idukki</Text>
                                     <Text  style={{fontSize:12,}}>Bank: SBI </Text>
                                     <Text  style={{fontSize:12,}}>Branch: jgfnbng</Text>
                                     <Text style={{fontWeight:'bold',fontSize:12}}>Bidding amount: RS.xxxxxxx/-</Text>
                            </View>
                            <AntDesign name="right" size={25} color={Colors.secondary} style={{alignSelf:'center',right:10}}/>
                            
                        </View>
                          
                           
       </View>
       </ScrollView>
      </View>
    );
};

export default YourBids;

const styles=StyleSheet.create({
    mainContainer:{
        backgroundColor:Colors.background,
        height:'100%'
    },
    container:{
        backgroundColor:'#E5E5E5',
    //    height:'100%',
       width:330,
       borderRadius:20,
       justifyContent:'center',
       alignSelf:'center'
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
leftarrow:{
 paddingTop:10,
 
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
    propimage:{
        width:100,
        height:100,
        margin:10
    }
})