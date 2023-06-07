import { Text, View ,Button} from 'react-native'
import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
   

    render() {

        const { show, handleClick } = this.props

        return (
            <View>
                <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Parent</Text>
                <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Name :{this.props.name}</Text>
                <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Age :{this.props.age}</Text>
                {show ?
                    <Text style={{ fontSize: 40, fontWeight: 'bold',textAlign:'center',margin:20 }}>U can vote  </Text>
                    : null}
                    
                <Button onPress={handleClick} title='Click'></Button>
                
            </View>
        )

    }

}
export default Child(Parent);