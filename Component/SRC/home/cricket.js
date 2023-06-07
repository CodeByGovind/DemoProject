
import React, { Component } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions,FlatList } from 'react-native'
import { SliderBox } from "react-native-image-slider-box";
import Swiper from 'react-native-swiper'

const names = [
    {
      index: "1",
      name: "TATA IPL",
      name1: "Started at Sunday",
      pth: require('../../assets/zim.jpeg'),
      pth1: require('../../assets/nam.png'),
      name3:'match Started',
      team1: 'SRH',
      team2: 'PBKS'
    },
    {
      index: "2",
      name: "T10",
      name1: "Started at Sunday",
      pth: require('../../assets/crd.jpeg'),
      pth1: require('../../assets/vh.jpeg'),
      name3:'match Started',
      team1: 'CRD',
      team2: 'VH'
    },
    {
      index: "3",
      name: "T201",
      name1: "Started at Sunday",
      pth: require('../../assets/zim.jpeg'),
      pth1: require('../../assets/nam.png'),
      name3:'match Started',
      team1: 'ZIM',
      team2: 'NAM'
    },
    {
      index: "4",
      name: "T20 Cup",
      name1: "Started at Sunday",
      pth: require('../../assets/sco.jpeg'),
      pth1: require('../../assets/typ.jpeg'),
      name3:'match Started',
      team1: 'RR',
      team2: 'MI'
    },
  ];


export default class Cricket extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            images: [
                // require("../../assets/rugby1.png"),
                // require("../../assets/rugby1.png"),
                  "https://www.hdnicewallpapers.com/Walls/Big/Cricket/Virat_Kohli_and_MS_Dhoni_in_Cricket_Worldcup_2019_4K_Wallpaper.jpg",
                  "https://images.unsplash.com/photo-1565787154274-c8d076ad34e7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y3JpY2tldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500",
                  "https://images.unsplash.com/photo-1644984785609-676ed703333e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNyaWNrZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500",
                   "https://images.unsplash.com/photo-1607734834519-d8576ae60ea6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNyaWNrZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500",  
                   "https://images.unsplash.com/photo-1590134586486-1084d699b732?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGNyaWNrZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500",
                   "https://images.unsplash.com/photo-1594470117722-de4b9a02ebed?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNyaWNrZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500",
                   
            ]
            
        };
    }

    render() {
        return (
            <View style={styles.container} >
                    <ScrollView 
                   showsVerticalScrollIndicator={false}
                    
                    >
                <View style={{ backgroundColor: "#fff"}}>
                       


                        <View style={styles.container}>
                            <SliderBox
                                // ImageComponent={FastImage}
                                images={this.state.images}
                                sliderBoxHeight={220}
                                // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                                // currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
                                dotColor="#fff"
                                inactiveDotColor="#90A4AE"
                                paginationBoxVerticalPadding={20}
                                autoplay
                                circleLoop
                                resizeMethod={'resize'}
                                // resizeMode={'cover'}
                                paginationBoxStyle={{
                                    // position: "absolute",
                                    bottom: 0,
                                    padding: 0,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    paddingVertical: 10,
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
                                    borderRadius: 10,
                                    // flex:1,
                                    width: Dimensions.get('window').width / 1.02,
                                    height: Dimensions.get('window').height / 3.5,

                                }}
                                // imageLoadingColor="#2196F3"
                            />
                        </View>
                   
                </View>
            

                <FlatList
                
      showsHorizontalScrollIndicator={false}
    //   showsVerticalScrollIndicator={false}
    //   horizontal
    //   style={styles.container1}
      data={names}
    
      keyExtractor={(key) => {
        return key.index;

      }}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity style={styles.listStyle}>
           
              <View style={{}}>
                <Text style={{textAlign: "center"}}> {item.name} </Text>
                <View style={{borderWidth:0.2,borderColor:'gray', width: Dimensions.get('window').width / 1.2,alignSelf:'center'}}></View>
              </View>

              <View style={styles.listStyle1}>
                <Image source={item.pth} style={{  height:50, width: 50, borderRadius: 100}} />
                <View style={{marginVertical:15,marginLeft:-30}}>
                <Text style={styles.textStyle}> {item.team1} </Text>
             </View>
             <View>
                <Text style={{textAlign: "center",marginVertical:15}}> {item.name3} </Text>
              </View>
             <View style={{marginRight:-30,marginVertical:15}}>
                 <Text style={styles.textStyle1}> {item.team2} </Text>
                 </View>
                <Image source={item.pth1} style={{ height:50, width: 50, borderRadius: 100,}} />
              </View>
              <View style={{marginVertical:14}}>
                <Text style={{textAlign: "center" ,backgroundColor:'#dbdbdb',borderBottomLeftRadius:11,borderBottomRightRadius:11}}> {item.name1} </Text>
              </View>
           
          </TouchableOpacity>
        );
      }}
    />
    </ScrollView>
 </View>
            

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexShrink: 1,
        backgroundColor:'#fff'
    },
    border: {
        width: Dimensions.get('window').width / 1.07,
        height: Dimensions.get('window').height / 6,
        flexDirection: 'row',
        borderRadius: 15,
        paddingVertical: 5,
        backgroundColor: "#fff",
        elevation: 18,
        shadowColor: "#fff",
        backgroundColor: 'red',
        marginBottom: 20,
        marginVertical: 10,
    },
    img: {
        height: 40,
        width: 40,
        borderRadius: 40
    },
    
    listStyle: {
        width: Dimensions.get('window').width / 1.02,
        height: Dimensions.get('window').height / 7,
        borderRadius: 10,
        elevation: 10,
        marginHorizontal: 5,
        marginVertical: 5,
        backgroundColor: '#fff',
    
      },
      listStyle1:{
        // flex: 0.8,
        flexDirection:'row',
        width: Dimensions.get('window').width / 1.1,
        // marginTop: 10,
        marginHorizontal: 10,
        marginVertical:10,
        elevation:13,
        // paddingVertical: 10,
        alignSelf:'center',
        // backgroundColor: '#e6daed',
        justifyContent: 'space-between',
      },
      container1: {
        flex: 2,
    },
});

