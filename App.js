import React from "react";
import { Text, View, StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./src/Screens/Home";
import Cadastro from "./src/Screens/Cadastro";
import Conteudo from "./src/Screens/Conteudo";
import Login from "./src/Screens/Login";


 const Drawer = createDrawerNavigator();
 function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Drawer.Navigator initialRouteName="Home" drawerStyle={{backgroundColor:'blue'}}
       overlayColor=''
       >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Cadastro" component={Cadastro} />
        <Drawer.Screen name="Conteudo" component={Conteudo} />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
