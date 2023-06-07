import { Text, View, styles } from 'react-native'
import React, { Component } from 'react'
import Slider from '@react-native-community/slider'
import { Switch } from 'react-native-switch'
import { Picker } from '@react-native-picker/picker'
import SegmentedControl from '@react-native-segmented-control/segmented-control';



export default class Siwitch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loanAmount: 0,
      empStatus: true,
      selectedLanguage: "",
      date: 0,
      time: 0,
      empGender: '',
      selectedSegmentIndex: '',




    }

  }


  render() {
    return (
      <View>

        <Text style={{ fontSize: 30, backgroundColor: 'yellow' }}>switch</Text>

        <Text style={{ fontSize: 30, backgroundColor: 'yellow' }}>loanAmount:{this.state.loanAmount}</Text>




        <Slider
          style={{ width: '100%', height: 100, backgroundColor: 'orange' }}
          minimumValue={0}
          maximumValue={75000}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange={value => this.setState({ loanAmount: value })}
        />

        <Switch

          value={this.state.empStatus}
          onValueChange={(val) => this.setState({
            empStatus: val
          })

          }


          disabled={false}
          activeText={'On'}
          inActiveText={'Off'}
          circleSize={50}
          barHeight={50}
          circleBorderWidth={10}
          backgroundActive={'green'}
          backgroundInactive={'gray'}
          circleActiveColor={'#30a566'}
          circleInActiveColor={'#000000'}

        />



        <Picker
          style={{ backgroundColor: 'yellow', fontSize: 20, color: 'red', width: '50%', marginLeft: 100 }}
          selectedValue={this.state.selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({
              selectedLanguage: itemValue
            })
          }>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="mar-Java" value="js" />
          <Picker.Item label="lut-java" value="jb" />
          <Picker.Item label="pi-java" value="jt" />
          <Picker.Item label="kha-java" value="j" />

        </Picker>

        <SegmentedControl style={{ backgroundColor: 'green' }}
          values={['male', 'Female', 'custom']}
          selectedIndex={this.state.selectedIndex}
          onChange={(event) => {
            this.setState({ selectedIndex: event.nativeEvent.selectedSegmentIndex });
          }}
        />

        <SegmentedControl
          values={['Male', 'Female']}
          momentary={false}
          fontStyle={{ color: 'black', fontSize: 32 }}
          style={{ height: 60 }}
          selectedIndex={this.state.selectedSegmentIndex}
          onChange={(event) => {
            this.setState({ selectedSegmentIndex: event.nativeEvent.selectedSegmentIndex });
          }}
          onValueChange={(value) => {
            this.setState({
              empGender: value
            })
          }}
        />




      </View>
    )
  }
}




