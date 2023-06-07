import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'

export default function HookDemo() {
   

const [brand, setBrand] = useState("mahindra_thar")
const [modal, setModal] = useState("thar_LX_4str")
var [color, setColor] = useState("red")
const [year, setYear] = useState(2020)

  useEffect(()=>{
    console.log("calling UseEffect",brand,modal,color,year)
  })


  return (
    <View>
      <Text style={styles.headerTitle}>brand : {brand}</Text>
      <Text style={styles.headerTitle}>modal: {modal}</Text>
      <Text style={styles.headerTitle}>year: {year}</Text>
      <TouchableOpacity style={{width:150,height:80,borderRadius:10,
      backgroundColor:"olive",borderWidth:3,borderColor:"black", marginTop:20,alignSelf:'center'}} 
      
      onPress={(()=>setYear(year+1))}>
        <Text style={{fontSize:50,fontWeight:"bold",color:'white',textAlign:'center'}}>year</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Color : {color}</Text>

      <TouchableOpacity style={{width:150,height:80,borderRadius:10,
      backgroundColor:"green",borderWidth:3,borderColor:"black", marginTop:20,alignSelf:'center'}} 
      
      onPress={(()=>setColor(color ='black'))}>

        <Text style={{fontSize:50,fontWeight:"bold",color:'white',textAlign:'center'}}>Color</Text>
      </TouchableOpacity>
       
    </View>
    
  )
}


const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'blue',
    textAlign: 'center',
    color: 'white',
    marginTop: 30,
    
  }
})