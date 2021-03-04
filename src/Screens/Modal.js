import React from 'react';
import {  Text, View,Button,TextInput,StyleSheet,
    TouchableOpacity,} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


function Modal({navigation}) {
    function abrirDawer() {
      navigation.openDrawer();
    }
  
    return (
  <ScrollView>
      <View style={styles.container}>
        
  
        <Button title="Seja bem vindo em nossa plataforma"
        onPress={
            abrirDawer
        } 
            />
     <View style={styles.container}>

               <Text style={styles.titulo}>Plano de aula</Text>
             
             
             <Text>Unidade temática:</Text>
             <TextInput
             style={styles.input}
             
             />
              <Text>Objeto de conhecimento:</Text>
             <TextInput
             style={styles.input}
             
             />
              <Text>Habilidades:</Text>
             <TextInput
             style={styles.input}
             
             />
              <Text>Descrição das atividades com recursos utilizados:</Text>
             <TextInput
             style={styles.input}
             
             />
              <Text>Atividades de estudo:</Text>
             <TextInput
             style={styles.input}
             
             />
              <Text>Instrumento de avaliação:</Text>
             <TextInput
             style={styles.input}
             
             />
             
         <TouchableOpacity
          
          >

         <Text style={styles.botaoText }>Fechar </Text>
         <Text style={styles.botaoText }>Enviar </Text>


         
         </TouchableOpacity>
         <TouchableOpacity

              style={{
                  borderStartColor:'#fff',
                  width:300,
                  height:300,
                  alignItems:'center',
                  justifyContent:'center',
                  borderRadius:10,
                  paddingBottom:250,
                  
              }}
                  title = ' ir para  Modal' onPress={() =>
                  navigation.navigate('Modal')}>
                  </TouchableOpacity>

          </View>
      </View>
    </ScrollView>
      
    )
  }

  const styles= StyleSheet.create({
    container:{
    flex:1,
     alignItems:'center',
    justifyContent:'center',
    backgroundColor:"#7DC2F7",
   
    
   
    },
    
    input:{
    marginTop: 10,
    padding:10,
    width:300,
    backgroundColor:'#fff',
    fontSize:16,
    fontWeight:'bold',
    borderRadius: 10,
    
    },
    
    botaoText:{
     marginTop: 10,
     padding:10,
    width:80,
    backgroundColor:'blue',
    fontSize:16,
    fontWeight:'bold',
    borderRadius: 10,
    color:'black',
    },
    
    titulo:{
    marginTop: 60,
    marginBottom:10,
    padding:10,
    fontSize:20,
    fontWeight:'bold',
    alignItems:'center',
    justifyContent:'center',
    color:'#fff'
    
    },
    })
export default Modal;