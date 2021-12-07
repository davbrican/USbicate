import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import map from '../assets/map.png';

export const Inicio = () => {
  return (
    <View>
      <Image
        style={styles.fotos}
        source={map}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  title: {
    fontSize: 30,
    color: 'black'
  },

  fotos: {
    height: 500,
    width: 300
  },

  boton: {
    backgroundColor: 'grey',
    padding: 7,
    marginTop: 10
  },

  textoBoton: {
    color: 'white'
  }

});
