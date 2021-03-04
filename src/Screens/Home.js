import React from "react";
import { Text, View, Button, Image, StyleSheet } from "react-native";
import Logo from "../../assets/logoNovo.png";
import Professor from "../../assets/teach.jpg";
import Cardimagem from "../../assets/20945183.jpg";
import { ScrollView } from "react-native-gesture-handler";
import Professora from "../../assets/tecnologianaeducação.jpg";
import Menino from "../../assets/shoulder.jpg";
import Criança from "../../assets/children.jpg";

function Home({ navigation }) {
  function abrirDawer() {
    navigation.openDrawer();
  }

  return (
    <ScrollView style={styles.container}>
      <Button title="Seja bem vindo em nossa plataforma" onPress={abrirDawer} />

      <View style={styles.logo}>
        <Image source={Logo} style={{ height: 130,justifyContent:'center',alignItems:'center' }}  />
      </View>

      <View style={styles.carrossel}>
        <Image
          source={Professor}
          style={{ width: '100%', height: 200, marginTop: 100 }}
        />
      </View>

      <View style={styles.foto}>
        <Image
          source={Cardimagem}
          style={{
            width: '80%',
            height: 250,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 80,
            marginTop: 100,
          }}
        />
      </View>

      <View>
        <View
          style={{
           
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold",marginBottom:10,marginTop:10}}>
            Sobre a Ensino Criativo
          </Text>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            Conectando e compatilhando conhecimento
          </Text>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 5,
            marginTop: 5,
          }}
        >
          <Text style={{ marginLeft: 30 }}>
            A Plataforma Ensino Criativo é uma rede colaborativa para
            professores de escolas públicas e privadas.Se conecte com docentes
            de todo o Brasil e tenha dentro da sua sala de aula, as melhores
            práticas educacionais.
          </Text>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 5,
            marginTop: 5,
          }}
        >
          <Text style={{ marginLeft: 30 }}>
            Compartilhando sua atividades pedagógicas para que outros
            professores apliquem, e de feedback sobre resultados.
          </Text>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 5,
            marginTop: 5,
          }}
        >
          <Text style={{ marginLeft: 30 }}>
            Aproveite atividades com melhores avaliações, e aumente a qualidade
            das suas salas.
          </Text>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 5,
            marginTop: 10,
          }}
        >
          <Text style={{ marginLeft: 30 }}>
            Conheça as prátias dos professores das melhores escolas, da sua
            região e de todo o Brasil.
          </Text>
        </View>
        <View style={styles.professora}>
          <Image
            source={Professora}
            style={{
              width: '80%',
              height: 200,
              marginTop: 36,
              marginLeft: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          />
          <Text
            style={{
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              marginTop: 7,
              marginLeft: 30,
              fontSize: 15,
            }}
          >
            A tecnologia a favor da educação
          </Text>
          <Text style={{ marginLeft: 30, marginTop: 7 }}>
            As ferramentas de tecnologia tem a capacidade de oferecer a
            qualidade na educação, além de aproximar a escola do universo do
            aluno
          </Text>
        </View>

        <View style={styles.menino}>
          <Image
            source={Menino}
            style={{
              width:'80%',
              height: 200,
              marginTop: 36,
              marginLeft: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          />
          <Text
            style={{
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              marginTop: 7,
              marginLeft: 30,
              fontSize: 15,
            }}
          >
            Lições da pandemia: 73% dos professores querem usar mais tecnologia
            em aula
          </Text>
          <Text style={{ marginLeft: 30, marginTop: 7 }}>
            O Brasil tem hoje 2,6 milhões de docentes. A maioria teve que se
            adaptar aos novos formatos de trabalho impostos pela pandemia.
          </Text>
        </View>

        <View style={styles.criança}>
          <Image
            source={Criança}
            style={{
              width: '80%',
              height: 200,
              marginTop: 36,
              marginLeft: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          />
          <Text
            style={{
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              marginTop: 7,
              marginLeft: 30,
              fontSize: 15,
            }}
          >
            Tecnologia na sala de aula proporciona educação inovadora
          </Text>
          <Text style={{ marginLeft: 30, marginTop: 7 }}>
            Neste período de pandemia, as instituições de ensino que já
            utilizavam os recursos tecnológicos integrados às suas metodologias
            se destacaram.
          </Text>
        </View>

        <Text
          style={{
            backgroundColor: "#7DC2F7",
            height: 40,
            width:'100%',
            marginTop: 20,
            // marginLeft: 30,
            justifyContent: "center",
            alignItems: "center",
            paddingLeft:50,
            marginRight: 25,
            color:'white',
            fontWeight:'bold',
            fontSize:15,
            paddingTop:5,
          }}
        >
          Entre em contato com a nossa plataforma
        </Text>
      </View>
<View>

  <Text style={{ marginLeft: 100, fontSize: 18,fontWeight:'bold',paddingTop:10}}>ENSINO CRIATIVO</Text>
  <Text style={{marginLeft: 30,paddingTop:5,}}>Uma plataforma digital para fortalecer seus conhecimentos,
    a um click de distância.
    Compromisso máximo com seu desenvolvimento escolar.Educação de qualidade para todos.

  </Text>
</View>
<View>
  <Text style={{ marginLeft: 130, fontSize: 18,fontWeight:'bold',paddingTop:10}}>CONTATO</Text>
<Text style={{marginLeft: '20%',paddingTop:5}}>Av. Paulista, 1500- São Paulo</Text>
<Text style={{marginLeft: '20%',paddingTop:5}}>contato@ensinocriativo.com.br</Text>

  <Text style={{marginLeft: '30%',paddingTop:5}}>Tel: (11) 98500-1000</Text>
  <Text style={{marginLeft: '30%',paddingTop:5}}>Fax: (11) 4688-0000</Text>

  </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  alignItems:'center',
    //  justifyContent:'center',
    // backgroundColor:"#7DC2F7",
  },
  logo: {
    flex: 1,
    width: '20%',
    height:30,
  },

  carrossel: {
    // marginBottom: ,
    
  },

  foto: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 300,
  },
});

export default Home;
