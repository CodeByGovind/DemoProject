import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Mapdemos = () => {

    const api = [
        {'Name': 'RK', 'Profile': 'Front End Dev', 'Add': 'Indore'},
        {'Name': 'Govind', 'Profile': 'React Native Dev', 'Add': 'Ujjain'},
        {'Name': 'Nilesh', 'Profile': 'Back End Dev', 'Add': 'Shajapur'},
        {'Name': 'Pankaj', 'Profile': 'Full Stack Dev', 'Add': 'Pachore'},
        {'Name': 'Ravi', 'Profile': 'Blockchain Dev', 'Add': 'Sarangpur'},
    ]

    // console.log(api[0].Name);

  return (
    <View>
      {
        api.map((data) => {
            console.log(data.Name)
            console.log(data.Profile)
            console.log(data.Add)
        })
    
        }
    </View>
  )
}

export default Mapdemos

const styles = StyleSheet.create({})