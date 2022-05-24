import React, { useState, useEffect } from "react";
import { View, Switch, StyleSheet, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Switches() {
  const [toggle, setToggle] = useState();

  const myToggle = () => {
    setToggle(!toggle);
    AsyncStorage.setItem("toggle", toggle.toString())
  }

  useEffect(() => {
    AsyncStorage.getItem("toggle").then(value => {
      value === "false" ? setToggle(true) : setToggle(false);
    });
  }, [])

  return (
    <View style={styles.container[toggle ? 0 : 1]}>
      <Image
        style={styles.image}
        source={require('../../img/title.png')}
        tintColor={!toggle ? '#fff' : '#000'}
      />
      <Icon style={styles.icon} name={toggle ? "warning-outline" : "happy"} color={toggle ? "black" : "white"} size={100} />
      <Switch
        value={toggle}
        onValueChange={() => myToggle()}
        thumbColor={toggle ? "#444" : "white"}
        trackColor={{ false: "#2f2", true: "red" }}
        style={[styles.switch]}
      />
      <Text style={[styles.msg, { color: `${toggle ? "#000" : "#FFF"}` }]}>
        {!toggle ? "Compressor desligado." : "Deligue o compressor."}
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: [{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333"
  }],
  msg: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    padding: 50,
    textAlign: "center"
  },
  icon: {
    marginBottom: 50,
  },
  image: {
    width: 200,
    height: 100,
  },
  switch: {
    transform: [{ scaleX: 2 }, { scaleY: 2 }],
  }
});