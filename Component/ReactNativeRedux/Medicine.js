import { Text, View, Button } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increINJECTION, increPAINKILLER } from './Action'


class SingleReducer extends Component {
    render() {
        return (
            <View>

                <Text style={{ fontSize: 40, fontWeight: 'bold', textAlign: 'center' }}>Medicine Details</Text>
                <Text style={{ fontSize: 32, fontWeight: 'bold' }}>INJECTION   :{this.props.INJECTION}</Text>


                <Button title='increINJECTION'
                    onPress={() => this.props.incrementINJECTION()}
                >
                </Button>
                <Text style={{ fontSize: 32, fontWeight: 'bold' }}>PAINKILLER :{this.props.PAINKILLER}</Text>

                <Button title='increPAINKILLER'
                    onPress={() => this.props.incrementPAINKILLER()}
                >
                </Button>
            </View>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         INJECTION: state.INJECTION,
//         PAINKILLER: state.PAINKILLER

//     }
// }

const mapStateToProps = state => {
    return {
        INJECTION: state.INJECTION.INJECTION,
        PAINKILLER: state.PAINKILLER.PAINKILLER

    }
}
const mapDispatchToProps = dispatch => {
    return {

        incrementINJECTION: () => dispatch(increINJECTION()),
        incrementPAINKILLER: () => dispatch(increPAINKILLER()),
     


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleReducer)