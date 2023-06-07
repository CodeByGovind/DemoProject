/*
Class component (state full components)
*/

import React, { Component } from "react";
import { View, Text, StyleSheet,Image } from 'react-native'



class Product extends React.Component {
    render() {
        return (
            <View>
                <Category brand="samsang" price="Dell" size="intel" />
                <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://rukminim1.flixcart.com/image/332/398/kxgfzbk0/jean/m/f/d/32-lmjnsm1917-lee-original-imag9wjkckjynzrh.jpeg?q=50',
        }}
      />
                <Text style={styles.textTitle}>Name:{this.props.name}</Text>
                <Text style={styles.textTitle}>Brand:{this.props.brand}</Text>
                <Text style={styles.textTitle}>Price:{this.props.price}</Text>
                <Text style={styles.textTitle}>Size:{this.props.size}</Text>

            </View>
        )
    }
}
class Category extends Component {
    render() {
        return (
            <View>
         
                <Text style={{ backgroundColor: "blue", color: "yellow", fontSize: 32, textAlign: "center" }}>PRODUCT CATEGORY</Text>
           
             
                <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://5.imimg.com/data5/SELLER/Default/2020/9/HX/YH/GB/3094888/dell-laptop-500x500.jpg',
        }}
      />
                <Text style={styles.textTitle}>LAPTOP:{this.props.price}</Text>
             
          
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor: 'silver',
        textAlign: 'center',
        color: 'red'
    },
    tinyLogo: {
       alignSelf :'center',
        width: 200,
        height: 200,
      }
})
export default Product;