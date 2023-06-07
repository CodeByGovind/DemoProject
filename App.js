// import { View, Text } from 'react-native'
// import React from 'react'
// import { Provider } from 'react-redux';
// import {store,persistor} from './Component/UserTask/Store';
// import Store from './Component/ReduxThunk/Store';
// import SingleReducer from './Component/ReactNativeRedux/Medicine';
// import MedicineHook from './Component/ReactNativeRedux/MedicineHook';
// import UserRegistration from './Component/UserTask/UserRegistration';
// import { PersistGate } from 'redux-persist/integration/react'
// import UserDetails from './Component/ReduxThunk/UserDetails';
// import CostomerLogin from './Component/ReduxThunk/CostomerLogin';
// import LocationDemo from './Component/LocationTracking/LocationDemo';
// import MapDemo from './Component/MapDemo/MapDemo'
// import Display from './Component/Swiggy/display';
// import LoginRegistr from './Component/ReduxThunk/HomePage';
// // import { store } from './Component/UserTask/Store';
// import Mapdemos from './Component/MapDemo/Mapdemos';
// function App() {
//   return (
//     <Provider store={store}>
//     {/* <View> */}
//       <PersistGate loading={<Text>Loading..</Text>}persistor={persistor}>
//       <View style={{flex:1}}>
//         {/* <Text style={{ fontSize: 40, fontWeight: 'bold', textAlign: 'center' }}>Redux</Text> */}
//         {/* <SingleReducer />
//         <MedicineHook/> */}
//         <UserRegistration/>
//       {/* <CostomerLogin/> */}
//       {/* <LoginRegistr/> */}
//       {/* <UserDetails/> */}
//       {/* <LocationDemo/> */}
//       {/* <MapDemo /> */}
//       {/* <Mapdemos/> */}
//       {/* <Display/> */}
//       </View>
//      </PersistGate>
//      </Provider>
//   )
// }
// export default App;


//============================


// import { View, Text } from 'react-native';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';

// import AsynStorageDemos from './Component/AsyncStorage/AsyncNavigationTask';
// import TaskDemo from './Component/Navigation/TaskDemo';
// import TestQuiz from './Component/Navigation/Drawer';
// // import LoginRegistr from './Component/GovindTest/LoginRegist';
// import Index from './Component/CURDopration';
// import ResponsiveUi from './Component/ClassComponents/ResponsiveUi';
// export default function App() {
//   return (
//     // <View>
//     //   <Text style={{ fontSize: 40, fontWeight: 'bold', textAlign: 'center' }}>App</Text>
//     // </View>
//     // <AsynStorageDemos/>
//     // <TaskDemo/>
//     // <LoginRegistr />
//     // <Index/>

//     <NavigationContainer>
//       {/* <TestQuiz /> */}
//     <ResponsiveUi/>

//     </NavigationContainer>

//   )
// }

// //=================================================



// import React from 'react';
// import { View, Text, StyleSheet, ScrollView } from 'react-native';
// import Player from './Component/FunctionComponents/CricketPlayer';
// import Product from './Component/ClassComponents/Product';
// import Student from './Component/FunctionComponents/Student';
// import BankConstructor from './Component/Constructor/BankConstructor';
// import Car from './Component/Constructor/assigmentCar';
// import HookDemo1 from './Component/reactHook/HookDemo1';
// import HookDemo from './Component/reactHook/HookAssigment';
// import FlexDemo from './Component/FlexDemo/FlexDemo';
// import ContactForm from './Component/reactHook/Form';
// import FlexDemoAssigment from './Component/FlexDemo/FlexDemoAssigment';
// import Facebook from './Component/InputForm/Facebook';
// import Demodate from './Component/InputForm/Datetime';
// import Login from './Component/InputForm/Login';
// import Siwitch from './Component/InputForm/switch';
// import { DateTime } from './Component/InputForm/Demodate';
// import FlatListDemo from './Component/FlatList/Fletlistdemo';
// import Resume from './Component/FlexDemo/Resume';
// import ShoppingAssigment from './Component/InputForm/ShoppingAssigment';
// import SectionListDemo from './Component/InputForm/Sectiondemo';
// import SectionDemoClass from './Component/FlatList/SectionDemoClass';
// import TabDemo from './Component/Constructor/AssiegmentDemo';
// import NavigationDemo from './Component/Navigation/NavigationDemo'
// import NavigationDemos from './Component/Navigation/TestNavigationDemo';
// import Test from './Component/Navigation/TestDemo';
// import Flag from './Component/ClassComponents/Flag';
// import Swiggy from './Component/Swiggy/Swiggy';
// import SearchItem from './Component/Swiggy/SearchItem';
// import SearchbarTextInput from './Component/Swiggy/SearchbarTextInput';
// import Index from './Component/CURDopration';

