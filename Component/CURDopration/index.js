import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Text, View, TouchableOpacity, TextInput, ScrollView, StyleSheet } from 'react-native'
import { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default class Index extends Component {
  render() {
    return (

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Homepage" component={Homepage} />
          <Stack.Screen name="Update" component={UpdateScreen} />
          <Stack.Screen name="Logout" component={LogoutScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

// ===============================================
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <LinearGradient
        colors={['#33ccff', '#ff99cc']}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}

          >
            <Text style={styles.buttonText}>
              Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}

            onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={styles.buttonText}>
              SignUp
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}
function Homepage({ navigation, route }) {
  const getData = () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Contnt-Type': 'application/json' },

    };

    fetch('http://videhjaiswal.pythonanywhere.com/customer/customer_api/customers', requestOptions)
      .then((response) => response.json())
      .then((json) => {
        console.log('Fetch Api response', json);

      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <LinearGradient
        colors={['#33ccff', '#ff99cc']}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        {/* <Text style={styles.Text}> Login Successfully !!!</Text> */}
        <Text style={styles.Text}> {route.params?.name}</Text>
        <Text style={styles.Text}> {route.params?.gender}</Text>
        <Text style={styles.Text}> {route.params?.account_no}</Text>
        <Text style={styles.Text}> {route.params?.balance}</Text>
        <Text style={styles.Text}> {route.params?.accounttype}</Text>
        <Text style={styles.Text}> {route.params?.email}</Text>
        <Text style={styles.Text}> {route.params?.password}</Text>

        {/* <TouchableOpacity
          style={styles.button}
          // onPress={getData}
          >
          <Text style={styles.buttonText}>
          getData
          </Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Update")}>
          <Text style={styles.buttonText}>
            Update
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { navigation.navigate("Logout"), alert('Are you sure delete your account ?') }}>
          <Text style={styles.buttonText}>
            Logout
          </Text>
        </TouchableOpacity>
      </LinearGradient>

    </View>
  );
}

//=========================================================
function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  var ob = {
    email: email,
    password: password
  }

  const getUser = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ob)
    };
  


    fetch('http://videhjaiswal.pythonanywhere.com/customer/customer_api/customers/login?', requestOptions)
      .then((response) => response.json())
      .then((json) => {
        console.log('Fetch Api response', json);

        if (json.email == email) {
          navigation.navigate("Homepage")
          
        }
        else {
          console.log("error")
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <LinearGradient
        colors={['#33ccff', '#ff99cc']}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>

        <TextInput
          style={styles.TextInput}
          placeholder=" Enter your email   "
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(e) => setEmail(e)}
        />

        <TextInput
          style={styles.TextInput}
          placeholder=" Enter your  Password  "
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={(e) => setPassword(e)}

        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {getUser(),
            navigation.navigate("Homepage")
          }}
        >
          <Text style={styles.buttonText}>
            Login</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

// ==========================
function SignUpScreen({ navigation }) {
  const [name, setName] = useState("")
  const [gender, setGender] = useState("")
  const [account_no, setAccount_no] = useState()
  const [balance, setBalance] = useState()
  const [accounttype, setAccounttype] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // 1st===================
  const postUser = () => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        gender: gender,
        account_no: account_no,
        balance: balance,
        accounttype: accounttype,
        email: email,
        password: password
      })
    };

    fetch('http://videhjaiswal.pythonanywhere.com/customer/customer_api/customers/register', requestOptions)
      .then((response) => response.json())
      .then((json) => {
        console.log('Fetch Api response', json);

      })
      .catch((error) => {
        console.error(error);
      });

  }

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={['#33ccff', '#ff99cc']}
          style={styles.container}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{name}</Text>

          <TextInput
            placeholder=" Enter stud_name  "
            style={styles.TextInput}
            onChangeText={(e) => setName(e)}
          />

          <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 30 }}>{gender} </Text>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder=" Enter Gender  "
            style={styles.TextInput}
            onChangeText={(e) => setGender(e)}

          />
          <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 30 }}>{account_no}</Text>

          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder=" Enter Account_no  "
            style={styles.TextInput}
            onChangeText={(e) => setAccount_no(e)}
          />
          <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 30 }}>{balance} </Text>
          <TextInput
            onChangeText={(e) => setBalance(e)}
            placeholder=" Enter Balance  "
            style={styles.TextInput}
          />
          <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 30 }}>{accounttype}</Text>
          <TextInput
            placeholder=" Enter Accounttype  "
            style={styles.TextInput}
            onChangeText={(e) => setAccounttype(e)}
          />
          <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 30 }}>{email} </Text>
          <TextInput
            placeholder=" Enter setEmail  "
            style={styles.TextInput}
            onChangeText={(e) => setEmail(e)}
          />
          <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 30 }}>{password} </Text>
          <TextInput
            placeholder=" Enter password  "
            secureTextEntry={true}
            style={styles.TextInput}
            onChangeText={(e) => setPassword(e)}
          />

          <TouchableOpacity
            style={styles.button}

            onPress={() => { postUser(), navigation.navigate('Homepage') }}
          >
            {/* ,alert('Register succesfully !!!') */}
            <Text style={styles.buttonText}>
              Register
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ScrollView>
  );
}

//==========================================
function UpdateScreen({ navigation }) {
  const [name, setName] = useState("")
  const [gender, setGender] = useState("")
  const [account_no, setAccount_no] = useState("")
  const [balance, setBalance] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [accounttype, setAccounttype] = useState("")

  // 1st===================
  const UpdateUser = () => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: 501,
        name: name,
        gender: gender,
        account_no: account_no,
        balance: balance,
        accounttype: accounttype,
        email: email,
        password: password
      })
    };

    fetch('http://videhjaiswal.pythonanywhere.com/customer/customer_api/customers/504/', requestOptions)
      .then((response) => response.json())
      .then((json) => {
        console.log('Fetch Api response', json);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={['#33ccff', '#ff99cc']}
          style={styles.container}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{name}</Text>

          <TextInput

            placeholder=" Enter stud_name  "
            style={styles.TextInput}
            onChangeText={(e) => setName(e)}

          />

          <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 30 }}>{gender} </Text>

          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder=" Enter Gender  "
            style={styles.TextInput}
            onChangeText={(e) => setGender(e)}

          />
          <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 30 }}>{account_no}</Text>

          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder=" Enter Account_no  "
            style={styles.TextInput}
            onChangeText={(e) => setAccount_no(e)}

          />
          <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 30 }}>{balance} </Text>

          <TextInput
            onChangeText={(e) => setBalance(e)}
            placeholder=" Enter Balance  "
            style={styles.TextInput}
          />
          <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 30 }}>{email} </Text>
          <TextInput
            placeholder=" Enter setEmail  "
            style={styles.TextInput}
            onChangeText={(e) => setEmail(e)}
          />
          <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 30 }}>{password} </Text>
          <TextInput
            placeholder=" Enter password  "
            secureTextEntry={true}
            style={styles.TextInput}
            onChangeText={(e) => setPassword(e)}
          />
          <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 30 }}>{accounttype}</Text>
          <TextInput
            placeholder=" Enter Accounttype  "
            style={styles.TextInput}
            onChangeText={(e) => setAccounttype(e)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => { UpdateUser(), alert('Update succesfully !!!'), navigation.navigate("Homepage") }}

          >
            <Text style={styles.buttonText}>
              Update
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ScrollView>
  );
}

// ===================================
function LogoutScreen({ navigation }) {

  const deleteUser = () => {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Contnt-Type': 'application/json' },
    };

    fetch('http://videhjaiswal.pythonanywhere.com/customer/customer_api/customers/498/', requestOptions)
      .then((response) => response.ok)
    console.log('delete your account Successfully !!!')
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={['#33ccff', '#ff99cc']}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>

        <TouchableOpacity
          style={styles.button}
          onPress={() => { deleteUser(), alert('Are you sure delete your account ?'), navigation.navigate("Home") }}>
          <Text style={styles.buttonText}>
            Logout
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'black',
    width: '95%',
    marginTop: 5,
    marginHorizontal: 10
  },
  container: {
    justifyContent: 'center', height: "100%",
    width: '100%'
  },
  buttonText: {
    fontSize: 25,
    color: 'black',
    margin: 10,
    alignSelf: 'center'
  },
  TextInput: {
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 2,
    color: 'black',
    fontSize: 20,
    borderColor: 'black',
    width: '90%',
    margin: 2,
    marginHorizontal: 20,
    textAlign: 'center'
  },
  Text: {
    fontSize: 28,
    color: 'black',
    textAlign: 'center'
  },
})