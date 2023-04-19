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

const Launch = ({navigation}) => {
  const buscarT = () => {
    navigation.navigate('Inicio');
    console.log('Hey');
  };

  const irOnboard = () => {
    navigation.navigate('Oboarding');
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

  return (
    <TouchableOpacity
      style={[
        styles.container,
        styles.centerContainer,
        {flex: 1, paddingHorizontal: 0},
      ]}
      onPress={() => irOnboard()}>
      <ImageBackground
        style={{height: '100%', width: '100%'}}
        source={require('../assets/img/bg.jpg')}>
        <Image
          style={{
            width: 100,
            resizeMode: 'contain',
            alignSelf: 'center',
            justifyContent: 'center',
          }}
          source={require('../assets/img/logo.png')}
        />
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Launch;
