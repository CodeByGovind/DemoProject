import React, { useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';


import { Button, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, } from 'react-native';

import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';


export const DateTime = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View>
      <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View>
      <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'red' }}>Date :   {date.getDate()} , {date.getMonth()+1} , {date.getFullYear()}</Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  );
}

