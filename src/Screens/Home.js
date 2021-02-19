import React from "react";
import { Text, View,Button,Image,StyleSheet } from "react-native";
import Logo from '../../assets/logoNovo.png';

function Home({navigation}) {
  function abrirDawer() {
    navigation.openDrawer();
  }

  return (
    <View style={styles.container}>


      <Button title="Seja bem vindo em nossa plataforma"
      onPress={
          abrirDawer
      } 
          />
      <View style={styles.logo}>
           <Image source={Logo} />
           
       </View>
       
      
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
  flex:1,
   alignItems:'center',
   justifyContent:'center',
  backgroundColor:"#7DC2F7",
 
  
  },
logo:{
  flex:1,
   alignItems:'center',
  justifyContent:'center',
  width:300,
  height:300,
  
  
}

})

export default Home;
