import React from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';
import map from "../assets/map.png";

export default function Inicio() {
    return (
        <View>
            <Image style={styles.fotos}
              source={map}
            ></Image>
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
  
    title: {
      fontSize: 30,
      color:'black'
    },
  
    fotos: {
      height: 500,
      width: 300
    },
  
    boton: {
      backgroundColor: 'grey',
      padding: 7,
      marginTop: 10,
    },
  
    textoBoton: {
      color: 'white'
    }
  
});