// function App() {
//   return (

//     <ScrollView >
//       <View style={{ flex: 1 }}>
//         {/* <Flag/>  */}
//         {/* <Swiggy /> */}
//         {/* <SearchItem/> */}
//         {/* <SearchbarTextInput/> */}
//            {/* <Text style={styles.headerTitle}>RESUME</Text> */}

//       {/* {/ <Text style={styles.headerTitle}>TEAM-INDIA</Text> /}
//        {/ <Text style={styles.headerTitle}>PRODUC CAR</Text> /}*/}
//       {/* <Text style={styles.headerTitle}> HOOKS_DEMO</Text>    */}
//       {/* <Text style={styles.headerTitle}> INPUT-FORM</Text> */}
//       {/* <Text style={styles.headerTitle}>FLEX-DEMO </Text>    */}



//       {/* {/ <Text style={styles.headerTitle}>PRODUCT DITAILS</Text> /} */}


//       {/* <Player name="Virat koli" NoOfOdiMatches={260} NoOftestMatches={101} score="20354"teamname="india" />
//       //  <Player name="Rohit Sharma" NoOfOdiMatches={230} NoOftestMatches={45} score="12420"teamname="india" />
//        <Player name="M.S.Doni" NoOfOdiMatches={350} NoOftestMatches={90} score="15649"teamname="india" /> */}
//       {/* {/ <Car/>  /}
//        {/ <Student/> /}
//        {/ <Category/> /}


//        {/ <Product name="Jeans" brand="Lee" price={1500} size="32,34,36," /> /}
//            <BankConstructor/>  

//         //  <HookDemo/>  
//       {/* <HookDemo1/>   */}
//        {/* <ContactForm/>  */}
//       {/* <FlexDemo/> */}
//       {/* <FlexDemoAssigment/> */}

//       {/* <Flexemployee/> */}
//       {/* <BankConstructor/>   */}

//       {/* <Facebook/>  */}
//       {/* <Login/> */}
//       {/* <Siwitch/> */}
//       {/* <DateTimePickerClassDemo/> */}
//       {/* <DateTimePickerDemo/> */}
//       {/* <Demodate /> */}
//       {/* <DateTime/> */}
//       {/* <FlatListDemo/> */}
//       {/* <ShoppingAssigment />  */}
//       {/* <Resume/> */}
//       {/* <SectionListDemo/> */}
//       {/* <SectionDemoClass/> */}
//        {/* < TabDemo/>  */}
//        {/* <NavigationDemo />  */}
//       {/* <NavigationDemos/> */}
//       {/* <Test studentDetails={studDetails} /> */}
//       {/* <NavigationDemo_a/> */}
//       {/* <Index/> */}
//       </View>
//     </ScrollView>
//   )
// }
// export default App;

// import { StyleSheet, Text, View, ScrollView } from 'react-native'
// import React from 'react'
// import PhoneSignIn from './Component/ClassComponents/firebase/firebase'
// import SocialLogin from './Component/GmailIntrigation/GmailIntrig'
// const App = () => {
//   return (
//     <ScrollView>
//       <View>
//         <SocialLogin />
//         <PhoneSignIn />

