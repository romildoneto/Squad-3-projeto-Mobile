import React from "react";
import { Text, View, Button, StyleSheet, Image } from "react-native";
import Portugues from "../../assets/losa19.jpeg";
import Historia from "../../assets/losa20.jpeg";
import Geografia from "../../assets/losa13.jpeg";
import Matematica from "../../assets/losa18.jpeg";
import Biologia from "../../assets/losa15.jpeg";
import Educaçaofisica from "../../assets/losa16.jpeg";
import Quimica from "../../assets/losa21.jpeg";
import Ingles from "../../assets/losa22.jpeg";
import Fisica from "../../assets/losa23.jpeg";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
// import Modal from 'react-native-modal';

// function Modal (){
// const [visible,setVisible] = useState(false)
// return(
//     <View style={Styles.container}>
//               <Text>fazer um modal</Text>
//               <Button title='mostrar modal' onPress={()=>{setVisible(true)}} />
//           <Modal isVisible={visible}>
//             <View style={{backgroundColor:'blue',height:50}}>
//               <Text>esta correto</Text>
//               <Button title='fechar modal' onPress={()=>{setVisible(false)}}/>
//            </View>
//          </Modal>
//      </View>
// )

// }


function Conteudo({ navigation }) {
  function abrirDawer() {
    navigation.openDrawer();
  }

  return (
    <View style={styles.container}>
      <Button title="Seja bem vindo em nossa plataforma" onPress={abrirDawer} />
      <TouchableOpacity
              title=" ir para  home"
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={{ color: "white", marginLeft: 900, backgroundColor:'red', marginTop:10,width:160, height:30,fontWeight:'bold' }}> Adicionar plano de aula</Text>
       </TouchableOpacity>
      <ScrollView>
        <View style={styles.portugues}>
          <View>
            <Text
              style={{
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: 20,
                alignItems: "center",
                marginTop: 10,
                marginLeft: 110,
              }}
            >
              Suas Materias
            </Text>
            <Image
              source={Portugues}
              style={{ width:'80%', height:200, marginTop: 36,marginStart:40}}
            />
            <Text style={{ marginLeft: 40, fontSize: 18 }}>Autor: Roseli Braga</Text>
            <Text
              style={{
                marginLeft: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Lingua Portuguesa
            </Text>
            <Text style={{
                marginLeft: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >Indicação de 8 a 10 anos</Text>
            <TouchableOpacity
              title=" ir para  home"
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={{ color: "red", marginLeft: 40 }}> Entrar</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Image
              source={Historia}
              style={{ width:'80%', height:200, marginTop: 36,marginStart:40 }}
            />
            <Text style={{ marginLeft: 40, fontSize: 18 }}>Autor: Roseli Braga</Text>
            <Text style={{ marginLeft: 40 }}>
              História
            </Text>
            <Text style={{
                marginLeft: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >Indicação de 8 a 10 anos</Text>
            <TouchableOpacity
              title=" ir para  home"
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={{ color: "red", marginLeft: 40 }}> Entrar</Text>
            </TouchableOpacity>
          </View>
          
          <View>
            <Image
              source={Geografia}
              style={{  width:'80%', height:200, marginTop: 36,marginStart:40 }}
            />
            <Text style={{ marginLeft: 40, fontSize: 18 }}>Autor: Roseli Braga</Text>
            <Text style={{ marginLeft: 40 }}>
              Geografia
            </Text>
            <Text style={{
                marginLeft: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >Indicação de 8 a 10 anos</Text>
            <TouchableOpacity
              title=" ir para  home"
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={{ color: "red", marginLeft: 40 }}> Entrar</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Image
              source={Matematica}
              style={{  width:'80%', height:200, marginTop: 36,marginStart:40 }}
            />
            <Text style={{ marginLeft: 40, fontSize: 18 }}>Autor: Roseli Braga </Text>
            <Text style={{ marginLeft: 40 }}>
              Matemática Básica
            </Text>
            <Text style={{
                marginLeft: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >Indicação de 8 a 10 anos</Text>
            <TouchableOpacity
              title=" ir para  home"
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={{ color: "red", marginLeft: 40 }}> Entrar</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Image
              source={Biologia}
              style={{ width:'80%', height:200, marginTop: 36,marginStart:40 }}
            />
            <Text style={{ marginLeft: 40, fontSize: 18 }}>Autor: Roseli Braga</Text>
            <Text style={{ marginLeft: 40 }}>
              Biologia
            </Text>
            <Text style={{
                marginLeft: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >Indicação de 8 a 10 anos</Text>
            <TouchableOpacity
              title=" ir para  home"
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={{ color: "red", marginLeft: 40 }}> Entrar</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Image
              source={Educaçaofisica}
              style={{  width:'80%', height:200, marginTop: 36,marginStart:40 }}
            />
            <Text style={{ marginLeft: 40, fontSize: 18 }}>Autor: Roseli Braga</Text>
            <Text style={{ marginLeft: 40 }}>
              Educação Física
            </Text>
            <Text style={{
                marginLeft: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >Indicação de 8 a 10 anos</Text>
            <TouchableOpacity
              title=" ir para  home"
              onPress={() => navigation.navigate("Modal")}
            >
              <Text style={{ color: "red", marginLeft: 40 }}> Entrar</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Image
              source={Quimica}
              style={{  width:'80%', height:190, marginTop: 36,marginStart:40 }}
            />
            <Text style={{ marginLeft: 40, fontSize: 18 }}>Autor: Roseli Braga</Text>
            <Text style={{ marginLeft: 40 }}>
              Quimica
            </Text>
            <Text style={{
                marginLeft: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >Indicação de 8 a 10 anos</Text>
            <TouchableOpacity
              title=" ir para  home"
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={{ color: "red", marginLeft: 40 }}> Entrar</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Image
              source={Ingles}
              style={{ width:'80%', height:200, marginTop: 36,marginStart:40 }}
            />
            <Text style={{ marginLeft: 40, fontSize: 18 }}>Autor: Roseli Braga</Text>
            <Text style={{ marginLeft: 40 }}>
             Inglês
            </Text>
            <Text style={{
                marginLeft: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >Indicação de 8 a 10 anos</Text>
            <TouchableOpacity
              title=" ir para  home"
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={{ color: "red", marginLeft: 40 }}> Entrar</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Image
              source={Fisica}
              style={{ width:'80%', height:200, marginTop: 36,marginStart:40 }}
            />
            <Text style={{ marginLeft: 40, fontSize: 18 }}>Autor: Roseli Braga</Text>
            <Text style={{ marginLeft: 40 }}>
              Física
            </Text>
            <Text style={{
                marginLeft: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >Indicação de 8 a 10 anos</Text>
            <TouchableOpacity
              title=" ir para  home"
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={{ color: "red", marginLeft: 40 }}> Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7DC2F7",
    justifyContent: "center",
  },

  portugues: {
    //  justifyContent:'center',
    //  alignItems:'center',
  },
});
export default Conteudo;
