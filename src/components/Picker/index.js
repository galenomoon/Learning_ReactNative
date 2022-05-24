import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
export default function Pickers() {
  const [selectedValue, setSelectedValue] = useState({ id: 0, pizza: " ", price: 0 });
  const [pizzas, setPizzas] = useState([
    { id: 1, pizza: 'Margherita', price: 5.99 },
    { id: 2, pizza: 'Pepperoni', price: 6.99 },
    { id: 3, pizza: 'Hawaiian', price: 7.99 },
    { id: 4, pizza: 'Veggie', price: 8.99 },
    { id: 5, pizza: 'Meat Lovers', price: 9.99 },
    { id: 6, pizza: 'BBQ Chicken', price: 10.99 },
    { id: 7, pizza: 'Chicken Supreme', price: 11.99 },
    { id: 8, pizza: 'BBQ Chicken Supreme', price: 12.99 },
    { id: 9, pizza: 'Meat Supreme', price: 13.99 },
    { id: 10, pizza: 'Veggie Supreme', price: 14.99 }
  ]);

  const list = pizzas.map(pizza => <Picker.Item key={pizza.id} label={pizza.pizza} value={pizza} />)

  return (
    <View style={styles.container}>
      <View style={styles.pickerBox}>
        <Image
          source={require('../../img/pizza.png')}
          style={styles.img}
        />
      </View>
      <Text style={styles.logo}>Menu de Pizzas</Text>
      <Picker
        style={styles.picker}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        {list}
      </Picker>
      {selectedValue.id === 0 ? <Text style={styles.pizzas}>Selecione um Sabor</Text> :
        <View>
          <Text style={styles.pizzas}>Você escolheu: {selectedValue?.pizza}</Text>
          <Text style={styles.pizzas}>R$ {selectedValue?.price.toFixed(2)}</Text>
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    textAlign: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  pickerBox: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 110,
  },
  pizzas: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginTop: 15,
  },
  picker: {
    backgroundColor: '#fff',
    color: '#000',
    height: 50,
    borderWidth: 2,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
});