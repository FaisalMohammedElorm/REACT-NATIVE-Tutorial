import { View, Text , TextInput, StyleSheet} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from  'react-native-web'
import { useState } from 'react'
const App = () => {
  const [name, setName] = useState("")
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} value={name} onChangeText={setName}/>
      <Text style={styles.text}> My name is {name} </Text>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    height: 40,
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,

  },
input: {
height: 40,
margin: 12,
padding: 10,
borderWidth: 1,



},
text: {
fontSize: 30,
padding:10,

}

});

export default App