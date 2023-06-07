import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { Component } from 'react';
import ShoppingAssigment from '../InputForm/ShoppingAssigment';
import Facebook from '../InputForm/Facebook';

export default class TabDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            textColorUpComing: 'black',
            textColorCurrent: 'red'
        }
    }
    handleCurrent = () => {
        this.setState((state) => (
            {
                show: !state.show,
                textColorUpComing: 'black',
                textColorCurrent: 'red'
            }
        ))
    }

    handleComing = () => {
        this.setState((state) => (
            {
                show: !state.show,
                textColorUpComing: 'red',
                textColorCurrent: 'black'
            }
        ))
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly', margin: 10
                }}>
                    <TouchableOpacity
                        style={{ width: '50%' }}
                        onPress={() => this.handleCurrent()}>
                        <Text style={{
                            fontSize: 28, fontWeight: 'bold', textAlign: 'center',
                            color: this.state.textColorCurrent
                        }}>Shopping</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: '50%' }}
                        onPress={() => this.handleComing()}>
                        <Text style={{
                            fontSize: 28, fontWeight: 'bold', textAlign: 'center',
                            color: this.state.textColorUpComing
                        }}>Facebook</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ backgroundColor: this.state.textColorCurrent, height: 10, width: '50%' }}></View>
                    <View style={{ backgroundColor: this.state.textColorUpComing, height: 10, width: '50%' }}></View>
                </View>

                {this.state.show ? <ShoppingAssigment /> : <Facebook />}
            </View>
        )
    }
}