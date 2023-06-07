import React from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity, Image, TextInput, ScrollView, Dimensions, StatusBar } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Linking } from 'react-native';

const DATA = [
   {
      id: '1',
      title: 'Watch: Basketball Africa League Playoffs',
      about:"The 9-year veteran has been dealing with pain in Conference semifinals.",
      day: '10m ago',
      Image: require("../../assets/basketball2.png"),
      Color: "#D36044",
   },
   {
      id: '2',
      title: 'you win lucky drwa 🎉',
      day: '10m ago',
      about:"The 9-year veteran has been dealing with pain in his left heel since the Western Conference semifinals.",
      Image: require("../../assets/basketball2.png"),
      Color: "#D36044",
   },
   {
      id: '3',
      title: 'Ralph Edwards mentioned you in a award.',
      about:"The 9-year veteran has been dealing with pain in his left heel since the Western Conference semifinals.",
      day: '10m ago',
      Image: require("../../assets/basketball2.png"),
      Color: "#D36044",
   },


];
export default function RugbyNews({ navigation }) {
   const renderItem = ({ item }) =>
   (
      <TouchableOpacity
         onPress={() => Linking.openURL('https://www.rugbypass.com/news/')}
         style={{
            // flex: 1,
            flexDirection: 'row',
            // alignItems: "center",
            backgroundColor: '#fff',
            justifyContent: 'center',
            // borderColor: "grey",
            // borderWidth: 0.4,
            // elevation:4,
            // shadowColor:"grey",
            borderBottomWidth: 0.3,
            borderColor: "grey",
            marginHorizontal: 10,
            borderRadius: 12,
            marginVertical: 10,
            // marginBottom:60,
         }}  >
         <View style={{ marginTop: 10}}>
            <Image source={item.Image} style={{
               width: 50,
                height: 50,
                
            }} >
            </Image>
         </View>

         <View style={styles.item}>
            <View style={{}} >
               <View style={{
                //   marginHorizontal: 5,
                  width: Dimensions.get('window').width / 1.9
               }} >
                  <Text style={[styles.title, { color: '#000', fontSize: 16, fontFamily: 'PoppinsSemiBold' }]}>{item.title}</Text>
                  <Text style={[styles.about, { color: '#000', fontSize: 11, fontFamily: 'PoppinsMedium' }]}>{item.about}</Text>
                  <Text style={[styles.day, { color: "#727477", fontSize: 13, fontFamily: 'PoppinsRegular' }]}>{item.day}</Text>
               </View>
            </View>
         </View>

      </TouchableOpacity>

   );
   return (
      <View style={{
         backgroundColor: '#fff',
         // flex: 1,
         // marginBottom: 50,


      }} >
     
         <View style={{ marginHorizontal: 20, flexDirection: "row", alignItems: "center",marginVertical:10}}>
            <FontAwesome5 name='caret-right' size={22} color={"#000"} />
            <Text style={{ color: "#000", fontFamily: "PoppinsSemiBold", marginHorizontal:5}}
               onPress={() => Linking.openURL('http://google.com')}
            >Feed</Text>
         </View>

         

         <FlatList
            data={DATA}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={item => item.id}
         />



      </View>
   );
}
const styles = StyleSheet.create({
   item: {
      paddingVertical: 15,
      marginHorizontal: 10,
   },
   title: {
      fontSize: 11,
      fontWeight: "600"
   },

})
