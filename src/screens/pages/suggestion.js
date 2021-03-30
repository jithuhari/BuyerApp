import React,{useState} from 'react';
import {Component} from 'react';
import { View, Text, StyleSheet, ScrollView,TouchableOpacity,Image,StatusBar,TextInput} from 'react-native';
import Modal from 'react-native-modal';
import Colors from '../../config/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IconTile from '../../components/Icon_Tile';

const Suggestion = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    return(
     <View>
        
             <Modal
                      isVisible={true}
                      style={{ margin: 0}}
                      backdropOpacity={0.0}
                      >

                    <View style={styles.centeredView1}>
                    <View style={styles.modalView1}>
                     <View style={styles.page}>
                    {/* header */}
                <View style={styles.headerContainer}>
                   <View style={styles.innerContainer}>
                  <Text style={styles.headerHeading}>Suggestion</Text>
                   </View>
                     <TouchableOpacity  onPress={()=> navigation.goBack(null)}>
                         <AntDesign style={styles.optionButton} name="menuunfold" 
                         size={25} color={Colors.secondary}/>
                     </TouchableOpacity>
                 </View>



<View style={styles.suggForm}>
     <View style={styles.input}>
         <Text style={styles.Textstyle}>Name</Text>
         <TextInput style={styles.placeholderstyle}
            placeholder= "John Smith"
            placeholderTextColor={Colors.secondary}>
        </TextInput>
     </View>


     <View style={styles.input}>
         <Text style={styles.Textstyle}>Email Address</Text>  
         <TextInput style={styles.placeholderstyle}
           placeholder= "jsmith@example.com"
           placeholderTextColor={Colors.secondary}/>
      </View>


    <View  style={styles.input}>
       <Text style={styles.Textstyle}>Mobile Number</Text>
       <TextInput style={styles.placeholderstyle}
           placeholder= "1234567898"
           keyboardType='numeric'
           placeholderTextColor={Colors.secondary}
            />
    </View>


      
             </View>
              {/*view for header end here */}

              {/*inner view */}
            <View>

                <View style={{width: 330,height:600,borderWidth: 1,borderColor: 'white',
                borderRadius: 14,backgroundColor:'#f5f5f5',opacity:0.8}}>
                     <View style={styles.input}>
                         <Text style={styles.Textstyle}>Name</Text>
                         <TextInput style={styles.placeholderstyle}
                            placeholder= "John Smith"
                            
                            placeholderTextColor={Colors.secondary}>
                            
                            

                         </TextInput>
                     </View>


                     <View style={styles.input}>
                         <Text style={styles.Textstyle}>Email Address</Text>  
                         <TextInput style={styles.placeholderstyle}
                           
                           placeholder= "jsmith@example.com"
                           placeholderTextColor={Colors.secondary}/>

                           
                    </View>

     <View style={styles.inputsug}>
            <Text style={styles.Textstyle}>Suggestion:</Text>
            <TextInput style={styles.placeholdersug}
            placeholderTextColor={Colors.secondary}
         placeholder= {"Nulla Lorem mollit cupidatat irure.Laborum maggna\n nulla duis ullamco illum dolor.Voluptate exercitation\n incididunt aliquip deserunt reprehenderit elit"}
           />
    </View>

         <View style={styles.suggButtonContainer}>
        <TouchableOpacity>
        <Text style={styles.resetbtn}>Reset</Text>
        </TouchableOpacity>

        <View style={styles.submitbtncontainer}>
        <TouchableOpacity>
        <Text style={styles.submitbtn}>Submit</Text>
        </TouchableOpacity>
         </View>

        </View>
       
</View>
</View>
</View>
</View>
</View>
</Modal>
</View>
    );
};

export default Suggestion
;
const styles = StyleSheet.create({
    page:{
        backgroundColor: Colors.background,
        alignItems: "center",
       // flex:1
       height:'100%',

        // flex:1,
        padding:20

    },
    input:{
        
        margin:15,
        height:55,
        borderColor:Colors.secondary,
        borderRadius:12,
        borderWidth:1,
        backgroundColor: Colors.background,
        width:300,
       

    },
    inputsug:{
        
        margin:6,
        height:230,
        borderColor:Colors.secondary,
        borderRadius:12,
        borderWidth:1,
        backgroundColor: Colors.background,
        width:300,
        left:10,
      
        

    },
    Textstyle:{
        fontWeight:'bold',
        textAlign:'justify',
        color:Colors.secondary,
        paddingLeft:14,
        paddingTop:4,
        fontSize:15
        

    },
    placeholderstyle:{
        textAlign:'justify',
        paddingLeft:14,
        paddingTop:1
        


    },
    placeholdersug:{
        textAlign:'justify',
        // paddingLeft:14,
        // paddingTop:1,
        padding:10


    },
    centeredview1:{
        flex:1,
        justifyContent:'center',
        alignItems:"center",
        bottom:120,
        position:'absolute',
        left:30,
        width:'100%'
    },
    modalview1:{
        backgroundColor:Colors.background,
        borderRadius:10,
        alignItems:'center',
        paddingBottom:100,
        paddingTop:60,
        paddingLeft:30
    },
    modalText:{
        fontSize:22,
        fontWeight:'bold',
        borderBottomWidth:0.5,
        borderColor:'#fff'


    },
    antstyle:{
        alignItems:'flex-end',
        fontWeight:'bold'
    },
  
    headerContainer: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor:Colors.background,
        alignItems: 'center',
        // justifyContent: 'space-between',
        paddingLeft: 15
    },
    headerHeading: {
        fontSize: 20,
        color:Colors.secondary,
        fontWeight: 'bold',
       alignSelf:'center'
    },
    
     optionButton: {
        paddingRight: 20,
        paddingLeft: 30,
         paddingVertical: 20,
      
     },
  
    innerContainer: {
        flexDirection: 'row',
        marginHorizontal: 2,
        justifyContent: 'center',
        alignSelf: 'center',
        marginHorizontal: 10,
        width: '70%',
        alignItems: 'center'
    },
    suggForm:{
    width: 330,
    height:600,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 14,
    backgroundColor:'#f5f5f5',
    opacity:0.8
    },
    suggButtonContainer:{
    paddingRight:10,
    left:50,
    borderRadius:12,
    backgroundColor:Colors.background,
    borderWidth:0,
    margin:15,
    width:100,
    height:36,
    borderColor:Colors.secondary,
    flexDirection:'row',
    justifyContent:'space-between'
    },
    resetbtn:{
    left:20,
    color:Colors.secondary,
    padding:4,
    fontWeight:'bold',
    fontSize:18
    },
    submitbtncontainer:{
    left:50,
    borderRadius:12,
    backgroundColor:Colors.secondary,
    borderWidth:0,
    margin:15,
    width:120,
    height:36,
    borderColor:Colors.secondary,
    bottom:14
    },
    submitbtn:{
    color:Colors.secondary,
    padding:4,
    left:29,
    fontWeight:'bold',
    fontSize:18,
    color:'white'
    }

});