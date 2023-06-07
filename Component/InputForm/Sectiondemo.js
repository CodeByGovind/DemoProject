import { Text, View, SectionList, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'

export default class SectionListDemo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            menu: [
                {
                    id: 1,
                    title: "Starter",
                    data: [
                        {
                            id: 101,
                            name: "Tomato Soup",
                            price: 60,
                            img: "https://thumbs.dreamstime.com/b/bowl-delicious-fresh-homemade-tomato-soup-table-space-text-136213735.jpg"
                        },
                        {
                            id: 102, name: "Masla Papad",
                            price: 20,
                            img: "https://5.imimg.com/data5/OS/JT/GLADMIN-17925124/masala-papad-salad-500x500.png"
                        },
                        {
                            id: 103, 
                            name: "Veglolipop",
                            price: 80,
                            img: "https://img-global.cpcdn.com/recipes/12d2c453b43be922/680x482cq70/indo-chinese-veg-lollipop-recipe-main-photo.jpg"
                        }
                    ]
                },
                {
                    id: 2,
                    title: "Fast Food",
                    data: [
                        {
                            id: 201,
                            name: "Pizza",
                            price: 120,
                            img: "https://www.kindpng.com/picc/m/3-33269_cheese-pizza-png-image-transparent-png.png"
                        },
                        {
                            id: 202,
                            name: "Burger",
                            price: 100,
                            img: "https://www.kindpng.com/picc/m/712-7128170_slider-img-burger-with-flying-ingredients-hd-png.png"
                        },
                        {
                            id: 203,
                            name: "French Fries",
                            price: 70,
                            img: "https://www.freepnglogos.com/uploads/fries-png/premium-french-fries-photos-7.png"
                        }
                    ]
                },
                {
                    id: 3,
                    title: "Main Course",
                    data: [
                        {
                            id: 301,
                            name: "Butter Panner Masala",
                            price: 140,
                            img: "https://thumbs.dreamstime.com/b/paneer-butter-masala-cheese-cottage-curry-indian-main-course-recipe-popular-lunch-dinner-menu--served-ceramic-bowl-191806232.jpg"
                        },
                        {
                            id: 302,
                            name: "Mix Vegetable",
                            price: 150,
                            img: "https://thumbs.dreamstime.com/b/indian-mix-veg-mixed-vegetable-recipe-served-bowl-chapati-dry-restaurant-style-192326534.jpg"
                        },
                        {
                            id: 303,
                            name: "Tawa Roti",
                            price: 15,
                            img: "https://thumbs.dreamstime.com/b/indian-bread-roti-made-whole-wheat-flour-refind-added-yeast-tawa-dough-190429504.jpg"
                        },
                        {
                            id: 304,
                            name: "Tandori Roti",
                            price: 20,
                            img: "https://t4.ftcdn.net/jpg/01/72/71/81/360_F_172718142_igy51f179y0bCknAdbX1k9OuKqyx8fWh.jpg"
                        }
                    ]
                }
            ],
        }
    }

    render() {
        return (
            <View>
                <Text style={{
                    fontSize: 32, backgroundColor: 'teal',
                    color: 'white', textAlign: 'center'
                }}>
                    SectionListDemo</Text>
                <SectionList
                    style={{marginBottom:120}}
                    sections={this.state.menu}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item, index }) =>
                        // <Text style={{fontSize:32}}>{item.name}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column', margin: 10, width: '50%' }}>
                                <Text style={styles.titleText1}>{item.name}</Text>
                                <Text style={styles.titleText2}>₹{item.price}</Text>
                            </View>
                            <Image
                                style={styles.tinyLogo}
                                source={{ uri: item.img }} />
                                
                        </View>
                    }
                    // renderSectionHeader={({section:{title}})=>(
                    //     <Text style={{fontSize:32}}>{title}</Text>
                    // )}
                    renderSectionHeader={({ section }) =>
                        <View style={{ backgroundColor: 'darkgoldenrod' }}>
                            {/* <Text style={{fontSize:32}}>{section.id}</Text> */}
                            <Text style={{ fontSize: 32, color: 'white' }}>{section.title}</Text>
                        </View>
                    }

                    renderSectionFooter={({section:{title,data}})=>(
                        <Text style={{fontSize:32,fontWeight:'bold'}}>Total Items:{data.length}</Text>
                    )}
                >
                </SectionList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    addressText1: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    titleText1: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    titleText2: {
        fontSize: 24,
    },
    tinyLogo1: {
        width: 80,
        height: 80,
        margin: 20,
        // 'cover', 'contain', 'stretch', 'repeat', 'center'
        // resizeMode: 'stretch',
        // resizeMode: 'contain'
        // resizeMode: 'cover'
        // resizeMode: 'repeat'
        resizeMode: 'center',
        borderRadius: 15,
        backgroundColor: 'teal',
        margin: 10
    },
    tinyLogo: {
        width: 120,
        height: 120,
        // 'cover', 'contain', 'stretch', 'repeat', 'center'
        resizeMode: 'stretch',
        // resizeMode: 'contain'
        // resizeMode: 'cover'
        // resizeMode: 'repeat'
        // resizeMode: 'center',
        borderRadius: 15,
        backgroundColor: 'teal',
        margin: 10
    },
})