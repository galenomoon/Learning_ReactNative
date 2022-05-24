import React, {useState} from "react";
import {View, FlatList, StyleSheet} from "react-native";
import People from "./Peoples";

export default function FlatLists() {
  const [feed, setFeed] = useState([
    { 
      id: '1',
      name: 'Galeno',
      age: '19',
      email: 'gui.galenocover@gmail.com'
    },
    {
      id: '2',
      name: 'Luana',
      age: '19',
      email: 'luasantiago@gmail.com'
    },
    {
      id: '3',
      name: 'Gusta',
      age: '19',
      email: 'aeromodelo123@gmail.com'
    }
    ,
    {
      id: '4',
      name: 'Isabella',
      age: '13',
      email: 'isabellagaleno@gmail.com'
    } ,
    {
      id: '5',
      name: 'Isabella',
      age: '13',
      email: 'isabellagaleno@gmail.com'
    } ,
    {
      id: '6',
      name: 'Isabella',
      age: '13',
      email: 'isabellagaleno@gmail.com'
    }
  ])
  return (
    <View style={[styles.jcCenter]}>
      <FlatList
      keyExtractor={(item) => item.id}
        data={feed}
        renderItem={({item})=> <People data={item}/> }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  jcCenter: {
    justifyContent: 'center',
  }
})
