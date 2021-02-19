import React from "react";
import { Text, View,Button,StyleSheet } from "react-native";

function Conteudo({navigation}) {
  function abrirDawer() {
    navigation.openDrawer();
  }

  return (
    <View style={styles.container}>
      

      <Button title="Abrir"
      onPress={
          abrirDawer
      } 
          />
          <Text>Minha pagina de conteudo</Text>
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
  flex:1,
  backgroundColor:"#7DC2F7",
  
  },

})
export default Conteudo;