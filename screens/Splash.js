import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Splash = ({ route, navigation }) => {
    return (
      <View style={styles.container}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>Pokedex</Text>
        <Button
          title="Continuar"
          color={'skyblue'}
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
