import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default function People({data}) {
  return(
    <View style={styles.container}>
      <View style={styles.items}>
        <Text style={styles.item} >Name: {data.name}</Text>
        <Text style={styles.item} >Age: {data.age}</Text>
        <Text style={styles.item} >Email: {data.email}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  items: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    fontSize: 15,
    fontWeight: 'bold',
    margin: 5,
  }
})