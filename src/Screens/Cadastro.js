import React from 'react';
import {  Text, View,Button,TextInput,StyleSheet,
    TouchableOpacity } from 'react-native';

function Cadastro({navigation}) {
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
   <View style={styles.container}>
               <Text style={styles.titulo}>Faça seu Cadastro</Text>
             
               <TextInput
             style={styles.input}
             placeholder="Digite seu nome"
             />
             
             <TextInput
             style={styles.input}
             placeholder="Digite seu sobrenome"
             />

<TextInput
             style={styles.input}
             placeholder="Digite seu CPF"
             />

<TextInput
             style={styles.input}
             placeholder="Digite seu RG"
             />
             <TextInput
             style={styles.input}
             placeholder="Digite seu endereço"
             />
               <TextInput
               style={styles.input}
               secureTextEntry={true}
               placeholder="Digite sua cidade"
             />
  <TextInput
               style={styles.input}
               secureTextEntry={true}
               placeholder="Digite seu email"
             />

<TextInput
               style={styles.input}
               secureTextEntry={true}
               placeholder="Digite sua senha"
             />

<TextInput
               style={styles.input}
               secureTextEntry={true}
               placeholder=" Confirme sua senha"
             />
         <TouchableOpacity
          
          >

         <Text style={styles.botaoText }>Enviar </Text>
         </TouchableOpacity>
         <TouchableOpacity

              style={{
                  borderStartColor:'#fff',
                  width:300,
                  height:30,
                  alignItems:'center',
                  justifyContent:'center',
                  borderRadius:5,
              }}
                  title = ' ir para  Login' onPress={() =>
                  navigation.navigate('Login')}>


                      <Text style = {{color:'black'}}>Entre na pagina de Login</Text>
                  </TouchableOpacity>


         

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
    width:300,
    backgroundColor:'#fff',
    fontSize:16,
    fontWeight:'bold',
    borderRadius: 10,
    color:'black',
    },
    
    titulo:{
    marginTop: 10,
    padding:10,
    fontSize:20,
    fontWeight:'bold',
    alignItems:'center',
    justifyContent:'center',
    color:'#fff',
    
    },
    })
export default Cadastro;