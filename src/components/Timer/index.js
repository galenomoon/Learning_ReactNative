import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
export default function Timer() {
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
  const clear = () => setTime(0);

  return (
    <View style={[styles.jcCenter, styles.aiCenter]}>
      <Image
        source={require('../../img/timer.png')}
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
          <Text style={timer !== null ? styles.stop : styles.start }>
            {timer === null ? 
            <Icon name="play" size={20} />
            : <Icon name="pause" size={20} />}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={clear}>
          <Text style={styles.text}>
          <Icon name="stop" size={20} />
          </Text>
        </TouchableOpacity>
      </View >
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333'
  },
  icon: {
    width: 20,
    fontSize: 20,
    color: '#fff'
  },
  stop: {
    color: '#f00'
  },
  start: {
    color: '#0f0'
  },
  btn: {
    height: 50,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderColor: '#FFF',
    borderRadius: 9,
    marginTop: 20,
    marginHorizontal: 5,
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
  text: {
    color: '#FFF',
    fontSize: 15,
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
  jcCenter: {
    justifyContent: "center"
  },
  jcEvenly: {
    justifyContent: "space-evenly"
  },
  aiCenter: {
    alignItems: "center"
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