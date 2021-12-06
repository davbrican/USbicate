import React from 'react'
import Screen from './Screen'
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native'

export const HomeScreen = ({navigation}) => 
<Screen navigation={navigation} name='Inicio'>
    <Text>Hola</Text>
</Screen>
export const EventsScreen = ({navigation}) => 
<Screen navigation={navigation} name='Eventos'>

</Screen>