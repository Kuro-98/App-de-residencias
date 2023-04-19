import React, {Component} from 'react';
import {
  Animated,
  DeviceEventEmitter,
  EmitterSubscription,
  ImageBackground,
  StyleSheet,
  View,
  TextInput,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Colors from '../utilidades/colors';
import styles from '../utilidades/styles';

import Spinner from 'react-native-loading-spinner-overlay';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Recuperacion = ({navigation}) => {
  const buscarT = () => {
    navigation.navigate('Inicio');
    console.log('Hey');
  };

  const irRegistro = () => {
    navigation.navigate('Registro');
    console.log('Hey');
  };

  const irVerificar = () => {
    navigation.navigate('Verificar Codigo');
    console.log('Hey');
  };

  const irRastreo = () => {
    navigation.navigate('Rastreo');
    console.log('Hey');
  };

  return (
    <ImageBackground
      source={require('../assets/img/bg.jpg')}
      style={[styles.container, styles.centerContainer]}>
      <KeyboardAwareScrollView style={styles.card}>
        <View style={styles.centerContainer}>
          <Text style={{paddingBottom: 30, marginTop: 20}}>
            Recuperación de contraseña
          </Text>

          <Text>Ingresa tu correo a continuación: </Text>
          <TextInput
            style={[
              {
                width: '100%',
                borderWidth: 1,
                color: '#000',
                borderColor: '#ccc',
                padding: 5,
                textAlignVertical: 'center',
                marginBottom: 20,
                height: 45,
              },
            ]}
            keyboardType="email-address"
            underlineColorAndroid={'transparent'}
            returnKeyType={'done'}
            onChangeText={() => console.log('email')}
            autoCapitalize="none"
          />

          <TouchableOpacity
            onPress={() => irVerificar()}
            style={styles.authButton}>
            <Text style={styles.authButtonText}>Recuperar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

export default Recuperacion;
