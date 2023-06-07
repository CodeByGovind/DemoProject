
// import React, { Component } from "react";
// import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions,FlatList } from 'react-native'
// import { SliderBox } from "react-native-image-slider-box";
// import Swiper from 'react-native-swiper'

// const names = [
//     {
//       index: "1",
//       name: "TATA IPL",
//       name1: "Started at Sunday",
//       pth: require('../../assets/zim.jpeg'),
//       pth1: require('../../assets/nam.png'),
//       name3:'match Started',
//       team1: 'SRH',
//       team2: 'PBKS'
//     },
//     {
//       index: "2",
//       name: "T10",
//       name1: "Started at Sunday",
//       pth: require('../../assets/crd.jpeg'),
//       pth1: require('../../assets/vh.jpeg'),
//       name3:'match Started',
//       team1: 'CRD',
//       team2: 'VH'
//     },
//     {
//       index: "3",
//       name: "T201",
//       name1: "Started at Sunday",
//       pth: require('../../assets/zim.jpeg'),
//       pth1: require('../../assets/nam.png'),
//       name3:'match Started',
//       team1: 'ZIM',
//       team2: 'NAM'
//     },
//     {
//       index: "4",
//       name: "T20 Cup",
//       name1: "Started at Sunday",
//       pth: require('../../assets/sco.jpeg'),
//       pth1: require('../../assets/typ.jpeg'),
//       name3:'match Started',
//       team1: 'RR',
//       team2: 'MI'
//     },
//   ];


// export default class Volleyboll extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             images: [
//                 // require("../../assets/rugby1.png"),
//                 // require("../../assets/rugby1.png"),
//                   "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dm9sbGV5YmFsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500",
//                   "https://images.unsplash.com/photo-1592656094267-764a45160876?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dm9sbGV5YmFsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500",
//                   "https://images.unsplash.com/photo-1562552052-c72ceddf93dc?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHZvbGxleWJhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=500",
//                    "https://images.unsplash.com/photo-1638569775144-a87baa6a4d32?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fHZvbGxleWJhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=500",  
//                    "https://images.unsplash.com/photo-1590134586486-1084d699b732?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGNyaWNrZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500",
//                    "https://images.unsplash.com/photo-1593787406536-3676a152d9cb?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dm9sbGV5YmFsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500",
                   
//             ]
            
//         };
//     }

//     render() {
//         return (
//             <View style={styles.container} >
//                     <ScrollView 
//                     showsVerticalScrollIndicator={false}
                    
//                     >
//                 <View style={{ backgroundColor: "#fff", marginVertical: 10 }}>
//                         <View style={{ marginVertical: 1, }} ></View>


//                         <View style={styles.container}>
//                             <SliderBox
//                                 // ImageComponent={FastImage}
//                                 images={this.state.images}
//                                 sliderBoxHeight={220}
//                                 // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
//                                 // currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
//                                 dotColor="#fff"
//                                 inactiveDotColor="#90A4AE"
//                                 paginationBoxVerticalPadding={20}
//                                 autoplay
//                                 circleLoop
//                                 resizeMethod={'resize'}
//                                 // resizeMode={'cover'}
//                                 paginationBoxStyle={{
//                                     // position: "absolute",
//                                     bottom: 0,
//                                     padding: 0,
//                                     alignItems: "center",
//                                     justifyContent: "center",
//                                     paddingVertical: 10,
//                                 }}
//                                 dotStyle={{
//                                     width: 10,
//                                     height: 10,
//                                     borderRadius: 10,
//                                     marginHorizontal: 5,
//                                     padding: 0,
//                                     margin: 0,
//                                     // backgroundColor: "rgba(128, 128, 128, 0.92)"
//                                 }}
//                                 ImageComponentStyle={{
//                                     borderRadius: 10,
//                                     // flex:1,
//                                     width: Dimensions.get('window').width / 1.02,
//                                     height: Dimensions.get('window').height / 3.5,

//                                 }}
//                                 // imageLoadingColor="#2196F3"
//                             />
//                         </View>
                   
//                 </View>
            

//                 <FlatList
                
//       showsHorizontalScrollIndicator={false}
//     //   showsVerticalScrollIndicator={false}
//     //   horizontal
//     //   style={styles.container1}
//       data={names}
    
//       keyExtractor={(key) => {
//         return key.index;

//       }}
//       renderItem={({ item }) => {
//         return (
//           <TouchableOpacity>
//             <View style={styles.listStyle}>
//               <View style={{}}>
//                 <Text style={{textAlign: "center", borderBottomWidth: 0.197}}> {item.name} </Text>
//               </View>

