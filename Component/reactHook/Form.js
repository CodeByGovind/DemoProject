import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'

const ContactForm = () => {

  var [username, setUsername] = useState("")
  var [password, setPassword] = useState("")
  const [agree, setAgree] = useState(false)
  console.log(username, password)
  const submit = () => {
    return (username, password)
  }

  return (
    <View style={styles.headerTitle}>
      <Text style={styles.headerTitle1}>Login Form</Text>

      <View>
        <Text style={styles.headerTitle1}>Enter your name :{username}</Text>
        <TextInput style={styles.headerTitle1}
          autoCapitalize="none"
          autoCorrect={false}
          value={username}
          onChangeText={(name) => setUsername(name)} />
      </View>

      <View>
        <Text style={styles.headerTitle1}>Enter your password : {password}</Text>
        <TextInput style={styles.headerTitle1}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          value={password}
          onChangeText={(pass) => setPassword(pass)} />
      </View>


      <TouchableOpacity style={{
        width: 170, height: 80, borderRadius: 10,
        backgroundColor: "green", borderWidth: 3, borderColor: "black", marginTop: 20, alignSelf: 'center', color: agree ? "blue" : "grey"
      }}

        // disabled={!agree}
        onPress={(() => setUsername(username, password))}
      >



        <Text style={{ fontSize: 50, fontWeight: "bold", color: 'white', textAlign: 'center' }}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'blue',
    textAlign: 'auto',
    color: 'white',
    marginTop: 30,
  },
  headerTitle1: {
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'grey',
    textAlign: 'auto',
    color: 'black',
    marginTop: 10,
  }
})
export default ContactForm;