//       </View>
//     </ScrollView>

//   )
// }

// export default App;


//================================================================
// import * as React from 'react';
// import {react, useEffect} from "react";
// import { View, Image, StyleSheet, Button,Text,ImageBackground,StatusBar } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {useFonts} from '@expo-google-fonts/inter';
// import AppLoading from 'expo-app-loading';
// import Stack from './SRC/navigationscreen/Stack';




// export default function App() {
//   let [fontsLoaded] = useFonts({
//     'PoppinsMedium': require('./SRC/Font/Poppins/Poppins-Medium.ttf'),
//     'PoppinsRegular': require('./SRC/Font/Poppins/Poppins-Regular.ttf'),
//     'PoppinsThin': require('./SRC/Font/Poppins/Poppins-Thin.ttf'),
//     'PoppinsSemiBold': require('./SRC/Font/Poppins/Poppins-SemiBold.ttf'),
//   });

//   if(!fontsLoaded){
//     return <AppLoading/>;
//   }

//   return (
//     <NavigationContainer>
//       <Stack />
//     </NavigationContainer>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//   },
// });

// console.disableYellowBox = true;
//=========================================
// import { View, Text } from 'react-native'
// import React from 'react'
// import Userinterface from './Component/HBTask/Ui';
// export default function App() {
//   return (
//     <View>
//       <Userinterface/>
//     </View>
//   )
// }

//=====================================

// // import { View, Text ,Button,TextInput ,TouchableOpacity,Image,ImageBackground,StyleSheet} from 'react-native'
// import React from 'react'
// // import Pankaj from './Component/Constructor/Pankaj'
// // import Swiggy from './Component/Swiggy/Swiggy'
// // import Ui from './Component/Constructor/Ui'
// // import Testa from './Component/FlatList/GovindTest'
// // import AtulyaItParkTask from './Component/AsyncStorage/AtulyaItParkTask'
// import {App} from './Component/Navigation/Sidemenu'

// export default function App() {
//   return (
//     // <View style={{flex:1}}>
//       // {/* <Pankaj/> */}
//       // {/* <Swiggy/> */}
//       // {/* <Testa/> */}
//       // <AtulyaItParkTask/>
//       // {/* <ShoppingAssigment/> */}
//     // {/* </View> */}

//     <App/>
//   )
// }


import { View, Text } from 'react-native'
import React from 'react'
// import Rootstacknavigater from './src/screen/rootstacknavigater'
import RegisterForm from './Component/Form/Register'
import LoginForm from './Component/Form/LoginForm'
import Desh from './Component/Form/Desh'
import UpdateProfileForm from './Component/Form/UpdateForm'
import DeleteAccountForm from './Component/Form/DeleteForm'
import Technorizentest from './Component/Technorizen/Technorizentest'
import MyComponent from './Component/Technorizen/api'
import DemoApi from './Component/Technorizen/DemoApi'
export default function App() {
  return (
    // <Rootstacknavigater/>
    <View style={{ flex: 1 }}>
      {/* <Desh/> */}
      {/* <RegisterForm/> */}
      {/* <LoginForm/> */}
      {/* <UpdateProfileForm/> */}
      {/* <DeleteAccountForm/> */}
      {/* <Technorizentest/> */}
      {/* <MyComponent/> */}
      <DemoApi />
    </View>
  )
}



// import { View, Text } from 'react-native'
// import React from 'react'
// import FlatListDemoTask from './Component/FlatList/Flatlisttask'
// import React_native_Assignment from './Component/Viem_Test/Viem_Test'
// export default function App() {
//   return (
//     <View>
//       {/* <Text>App</Text> */}
//       <FlatListDemoTask/>
//     </View>
//     // <React_native_Assignment/>
//   )
// }