import React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import diamondImg from "./assets/diamond.png"

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prueba</Text>
      <Image 
        source={{uri: 'https://picsum.photos/200/200'}}
        style={styles.image}
      />
      <Button
        color="red"
        title="Press it"
        onPress= {() => console.log("Esto es una prueba.")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#292929' 
  },
  title: {
    fontSize: 20, 
    color: 'white'
  },
  image: {
    height: 200, 
    width: 200,
    borderRadius: 100
  }
})

export default App;