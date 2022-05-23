import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  FlatList
} from 'react-native';

export default function App() {
  return (
    <View style={scrollView.container}>
     <FlatLists/>
    </View>
  );
}
// FlatList
export function FlatLists() {
  const [feed, setFeed] = useState([
    {
      name: 'Galeno',
      age: '19',
      email: 'gui.galenocover@gmail.com'
    },
    {
      name: 'Luana',
      age: '19',
      email: 'luasantiago@gmail.com'
    },
    {
      name: 'Gusta',
      age: '19',
      email: 'aeromodelo123@gmail.com'
    }
    ,
    {
      name: 'Isa',
      age: '13',
      email: 'isabellagaleno@gmail.com'
    }
  ])
  return (
    <View style={scrollView.container}>
      <FlatList
        data={feed}
        renderItem={({item})=> <People data={item}/> }
      />
    </View>
  );
}
export function People({data}) {
  return(
    <View style={scrollView.container}>
      <View style={scrollView.item}>
        <Text>{data.name}</Text>
        <Text>{data.age}</Text>
        <Text>{data.email}</Text>
      </View>
    </View>
  )
}
// ScrollView
export function ScrollViews() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={scrollView.box1}></View>
      <View style={scrollView.box2}></View>
      <View style={scrollView.box3}></View>
      <View style={scrollView.box4}></View>
    </ScrollView>
  )
}
// Timer
export function Timer() {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const start = () => {
    if (timer === null) {
      const timer = setInterval(() => {
        setTime(time => time + 0.1);
      }, 100);
      setTimer(timer);

    } else {
      clearInterval(timer);
      setTimer(null);
    }
  }
  const clear = () => {
    setTime(0);
  }

  return (
    <View>
      <Image
        source={require('./src/img/timer.png')}
        style={styles.timer}
        tintColor='#fff'
      />
      <Text style={styles.time}>
        {time.toFixed(1)}
      </Text>
      <View style={styles.btnArea}>
        <TouchableOpacity
          style={styles.btn}
          onPress={start}>
          <Text style={styles.text}>
            {timer === null ? 'Start' : 'Stop'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={clear}>
          <Text style={styles.text}>
            Clear
          </Text>
        </TouchableOpacity>
      </View >
    </View>
  )
}
// FortuneBiscuit
export function FortuneBiscuit() {
  const [text, setText] = useState('Bem-vindo ao Fortune Biscuit!');
  const texts = [
    'Eu te amo.',
    'Seus olhos são castanho estelar.',
    'Você é o meu ápice da lua cheia.',
    'Teu Bom dia faz o meu dia muito mais belp.',
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
        source={require('./src/img/fortune_closed.png')}
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
// styles
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
const scrollView = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    backgroundColor: 'red',
    height: 250,
  },
  box2: {
    backgroundColor: 'green',
    height: 250,
  },
  box3: {
    backgroundColor: 'blue',
    height: 250,
  },
  box4: {
    backgroundColor: 'yellow',
    height: 250,
  },

})