//               <View style={styles.listStyle1}>
//                 <Image source={item.pth} style={{  height:50, width: 50, borderRadius: 100}} />
//                 <View style={{marginVertical:15,marginLeft:-30}}>
//                 <Text style={styles.textStyle}> {item.team1} </Text>
//              </View>
//              <View>
//                 <Text style={{textAlign: "center",marginVertical:15}}> {item.name3} </Text>
//               </View>
//              <View style={{marginRight:-30,marginVertical:15}}>
//                  <Text style={styles.textStyle1}> {item.team2} </Text>
//                  </View>
//                 <Image source={item.pth1} style={{ height:50, width: 50, borderRadius: 100,}} />
//               </View>
//               <View style={{marginVertical:29}}>
//                 <Text style={{textAlign: "center", borderBottomWidth: 0.197 ,backgroundColor:'#CECCD2',borderBottomLeftRadius:11,borderBottomRightRadius:11}}> {item.name1} </Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//         );
//       }}
//     />
//     </ScrollView>
//  </View>
            

//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexShrink: 1,
//         backgroundColor:'#fff'
//     },
//     border: {
//         width: Dimensions.get('window').width / 1.07,
//         height: Dimensions.get('window').height / 6,
//         flexDirection: 'row',
//         borderRadius: 15,
//         paddingVertical: 5,
//         backgroundColor: "#fff",
//         elevation: 18,
//         shadowColor: "#fff",
//         backgroundColor: 'red',
//         marginBottom: 20,
//         marginVertical: 10,
//     },
//     img: {
//         height: 40,
//         width: 40,
//         borderRadius: 40
//     },
    
//     listStyle: {
//         width: Dimensions.get('window').width / 1.02,
//         height: Dimensions.get('window').height / 6,
//         borderRadius: 10,
//         elevation: 2,
//         marginHorizontal: 5,
//         marginVertical: 5,
//         // paddingVertical: 20,
//         backgroundColor: '#f5faf7',
//         // justifyContent: 'space-evenly'
    
//       },
//       listStyle1:{
//         // flex: 0.8,
//         flexDirection:'row',
//         // marginVertical:5,
//         marginTop: 10,
//         marginHorizontal: 10,
//         // marginVertical: 10,
//         paddingVertical: 10,
//         backgroundColor: '#f5faf7',
//         justifyContent: 'space-between',
//       },
//       container1: {
//         flex: 2,
//         // backgroundColor: '#0C1220',
//         // marginTop: StatusBar.currentHeight || 0,
    
//       },
// });


import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Dimensions
} from 'react-native';

var {height, width} = Dimensions.get('window');

export default class Volleyboll extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1,  title: "You",      color:"#FF4500", image:"https://img.icons8.com/color/70/000000/name.png"},
        {id:2,  title: "Home",     color:"#87CEEB", image:"https://img.icons8.com/office/70/000000/home-page.png"},
        {id:3,  title: "Love",     color:"#4682B4", image:"https://img.icons8.com/color/70/000000/two-hearts.png"} ,
        {id:4,  title: "Family",   color:"#6A5ACD", image:"https://img.icons8.com/color/70/000000/family.png"} ,
        {id:5,  title: "Friends",  color:"#FF69B4", image:"https://img.icons8.com/color/70/000000/groups.png"} ,
        {id:6,  title: "School",   color:"#00BFFF", image:"https://img.icons8.com/color/70/000000/classroom.png"} ,
        {id:7,  title: "Things",   color:"#00FFFF", image:"https://img.icons8.com/dusk/70/000000/checklist.png"} ,
        {id:8,  title: "World",    color:"#20B2AA", image:"https://img.icons8.com/dusk/70/000000/globe-earth.png"} ,
        {id:9,  title: "Remember", color:"#191970", image:"https://img.icons8.com/color/70/000000/to-do.png"} ,
        {id:10, title: "Game",     color:"#008080", image:"https://img.icons8.com/color/70/000000/basketball.png"} ,
      ]
    };
  }

  clickEventListener(item) {
    Alert.alert(item.title)
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={[styles.card, {backgroundColor:item.color}]} onPress={() => {this.clickEventListener(item)}}>
                <Image style={styles.cardImage} source={{uri:item.image}}/>
                <Text style={styles.title}>{item.title}</Text>
              </TouchableOpacity>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    // marginTop:20,
    alignItems:'center',
    backgroundColor:"#fff",
  },
  list: {
    //paddingHorizontal: 5,
    // backgroundColor:"#fff",
  },

  /******** card **************/
  card:{
    width: width,
    height:150,
    flexDirection:'row',
    padding:20,
    borderRadius:10,
    width:width-20,
    justifyContent: 'center', 
    alignItems: 'center' ,
    marginVertical:5,
    // elevation:10,
  },
  cardImage:{
    height: 70,
    width: 70,
  },
  title:{
    fontSize:28,
    flex:1,
    color:"#FFFFFF",
    fontWeight:'bold',
    marginLeft:40
  },
  subTitle:{
    fontSize:12,
    flex:1,
    // color:"#FFFFFF",
  },
  icon:{
    height: 20,
    width: 20, 
  }
});     
