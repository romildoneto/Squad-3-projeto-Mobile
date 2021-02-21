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

function Conteudo({ navigation }) {
  function abrirDawer() {
    navigation.openDrawer();
  }

  return (
    <View style={styles.container}>
      <Button title="Seja bem vindo em nossa plataforma" onPress={abrirDawer} />
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
              style={{ width: 300, height: 150, marginTop: 36, marginLeft: 30 }}
            />
            <Text style={{ marginLeft: 30, fontSize: 18 }}>Título do card</Text>
            <Text
              style={{
                marginLeft: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Um exemplo de texto rápido para construir o título do card e fazer
              preencher o conteúdo do card
            </Text>
            <TouchableOpacity
              title=" ir para  home"
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={{ color: "red", marginLeft: 30 }}> Clique aqui</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Image
              source={Historia}
              style={{ width: 300, height: 150, marginTop: 36, marginLeft: 30 }}
            />
            <Text style={{ marginLeft: 30, fontSize: 18 }}>Título do card</Text>
            <Text style={{ marginLeft: 30 }}>
              Um exemplo de texto rápido para construir o título do card e fazer
              preencher o conteúdo do card
            </Text>
            <TouchableOpacity
              title=" ir para  home"
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={{ color: "red", marginLeft: 30 }}> Clique aqui</Text>
            </TouchableOpacity>
          </View>
          
          <View>
            <Image
              source={Geografia}
              style={{ width: 300, height: 150, marginTop: 36, marginLeft: 30 }}
            />
            <Text style={{ marginLeft: 30, fontSize: 18 }}>Título do card</Text>
            <Text style={{ marginLeft: 30 }}>
              Um exemplo de texto rápido para construir o título do card e fazer
              preencher o conteúdo do card
            </Text>
            <TouchableOpacity
              title=" ir para  home"
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={{ color: "red", marginLeft: 30 }}> Clique aqui</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Image
              source={Matematica}
              style={{ width: 300, height: 150, marginTop: 36, marginLeft: 30 }}
            />
            <Text style={{ marginLeft: 30, fontSize: 18 }}>Título do card</Text>
            <Text style={{ marginLeft: 30 }}>
              Um exemplo de texto rápido para construir o título do card e fazer
              preencher o conteúdo do card
            </Text>
            <TouchableOpacity
              title=" ir para  home"
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={{ color: "red", marginLeft: 30 }}> Clique aqui</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Image
              source={Matematica}
              style={{ width: 300, height: 150, marginTop: 36, marginLeft: 30 }}
            />
            <Text style={{ marginLeft: 30, fontSize: 18 }}>Título do card</Text>
            <Text style={{ marginLeft: 30 }}>
              Um exemplo de texto rápido para construir o título do card e fazer
              preencher o conteúdo do card
            </Text>
            <TouchableOpacity
              title=" ir para  home"
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={{ color: "red", marginLeft: 30 }}> Clique aqui</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Image
              source={Biologia}
              style={{ width: 300, height: 150, marginTop: 36, marginLeft: 30 }}
            />
            <Text style={{ marginLeft: 30, fontSize: 18 }}>Título do card</Text>
            <Text style={{ marginLeft: 30 }}>
              Um exemplo de texto rápido para construir o título do card e fazer
              preencher o conteúdo do card
            </Text>
            <TouchableOpacity
              title=" ir para  home"
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={{ color: "red", marginLeft: 30 }}> Clique aqui</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Image
              source={Educaçaofisica}
              style={{ width: 300, height: 150, marginTop: 36, marginLeft: 30 }}
            />
            <Text style={{ marginLeft: 30, fontSize: 18 }}>Título do card</Text>
            <Text style={{ marginLeft: 30 }}>
              Um exemplo de texto rápido para construir o título do card e fazer
              preencher o conteúdo do card
            </Text>
            <TouchableOpacity
              title=" ir para  home"
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={{ color: "red", marginLeft: 30 }}> Clique aqui</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Image
              source={Quimica}
              style={{ width: 300, height: 150, marginTop: 36, marginLeft: 30 }}
            />
            <Text style={{ marginLeft: 30, fontSize: 18 }}>Título do card</Text>
            <Text style={{ marginLeft: 30 }}>
              Um exemplo de texto rápido para construir o título do card e fazer
              preencher o conteúdo do card
            </Text>
            <TouchableOpacity
              title=" ir para  home"
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={{ color: "red", marginLeft: 30 }}> Clique aqui</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Image
              source={Ingles}
              style={{ width: 300, height: 150, marginTop: 36, marginLeft: 30 }}
            />
            <Text style={{ marginLeft: 30, fontSize: 18 }}>Título do card</Text>
            <Text style={{ marginLeft: 30 }}>
              Um exemplo de texto rápido para construir o título do card e fazer
              preencher o conteúdo do card
            </Text>
            <TouchableOpacity
              title=" ir para  home"
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={{ color: "red", marginLeft: 30 }}> Clique aqui</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Image
              source={Fisica}
              style={{ width: 300, height: 150, marginTop: 36, marginLeft: 30 }}
            />
            <Text style={{ marginLeft: 30, fontSize: 18 }}>Título do card</Text>
            <Text style={{ marginLeft: 30 }}>
              Um exemplo de texto rápido para construir o título do card e fazer
              preencher o conteúdo do card
            </Text>
            <TouchableOpacity
              title=" ir para  home"
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={{ color: "red", marginLeft: 30 }}> Clique aqui</Text>
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
    // justifyContent:'center',
    // alignItems:'center',
  },
});
export default Conteudo;
