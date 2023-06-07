import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'

export default function HookDemo1() {
   
  const [count1, setcount1] = useState(100)

  const [count2, setcount2] = useState(200)

  const [show, setShow] = useState(true)

  useEffect(()=>{
    console.log("calling UseEffect",count1,count2)
  },[count1,count2])

  const delChild=()=>{
    setShow(false)
  }

  return (
    
    <View>
      <Text style={styles.headerTitle}>count1 : {count1}</Text>
      <TouchableOpacity style={{width:150,height:80,borderRadius:10,
      backgroundColor:"olive",borderWidth:3,borderColor:"gery", marginTop:20,alignSelf:'center'}} 
      onPress={(()=>setcount1(count1+1))}
      >

        <Text style={{fontSize:30,fontWeight:"bold",color:'white',textAlign:'center'}}>Update count1</Text>
      </TouchableOpacity>

      <Text style={styles.headerTitle}>count2 : {count2}</Text>
       
      <TouchableOpacity style={{width:150,height:80,borderRadius:10,
      backgroundColor:"olive",borderWidth:3,borderColor:"gery", marginTop:20,alignSelf:'center'}}
      onPress={(()=>setcount2(count2+2))}
      >
        <Text style={{fontSize:30,fontWeight:"bold",color:'white',textAlign:'center'}}>Update count2</Text>
      </TouchableOpacity>

      { show ? <ChildComponent/>  :<Text
      style={{fontSize:30,fontWeight:"bold",color:'white',textAlign:'center'}}> Component has been removed</Text>}
       <TouchableOpacity style={{width:150,height:80,borderRadius:10,
       backgroundColor:"olive",borderWidth:3,borderColor:"black", marginTop:20,alignSelf:'center'}}
       onPress={delChild}>
       <Text style={{fontSize:30,fontWeight:"bold",color:'white',textAlign:'center'}}>Delete Child</Text>
       </TouchableOpacity>
    </View>
    
  )
}

const ChildComponent =()=>{
  return(
    <View>
      <Text  style={styles.headerTitle}>ChildComponent</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'darkblue',
    textAlign: 'center',
    color: 'white',
    marginTop: 30
  }
})




