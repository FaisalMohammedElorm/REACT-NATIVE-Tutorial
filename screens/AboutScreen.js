import { View, Text, Button } from 'react-native'
import React from 'react'

const AboutScreen = ({ route, navigation}) => {
  const { name } = route.params;
  return (
    <View style={{flex:1, alignItems:"center", marginTop:300}}>
      <Text style={{fontSize:35}}>About { name }</Text>
<Button title="Update the name" onPress={() => navigation.setParams({name: "CodeVolution"})}/>
<Button title="Go back with data" onPress={() => navigation.navigate("Home", { result: "Data from about"})}/>


    </View>
  )
}

export default AboutScreen