import { Button, Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export default class BankConstructor extends Component {

  constructor(props) {
    super(props)
    this.state = {
      balance: 20000,
      name: "Vikash"

    }
  }

  updateRecord = () => {

    this.setState({
      balance: this.state.balance + 10000,


    })

  }

  handleUpdate = () => {
    this.setState({
      balance: this.state.balance - 5000,


    })

  }

  render() {
    return (
      <View>

        <Text style={styles.headerTitle}>Customer Name  : {this.state.name}</Text>

        <Text style={styles.headerTitle}>Customer Balance : {this.state.balance}</Text>

        <Button title='DepositAmount'
          onPress={this.updateRecord}></Button>

        <Button title='WithdrawAmound'
          onPress={this.handleUpdate}></Button>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'darkblue',
    textAlign: 'center',
    color: 'white',
    marginTop: 10


  }
})