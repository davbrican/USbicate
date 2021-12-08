import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Inicio from './Inicio';
import SplashScreen from './splashScreen';

export default class Screen extends React.Component {
  render () {
    return (
      <SafeAreaProvider>
        <SplashScreen/>
        <View style={{height:85}}></View>
        <View style={styles.container}>
          <SafeAreaView style={{flex:1}}>
            <TouchableOpacity
              style={{alignItems: 'flex-start', margin: 10}}
              onPress={this.props.navigation.openDrawer}
            >
              <FontAwesome5 name='bars' size={24} color='#161924' />
            </TouchableOpacity>
            <View style={{ margin: 20, alignItems: 'center', justifyContent: 'center' }}>
              {this.props.name === 'Inicio' ? <Inicio /> : null}
              {this.props.name === 'Eventos' ? <Text style={styles.text}>{this.props.name} Screen</Text> : null}
            </View>
          </SafeAreaView>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignContent: 'center',
    flex: 1,
    backgroundColor: '#fff'
  },

  text: {
    marginTop: 15,
    color: '#161924',
    fontSize: 20,
    fontWeight: '500'
  }
});
