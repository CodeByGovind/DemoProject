
import React, { Component } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions, FlatList, ImageBackground } from 'react-native'
import { SliderBox } from "react-native-image-slider-box";
import Swiper from 'react-native-swiper'

// const names = [
//   {
//     index: "1",
//     name: "TATA IPL",
//     name1: "Covering",
//     pth: require('../../assets/zim.jpeg'),
//     pth1: require('../../assets/nam.png'),
//     name3: 'match Started',
//     team1: 'SRH',
//     team2: 'PBKS'
//   },
//   {
//     index: "2",
//     name: "T10",
//     name1: "Covering",
//     pth: require('../../assets/crd.jpeg'),
//     pth1: require('../../assets/vh.jpeg'),
//     name3: 'match Started',
//     team1: 'CRD',
//     team2: 'VH',
//     // color:'#000'
//   },
//   {
//     index: "3",
//     name: "T201",
//     name1: "Covering",
//     pth: require('../../assets/zim.jpeg'),
//     pth1: require('../../assets/nam.png'),
//     name3: 'match Started',
//     team1: 'ZIM',
//     team2: 'NAM'
//   },
//   {
//     index: "4",
//     name: "T20 Cup",
//     name1: "Covering",
//     pth: require('../../assets/sco.jpeg'),
//     pth1: require('../../assets/typ.jpeg'),
//     name3: 'match Started',
//     team1: 'RR',
//     team2: 'MI'
//   },
//   {
//     index: "e",
//     name: "T20 Cup",
//     name1: "Covering",
//     pth: require('../../assets/sco.jpeg'),
//     pth1: require('../../assets/typ.jpeg'),
//     name3: 'match Started',
//     team1: 'RR',
//     team2: 'MI'
//   },
//   {
//     index: "4ee",
//     name: "T20 Cup",
//     name1: "Covering",
//     pth: require('../../assets/sco.jpeg'),
//     pth1: require('../../assets/typ.jpeg'),
//     name3: 'match Started',
//     team1: 'RR',
//     team2: 'MI'
//   },
// ];


export default class SliderApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        // require("../../assets/rugby1.png"),
        // require("../../assets/rugby1.png"),

        "https://images.unsplash.com/photo-1574602904316-f84f62477265?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJ1Z2J5fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500",
        "https://images.unsplash.com/photo-1574602904329-56e2f95fb15e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJ1Z2J5fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500",
        "https://images.unsplash.com/flagged/photo-1552803516-2c5e71dad4d3?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJ1Z2J5fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500",
        "https://images.unsplash.com/photo-1512299286776-c18be8ed6a1a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cnVnYnl8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500",
        "https://images.unsplash.com/photo-1636915798395-fb7001eeb434?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cnVnYnl8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500",
      ],
      selectedId: null

    };
  }

  render() {
    return (
      <View style={styles.container} >
        <ScrollView
          showsVerticalScrollIndicator={false}

        >
          <View style={{ backgroundColor: "#fff", }}>
            <View style={{}} ></View>


            <View style={styles.container}>
              <SliderBox
                images={this.state.images}
                sliderBoxHeight={240}
                dotColor="#fff"
                inactiveDotColor="#90A4AE"
                paginationBoxVerticalPadding={40}
                autoplay
                circleLoop
                resizeMethod={'resize'}
                paginationBoxStyle={{
                  // position: "absolute",
                  bottom: 0,
                  padding: 0,
                  alignItems: "center",
                  justifyContent: "center",
                  // paddingVertical: 10,
                }}
                dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 10,
                  marginHorizontal: 5,
                  padding: 0,
                  margin: 0,
                  // backgroundColor: "rgba(128, 128, 128, 0.92)"
                }}
                ImageComponentStyle={{
                  // borderRadius: 10,
                  // flex:1,
                  width: Dimensions.get('window').width / 1,
                  height: Dimensions.get('window').height / 3.5,

                }}
              // imageLoadingColor="#2196F3"
              />
            </View>

          </View>  
        </ScrollView>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexShrink: 1,
    backgroundColor: '#fff'
  },

  img: {
    height: 40,
    width: 40,
    borderRadius: 40
  },

  listStyle: {
    width: Dimensions.get('window').width / 1.07,
    height: Dimensions.get('window').height / 6,
    borderRadius: 10,
    elevation: 12,
    marginHorizontal: 15,
    marginVertical: 5,
    shadowColor: "#fff",
    backgroundColor: '#e1edf0',
    // justifyContent: 'space-evenly'

  },
  listStyle1: {
    // flex: 0.8,
    flexDirection: 'row',
    // marginVertical:5,
    marginTop: 10,
    marginHorizontal: 10,
    // marginVertical: 10,
    paddingVertical: 10,
    backgroundColor: '#e1edf0',
    justifyContent: 'space-between',
  },
  container1: {
    flex: 1,
    marginBottom: "20%"
    // backgroundColor: '#0C1220',
    // marginTop: StatusBar.currentHeight || 0,

  },
});