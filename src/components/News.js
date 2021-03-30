import React, {useState} from 'react';
import {View,Text, TextInput, Button} from 'react-native';
import axios from 'axios';
const NewsCard = ()=>{


   

    const[name ,setName] = useState('namesssssssss')
    
    return(
        
        <View>
           
            <Text>{name}</Text> 
            <TextInput onChangeText={(val)=>setName(val)}> </TextInput>
            <Button onPress={ ()=>

axios.post('http://10.0.2.2:3000/api/admin/register',
{
  email: 'jithuhari@gmail.com',
  password: 'Flintstone',
  
})
.then(function (response) {
  // handle success
  console.log(response.data);
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.then(function () {

})

            } title="Click"></Button>
        </View>
        
    )

}

export default NewsCard