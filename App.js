import React from 'react'

import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { Dimensions } from 'react-native'

import { Feather } from '@expo/vector-icons'

import { HomeScreen, EventsScreen} from './screens'
import SideBar from './components/SliderBar'

const DrawerNavigator = createDrawerNavigator({
  HomeScreen:{
    screen: HomeScreen,
    navigationOptions: {
      title: "Inicio",
      drawerIcon: ({tintColor}) => <Feather name="home" size={16} color={tintColor}/>
    }
  },
  EventsScreen:{
    screen: EventsScreen,
    navigationOptions: {
      title: "Eventos",
      drawerIcon: ({tintColor}) => <Feather name="flag" size={16} color={tintColor}/>
    }
  }
},
{
  contentComponent: props => <SideBar{...props}/>
}
)

export default createAppContainer(DrawerNavigator);