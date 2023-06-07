import { View, Text, Button } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increINJECTION, increPAINKILLER } from './Action'


export default function MedicineHook() {
const INJECTION=useSelector(state=>state.INJECTION.INJECTION)
const PAINKILLER=useSelector(state=>state.PAINKILLER.PAINKILLER)

    const dispatch = useDispatch()

    return (
            < View >
      <Text style={{ fontSize: 40, fontWeight: 'bold', textAlign: 'center' }}>MedicineHook Details</Text>
                <Text style={{ fontSize: 32, fontWeight: 'bold' }}>INJECTION   :{INJECTION}</Text>


                <Button title='increINJECTION'
                    onPress={() => dispatch(increINJECTION())}
                >
                </Button>
                <Text style={{ fontSize: 32, fontWeight: 'bold' }}>PAINKILLER :{PAINKILLER}</Text>

                <Button title='increPAINKILLER'
                    onPress={() =>  dispatch(increPAINKILLER())}
                >
                </Button>
    </View>
  )
}