import React from "react";
import { Text, View, StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./src/Screens/Home";
import Cadastro from "./src/Screens/Cadastro";
import Conteudo from "./src/Screens/Conteudo";
import Login from "./src/Screens/Login";
import Modal from "./src/Screens/Modal";


 const Drawer = createDrawerNavigator();
 function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Drawer.Navigator initialRouteName="Home" drawerStyle={{backgroundColor:'#7DC2F7'}}
       overlayColor='#7DC2F7'
       >
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Cadastro" component={Cadastro} />
        <Drawer.Screen name="Conteudo" component={Conteudo} />
        <Drawer.Screen name="Modal" component={Modal} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
 
}
export default App;
