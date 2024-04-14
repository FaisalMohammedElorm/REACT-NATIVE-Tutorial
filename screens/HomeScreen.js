import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = ({navigation, route}) => {
  // const navigation = useNavigation()
  return (
    <View style={{flex:1, alignItems:"center", marginTop:300}}>
      <Text>HomeScreen</Text>
      <Text>{route.params?.result}</Text>
      <Button title="Go to About" onPress={() => navigation.navigate("About")}/>
    </View>
    
  )
}

export default HomeScreen 