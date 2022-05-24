import React, {useState} from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";

export default function FortuneBiscuit() {
  const [text, setText] = useState('Bem-vindo ao Fortune Biscuit!');
  const texts = [
    'Eu te amo.',
    'Seus olhos são castanho estelar.',
    'Você é o meu ápice da lua cheia.',
    'Teu Bom dia faz o meu dia muito mais belo.',
    'Por e pra você, pra sempre.',
    'Eu quero me casar contigo.',
    'Você é o meu mundo.',
    'A nossa vibe é surreal',
    'ja disse q te amo?',
    'Às vezes eu só preciso parar de correr um pouco, pra enxergar o que esta comigo agora'
  ]

  function randomText() {
    let text = texts[Math.floor(Math.random() * texts.length)];
    setText(text);
  }

  return (
    <View style={[styles.container, styles.jcEvenly, styles.aiCenter, styles.Col]}>
      <Image
        source={require("../../img/biscuit.png")}
        style={styles.img}
      />
      <Text style={styles.mainText}>
        "{text}"
      </Text>
      <View style={[styles.jcEvenly, styles.aiCenter, styles.Col]}>
        <TouchableOpacity onPress={() => randomText()}>
          <View style={[styles.btn, styles.jcCenter, styles.aiCenter]}>
            <Text style={styles.text}>
              Break Cookie
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333'
  },
  btn: {
    height: 50,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderColor: '#FFF',
    borderRadius: 9,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnArea: {
    marginTop: 80,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  timer: {
    width: 300,
    height: 300,
  },
  img: {
    width: 200,
    height: 200
  },
  text: {
    color: '#FFF',
    fontSize: 15,
  },
  mainText: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginVertical: 20,
    textAlign: 'center'
  },
  time: {
    color: '#FFF',
    fontSize: 40,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginVertical: 20,
    marginTop: -110,
    textAlign: 'center'
  },
  box: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  jcCenter: {
    justifyContent: "center"
  },
  jcEnd: {
    justifyContent: "flex-end"
  },
  jcStart: {
    justifyContent: "flex-start"
  },
  jcBetween: {
    justifyContent: "space-between"
  },
  jcAround: {
    justifyContent: "space-around"
  },
  jcEvenly: {
    justifyContent: "space-evenly"
  },
  aiCenter: {
    alignItems: "center"
  },
  aiEnd: {
    alignItems: "flex-end"
  },
  aiStart: {
    alignItems: "flex-start"
  },
  aiBetween: {
    alignItems: "space-between"
  },
  aiAround: {
    alignItems: "space-around"
  },
  aiEvenly: {
    alignItems: "space-evenly"
  },
  Row: {
    flexDirection: "row"
  },
  Col: {
    flexDirection: "column"
  },
});