
import React from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity, Image, TextInput, ScrollView, Dimensions } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const DATA = [
  {
    id: '1',
    title: 'Travelers',
    price: 'Heading North',
    dec: 'Hi Mathew, Myley here Would you like to chat? waiting..',
    Time: 'Event Time- 07:00- 11:00 PM',
    add: "   Eden Gardens, Kolkata",
    day: 'Completed Events',
    sponser: 'Adidas',
    Image: require("../../assets/basketball2.png"),
    Image1: require("../../assets/basketball2.png"),
    // Color: "#D36044",
  },
  {
    id: '2',
    title: 'Harlewins',
    price: 'Net Rippers',
    dec: 'Hi Mathew, Myley here Would you like to chat? waiting..',
    Time: 'Event Time- 08:00- 9:00 AM',
    add: " WankhedeStadium,Mumbai",
    day: 'Upcoming Events',
    sponser: 'Adidas',
    Image: require("../../assets/basketball2.png"),
    Image1: require("../../assets/basketball2.png"),
    Color: "#D36044",
  },
  {
    id: '2',
    title: 'Travelers',
    price: 'Heading North',
    dec: 'Hi Mathew, Myley here Would you like to chat? waiting..',
    Time: 'Event Time- 07:00- 11:00 PM',
    add: "   Eden Gardens, Kolkata",
    day: 'Completed Events',
    sponser: 'Adidas',
    Image: require("../../assets/basketball2.png"),
    Image1: require("../../assets/basketball2.png"),
    Color: "#D36044",
  },
  {
    id: '3',
    title: 'Travelers',
    price: 'Heading North',
    dec: 'Hi Mathew, Myley here Would you like to chat? waiting..',
    Time: 'Event Time- 07:00- 11:00 PM',
    add: "  Eden Gardens, Kolkata",
    day: 'Completed Events',
    sponser: 'Adidas',
    Image: require("../../assets/basketball2.png"),
    Image1: require("../../assets/basketball2.png"),
    Color: "#D36044",
  },
  {
    id: '4',
    title: 'Travelers',
    price: 'Heading North',
    dec: 'Hi Mathew, Myley here Would you like to chat? waiting..',
    Time: 'Event Time- 07:00- 11:00 PM',
    add: "   Eden Gardens, Kolkata",
    day: 'Completed Events',
    sponser: 'Adidas',
    Image: require("../../assets/basketball2.png"),
    Image1: require("../../assets/basketball2.png"),
    Color: "#D36044",
  },
  {
    id: '5',
    title: 'Travelers',
    price: 'Heading North',
    dec: 'Hi Mathew, Myley here Would you like to chat? waiting..',
    Time: 'Event Time- 07:00- 11:00 PM',
    add: "  Eden Gardens, Kolkata",
    day: 'Completed Events',
    sponser: 'Adidas',
    Image: require("../../assets/basketball2.png"),
    Image1: require("../../assets/basketball2.png"),
    Color: "#D36044",
  },


];
export default function FlatData({ navigation }) {
  const renderItem = ({ item }) =>
    (
      <TouchableOpacity
        // onPress={() => navigation.navigate("Notification2")}
        style={{
          flexDirection: 'row',
          //  alignItems: "center",
          backgroundColor: '#fff',
          justifyContent: 'space-between',
          shadowColor: "grey",
          elevation: 4,
          marginHorizontal: 5,
          borderRadius: 12,
          marginVertical: 10,
        }}  >



        <View style={styles.item}>
          <View style={{
             width:Dimensions.get('window').width/1.39,

          }} >
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", }} >
              <Text style={[styles.Time, { color: '#999999', fontSize: 12, fontFamily: 'PoppinsMedium', marginHorizontal: 12 }]}>{item.Time}</Text>
              <View style={{ backgroundColor: "#a8a7a7", borderBottomLeftRadius: 8, }}>
                <Text style={[styles.sponser, { color: '#fff', fontSize: 12, fontFamily: 'PoppinsSemiBold', marginHorizontal: 12, }]}>{item.sponser}</Text>
              </View>
            </View>

            <View style={{ borderBottomWidth: 0.2, marginHorizontal: 12, marginVertical: 10 }}></View>

            <View style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginHorizontal: 12, width: Dimensions.get('window').width / 1.5,
            }} >
              <Text style={[styles.title, { color: '#000', fontSize: 16, fontFamily: 'PoppinsSemiBold', }]}>{item.title}</Text>
              <Text style={{ color: '#000', fontSize: 16, fontFamily: 'PoppinsRegular'}}>Vs</Text>
              <Text style={[styles.price, { color: '#000', fontSize: 16, fontFamily: 'PoppinsSemiBold', }]}>{item.price}</Text>
            </View>


            <View style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
                // marginHorizontal:12,
              width: Dimensions.get('window').width / 1.5,
            }}>
              <Image source={item.Image} style={{
                width: 44,
                height: 40,
                marginHorizontal: 20,
              }} >
              </Image>

              <Image source={item.Image1} style={{
                width: 44,
                height: 40,
                marginHorizontal: 15,
              }} >
              </Image>
            </View>




            <View style={{ flexDirection: "row", borderBottomWidth: 0.7, borderColor: "grey", marginHorizontal: 12 }}></View>


            {/* <Text style={[styles.dec, { color: "#BDBDBD", fontSize: 14, }]}>{item.dec}</Text> */}
            <View style={{ alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
              <Text style={[styles.add, { color: "#000", fontSize: 12, fontFamily: 'PoppinsMedium', }]}>{item.add}</Text>
              <View style={{}}>
                <Text style={[styles.day, { color: "#000", fontSize: 13, fontFamily: 'PoppinsMedium', marginHorizontal: 12, marginVertical: 10 }]}>{item.day}</Text>
              </View>
            </View>
          </View>
        </View>


      </TouchableOpacity>

    );
  return (
    <View style={{
      backgroundColor: '#fff',

    }}   >
      <View style={{ marginHorizontal: 20, marginTop: 10, marginBottom: 5, }}>
        <Text style={{ fontSize: 16, color: "#000", fontFamily: "PoppinsSemiBold " }}>8 May, 2022</Text>
      </View>

      <FlatList
        data={DATA}
        horizontal
        // showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  item: {
      // marginHorizontal: 10,
      // paddingHorizontal:20,
  },
  title: {
    fontSize: 11,
    fontWeight: "600"
  },

})
