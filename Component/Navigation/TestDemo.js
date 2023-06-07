import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class Test extends Component {

  constructor(props) {
    super(props)

    this.state = {
      stud_details: {
        stud_age: 21,
        stud_address: "Indore M.P",
        stud_name:"",
      }
    }
  }
  render() {
    // Destructuring of props
    const { stud_name, stud_rollno, stud_fees } = this.props.studentDetails
    const { course, duration } = this.props.studentDetails.stud_course

    // Destructuring of state
    const { stud_age, stud_address } = this.state.stud_details
    return (
      <View>
        <Text style={{ fontSize: 30 }}>Destructuring of Props and State</Text>
        <Text style={{ fontSize: 28 }}>Name:{this.props.studentDetails.stud_name}</Text>
        <Text style={{ fontSize: 28 }}>Rollno:{stud_rollno}</Text>
        <Text style={{ fontSize: 28 }}>Fees:{stud_fees}</Text>
        <Text style={{ fontSize: 28 }}>Course:{course}</Text>
        <Text style={{ fontSize: 28 }}>Duration:{duration}</Text>
        <Text style={{ fontSize: 28 }}>Age:{this.state.stud_details.stud_age}</Text>
        <Text style={{ fontSize: 28 }}>Address:{stud_address}</Text>
      </View>
    )
  }
}