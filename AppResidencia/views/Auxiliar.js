import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  ListView,
  TouchableOpacity,
  View,
  Image,
  Text,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import Colors from '../utilidades/colors';

const Auxiliar = ({navigation}) => {
  const irViaje = () => {
    navigation.navigate('Viajes');
    console.log('Hey');
  };

  const irRegistro = () => {
    navigation.navigate('Registro');
    console.log('Hey');
  };

  const irRastreo = () => {
    navigation.navigate('Rastreo');
    console.log('Hey');
  };

  const irRecuperar = () => {
    navigation.navigate('Recuperar Contraseña');
    console.log('Hey');
  };

  return (
    <ImageBackground
      source={require('../assets/img/gradient.png')}
      style={[styles.container, styles.centerContainer]}>
      <View style={[styles.container, styles.centerContainer]}>
        <Image style={styles.icon} source={require('../assets/img/done.png')} />
        <Text style={styles.title}>Orden Pagada</Text>
        <Text style={styles.description}>Ya puedes comenzar el viaje.</Text>
        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => irViaje()}>
          <Text style={styles.buttonText}>Ver viajes</Text>
        </TouchableHighlight>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  icon: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 22,
    color: '#5F6D7A',
  },
  description: {
    marginTop: 20,
    textAlign: 'center',
    color: '#A9A9A9',
    fontSize: 16,
    margin: 40,
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: Colors.background,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});

export default Auxiliar;
