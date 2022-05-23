import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  const name = "galeno"
  const img = "https://i.scdn.co/image/ab6761610000e5eb9ecfcee83a3e86d021033107"
  return (
    <View style={styles.container}>
      <Galeno name={name} img={img} />
    </View>
  );
}

export function Galeno({ name, img }) {
  return (
    <View style={styles.container}>
      <Text style={{ color: "red" }}>Oi!</Text>
      <StatusBar style="auto" />
      <Image
        style={styles.picture}
        source={{
          uri: img
        }} />
      <Text>
        {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picture: {
    width: 250,
    height: 250,
  },
});
