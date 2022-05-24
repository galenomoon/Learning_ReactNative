import React, { useState, useEffect } from "react";
import { View, Switch, StyleSheet, Image, Text, Modal, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Switches() {
  const [toggle, setToggle] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  const myToggle = () => {
    setToggle(!toggle);
    AsyncStorage.setItem("toggle", toggle.toString())
    setModalVisible(!modalVisible)
  }

  useEffect(() => {
    AsyncStorage.getItem("toggle").then(value => {
      value === "false" ? setToggle(true) : setToggle(false);
    });
  }, [])

  return (
    <View style={[styles.container, { backgroundColor: `${toggle ? "#FFF" : "#333"}` }]}>
      <Image
        style={styles.image}
        source={require('../../img/title.png')}
        tintColor={!toggle ? '#fff' : '#000'}
      />
      <Icon style={styles.icon} name={toggle ? "warning-outline" : "happy"} color={toggle ? "black" : "white"} size={100} />
      <Switch
        value={toggle}
        onValueChange={() => setModalVisible(!modalVisible)}
        thumbColor={toggle ? "#444" : "white"}
        trackColor={{ false: "#2f2", true: "red" }}
        style={[styles.switch]}
      />
      <Text style={{color:"red", fontWeight:"bold", fontSize:20, marginTop:10}}>
        {toggle && "DESLIGUE O COMPRESSOR"}
      </Text>
      <Text style={[styles.msg, { color: `${toggle ? "#000" : "#FFF"}` }]}>
        {!toggle ? "COMPRESSOR DESLIGADO." : "COMPRESSOR LIGADO."}
      </Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Eii! Você realmente está {toggle ? "desligando" : "ligando"} o compressor?</Text>
            <View style={{flexDirection:"row", justifyContent: "space-between", paddingHorizontal:10}}>
              <Pressable style={[styles.button, {backgroundColor: "#2196F3"}]} onPress={() => myToggle()} >
                <Text style={styles.textStyle}>Sim</Text>
              </Pressable>
              <Pressable style={[styles.button, {backgroundColor: "#F44336"}]} onPress={() => setModalVisible(!modalVisible)} >
                <Text style={styles.textStyle}>Não</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: [{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
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
  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 35,
    marginTop: 200,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 5,
    paddingHorizontal: 40,
    paddingVertical: 10,
    margin:5,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20
  },
  bold:{
    fontWeight: "bold"
  }
});