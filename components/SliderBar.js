import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';

const Sidebar = (props) => {
  return (
    <ScrollView style={{ paddingTop: 30 }}>
      <Image source={require('../assets/USbicate.png')} style={styles.logo} />
      <View>
        <DrawerNavigatorItems {...props} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    alignSelf: 'center',
    width: 100,
    height: 50
  }
});

export default Sidebar;
