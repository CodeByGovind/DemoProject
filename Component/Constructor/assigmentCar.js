import { Button, Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export default class Car extends Component {

    constructor(props) {
        super(props)
        this.state = {
            color: "darkgray",
            name: "BMW",
            brand: "Bayerische Motoren Werke AG",
            modal: "BMW Z4",
            year:1998,

        }
        console.log("callling constructor()")
    }
    static getDerivedStateFromProps(props, state) {
        console.log(" calling getDerivedStateFromProps()")
        return null
    }
    //Called immediately after a component is mounted.
    // Setting state here will trigger re-rendering.
    componentDidMount() {
        console.log("calling  componentDidMount()")
        setTimeout(() => {
            this.setState({
                color: this.state.color = "white"
            })
        }, 3000)
    }
/*
Called to determine whether the change in props and state should trigger a re-render.

Component always returns true. PureComponent implements a shallow comparison on props and state and returns true if any props or states have changed.

If false is returned, Component#render, componentWillUpdate and componentDidUpdate will not be called.
*/
    shouldComponentUpdate() {
        console.log("calling shouldComponentUpdate() ")
        return true
    }
    /*
    Runs before React applies the result of render to the document, and returns an object to be given to componentDidUpdate. Useful for saving things such as scroll position before render causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated lifecycle events from running.
    */
    getSnapshotBeforeUpdate(prevProps,prevState) {
        console.log("calling getSnapshotBeforeUpdate() ,Before Update Color is : ", prevState.color)
        return null
    }
 // Called immediately after updating occurs. Not called for the initial render.
 //The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.
    componentDidUpdate() {
        console.log("calling componentDidUpdate() ,After  Update Color is : ", this.state.color)
    }
    updateColor = () => {

        this.setState({
            color: this.state.color = "red"


        })

    }

    render() {
               console.log("callling render()")
        return (
            <View>

                <Text style={styles.headerTitle}>CAR NAME:{this.state.name}</Text>
                <Text style={styles.headerTitle}>CAR BRAND:{this.state.brand}</Text>
                <Text style={styles.headerTitle}> CAR MODAL:{this.state.modal}</Text>
                <Text style={styles.headerTitle}>YEAR:{this.state.year}</Text>
                <Text style={styles.headerTitle}>COLOR:{this.state.color}</Text>


                <Button title='Color'
                    onPress={this.updateColor}></Button>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        backgroundColor: 'orange',
        textAlign: 'center',
        color: 'white',
        

    }
})
